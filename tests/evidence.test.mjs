import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { evidenceArtifactsValid } from '../scripts/evidence-state.mjs';

test('evidence loses validity when its saved assertion output changes or disappears', () => {
  const original = process.cwd();
  const folder = mkdtempSync(join(tmpdir(), 'staff-design-evidence-'));
  try {
    process.chdir(folder);
    mkdirSync('public/evidence', { recursive: true });
    assert.equal(evidenceArtifactsValid(), false);
    const output = 'actual assertion output';
    writeFileSync('public/evidence/verification.log', output);
    writeFileSync('public/evidence/invite-team.json', JSON.stringify({ artifacts: { 'evidence/verification.log': createHash('sha256').update(output).digest('hex') } }));
    assert.equal(evidenceArtifactsValid(), true);
    writeFileSync('public/evidence/verification.log', 'changed output');
    assert.equal(evidenceArtifactsValid(), false);
    rmSync('public/evidence/verification.log');
    assert.equal(evidenceArtifactsValid(), false);
  } finally { process.chdir(original); rmSync(folder, { recursive: true, force: true }); }
});
