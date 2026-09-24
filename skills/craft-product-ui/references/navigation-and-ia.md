# Navigation and Information Architecture

Use this reference for navigation systems, dashboards, content structure, multi-tenant products, search, and route redesign.

## Organize around user goals

Name sections using the user’s domain language and task model. Avoid organizing the primary navigation by internal team ownership, backend service, or database entity unless users naturally think that way.

## Preserve orientation

At every meaningful route, make clear:
- where the user is,
- what scope they are in,
- how they arrived,
- what sibling destinations exist,
- how to return without losing work.

Use page titles, selected navigation, breadcrumbs, tabs, scope selectors, and URL structure consistently.

## Scope is part of navigation

In products with organizations, branches, projects, accounts, hotels, stores, or environments:
- expose current scope near the actions it affects,
- warn before a scope switch discards unsaved work,
- clear or preserve selections intentionally,
- prevent stale cross-scope data from appearing valid.

## Choose the right navigation model

- **Global navigation:** major product areas.
- **Local navigation:** siblings inside one area.
- **Tabs:** peer views of the same object or context, not unrelated destinations.
- **Breadcrumbs:** hierarchy/orientation, not a replacement for global navigation.
- **Stepper:** a genuinely ordered multi-step process.
- **Command/search:** fast access when the destination space is large or users know what they seek.

Do not use tabs merely to reduce page length.

## Findability

Important actions should be discoverable through more than one fragile cue. Avoid hiding routine actions only behind hover, unlabeled icons, or obscure overflow menus.

For complex products, consider:
- search,
- recent items,
- favorites/pinned items,
- saved views,
- role-relevant shortcuts,
- empty-state entry points.

## Information scent

Labels should predict the destination. Avoid clever or brand-heavy labels that require learning unless the term is already established.

## Deep links and state

When appropriate, encode durable navigation state in the URL:
- selected record,
- tab,
- filter/query,
- page,
- sort,
- date range.

Do not encode secrets or volatile transient state merely for convenience.

## Validation

For consequential IA changes:
- test representative tasks,
- verify key destinations can be found,
- compare old/new terminology,
- test long labels and localization,
- verify back/forward behavior,
- verify mobile navigation,
- verify direct links restore meaningful context.

Useful research techniques include card sorting, tree testing, first-click testing, search-log review, and task-based usability testing.
