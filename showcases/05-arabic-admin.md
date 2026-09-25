# Showcase 05 — Arabic Admin / RTL

## Capability under test

RTL layout, Arabic content, mixed-direction identifiers, dense admin workflows, localization pressure, responsive behavior, and typography.

## Product brief

An Arabic-speaking operations user manages hotel inventory. The interface contains Arabic labels but also Latin hotel codes, emails, phone numbers, dates, room codes, prices, and booking references.

## Intentionally flawed before state

- entire layout mirrored mechanically,
- search icon and directional controls mirrored incorrectly,
- Latin booking IDs reorder visually,
- email and phone values become difficult to scan,
- English fallback font breaks Arabic rhythm,
- table headers wrap unpredictably,
- Arabic status labels are longer than the English component allows,
- dates/numbers use inconsistent locale formatting,
- fixed-width actions clip,
- mobile table conversion hides booking reference,
- focus ring is partially obscured in the RTL drawer.

## Exact test prompt

> Use craft-product-ui to improve this Arabic hotel-inventory admin experience. Arabic is the primary UI language; booking references, emails, phone numbers, hotel codes, and some numeric data remain mixed-direction. Preserve all business behavior. Correct RTL semantics rather than mechanically mirroring everything, improve Arabic typography, mixed-direction readability, status/layout pressure, responsive behavior, and keyboard/focus accessibility.

## Expected skill routing

- responsive-and-input
- data-dense-products
- accessibility
- visual-direction
- navigation-and-ia
- forms-and-content
- implementation-qa

## Success evidence

- logical layout works in RTL,
- directional controls are mirrored only when meaning changes,
- mixed-direction IDs remain readable/copyable,
- Arabic font metrics support hierarchy,
- long labels do not clip,
- essential booking identity survives narrow layouts,
- dates/numbers follow a deliberate locale rule,
- keyboard focus remains visible and ordered.
