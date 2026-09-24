# UX and State Coverage

Use this reference for task-oriented interfaces and multi-step products. Pair it with the more specific references when forms, navigation, dense data, accessibility, or complex widgets dominate the task.

## Model the journey

For each important user type, define the entry point, goal, success condition, required information, decisions, primary path, recoverable mistakes, completion feedback, and next useful action. Design the most important end-to-end path first.

Also identify:
- frequency and expertise,
- expensive or irreversible mistakes,
- handoffs to another person/system,
- waiting states,
- permission boundaries,
- scope changes,
- abandonment and resume behavior.

## State matrix

Cover applicable states for each data-bound region or action:

| Category | States |
| --- | --- |
| Data | Initial, loading, populated, empty, stale, partial, error, offline |
| Action | Idle, hover, focus, active, disabled, submitting, success, failure |
| Access | Allowed, read-only, hidden, unauthorized, upgrade-required |
| Form | Untouched, incomplete, invalid, valid, server-rejected, saved, unsaved |
| Collection | Few, many, long values, missing values, duplicates, pagination/end |
| Sync | Local-only, pending, synced, conflict, retrying |
| Background work | Queued, running, completed, partially completed, failed, cancelled |

Do not render every state simultaneously. Provide realistic scenarios or controls that make important states testable.

## State-transition contract

For consequential actions, define:

1. precondition,
2. user trigger,
3. immediate feedback,
4. pending state,
5. success state,
6. failure state,
7. retry/cancel behavior,
8. what data is preserved,
9. what happens if the user navigates away,
10. whether the operation is safe to repeat.

This is especially important for saves, uploads, approvals, payments, bookings, destructive actions, batch work and background jobs.

## Decision clarity

At each decision point, the user should understand:
- what they are choosing,
- relevant context,
- consequence,
- default if no action is taken,
- whether the choice is reversible,
- what happens next.

Avoid presenting multiple visually equal actions when their consequence is not equal.

## Information architecture and content

Use [navigation-and-ia.md](navigation-and-ia.md) for route/scope structure and [forms-and-content.md](forms-and-content.md) for field/content behavior.

Core rules:
- organize around goals and domain language,
- keep scope explicit,
- ask only for information needed now,
- preserve entered values after errors,
- show units, formats, constraints, defaults and consequences near the control,
- keep recovery near the failure.

## Dense tools

Use [data-dense-products.md](data-dense-products.md) for tables, dashboards, filters, bulk actions and operational workflows.

At minimum:
- help the user identify what changed, what needs attention, and what action to take,
- keep filtering/sorting visible and reversible,
- support long labels, zero values, nulls, outliers and realistic counts,
- keep row actions discoverable,
- make selection scope explicit.

Use domain-realistic names, values, dates, statuses and edge cases. Avoid lorem ipsum, repeated cards, and data that exists only to balance the layout.

## Failure-prone interaction contracts

| Pattern | Required decision | Observable verification |
| --- | --- | --- |
| Bulk action | Visible-page versus all-matching scope; stable ID selection; filter/account changes; partial failure | Select across pages, change scope, fail one item; count and affected IDs stay truthful |
| Destructive action | Reversibility, consequence, authority, confirmation or real undo | Cancel leaves data untouched; retry cannot repeat the destructive effect; undo restores actual state |
| Async search | Loading versus no matches; cancellation; response order | Rapid queries never show an older response as the latest result |
| Editing | Dirty state, validation, permission loss and conflict policy | Failed save preserves edits; unsaved navigation has defined behavior |
| Booking/payment | Availability or price recheck; duplicate submission; pending outcome | Stale availability recovers; failure never displays success; mock results labeled |
| Dialog/drawer | Focus entry, containment where appropriate, escape and return | Complete with keyboard; focus returns to a meaningful surviving control |
| Responsive table | Which comparison must remain available at narrow widths | Essential values/actions remain accessible; scrolling is deliberate |
| Background job | Leave/stay behavior, progress, retry, partial completion | Refresh/revisit does not turn unknown state into false success |

Use confirmation proportional to impact. Offer undo only if the underlying action is actually reversible. Do not imply a disabled or hidden button enforces server authorization.

## Localization and content pressure

When multilingual or RTL support is required, use [responsive-and-input.md](responsive-and-input.md).

Test actual target-language content, logical CSS properties, mixed-direction IDs/emails and number/date formatting. Mirror directional navigation where meaningful, not every icon. Test longer translated labels and font fallback without disabling zoom.

## Operational test fixtures

Include zero records, one record, realistic many records, long identifiers, missing optional values, a permission-limited user and at least one recoverable failure when relevant. Add stale/conflicting data when the workflow can encounter it.

Keep fixtures deterministic so the same bug can be reproduced. Expose simulated states in a clearly separate demo/test mechanism rather than cluttering production navigation.
