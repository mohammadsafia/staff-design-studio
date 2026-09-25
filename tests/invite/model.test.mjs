import test from 'node:test';
import assert from 'node:assert/strict';
import { createDirectory, createInviteSession, membersFor } from '../../src/invite/model.js';

test('INV-06 / INV-11: pending does not succeed; repeated submit has one effect', async () => {
  const session = createInviteSession({ latency: 5 });
  session.setEmail('ada@example.com');
  const first = session.submit();
  assert.equal(session.snapshot().status, 'sending');
  assert.equal(session.snapshot().members.length, 4);
  assert.equal(await session.submit(), false);
  assert.equal(await first, true);
  assert.equal(session.snapshot().members.length, 5);
  assert.deepEqual(session.stats(), { requests: 1, created: 1 });
  assert.match(session.snapshot().message, /No email was sent/);
});

test('INV-07 / INV-08: network failure retains exact draft and role; retry works', async () => {
  const session = createInviteSession({ scenario: 'error', latency: 0 });
  session.setEmail('  ADA@example.com  ');
  session.setRole('editor');
  assert.equal(await session.submit(), false);
  assert.equal(session.snapshot().email, '  ADA@example.com  ');
  assert.equal(session.snapshot().role, 'editor');
  assert.equal(session.snapshot().members.length, 4);
  assert.match(session.snapshot().message, /Retry/);
  assert.equal(await session.submit(), true);
  assert.equal(session.snapshot().members.at(-1).email, 'ada@example.com');
  assert.equal(session.snapshot().members.at(-1).role, 'editor');
  assert.deepEqual(session.stats(), { requests: 2, created: 1 });
});

test('INV-12: five seats and existing records survive a successful invite', async () => {
  const session = createInviteSession({ latency: 0 });
  session.setEmail('ada@example.com');
  await session.submit();
  assert.deepEqual(session.snapshot().members.slice(0, 4), membersFor('default'));
  session.setEmail('sixth@example.com');
  assert.equal(await session.submit(), false);
  assert.equal(session.snapshot().members.length, 5);
  assert.equal(session.stats().requests, 1);
});

test('INV-12: service rechecks capacity when two clients contend for last seat', async () => {
  const directory = createDirectory({ latency: 0 });
  const a = createInviteSession({ directory });
  const b = createInviteSession({ directory });
  a.setEmail('a@example.com'); b.setEmail('b@example.com');
  const outcomes = await Promise.all([a.submit(), b.submit()]);
  assert.deepEqual(outcomes, [true, false]);
  assert.equal(directory.list().length, 5);
  assert.equal(b.snapshot().email, 'b@example.com');
  assert.match(b.snapshot().message, /last seat was taken/);
});

test('INV-06: duplicate addresses ignore casing; duplicate request IDs have one effect', async () => {
  const session = createInviteSession({ latency: 0 });
  session.setEmail('  MAYA@example.com ');
  assert.equal(await session.submit(), false);
  assert.equal(session.stats().requests, 0);
  const directory = createDirectory({ latency: 0 });
  const request = { email: 'ada@example.com', role: 'viewer', requestId: 'fixed-key' };
  await Promise.all([directory.invite(request), directory.invite(request)]);
  assert.deepEqual(directory.stats(), { requests: 1, created: 1 });
});

test('INV-09 / INV-12: removal confirmation is cancelable; owner is protected', () => {
  const session = createInviteSession();
  session.requestRemoval('owner');
  assert.equal(session.snapshot().confirmationId, null);
  session.requestRemoval('maya'); session.cancelRemoval();
  assert.equal(session.snapshot().members.length, 4);
  session.requestRemoval('maya');
  assert.equal(session.confirmRemoval(), true);
  assert.equal(session.snapshot().members.length, 3);
  assert.equal(session.snapshot().members.some(person => person.id === 'maya'), false);
});

test('permission fixture blocks mutations; empty and full fixtures retain the limit', async () => {
  const viewer = createInviteSession({ scenario: 'permission', latency: 0 });
  viewer.setEmail('ada@example.com');
  assert.equal(await viewer.submit(), false);
  viewer.requestRemoval('maya');
  assert.equal(viewer.confirmRemoval(), false);
  assert.deepEqual(viewer.stats(), { requests: 0, created: 0 });
  assert.equal(createInviteSession({ scenario: 'empty' }).snapshot().members.length, 0);
  assert.equal(createInviteSession({ scenario: 'full' }).snapshot().members.length, 5);
});

test('disposing a fixture cancels its pending effect', async () => {
  const session = createInviteSession({ latency: 5 });
  session.setEmail('ada@example.com');
  const pending = session.submit(); session.dispose();
  assert.equal(await pending, false);
  assert.equal(session.stats().created, 0);
});
