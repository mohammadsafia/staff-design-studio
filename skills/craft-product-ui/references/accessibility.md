# Accessibility

Use this reference for any user-facing implementation or review. Accessibility is part of interaction correctness, not a final polish pass.

## Start with semantics

Prefer semantic HTML and native controls. Add ARIA only when semantics or relationships cannot otherwise be expressed.

For every interactive element verify:
- accessible name,
- role,
- state/value,
- keyboard operation,
- focus behavior,
- disabled/read-only semantics,
- error relationship where applicable.

## Keyboard and focus

The primary journey must be operable without a pointer.

Check:
- logical tab order,
- visible focus,
- no keyboard traps,
- focus does not disappear behind sticky/fixed UI,
- focus is intentionally moved after dialogs, route changes, deletion, or injected errors,
- focus returns to a meaningful element after overlays close,
- custom widgets follow their expected keyboard model.

Do not use positive `tabindex` to repair visual/source-order problems.

## Pointer and touch

Essential controls need usable target size and spacing. Avoid interactions that require precision dragging when an equivalent tap/click/keyboard method can be offered.

WCAG 2.2 reference for minimum target sizing:
https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum

## Text, zoom, and reflow

Test:
- browser zoom,
- text resizing,
- narrow viewport reflow,
- long localized text,
- user font scaling where applicable.

Do not disable zoom. Avoid horizontal scrolling for ordinary reading content; deliberate data-table scrolling is different and must preserve context.

## Color and perception

Do not rely on color alone for status, selection, validation, or chart meaning.

Verify sufficient contrast for:
- text,
- icons conveying meaning,
- focus indicators,
- input boundaries/states,
- charts where visual distinction is required.

Use texture, labels, symbols, shape, or position when color differentiation alone is fragile.

## Forms and errors

Ensure:
- every input has a persistent programmatic label,
- required/invalid state is exposed,
- error messages are associated with the field,
- instructions appear before users need them,
- error summaries link or move users to the affected controls when useful,
- entered values survive validation failure.

## Dynamic updates

For async actions, expose important non-visual status appropriately without turning every minor UI change into an announcement.

Examples:
- save succeeded/failed,
- validation failed,
- search results changed,
- background job completed.

## Motion

Respect reduced-motion preferences. Removing animation should not remove state feedback or spatial comprehension.

Avoid flashing content and uncontrolled auto-motion.

## Authentication

Do not create authentication steps that depend solely on memory, puzzles, or transcription when accessible alternatives can be provided.

WCAG 2.2 reference:
https://www.w3.org/TR/WCAG22/

## Testing boundaries

Source inspection does not prove accessibility.

For substantial work, distinguish:
- semantic/source review,
- keyboard test,
- zoom/reflow test,
- automated checker,
- screen-reader spot check,
- full assistive-technology testing.

Report only what was actually tested.

Additional references:
- WAI-ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- WCAG 2.2 Understanding documents: https://www.w3.org/WAI/WCAG22/Understanding/
