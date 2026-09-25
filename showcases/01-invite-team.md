# Showcase 01 — Invite the Team

## Capability under test

Forms, content design, hierarchy, status communication, validation, seat limits, accessibility, and realistic states.

## Product brief

A small team owner invites coworkers to a field-notes workspace. Plans support 5 seats. Most invitations happen during onboarding. The owner needs to understand remaining seats before inviting.

## Intentionally flawed before state

Build the baseline with these defects:

- heading “Unlock your potential today,”
- placeholder-only email field,
- role selector with unexplained permissions,
- generic “Continue” CTA,
- seat usage hidden below the member table,
- Active, Invited, and Pending statuses visually almost identical,
- required-field error shown only as a red border,
- send button remains enabled during request,
- failed invite clears the email field,
- icon-only remove action has no accessible name,
- mobile layout pushes the submit action below the member list,
- decorative gradient avatars have weak initials contrast.

Use realistic members and one pending invitation.

## Exact test prompt

> Use craft-product-ui to improve the invite-team experience. The owner should invite a teammate in under 30 seconds and understand remaining seats before sending. Preserve the 5-seat business rule and existing member data. Do not invent billing behavior. Improve hierarchy, form/content design, statuses, error recovery, accessibility, and responsive behavior. Include loading, failed invite, success, no-members, and plan-full states. Verify keyboard use and an intermediate-width layout.

## Expected skill routing

- research-and-evidence
- forms-and-content
- ux-and-states
- usability-heuristics
- accessibility
- responsive-and-input
- implementation-qa
- ai-ux-quality-gates when AI generates the implementation

## Success evidence

The case passes only when:
- email has a persistent programmatic label,
- role meaning is available before selection,
- seat count is visible before committing,
- CTA names the action,
- pending/invited/active are distinguishable without color alone,
- duplicate sending is controlled,
- failed invite preserves input,
- error explains recovery,
- removal is keyboard-operable and named,
- main task stays reachable on narrow/intermediate widths,
- no state falsely reports server success.

Do not assign an aesthetic score.
