import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { sourceFingerprint } from './fingerprint.mjs';

const started = new Date().toISOString();
const source = sourceFingerprint();
const revision = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout.trim();
const dirty = !!spawnSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).stdout.trim();
const results = [];
let log = `Recorded: ${started}\nRevision: ${revision}\nWorking tree dirty: ${dirty}\nSource SHA-256: ${source.hash}\nEnvironment: ${process.version} / ${process.platform}\n\n`;
function run(name, command, args) {
  const output = spawnSync(command, args, { encoding: 'utf8' });
  const passed = output.status === 0;
  log += `$ ${command} ${args.join(' ')}\n${output.stdout || ''}${output.stderr || ''}\nExit: ${output.status}\n\n`;
  process.stdout.write(output.stdout || '');
  process.stderr.write(output.stderr || '');
  results.push({ name, command: [command, ...args].join(' '), status: passed ? 'pass' : 'fail' });
  return passed;
}
const productPassed = run('Invite model and DOM', process.execPath, ['--test', '--test-reporter=spec', 'tests/invite/model.test.mjs', 'tests/invite/view.test.mjs', 'tests/evidence.test.mjs']);
const buildPassed = run('Production build', 'npm', ['run', 'build']);
let shellPassed = false;
let landingsPassed = false;
if (buildPassed) {
  shellPassed = run('Showcase shell DOM', process.execPath, ['scripts/check-interactions.mjs']);
  landingsPassed = run('Landing page DOM', process.execPath, ['scripts/check-landings.mjs']);
}
if (sourceFingerprint().hash !== source.hash) throw new Error('Source changed during verification; rerun on a stable tree.');
mkdirSync('public/evidence', { recursive: true });
writeFileSync('public/evidence/verification.log', log);
const contract = JSON.parse(readFileSync('showcases/01-invite-team/contract.json', 'utf8'));
const browserRequired = ['INV-03', 'INV-05', 'INV-09', 'INV-10'];
const manifest = {
  schemaVersion: 1, case: 'invite-team', recordedAt: started, revision, dirty, fingerprint: source.hash,
  inputs: source.files, environment: { node: process.version, platform: process.platform, browser: 'not exercised by this command' },
  commands: results,
  artifacts: { 'evidence/verification.log': createHash('sha256').update(log).digest('hex') },
  checks: [
    { method: 'Model + JSDOM', status: productPassed ? 'pass' : 'fail', result: 'Invite assertions exercise form submission, retained drafts, retry, duplicate protection, a seat race, named controls, DOM focus management and fixture cancellation. No browser rendering or physical keyboard input is exercised.' },
    { method: 'Production build', status: buildPassed ? 'pass' : 'fail', result: 'Vite compiled the site and copied skill references.' },
    { method: 'Built DOM regression', status: shellPassed && landingsPassed ? 'pass' : 'fail', result: 'Six comparison shells and three landing-page demos were exercised in JSDOM. Preview class selection does not establish responsive layout.' },
    { method: 'Browser / visual / keyboard', status: 'unverified', result: 'No browser checks run in this command. Layout at 390/820/1440 px, real keyboard traversal, assistive technology and final screenshots require a separate recorded review.' }
  ],
  requirements: contract.criteria.map(criterion => ({
    id: criterion.id, requirement: criterion.requirement, method: criterion.method,
    status: !productPassed ? 'fail' : browserRequired.includes(criterion.id) ? 'unverified' : 'pass',
    artifact: 'evidence/verification.log',
    note: browserRequired.includes(criterion.id) ? 'DOM structure alone cannot satisfy the required rendered or keyboard check.' : 'Scoped to the local model/DOM contract; no real integration tested.'
  })),
  limitations: contract.unmeasured,
  benchmarkStatus: 'incomplete: browser-dependent invariants remain unverified'
};
writeFileSync('public/evidence/invite-team.json', `${JSON.stringify(manifest, null, 2)}\n`);
// Rebuild so the distributed panel includes this run, not the previous manifest.
const finalBuild = spawnSync('npm', ['run', 'build'], { encoding: 'utf8' });
process.stdout.write(finalBuild.stdout || '');
process.stderr.write(finalBuild.stderr || '');
if (finalBuild.status !== 0) {
  // A packaging failure must not leave a previously passing report or partial site.
  log += `$ npm run build (final distribution packaging)\n${finalBuild.stdout || ''}${finalBuild.stderr || ''}\nExit: ${finalBuild.status}\n`;
  results.push({ name: 'Final distribution packaging', command: 'npm run build', status: 'fail' });
  const buildCheck = manifest.checks.find(check => check.method === 'Production build');
  buildCheck.status = 'fail';
  buildCheck.result = 'The initial build ran, but final distribution packaging failed. See assertion output.';
  manifest.benchmarkStatus = 'incomplete: final distribution packaging failed; browser invariants remain unverified';
  manifest.artifacts['evidence/verification.log'] = createHash('sha256').update(log).digest('hex');
  writeFileSync('public/evidence/verification.log', log);
  writeFileSync('public/evidence/invite-team.json', `${JSON.stringify(manifest, null, 2)}\n`);
  rmSync('dist', { recursive: true, force: true });
}
if (finalBuild.status !== 0 || results.some(result => result.status !== 'pass')) process.exitCode = 1;
console.log(`Evidence: public/evidence/invite-team.json (${manifest.benchmarkStatus})`);
