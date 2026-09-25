import evidence from '../public/evidence/invite-team.json';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
export function evidenceFor(id) {
  if (id !== 'invite-team') return '<div class="evidence-pending">Canonical benchmark coverage is pending. Existing shell checks cover fixture selection and comparison controls only; no product or visual pass is claimed.</div>';
  if (import.meta.env.DEV) return '<div class="evidence-pending">Development view: saved evidence applies to a built source snapshot. Run <code>npm run verify</code>, then use the production preview to inspect that snapshot. Live edits are not verified.</div>';
  const current = evidence.fingerprint === __SHOWCASE_FINGERPRINT__ && __EVIDENCE_ARTIFACTS_VALID__;
  if (!current) return '<div class="evidence-pending">Evidence is missing or stale for this source. Run <code>npm run verify</code> to record fresh checks. Browser and visual review remain unverified.</div>';
  return `<p><small>Source fingerprint: <code>${escape(evidence.fingerprint.slice(0, 12))}</code><br>Recorded ${escape(evidence.recordedAt)}</small></p><ul>${evidence.checks.map(check => `<li><span class="check-mark">${check.status === 'pass' ? '✓' : '—'}</span><span><strong>${escape(check.status.toUpperCase())} / ${escape(check.method)}</strong><br>${escape(check.result)}</span></li>`).join('')}</ul><p><a href="${import.meta.env.BASE_URL}evidence/invite-team.json">Read evidence manifest ↗</a> · <a href="${import.meta.env.BASE_URL}evidence/verification.log">Read assertion output ↗</a></p>`;
}
