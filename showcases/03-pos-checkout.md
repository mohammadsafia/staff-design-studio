# Showcase 03 — POS Checkout

## Capability under test

High-frequency operational UX, touch interaction, rapid input, cart editing, payment state truthfulness, destructive actions, and failure recovery.

## Product brief

A cashier processes food orders quickly on a touchscreen POS. Mistakes affect the kitchen, payment, and customer. The cashier frequently changes quantities, removes items, applies modifiers, and splits/collects payment.

## Intentionally flawed before state

- tiny quantity controls,
- remove action next to quantity increment with equal visual weight,
- cart recalculation lags without pending feedback,
- payment button can be pressed repeatedly,
- declined payment still flashes a success toast before correcting itself,
- “Clear cart” has no consequence text,
- tax and discount lines appear/disappear causing layout jumps,
- kitchen-sent items look editable although cancellation requires authorization,
- modal focus is not managed,
- key actions rely on hover,
- narrow landscape causes totals to disappear below the fold.

## Exact test prompt

> Use craft-product-ui to harden this POS checkout for a high-frequency touchscreen workflow. Preserve pricing, taxes, permissions, kitchen status, and payment integration boundaries. Prioritize speed without making destructive mistakes easy. Fix interaction states, duplicate submission, cart editing, authorization clarity, decline recovery, touch/keyboard behavior, totals visibility, and narrow-landscape layout. Never show payment success until the underlying outcome is confirmed.

## Expected skill routing

- ux-and-states
- interaction-patterns
- accessibility
- responsive-and-input
- forms-and-content
- motion-and-feedback
- implementation-qa
- ai-ux-quality-gates

## Success evidence

- payment cannot duplicate,
- declined payment never shows false success,
- pending recalculation is understandable,
- destructive controls are separated by consequence,
- unauthorized item edits are explained truthfully,
- totals remain visible at task-critical widths,
- dialogs restore meaningful focus,
- touch targets and keyboard path are usable,
- layout does not jump unpredictably as totals change.
