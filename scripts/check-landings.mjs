import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('dist/index.html', 'utf8');
const bundle = readFileSync(`dist/assets/${readdirSync('dist/assets').find(name => name.endsWith('.js'))}`, 'utf8');
function load(path) {
  const dom = new JSDOM(html, { url: `http://localhost/${path}`, runScripts: 'outside-only', pretendToBeVisual: true });
  dom.window.scrollTo = () => {};
  dom.window.HTMLElement.prototype.scrollIntoView = () => {};
  dom.window.eval(bundle);
  return dom;
}
const home = load('');
assert.equal(home.window.document.querySelectorAll('.landing-card').length, 3);
for (const link of home.window.document.querySelectorAll('.landing-card')) assert.match(link.getAttribute('href'), /^\?landing=landing-/);
home.window.close();

const vector = load('?landing=landing-vectorline');
const vd = vector.window.document;
assert.match(vd.querySelector('h1').textContent, /Every delivery/);
assert.equal(vd.querySelectorAll('[data-route]').length, 3);
vd.querySelector('[data-route="09"]').click();
assert.equal(vd.querySelector('[data-route="09"]').getAttribute('aria-pressed'), 'true');
assert.match(vd.querySelector('.vl-demo-detail').textContent, /Abdali/);
vd.querySelector('[data-route="22"]').click();
assert.match(vd.querySelector('.vl-demo-detail').textContent, /No action needed/);
assert.ok(vd.querySelector('.vl-contact small').textContent.includes('no live dispatch'));
const vectorMain = vd.querySelector('main');
vector.window.location.hash = 'vl-platform';
vector.window.dispatchEvent(new vector.window.HashChangeEvent('hashchange'));
assert.equal(vd.querySelector('main'), vectorMain, 'Section anchor must preserve the landing page');
console.log('PASS Vectorline: route preview and demo boundary');
vector.window.close();

const stay = load('?landing=landing-stillwater');
const sd = stay.window.document;
assert.match(sd.querySelector('h1').textContent, /Room to/);
sd.querySelector('#sw-form').dispatchEvent(new stay.window.Event('submit', { bubbles: true, cancelable: true }));
assert.match(sd.querySelector('#sw-result').textContent, /Choose an arrival date/);
assert.equal(sd.querySelector('#sw-arrival').getAttribute('aria-invalid'), 'true');
sd.querySelector('#sw-arrival').value = '2026-10-11';
sd.querySelector('#sw-nights').value = '3';
sd.querySelector('#sw-form').dispatchEvent(new stay.window.Event('submit', { bubbles: true, cancelable: true }));
assert.match(sd.querySelector('#sw-result').textContent, /11 October 2026 to 14 October 2026/);
assert.match(sd.querySelector('#sw-result').textContent, /No availability was checked/);
assert.equal(sd.querySelector('#sw-arrival').hasAttribute('aria-invalid'), false);
console.log('PASS Stillwater House: invalid date and sample stay calculation');
stay.window.close();

const makan = load('?landing=landing-makan');
const md = makan.window.document;
assert.equal(md.querySelector('main').getAttribute('dir'), 'rtl');
assert.equal(md.querySelector('main').getAttribute('lang'), 'ar');
md.querySelector('[data-event="music"]').click();
assert.equal(md.querySelector('[data-event="music"]').getAttribute('aria-pressed'), 'true');
assert.match(md.querySelector('.mk-event-detail').textContent, /أصوات من المدينة/);
md.querySelector('#mk-form').dispatchEvent(new makan.window.Event('submit', { bubbles: true, cancelable: true }));
assert.equal(md.querySelector('#mk-email').getAttribute('aria-invalid'), 'true');
md.querySelector('#mk-email').value = 'reader@example.com';
md.querySelector('#mk-form').dispatchEvent(new makan.window.Event('submit', { bubbles: true, cancelable: true }));
assert.match(md.querySelector('#mk-result').textContent, /لم نرسل رسالة/);
assert.equal(md.querySelector('#mk-email').hasAttribute('aria-invalid'), false);
assert.equal(md.querySelector('#mk-email').getAttribute('dir'), 'ltr');
console.log('PASS Makan: RTL, event detail, invalid and valid email');
makan.window.close();
