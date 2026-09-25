import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('dist/index.html', 'utf8');
const jsFile = readdirSync('dist/assets').find(name => name.endsWith('.js'));
const js = readFileSync(`dist/assets/${jsFile}`, 'utf8');
const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'outside-only', pretendToBeVisual: true });
const { window } = dom;
window.scrollTo = () => {};
window.structuredClone = structuredClone;
window.HTMLElement.prototype.scrollIntoView = () => {};
window.eval(js);
const doc = window.document;
const click = selector => {
  const element = doc.querySelector(selector);
  assert.ok(element, `Missing ${selector}`);
  element.click();
};
assert.match(doc.querySelector('h1').textContent, /Design judgment/);
assert.equal(doc.querySelectorAll('.case-card').length, 6);
const ids = ['invite-team','operations-dashboard','pos-checkout','booking-recovery','arabic-admin-rtl','visual-deslop'];
for (const id of ids) {
  window.location.hash = id;
  window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  assert.ok(doc.querySelector('.preview-frame'), `${id} missing preview`);
  assert.equal(doc.querySelectorAll('.finding').length, 3, `${id} findings`);
  assert.ok(doc.querySelectorAll('.references a').length >= 5, `${id} references`);
  click('[data-width="mobile"]');
  assert.ok(doc.querySelector('.preview-frame.mobile'), `${id} mobile preview`);
  click('[data-width="tablet"]');
  assert.ok(doc.querySelector('.preview-frame.tablet'), `${id} tablet preview`);
  click('[data-width="desktop"]');
  click('[data-mode="after"]');
  assert.equal(doc.querySelector('.after-layer').getAttribute('aria-hidden'), 'false');
  assert.ok(!doc.querySelector('.after-layer').hasAttribute('inert'));
  const states = [...doc.querySelectorAll('[data-state]')].map(element => element.dataset.state);
  for (const state of states) {
    click(`[data-state="${state}"]`);
    assert.equal(doc.querySelector(`[data-state="${state}"]`).getAttribute('aria-pressed'), 'true', `${id} ${state}`);
    assert.equal(doc.activeElement.dataset.state, state, `${id} state focus`);
  }
  click('[data-state="default"]');
  const action = doc.querySelector('.after-layer [data-transition]');
  if (action) {
    const target = action.dataset.transition;
    action.click();
    assert.equal(doc.querySelector(`[data-state="${target}"]`).getAttribute('aria-pressed'), 'true', `${id} action`);
  }
  click('[data-mode="split"]');
  assert.ok(doc.querySelector('.after-layer').hasAttribute('inert'), `${id} split focus safety`);
  const slider = doc.querySelector('#split-range');
  slider.value = '72';
  slider.dispatchEvent(new window.Event('input', { bubbles: true }));
  assert.equal(doc.querySelector('.preview-frame').style.getPropertyValue('--split'), '72%');
  console.log(`PASS ${id}: preview selection, fixture controls, DOM focus return, comparison`);
}
window.location.hash = 'cases';
window.dispatchEvent(new window.HashChangeEvent('hashchange'));
assert.equal(doc.querySelectorAll('.case-card').length, 6);
console.log('PASS home route');
window.close();
