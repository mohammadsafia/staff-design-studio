import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { createInviteSession } from '../../src/invite/model.js';
import { mountInvite, inviteBefore } from '../../src/invite/view.js';

function fixture(t, options = {}) {
  const dom = new JSDOM('<div id="host"></div><button id="outside">Preview</button>');
  const session = createInviteSession({ latency: 0, ...options });
  const host = dom.window.document.querySelector('#host');
  let unmount = mountInvite(host, session);
  t.after(() => { unmount(); session.dispose(); dom.window.close(); });
  const find = selector => host.querySelector(selector);
  const type = value => { const input = find('#invite-email'); input.value = value; input.dispatchEvent(new dom.window.Event('input', { bubbles: true })); };
  const settle = async () => { await new Promise(resolve => setTimeout(resolve, 15)); };
  const submit = () => { find('[type="submit"]').focus(); find('form').dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true })); };
  return { dom, host, session, find, type, settle, submit, remount: () => { unmount(); unmount = mountInvite(host, session); } };
}

test('INV-01–05: labels, capacity, role meanings, specific CTA and status text', t => {
  const { find, host } = fixture(t);
  assert.equal(find('#invite-email').labels[0].textContent, 'Email address');
  assert.equal(find('#invite-email').required, true);
  assert.match(find('fieldset').textContent, /Cannot edit notes/);
  assert.match(find('fieldset').textContent, /Cannot manage people or billing/);
  assert.match(find('.invite-seats').textContent, /1seat available.*4 of 5/);
  assert.match(find('[type="submit"]').textContent, /Send invitation/);
  assert.deepEqual([...host.querySelectorAll('.invite-status')].map(node => node.textContent.trim().slice(2)), ['Active', 'Active', 'Invited', 'Pending']);
  assert.ok(find('.invite-seats').compareDocumentPosition(find('form')) & 4);
});

test('INV-01 / INV-08: validation associates an error and focuses the field', t => {
  const { type, submit, find, dom } = fixture(t);
  type('incomplete'); submit();
  assert.equal(find('#invite-email').getAttribute('aria-invalid'), 'true');
  assert.match(find('#invite-email').getAttribute('aria-describedby'), /email-error/);
  assert.equal(dom.window.document.activeElement, find('#invite-email'));
  assert.equal(find('#invite-email').value, 'incomplete');
});

test('INV-06–08 / INV-11: actual form failure, retained input, retry and one new record', async t => {
  const { type, submit, find, settle, session, dom } = fixture(t, { scenario: 'error' });
  type('ada@example.com');
  find('[value="editor"]').checked = true;
  find('[value="editor"]').dispatchEvent(new dom.window.Event('change'));
  submit(); submit();
  assert.equal(find('[type="submit"]').disabled, true);
  assert.equal(find('form').getAttribute('aria-busy'), 'true');
  await settle();
  assert.equal(find('#invite-email').value, 'ada@example.com');
  assert.equal(find('[value="editor"]').checked, true);
  assert.match(find('#invite-notice').textContent, /Retry/);
  submit(); await settle();
  assert.match(find('#invite-notice').textContent, /No email was sent/);
  assert.deepEqual(session.stats(), { requests: 2, created: 1 });
  assert.equal(find('[type="submit"]').disabled, true);
});

test('INV-09: named native buttons, confirmation cancellation and DOM focus return', t => {
  const { find, dom, host } = fixture(t);
  const remove = find('[data-remove="maya"]');
  assert.equal(remove.tagName, 'BUTTON');
  assert.equal(remove.getAttribute('aria-label'), 'Remove Maya Chen');
  remove.focus(); remove.click();
  assert.equal(dom.window.document.activeElement, find('[data-cancel]'));
  find('[data-cancel]').click();
  assert.equal(dom.window.document.activeElement, find('[data-remove="maya"]'));
  find('[data-remove="maya"]').click();
  find('[data-confirm]').focus(); find('[data-confirm]').click();
  assert.equal(host.querySelectorAll('.invite-roster li').length, 3);
  assert.equal(dom.window.document.activeElement, find('#invite-notice'));
});

test('preview remount preserves edits; fixture updates do not hijack toolbar focus', async t => {
  const { type, find, remount, session, dom, settle } = fixture(t);
  type('ada@example.com'); remount();
  assert.equal(find('#invite-email').value, 'ada@example.com');
  dom.window.document.querySelector('#outside').focus();
  void session.submit(); await settle();
  assert.equal(dom.window.document.activeElement.id, 'outside');
});

test('user content is escaped; flawed baseline preserves the same seed member names', t => {
  const { session, remount, host } = fixture(t);
  session.setEmail('\"><img src=x onerror=alert(1)>'); remount();
  assert.equal(host.querySelector('img'), null);
  for (const name of ['Amina Saleh', 'Maya Chen', 'Leo Park', 'Sam Rivera']) assert.ok(inviteBefore('default').includes(name));
});
