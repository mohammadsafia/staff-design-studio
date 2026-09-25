# Responsive Layout and Input

Use this reference for responsive web interfaces, mobile adaptations, touch/keyboard coexistence, localization pressure, and variable viewport/container sizes.

Contents: [Adaptation](#adapt-to-content-failure-not-device-labels), [hierarchy](#preserve-task-hierarchy), [containers](#container-aware-components), [mobile](#mobile-is-not-compressed-desktop), [input](#input-method), [resizing](#orientation-and-resizing), [type](#typography-pressure), [RTL](#rtl-and-mixed-direction), [verification widths](#verification-widths).

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
- set the actual language and base direction (for example, `lang="ar" dir="rtl"`), and use logical CSS properties,
- mirror directional navigation where meaning changes,
- do not mirror universal symbols blindly,
- test emails, URLs, IDs, SKUs, phone numbers, and Latin product codes inside RTL content,
- verify charts and timelines separately.

Define which controls follow reading direction and which preserve domain order: a chronological axis, media transport or numeric code may have its own convention. Verify keyboard order, directional keys, focus return and overflow from the actual widget contract; a mirrored screenshot cannot prove them.

For Arabic, use real Arabic labels and names, including long multiword values, with a font that shapes Arabic correctly. Inspect joined letters, diacritics, baseline alignment, line height, clipping and fallback at normal and enlarged text sizes. Do not simulate localization by reversing English or adding `direction: rtl` to English-only fixtures. Keep untranslated copy visible as a limitation.

Add a reproducible pressure fixture that combines Arabic text with a Latin identifier and punctuation, for example `دعوة أحمد (INV-2048)` and `ahmad@example.com`, plus a phone number and a localized date/amount. Isolate embedded unknown-direction text with `bdi` or `dir="auto"`; use explicit LTR direction for fields whose domain requires it, such as email. Verify the displayed order, caret/selection, copy/paste value, validation message placement and accessible name. Preserve the logical source value; do not insert visual reordering characters into stored identifiers.

Choose the requested locale's numeral/date/currency conventions explicitly (and calendar when relevant); use locale-aware formatting for values while preserving opaque IDs. Verify minus signs, decimal separators and parentheses in mixed text. Test the same fixture at narrow and intermediate widths and increased text size, including errors, empty states and multiline actions. Record which checks were rendered, keyboard-tested or language-reviewed; do not claim translation quality without suitable review.

## Verification widths

For substantial work, inspect at least:
- one narrow mobile width,
- one intermediate width where layout pressure appears,
- one normal desktop width,
- wide layout when the product meaningfully uses extra space.

Endpoint-only screenshots are insufficient.

Useful reference:
- Apple Human Interface Guidelines, layout: https://developer.apple.com/design/human-interface-guidelines/layout
