# Implementation QA

Use this reference before completing a coded interface. For substantial AI-generated UI also apply [ai-ux-quality-gates.md](ai-ux-quality-gates.md).

Contents: [Preflight](#browser-preflight-and-slice-gate), [function](#functional-pass), [visuals](#visual-pass), [accessibility](#accessibility-pass), [responsive/localization](#responsive-and-localization-pass), [performance](#perceived-performance-pass), [engineering](#engineering-pass), [evidence](#evidence-ledger), [severity](#severity), [boundaries](#boundaries).

## Browser preflight and slice gate

Before expanding a substantial implementation, prove the verification path on its representative slice:

1. Start the documented app command and open the actual route in an available browser.
2. Save a rendered capture with route, viewport and locale; perform one product action and observe its result, including relevant runtime errors.
3. Record the start/check commands, tested revision or content fingerprint, browser environment and artifact locations. Confirm the artifacts can be opened.
4. Exercise the contract's main journey, recovery and blocking invariants before reusing the pattern on sibling screens.

A running server or successful build does not pass browser preflight. If browser access fails, record the attempted command/tool and failure, continue useful bounded implementation/source checks, and report rendered/interaction checks unverified. Do not expand an unverified pattern as if this gate passed; surface the limitation before proposing additional scope. Do not install a browser framework solely for the gate.

## Functional pass

- Start the application using the repository's documented command.
- Exercise the main journey from entry to completion.
- Test navigation, forms, menus, dialogs, filters, sorting, pagination, selection and destructive actions.
- Confirm loading, empty, stale, validation, permission, error, success and retry behavior where applicable.
- Test rapid/repeated input for duplicate-submit and async race failures.
- Test unsaved edits, cancellation and scope switches where relevant.
- Check runtime, console, hydration and network errors caused by the implementation.

Test through product controls. A harness button that directly selects “success,” “error” or “loading” verifies a fixture's presentation only. To verify a transition, trigger the real form/action against a deterministic mock or authorized integration, observe pending and resulting states, and assert preserved values and effects. Keep fixture controls visibly separate from product navigation and record which mechanism produced each result. Mocks prove only the declared local contract.

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

For substantial visual work, retain the composition review described in [visual-direction.md](visual-direction.md). Repeat the affected screenshot pass after fixes.

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

For substantial work record a compact run header: timestamp, source revision plus content fingerprint when the tree is dirty or unversioned, included source/fixture/configuration paths, environment, startup/check commands, and deterministic scenario inputs. Fingerprint the relevant content (including dependency lockfile); a commit label alone cannot identify uncommitted code. Reuse the project's existing manifest format.

| Requirement ID | Route/state | Viewport/input/locale | Method | Observed result | Status | Artifact |
| --- | --- | --- | --- | --- | --- | --- |

Use pass, fail, unverified or stale. Link the actual screenshot, trace, assertion output or review record to its run; record reviewer identity/role for judgments. Preserve artifacts with the handoff using the host's supported storage rather than relying on an ephemeral browser session. Redact sensitive data before saving.

Record actual output; never infer success from a test file, screenshot filename or missing failure log. Source-only assertions cannot pass a rendered or interaction criterion. Record an inapplicable check with its reason instead of inventing a result.

After a source, fixture, dependency or configuration change that can affect a criterion, mark its prior evidence stale and rerun the affected checks. Retain prior artifacts as historical evidence; do not relabel them with the new revision. Missing artifacts or unknown provenance make a claimed pass unverified. Report coverage and unresolved invariant IDs; a checked state catalog does not establish journey completion.

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
