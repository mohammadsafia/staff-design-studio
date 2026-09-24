# Motion and Feedback

Use this reference for animation, transitions, optimistic UI, notifications, progress, and perceived responsiveness.

## Every motion needs a job

Valid purposes include:
- showing cause and effect,
- preserving spatial continuity,
- communicating state change,
- directing attention to a consequential update,
- clarifying hierarchy.

Decoration alone is not sufficient reason when it delays work or competes with task content.

## Motion contract

For meaningful motion define:
- trigger,
- user/product purpose,
- changed properties,
- approximate duration category,
- interruption behavior,
- repeated-trigger behavior,
- focus/input behavior during motion,
- final semantic state,
- reduced-motion alternative.

Animations must be interruptible when users can act again before they finish.

## Feedback timing

Differentiate:
- immediate local feedback that input was received,
- pending state,
- completed state,
- failed state,
- background completion.

Do not leave users guessing whether a click registered.

## Optimistic UI

Use optimistic updates only when:
- success is highly likely,
- rollback is understandable,
- duplicate side effects are controlled,
- a failed request can be reconciled safely.

Do not optimistically report payment, booking, deletion, permission, or other high-consequence success without a trustworthy underlying outcome.

## Progress

Use:
- determinate progress when meaningful total work is known,
- indeterminate progress when it is not,
- background status when users can safely continue elsewhere.

Do not fake precision.

For long work, explain what is happening and whether the user may leave.

## Notifications

Match feedback to consequence.

- Inline: best when feedback belongs to a specific control/field.
- Toast: transient confirmation for low-risk outcomes that do not require action.
- Banner: page- or scope-level state requiring visibility.
- Dialog: interrupt only when a decision/acknowledgment is truly necessary.

A toast must not be the only record of a serious failure.

## Reduced motion

When reduced motion is requested:
- remove nonessential movement,
- prefer opacity/state changes where suitable,
- preserve orientation and completion feedback,
- avoid large parallax/zoom effects.

## Performance perception

Interaction quality includes responsiveness.

Check:
- input delay,
- layout shift during loading,
- skeleton-to-content mismatch,
- expensive blur/filter effects,
- animation jank,
- unnecessary blocking spinners.

Useful references:
- web.dev Interaction to Next Paint: https://web.dev/articles/inp
- Apple HIG motion: https://developer.apple.com/design/human-interface-guidelines/motion
