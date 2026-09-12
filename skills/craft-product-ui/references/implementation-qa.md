# Implementation QA

Use this reference before completing a coded interface.

## Functional pass

- Start the application using the repository's documented command.
- Exercise the main journey from entry to completion.
- Test navigation, forms, menus, dialogs, filters, sorting, pagination, and destructive actions.
- Confirm loading, empty, validation, permission, error, success, and retry behavior where applicable.
- Check for runtime, console, hydration, and network errors caused by the implementation.

## Visual pass

Capture representative screenshots at approximately 360–390 px mobile, 768–1024 px tablet/narrow desktop, 1280–1440 px desktop, and a wide viewport when relevant.

Inspect hierarchy, alignment, spacing, density, text wrapping, truncation, overflow, image cropping, fixed regions, overlays, z-index, interaction states, skeleton-to-content layout shift, and supported themes. Repeat the screenshot pass after fixes.

## Accessibility pass

- Navigate the primary journey with a keyboard.
- Confirm visible focus and logical focus order.
- Confirm icon-only controls have accessible names.
- Check headings, landmarks, labels, error association, and dialog focus.
- Check contrast, zoom/reflow, touch targets, and reduced motion.

## Engineering pass

- Run relevant type checks, linting, unit tests, and the production build.
- Avoid new warnings, duplicated primitives, unexplained magic values, and unused dependencies.
- Confirm responsive images, lazy loading, and expensive effects are appropriate.
- Test with realistic record counts and long content, not only an ideal fixture.

## Completion threshold

Maintain a compact evidence ledger for substantial work: criterion, route/state, viewport/input method, method/command, observed result and evidence location. Mark each pass, fail or unverified. Record actual test output; never infer test success from the existence of a test file.

Review blocker: data loss, falsely reported success, inaccessible essential action, broken core journey or permission exposure. Major: recovery missing, responsive task blockage, deceptive state or severe hierarchy problem. Minor: localized consistency or polish. Preference: a viable aesthetic alternative without demonstrated task harm. Do not average away a blocker with a high visual score.

For fixes, add a regression test where practical using the project's existing tools. For visual changes compare before/after at the same content and viewport. Inspect at least one intermediate width; endpoint screenshots can miss breakpoint failures. Screenshots cannot prove focus, accessible names or async correctness; test those separately.

No browser: source findings are hypotheses about rendering unless directly demonstrated otherwise. No backend: integration outcomes are simulated. No screen-reader test: report keyboard/semantic checks without claiming full accessibility compliance. Do not install a test framework or run external business actions solely to complete a checklist.

After at most two normal review/fix cycles, report unresolved findings with their impact rather than endlessly polishing or claiming readiness. Expand only if authorized and justified.

Do not call the interface production-ready while critical controls are inert, the main journey is incomplete, common states are absent, mobile layout is broken, keyboard use is blocked, or runtime errors remain. Report any unverified area plainly.
