# Implementation QA

Use this reference before completing a coded interface. For substantial AI-generated UI also apply [ai-ux-quality-gates.md](ai-ux-quality-gates.md).

## Functional pass

- Start the application using the repository's documented command.
- Exercise the main journey from entry to completion.
- Test navigation, forms, menus, dialogs, filters, sorting, pagination, selection and destructive actions.
- Confirm loading, empty, stale, validation, permission, error, success and retry behavior where applicable.
- Test rapid/repeated input for duplicate-submit and async race failures.
- Test unsaved edits, cancellation and scope switches where relevant.
- Check runtime, console, hydration and network errors caused by the implementation.

## Visual pass

Capture representative screenshots at:
- a narrow mobile width,
- an intermediate pressure width,
- a normal desktop width,
- a wide viewport when relevant.

Common reference ranges such as 360–390, 768–1024 and 1280–1440 px are useful test points, not design requirements.

Inspect:
- hierarchy and reading path,
- alignment and optical balance,
- spacing rhythm and density,
- text wrapping/truncation,
- overflow and deliberate scrolling,
- image cropping,
- fixed/sticky regions,
- overlays and z-index,
- interaction states,
- skeleton-to-content layout shift,
- long/realistic content,
- supported themes.

Repeat the screenshot pass after fixes.

## Accessibility pass

Apply [accessibility.md](accessibility.md).

At minimum:
- navigate the primary journey with keyboard,
- confirm visible, unobscured focus and logical focus order,
- verify icon-only controls have accessible names,
- check headings, landmarks, labels and error association,
- verify dialog/composite-widget focus behavior,
- check contrast and non-color state cues,
- check zoom/reflow and text enlargement,
- check target sizing/spacing where relevant,
- check reduced motion.

Do not infer screen-reader compatibility solely from semantic-looking source.

## Responsive and localization pass

Apply [responsive-and-input.md](responsive-and-input.md).

Test:
- intermediate resizing, not endpoints only,
- long headings/labels,
- enlarged text,
- mixed identifiers,
- target locale/RTL when in scope,
- touch versus hover-only interactions.

## Perceived performance pass

Check:
- visible response after input,
- blocking spinners,
- unnecessary full-page loading,
- layout shift,
- expensive effects,
- slow search/filter response,
- animation jank.

Measure performance only with the project's available tools. Do not invent metrics. If INP/Core Web Vitals are material and measurable, record actual results.

## Engineering pass

- Run relevant type checks, linting, unit tests and production build.
- Avoid new warnings, duplicated primitives, unexplained magic values and unused dependencies.
- Confirm responsive images, lazy loading and expensive effects are appropriate.
- Test realistic record counts and long content, not only ideal fixtures.
- Add a regression test for fixed behavior when practical within the existing test stack.

## Evidence ledger

For substantial work record:

| Criterion | Route/state | Viewport/input | Method | Observed result | Status | Evidence |
| --- | --- | --- | --- | --- | --- | --- |

Use pass, fail or unverified. Record actual output; never infer test success from the existence of a test file.

## Severity

- **Blocker:** data loss, false success, permission exposure, inaccessible essential action, or broken core journey.
- **Major:** recovery missing, repeated failure, responsive task blockage, deceptive state, or severe hierarchy/accessibility problem.
- **Minor:** localized consistency, clarity or polish issue with a workaround.
- **Preference:** viable aesthetic alternative without demonstrated task harm.

Do not average away a blocker with a high visual score.

## Boundaries

No browser: rendering findings remain hypotheses unless directly demonstrated.  
No backend: integration outcomes are simulated.  
No screen-reader test: report keyboard/semantic checks without claiming full accessibility compliance.

Do not install a test framework or perform real external business actions solely to complete a checklist.

After at most two normal review/fix cycles, report unresolved findings with their impact rather than endlessly polishing or claiming readiness. Expand only if authorized and justified.

Do not call the interface production-ready while critical controls are inert, the main journey is incomplete, common states are absent, responsive layout blocks the task, keyboard use is blocked, or runtime errors remain.
