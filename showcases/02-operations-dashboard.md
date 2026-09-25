# Showcase 02 — Operations Dashboard

## Capability under test

Dense SaaS information architecture, exception prioritization, tables, filters, saved context, responsive behavior, and visual hierarchy.

## Product brief

An operations manager monitors 120 stores. Their job is to identify stores requiring action, not to admire aggregate metrics. Common problems are failed sync, low stock, delayed opening, and unassigned incidents.

## Intentionally flawed before state

- eight equal KPI cards,
- four decorative charts duplicating numeric values,
- all statuses shown as colored pills,
- action-required stores buried in a 10-column table,
- filters hidden in a generic funnel icon,
- active filters not visible,
- table row identity truncates store name and code,
- “Last updated” context is missing,
- row actions appear only on hover,
- mobile converts every row into a huge card and destroys comparison,
- no stale-data state,
- no partial-permission fixture.

## Exact test prompt

> Use craft-product-ui to redesign this operations dashboard around exception handling. Preserve all current metrics, store records, permissions, and routes. Do not invent predictive analytics. Make it obvious what needs attention and what action the manager can take. Improve filtering, table behavior, stale-data communication, selection/actions, visual hierarchy, responsive behavior, and accessibility. Verify realistic many-record data and a permission-limited user.

## Expected skill routing

- data-dense-products
- navigation-and-ia
- ux-and-states
- usability-heuristics
- visual-direction
- accessibility
- responsive-and-input
- implementation-qa

## Success evidence

- exceptions precede decorative summaries,
- active scope/time range is visible,
- active filters are inspectable/removable,
- exact values remain available,
- row identity survives long content,
- important actions do not depend on hover,
- status meaning is more than color,
- stale data is explicit,
- permission-limited actions are truthful,
- narrow layout preserves the comparison task,
- charts have a reason to exist.
