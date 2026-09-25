export const SEAT_LIMIT = 5;
export const ROLE_HELP = {
  viewer: 'Can read field notes. Cannot edit notes or manage people.',
  editor: 'Can create and edit field notes. Cannot manage people or billing.'
};

const initialMembers = [
  { id: 'owner', name: 'Amina Saleh', email: 'amina@example.com', role: 'owner', status: 'Active' },
  { id: 'maya', name: 'Maya Chen', email: 'maya@example.com', role: 'editor', status: 'Active' },
  { id: 'leo', name: 'Leo Park', email: 'leo@example.com', role: 'viewer', status: 'Invited' },
  { id: 'sam', name: 'Sam Rivera', email: 'sam@example.com', role: 'viewer', status: 'Pending' }
];

const copy = value => structuredClone(value);
const normalize = value => value.trim().toLowerCase();
const validEmail = value => value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function membersFor(scenario) {
  if (scenario === 'empty') return [];
  const members = copy(initialMembers);
  if (scenario === 'full') members.push({ id: 'lina', name: 'Lina Faris', email: 'lina@example.com', role: 'editor', status: 'Active' });
  return members;
}

/** In-memory service. No email, network, storage or real authorization occurs. */
export function createDirectory({ members = membersFor('default'), latency = 600, failures = 0, allowed = true } = {}) {
  let records = copy(members);
  let remainingFailures = failures;
  const requests = new Map();
  const metrics = { requests: 0, created: 0 };
  function invite({ email, role, requestId, signal }) {
    if (requests.has(requestId)) return requests.get(requestId);
    metrics.requests += 1;
    const task = new Promise((resolve, reject) => {
      const abort = () => { clearTimeout(timer); reject(new Error('cancelled')); };
      const timer = setTimeout(() => {
        signal?.removeEventListener('abort', abort);
        if (signal?.aborted) return reject(new Error('cancelled'));
        if (!allowed) return reject(new Error('permission'));
        if (remainingFailures > 0) { remainingFailures -= 1; return reject(new Error('network')); }
        if (records.length >= SEAT_LIMIT) return reject(new Error('full'));
        if (records.some(member => normalize(member.email) === normalize(email))) return reject(new Error('duplicate'));
        const member = { id: requestId, name: email.split('@')[0], email: normalize(email), role, status: 'Invited' };
        records.push(member);
        metrics.created += 1;
        resolve(copy(member));
      }, latency);
      if (signal?.aborted) abort();
      else signal?.addEventListener('abort', abort, { once: true });
    });
    requests.set(requestId, task);
    return task;
  }
  return {
    invite,
    list: () => copy(records),
    stats: () => ({ ...metrics }),
    remove(id) {
      if (!allowed || id === 'owner') return false;
      const found = records.some(member => member.id === id);
      records = records.filter(member => member.id !== id);
      return found;
    }
  };
}

let sessionNumber = 0;

export function createInviteSession({ scenario = 'default', latency, directory } = {}) {
  const allowed = scenario !== 'permission';
  const service = directory || createDirectory({ members: membersFor(scenario), latency: latency ?? (scenario === 'loading' ? 5000 : 600), failures: scenario === 'error' ? 1 : 0, allowed });
  const state = {
    scenario, members: service.list(), allowed, email: '', role: 'viewer', status: 'idle',
    fieldError: '', message: '', confirmationId: null
  };
  const sessionId = ++sessionNumber;
  let generation = 0;
  let controller;
  let disposed = false;
  let started = false;
  const listeners = new Set();
  const emit = focus => { if (!disposed) for (const listener of listeners) listener(copy(state), focus); };
  const failure = (message, fieldError = '') => {
    state.status = 'error'; state.message = message; state.fieldError = fieldError;
    emit(fieldError ? 'email' : 'notice');
    return false;
  };
  const session = {
    snapshot: () => copy(state),
    stats: service.stats,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    setEmail(email) { if (state.status !== 'sending' && allowed && !disposed) state.email = email; },
    setRole(role) { if (ROLE_HELP[role] && state.status !== 'sending' && allowed && !disposed) state.role = role; },
    async submit() {
      if (disposed || state.status === 'sending') return false;
      if (!allowed) return failure('Only workspace owners can invite or remove people in this demo.');
      const email = normalize(state.email);
      if (!validEmail(email)) return failure('Check the email address before sending.', 'Enter a complete email address, such as name@example.com.');
      if (state.members.some(member => normalize(member.email) === email)) return failure('This person already has access or an invitation.', 'Use another email address or review the existing person below.');
      if (state.members.length >= SEAT_LIMIT) return failure('All five seats are reserved. Remove a person or cancel an invitation before adding someone.');
      const requestId = `invite-${sessionId}-${++generation}`;
      controller = new AbortController();
      state.status = 'sending'; state.fieldError = ''; state.confirmationId = null;
      state.message = `Preparing an invitation for ${email}…`;
      emit('notice');
      try {
        await service.invite({ email, role: state.role, requestId, signal: controller.signal });
        if (disposed) return false;
        state.members = service.list(); state.status = 'success';
        state.message = `Invitation recorded for ${email} in this demo. No email was sent.`;
        state.email = ''; emit('notice');
        return true;
      } catch (error) {
        if (disposed || error.message === 'cancelled') return false;
        state.members = service.list();
        const messages = {
          network: 'The invitation could not be recorded. Your email and role are preserved. Retry when ready.',
          full: 'The last seat was taken while this request was pending. Your draft is preserved; review the people below.',
          duplicate: 'This person already has access or an invitation. Your draft is preserved.',
          permission: 'Your demo role cannot invite people. Your draft is preserved.'
        };
        return failure(messages[error.message] || 'The invitation could not be recorded. Your draft is preserved.');
      }
    },
    requestRemoval(id) {
      if (!allowed || disposed || state.status === 'sending' || id === 'owner' || !state.members.some(member => member.id === id)) return;
      state.confirmationId = id; emit('cancel');
    },
    cancelRemoval() { const id = state.confirmationId; state.confirmationId = null; emit(`remove:${id}`); },
    confirmRemoval() {
      if (!allowed || disposed || state.status === 'sending' || !state.confirmationId) return false;
      const person = state.members.find(member => member.id === state.confirmationId);
      if (!person || !service.remove(person.id)) return false;
      state.members = service.list(); state.confirmationId = null; state.status = 'success';
      state.message = `${person.email} was removed in this demo. ${SEAT_LIMIT - state.members.length} of ${SEAT_LIMIT} seats are now available.`;
      emit('notice'); return true;
    },
    startScenario() {
      if (started || disposed) return;
      started = true;
      if (['loading', 'error', 'success'].includes(scenario)) {
        state.email = 'new.person@example.com';
        return session.submit();
      }
    },
    dispose() { disposed = true; controller?.abort(); listeners.clear(); }
  };
  return session;
}
