import { ROLE_HELP, SEAT_LIMIT, membersFor } from './model.js';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const disabled = value => value ? 'disabled' : '';

export function inviteBefore(scenario) {
  return `<div class="mock invite-baseline"><header>FIELDNOTES <span>Settings / People</span></header><section><h2>Unlock your potential today</h2><p>Collaboration starts here ✨</p><div class="baseline-form"><input placeholder="Email address" value="${scenario === 'error' ? '' : 'new.person@example.com'}" ${scenario === 'error' ? 'class="baseline-error"' : ''}><select><option>Editor</option><option>Viewer</option></select><button type="button">Continue</button></div><div class="baseline-members">${membersFor(scenario).map(member => `<div><i>${escape(member.name[0])}</i><span>${escape(member.name)}<small>${escape(member.email)}</small></span><small>${member.status}</small><button type="button">×</button></div>`).join('')}</div><p>${membersFor(scenario).length} / 5 seats used</p>${scenario === 'loading' ? '<p>Loading…</p>' : ''}</section></div>`;
}

function markup(state) {
  const remaining = SEAT_LIMIT - state.members.length;
  const sending = state.status === 'sending';
  const blocked = !state.allowed || sending;
  const person = state.members.find(member => member.id === state.confirmationId);
  return `<div class="invite-product">
    <header class="invite-header"><b>fieldnotes<span aria-hidden="true">✳</span></b><span>Workspace / People</span><span class="invite-avatar" aria-label="Amina Saleh">AS</span></header>
    <section class="invite-content" aria-label="Workspace people">
      <div class="invite-intro"><div><p class="invite-eyebrow">WORKSPACE ACCESS</p><h2>Good work starts<br>with your people.</h2><p>Invite a teammate to your field-notes workspace.</p></div><div class="invite-seats"><strong>${remaining}</strong><span>${remaining === 1 ? 'seat available' : 'seats available'}</span><small>${state.members.length} of ${SEAT_LIMIT} seats reserved</small></div></div>
      <section class="invite-compose" aria-labelledby="invite-title"><div><h3 id="invite-title">Invite a teammate</h3><p class="invite-helper">Active, invited and pending people reserve a seat in this demo.</p></div>
      ${!state.allowed ? '<p class="invite-boundary">You have viewer access. Ask a workspace owner to invite or remove people.</p>' : ''}
      ${remaining === 0 ? '<p class="invite-boundary">All five seats are reserved. Remove a person or cancel an invitation below to make room.</p>' : ''}
      <form novalidate aria-busy="${sending}">
        <div class="invite-fields"><div><label for="invite-email">Email address</label><input id="invite-email" name="email" type="email" autocomplete="email" maxlength="254" required value="${escape(state.email)}" placeholder="name@example.com" aria-describedby="email-help${state.fieldError ? ' email-error' : ''}" aria-invalid="${!!state.fieldError}" ${disabled(blocked)}><small id="email-help">Use your teammate’s work email.</small>${state.fieldError ? `<p class="invite-field-error" id="email-error">${escape(state.fieldError)}</p>` : ''}</div>
        <fieldset ${disabled(blocked)}><legend>Workspace role</legend><div class="invite-roles">${Object.entries(ROLE_HELP).map(([role, help]) => `<label><input type="radio" name="role" value="${role}" ${state.role === role ? 'checked' : ''}><span><strong>${role === 'viewer' ? 'Viewer' : 'Editor'}</strong><small>${help}</small></span></label>`).join('')}</div></fieldset></div>
        <div class="invite-submit"><p>Local demo. No email is sent.<br>Your changes reset when you leave this case.</p><button type="submit" ${disabled(blocked || remaining === 0)}>${sending ? 'Sending invitation…' : state.status === 'error' && !state.fieldError ? 'Retry invitation' : 'Send invitation'}<span aria-hidden="true">↗</span></button></div>
      </form>
      <div id="invite-notice" class="invite-notice ${state.status}" role="status" aria-live="polite" tabindex="-1" ${state.message ? '' : 'hidden'}>${escape(state.message)}</div></section>
      <section class="invite-roster" aria-labelledby="people-title"><div class="invite-roster-title"><h3 id="people-title">Workspace people</h3><span>${state.members.length} / ${SEAT_LIMIT} seats</span></div>
        ${state.members.length ? `<ul>${state.members.map(member => `<li><span class="invite-avatar" aria-hidden="true">${escape(member.name.slice(0, 2).toUpperCase())}</span><div class="invite-person"><strong>${escape(member.name)}${member.id === 'owner' ? ' <small>(you)</small>' : ''}</strong><span>${escape(member.email)}</span></div><span class="invite-role">${escape(member.role)}</span><span class="invite-status status-${member.status.toLowerCase()}"><span aria-hidden="true">${member.status === 'Active' ? '●' : member.status === 'Invited' ? '↗' : '◷'}</span> ${member.status}</span>${member.id === 'owner' ? '<span class="invite-protected">Owner</span>' : `<button class="invite-remove" type="button" data-remove="${escape(member.id)}" aria-label="${member.status === 'Active' ? 'Remove' : 'Cancel invitation for'} ${escape(member.name)}" ${disabled(blocked)}>${member.status === 'Active' ? 'Remove' : 'Cancel invite'}</button>`}</li>`).join('')}</ul>` : '<div class="invite-empty"><strong>No people yet</strong><p>Start with the email and role above. This empty fixture lists no members; owner access is simulated separately.</p></div>'}
        <p class="invite-status-key">Active: has access · Invited: invitation recorded · Pending: awaiting confirmation</p>
        ${person ? `<div class="invite-confirm" role="group" aria-labelledby="remove-title"><h4 id="remove-title">${person.status === 'Active' ? 'Remove access for' : 'Cancel the invitation for'} ${escape(person.name)}?</h4><p>${escape(person.email)} will no longer reserve a seat in this demo.</p><button type="button" data-cancel>Keep person</button><button type="button" data-confirm>${person.status === 'Active' ? 'Remove person' : 'Cancel invitation'}</button></div>` : ''}
      </section>
    </section>
  </div>`;
}

/** A session outlives preview remounts; fixture changes explicitly replace it. */
export function mountInvite(host, session) {
  function render(state, focus) {
    // Do not steal focus from the comparison toolbar when an async request finishes.
    const canMoveFocus = host.contains(host.ownerDocument.activeElement);
    host.innerHTML = markup(state);
    host.querySelector('form').addEventListener('submit', event => { event.preventDefault(); void session.submit(); });
    host.querySelector('#invite-email').addEventListener('input', event => session.setEmail(event.target.value));
    host.querySelectorAll('[name="role"]').forEach(input => input.addEventListener('change', event => session.setRole(event.target.value)));
    host.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => session.requestRemoval(button.dataset.remove)));
    host.querySelector('[data-cancel]')?.addEventListener('click', () => session.cancelRemoval());
    host.querySelector('[data-confirm]')?.addEventListener('click', () => session.confirmRemoval());
    if (!focus || !canMoveFocus || host.closest('[inert]')) return;
    const target = focus === 'email' ? host.querySelector('#invite-email') : focus === 'notice' ? host.querySelector('#invite-notice') : focus === 'cancel' ? host.querySelector('[data-cancel]') : [...host.querySelectorAll('[data-remove]')].find(button => button.dataset.remove === focus.slice(7));
    target?.focus({ preventScroll: false });
  }
  render(session.snapshot());
  const unsubscribe = session.subscribe(render);
  return unsubscribe;
}
