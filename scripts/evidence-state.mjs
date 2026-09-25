import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export function evidenceArtifactsValid() {
  try {
    const manifest = JSON.parse(readFileSync('public/evidence/invite-team.json', 'utf8'));
    const artifacts = Object.entries(manifest.artifacts || {});
    return artifacts.length > 0 && artifacts.every(([path, hash]) => {
      if (!/^evidence\/[a-z0-9.-]+$/.test(path)) return false;
      return createHash('sha256').update(readFileSync(`public/${path}`)).digest('hex') === hash;
    });
  } catch { return false; }
}
