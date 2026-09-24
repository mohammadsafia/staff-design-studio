# Data-Dense Products

Use this reference for SaaS/admin systems, POS, operations tools, dashboards, inventory, finance, CRM, scheduling, and other interfaces where users manage many records or exceptions.

## Optimize for decisions, not card count

Before choosing a dashboard layout, identify:
- what requires attention,
- which comparisons matter,
- which values need precision,
- which actions are frequent,
- which exceptions are costly,
- what time range and scope are active.

A dashboard should help the user decide or act, not merely summarize available data.

## Tables

Define explicitly:
- primary row identity,
- essential columns,
- default sort,
- row action model,
- selection behavior,
- pagination/virtualization model,
- missing/null display,
- long-value behavior,
- responsive adaptation.

Do not truncate the identifier users need to distinguish records without a reliable reveal mechanism.

## Selection and bulk actions

Selection is a data contract.

Decide:
- current page vs. all matching records,
- whether selection persists across pagination,
- what filter/sort/scope changes do to selection,
- how unavailable rows behave,
- partial failure behavior,
- how the UI reports affected IDs/counts.

Never show bulk success when only some records succeeded.

## Filters

Make active filters visible and removable. Users should understand why records are absent.

For complex filtering support:
- clear all,
- predictable defaults,
- applied versus draft filters,
- date/time zone semantics,
- saved views when recurring workflows justify them,
- shareable/query-state URLs when appropriate.

## Sorting and search

Make current sort explicit. Preserve sort/filter/search intentionally when users navigate into a record and back.

For server search:
- distinguish loading from no results,
- debounce only when helpful,
- ignore stale responses,
- preserve the submitted query,
- show scope and matching rules when ambiguity is costly.

## Inline editing

Use when users benefit from rapid repeated edits and the consequence is limited.

Define:
- edit entry/exit,
- validation,
- save timing,
- conflict handling,
- dirty state,
- failed-save preservation,
- keyboard traversal,
- permission changes.

## Status and exceptions

Status should answer “what does this mean for my next action?”

Use status labels that are:
- mutually understandable,
- semantically consistent,
- distinguishable without color alone,
- ordered meaningfully where progression exists.

Prioritize exceptions when they drive the workflow.

## Charts

Use charts for pattern, comparison, distribution, and trend. Use exact values for lookup and reconciliation.

Always define:
- metric,
- unit,
- aggregation,
- time range,
- comparison basis,
- missing-data behavior.

Do not create decorative charts that duplicate a simpler number.

## Responsive dense UI

Do not simply stack every desktop column into cards.

Decide which information is:
- essential,
- revealable on demand,
- movable to detail,
- scrollable,
- replaceable with a more suitable mobile workflow.

If comparison across columns is essential, deliberate horizontal scrolling may be better than destroying the comparison.

## Test fixtures

At minimum include when relevant:
- zero records,
- one record,
- realistic many,
- long identifiers,
- duplicate-looking names,
- null values,
- outliers,
- partial permissions,
- stale data,
- failed bulk action,
- conflicting edit.
