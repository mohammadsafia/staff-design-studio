# Responsive Layout and Input

Use this reference for responsive web interfaces, mobile adaptations, touch/keyboard coexistence, localization pressure, and variable viewport/container sizes.

## Adapt to content failure, not device labels

Do not choose breakpoints only because common device widths exist.

Introduce a layout change when:
- content becomes unreadable,
- controls collide,
- comparison is lost,
- touch targets crowd,
- navigation no longer fits,
- line length becomes poor,
- hierarchy becomes ambiguous.

Record what changes and why.

## Preserve task hierarchy

Across widths, preserve:
- primary task,
- essential context,
- critical status,
- key action,
- recovery route.

Visual order may change, but semantic/source order must remain understandable.

## Container-aware components

Reusable components should adapt to the space they actually receive, not assume the full viewport when container queries or flexible layout are appropriate.

## Mobile is not compressed desktop

For narrow layouts decide:
- which actions stay primary,
- which controls move to overflow,
- whether tables remain tables,
- whether side panels become pages/sheets,
- what is deferred,
- what remains visible during scrolling.

Do not hide high-frequency actions merely to achieve visual cleanliness.

## Input method

Support the interaction methods likely in the environment:
- mouse/trackpad,
- touch,
- keyboard,
- stylus where relevant.

Do not make critical functionality hover-only.

Avoid assuming coarse/fine pointer characteristics perfectly identify device class.

## Orientation and resizing

Interfaces should survive:
- portrait/landscape where applicable,
- split windows,
- browser sidebars,
- zoom,
- dynamic browser chrome,
- desktop window resizing.

## Typography pressure

Test layout with:
- long headings,
- multi-line buttons/labels where unavoidable,
- enlarged text,
- numbers,
- mixed-script content,
- translated strings.

Do not freeze heights around ideal copy.

## RTL and mixed direction

When RTL is in scope:
- use logical CSS properties,
- mirror directional navigation where meaning changes,
- do not mirror universal symbols blindly,
- test emails, URLs, IDs, SKUs, phone numbers, and Latin product codes inside RTL content,
- verify charts and timelines separately.

## Verification widths

For substantial work, inspect at least:
- one narrow mobile width,
- one intermediate width where layout pressure appears,
- one normal desktop width,
- wide layout when the product meaningfully uses extra space.

Endpoint-only screenshots are insufficient.

Useful reference:
- Apple Human Interface Guidelines, layout: https://developer.apple.com/design/human-interface-guidelines/layout
