export const cases = [
  {
    id: 'invite-team', number: '01', title: 'Invite the Team', category: 'ACCESS · FORM FLOW',
    summary: 'Make an invitation feel safe before anyone receives access.',
    context: 'An owner invites a coworker to a field-notes workspace with a five-seat limit. Four seats are reserved; the owner must understand access and remaining capacity before sending.',
    states: ['default', 'loading', 'error', 'success', 'empty', 'full', 'permission'], initial: 'default',
    refs: ['forms-and-content', 'ux-and-states', 'accessibility', 'responsive-and-input', 'design-contract', 'implementation-qa', 'ai-ux-quality-gates'],
    findings: [
      ['01', 'Access and capacity arrive too late', 'An unexplained role and seats below the roster hide the consequences of inviting.', 'Put the five-seat allowance ahead of the form and explain both roles before selection.'],
      ['02', 'A failed invite erases the work', 'The before fixture clears the address and leaves recovery unexplained.', 'Preserve the address and role after a failed local request; retry through the same form with duplicate-send protection.'],
      ['03', 'The primary task gets buried', 'The narrow before layout pushes Continue below the roster. Removal has no accessible name.', 'Keep the form above the roster, label each removal action, confirm its consequence, and restore focus when canceled.']
    ],
    checks: []
  },
  {
    id: 'operations-dashboard', number: '02', title: 'Operations Dashboard', category: 'DENSE DATA · TRIAGE',
    summary: 'Put the exception ahead of the decoration.',
    context: 'A regional dispatcher scans today’s routes, identifies a late handoff and needs a direct next action.',
    states: ['default', 'route', 'loading', 'stale', 'error', 'empty'], initial: 'default',
    refs: ['data-dense-products', 'navigation-and-ia', 'ux-and-states', 'responsive-and-input'],
    findings: [
      ['01', 'Status lacks a time and scope', 'The before dashboard shows totals without a region or freshness marker.', 'Name the region, day and last sync next to the data.'],
      ['02', 'Critical exception is buried', 'A delayed route competes with equal-weight metric cards.', 'Lead with the route, impact and dispatch action.'],
      ['03', 'Empty and stale look current', 'A blank graph can be read as a quiet day.', 'Distinguish no records, loading, sync failure and stale data.']
    ],
    checks: []
  },
  {
    id: 'pos-checkout', number: '03', title: 'POS Checkout', category: 'TRANSACTION · COUNTER',
    summary: 'Keep totals and payment outcome unambiguous at the counter.',
    context: 'A cashier serves a walk-in customer. The basket includes a discount and the terminal may decline the payment.',
    states: ['default', 'loading', 'error', 'success', 'permission'], initial: 'default',
    refs: ['ux-and-states', 'data-dense-products', 'forms-and-content', 'interaction-patterns'],
    findings: [
      ['01', 'Total has no audit trail', 'The before screen shows a large amount without explaining tax or discount.', 'Keep an itemized summary anchored to the payment action.'],
      ['02', 'Payment failure is ambiguous', 'A red toast leaves the cashier unsure whether to retry or charge twice.', 'Say the simulated charge did not complete and offer a safe retry.'],
      ['03', 'Refund permission is unclear', 'A restricted role sees the same action as a manager.', 'Display the access boundary and a manager handoff.']
    ],
    checks: []
  },
  {
    id: 'booking-recovery', number: '04', title: 'Booking Recovery', category: 'STALE DATA · RECOVERY',
    summary: 'When a slot disappears, preserve the guest’s work.',
    context: 'A guest selected a 10:30 appointment, but availability changed while they completed their details.',
    states: ['default', 'loading', 'stale', 'error', 'success'], initial: 'stale',
    refs: ['ux-and-states', 'forms-and-content', 'interaction-patterns', 'motion-and-feedback'],
    findings: [
      ['01', 'Old availability looks bookable', 'The before screen leaves the selected slot highlighted after a conflict.', 'Mark the slot unavailable and offer nearby confirmed options.'],
      ['02', 'Recovery resets the form', 'The guest must re-enter contact details after a conflict.', 'Keep entered details while a new time is chosen.'],
      ['03', 'Confirmation arrives too early', 'The before flow implies a reservation before the recheck completes.', 'Show pending separately and confirm only a simulated successful result.']
    ],
    checks: []
  },
  {
    id: 'arabic-admin-rtl', number: '05', title: 'Arabic Admin / RTL', category: 'LOCALIZATION · ADMIN',
    summary: 'Treat right-to-left as a working layout, not a flipped skin.',
    context: 'An Arabic-speaking administrator reviews access requests containing Latin email addresses and ticket IDs.',
    states: ['default', 'loading', 'error', 'success', 'permission'], initial: 'default',
    refs: ['responsive-and-input', 'accessibility', 'data-dense-products', 'navigation-and-ia'],
    findings: [
      ['01', 'Mixed identifiers break reading', 'Latin email and ticket fragments inherit the surrounding RTL direction.', 'Isolate each identifier while preserving the Arabic reading order.'],
      ['02', 'Action hierarchy is mirrored blindly', 'Primary review and secondary dismissal lose their placement and meaning.', 'Recompose the row for RTL and retain explicit labels.'],
      ['03', 'Permission state is silent', 'A viewer can appear able to approve a request.', 'State the access limit and show the next available handoff.']
    ],
    checks: []
  },
  {
    id: 'visual-deslop', number: '06', title: 'Visual De-slop Without Rebranding', category: 'RESTYLE · BRAND FIT',
    summary: 'Remove generic polish while keeping the product recognizable.',
    context: 'An established billing product needs a cleaner invoice review view. Its ink, cream and coral identity is retained.',
    states: ['default', 'loading', 'error', 'success', 'empty'], initial: 'default',
    refs: ['visual-direction', 'design-contract', 'ai-ux-quality-gates', 'implementation-qa'],
    findings: [
      ['01', 'Everything is a card', 'The before page gives a greeting, graph and invoice the same weight.', 'Use a plain editorial header and a focused invoice work area.'],
      ['02', 'Decorative effects obscure status', 'Glossy surfaces compete with the amount due and review action.', 'Use the existing coral only for consequential status and action.'],
      ['03', 'Brand cues are diluted', 'The before screen replaces the established character with generic dashboard chrome.', 'Keep the ink, cream, coral and wordmark; change hierarchy and density.']
    ],
    checks: []
  }
];

export const refUrl = name => `${import.meta.env.BASE_URL}skills/craft-product-ui/references/${name}.md`;
