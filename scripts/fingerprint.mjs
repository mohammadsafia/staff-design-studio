import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';

// Generated evidence and prose handoff files are excluded to avoid self-reference.
export const evidenceInputs = ['src', 'scripts', 'tests', 'skills/craft-product-ui', 'showcases/01-invite-team.md', 'showcases/01-invite-team/contract.json', 'package.json', 'package-lock.json', 'vite.config.js', 'index.html'];
function filesAt(path) {
  if (!['src', 'scripts', 'tests', 'skills/craft-product-ui'].includes(path) && !path.endsWith('/')) return [path];
  return readdirSync(path, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? filesAt(`${path.replace(/\/$/, '')}/${entry.name}/`) : [`${path.replace(/\/$/, '')}/${entry.name}`]);
}
export function sourceFingerprint() {
  const files = evidenceInputs.flatMap(filesAt).sort();
  const hash = createHash('sha256');
  for (const file of files) hash.update(file).update('\0').update(readFileSync(file)).update('\0');
  return { hash: hash.digest('hex'), files };
}
