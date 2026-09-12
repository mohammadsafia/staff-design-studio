# UX and State Coverage

Use this reference for task-oriented interfaces and multi-step products.

## Model the journey

For each important user type, define the entry point, goal, success condition, required information, decisions, primary path, recoverable mistakes, completion feedback, and next useful action. Design the most important end-to-end path first.

## State matrix

Cover applicable states for each data-bound region or action:

| Category | States |
| --- | --- |
| Data | Initial, loading, populated, empty, stale, partial, error, offline |
| Action | Idle, hover, focus, active, disabled, submitting, success, failure |
| Access | Allowed, read-only, hidden, unauthorized, upgrade-required |
| Form | Untouched, incomplete, invalid, valid, server-rejected, saved, unsaved |
| Collection | Few, many, long values, missing values, duplicates, pagination/end |

Do not render every state simultaneously. Provide realistic scenarios or controls that make important states testable.

## Information architecture and decisions

- Organize navigation around goals and domain language.
- Keep route names, titles, breadcrumbs, tabs, and selected states consistent.
- Make scope clear, especially in multi-tenant or multi-project products.
- Ask only for information needed at the current step.
- Put labels outside placeholders and preserve entered values after errors.
- Show units, formats, constraints, defaults, and consequences near the control.
- Confirm irreversible actions; offer undo when practical.

## Dense tools

- Help the user identify what changed, what needs attention, and what action to take.
- Use charts when shape, comparison, or trend matters; use exact values when precision matters.
- Keep filtering and sorting visible and reversible.
- Support long labels, zero values, nulls, outliers, and realistic record counts.
- Keep row actions discoverable without turning every cell into a competing control.

Use domain-realistic names, values, dates, statuses, and edge cases. Avoid lorem ipsum, repeated cards, and data that exists only to balance the layout.

## Failure-prone interaction contracts

| Pattern | Required decision | Observable verification |
| --- | --- | --- |
| Bulk action | Visible-page versus all-matching scope; stable ID selection; filter/account changes; partial failure | Select across pages, change scope, fail one item; count and affected IDs stay truthful |
| Destructive action | Reversibility, consequence, authority, confirmation or real undo | Cancel leaves data untouched; retry cannot repeat the destructive effect; undo restores actual state |
| Async search | Loading versus no matches; cancellation; response order | Rapid queries never show an older response as the latest result |
| Editing | Dirty state, validation, permission loss and conflict policy | Failed save preserves edits; unsaved navigation has defined behavior |
| Booking/payment | Availability or price recheck; duplicate submission; pending outcome | Stale availability recovers; failure never displays success; mock results labeled |
| Dialog/drawer | Focus entry, containment where appropriate, escape and return | Complete with keyboard; focus returns to a meaningful surviving control |
| Responsive table | Which comparison must remain available at narrow widths | Essential values/actions remain accessible; scrolling is deliberate and labeled |

Use confirmation proportional to impact. Offer undo only if the underlying action is actually reversible. Do not imply a disabled or hidden button enforces server authorization.

## Localization and content pressure

When multilingual or RTL support is required, test actual target-language content, logical CSS properties, mixed-direction IDs/emails and number/date formatting. Mirror directional navigation where meaningful, not every icon. Test longer translated labels and font fallback without disabling zoom. Do not add a locale requirement the user did not request.

## Operational test fixtures

Include zero records, one record, many records, long identifiers, missing optional values, a permission-limited user and at least one recoverable failure when relevant. Keep fixtures deterministic so the same bug can be reproduced. Expose simulated states in a clearly separate demo/test mechanism rather than cluttering production navigation.
