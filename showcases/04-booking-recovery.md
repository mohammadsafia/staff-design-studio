# Showcase 04 — Booking Recovery

## Capability under test

Stale availability, async validation, optimistic-state restraint, duplicate submission, recovery, and continuity across multi-step booking.

## Product brief

A travel office books hotel rooms from live inventory. Availability and price may change between search and confirmation.

## Intentionally flawed before state

- selected room looks guaranteed immediately after clicking,
- final price is not revalidated,
- confirm can be double-clicked,
- stale availability ends in a generic error page,
- retry loses guest details,
- “Booked!” appears before server confirmation,
- back navigation resets room selection,
- no distinction between pending confirmation and confirmed booking,
- no partial network-failure state,
- timeout provides no safe next action.

## Exact test prompt

> Use craft-product-ui to redesign and harden this room-booking confirmation flow. Preserve current inventory and pricing rules. Availability and price can change before confirmation, so the UI must communicate provisional versus confirmed state truthfully. Preserve entered guest details during recoverable failures, prevent duplicate booking, recheck price/availability, and give a clear recovery path when inventory changes or the final outcome is unknown.

## Expected skill routing

- ux-and-states
- forms-and-content
- motion-and-feedback
- usability-heuristics
- accessibility
- implementation-qa
- ai-ux-quality-gates

## Success evidence

- provisional state is explicit,
- revalidation occurs at the right boundary,
- duplicate confirmation is controlled,
- failure preserves recoverable input,
- changed inventory offers a useful next action,
- unknown outcome is not reported as failure or success without evidence,
- retry semantics are safe,
- confirmed booking is visually/semantically distinct from pending.
