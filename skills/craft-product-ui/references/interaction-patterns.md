# Interaction Patterns

Use this reference when implementing or reviewing complex interactive components. Appearance does not define a component; semantics, keyboard behavior, focus, and state do.

## Native first

Prefer native HTML controls when they satisfy the task. Recreate platform behavior only when there is a clear product need.

## Pattern contracts

### Dialog
- move focus intentionally into the dialog,
- keep the dialog context understandable,
- support Escape when appropriate,
- prevent background interaction when modal,
- restore focus to a meaningful surviving control on close.

### Alert dialog
Use only when immediate acknowledgment is required for a high-consequence decision or interruption.

### Disclosure
Use for optional detail. The trigger exposes expanded/collapsed state and remains keyboard operable.

### Tabs
Use for peer panels in one context. Clearly expose selected state and keyboard behavior. Do not use tabs as unrelated navigation.

### Menu button
Use for a set of actions or choices. Do not use it when a simple list of links would be clearer.

### Combobox / autocomplete
Define:
- free text versus constrained selection,
- async loading,
- no-results state,
- highlighted versus selected item,
- keyboard navigation,
- clear/reset,
- stale response handling.

### Tooltip
Supplement, never replace, essential labels or instructions. It must not be the only way to access critical information.

### Grid
Use an interactive grid only when cell-level navigation/editing requires it. A visual table is not automatically an ARIA grid.

### Tree
Use for true hierarchical navigation or selection. Do not use a tree merely because items have indentation.

### Carousel
Use only when sequential content benefits from the pattern. Provide user control, understandable position, keyboard operation, and avoid forced auto-rotation.

## Composite-widget rules

For any composite widget:
- define tab-stop strategy,
- define arrow-key behavior if the pattern requires it,
- expose current state semantically,
- handle disabled items,
- retain focus across rerenders,
- test screen-reader naming separately from visual labels.

## Async interactions

Protect against:
- duplicate submissions,
- race conditions,
- out-of-order search responses,
- stale optimistic state,
- retry creating duplicate side effects,
- focus loss during rerender.

Primary reference:
- WAI-ARIA Authoring Practices Guide patterns: https://www.w3.org/WAI/ARIA/apg/patterns/
