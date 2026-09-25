import { defineConfig } from 'vite';
import { sourceFingerprint } from './scripts/fingerprint.mjs';
import { evidenceArtifactsValid } from './scripts/evidence-state.mjs';

export default defineConfig({ base: './', define: { __SHOWCASE_FINGERPRINT__: JSON.stringify(sourceFingerprint().hash), __EVIDENCE_ARTIFACTS_VALID__: evidenceArtifactsValid() } });
