# Invite the Team: implementation and review record

The canonical brief is [../01-invite-team.md](../01-invite-team.md). [contract.json](contract.json) maps its acceptance criteria to stable IDs. Implementation coverage and verification coverage are separate: this slice has local product behavior, but has **not passed** the browser-dependent invariants.

## Decisions and assumptions

| Decision | Reason | Source / limit |
| --- | --- | --- |
| Show remaining capacity above the form | The owner must know whether inviting is possible before committing | INV-03; all displayed statuses reserve seats as an explicit fixture assumption |
| Put form before roster at every width | The task should not depend on scrolling through existing people | INV-10; CSS container adaptations exist, rendered reachability is unverified |
| Show Viewer and Editor descriptions together | The safe default and consequences are understandable before selection | INV-02; fictional permission model, no authorization service |
| Use a quiet field-notes surface, serif task heading, compact utilitarian controls | Carry a recognizable workspace identity without giving decoration priority over access decisions | Preserves the showcase's editorial direction; visual judgment remains a source-level hypothesis |
| Confirm removal inline; focus Keep person first | Avoid accidental removal and keep the affected identity explicit | INV-09; native-button and DOM focus assertions passed, physical keyboard testing pending |
| Preserve email and role on failure | Retry should not require reconstructing the invitation | INV-07; deterministic local service fails once in the error fixture |
| Bind evidence to relevant source and saved output | Old passing output must not silently endorse changed code | Fingerprint includes source, tests, scripts, skill, benchmark, configuration and lockfile |

No billing behavior was added. No email is sent, no server permission is enforced, and no data persists. The five-seat limit is checked before submission and again by the in-memory service. The owner cannot be removed. A pending request has no successful invitation until the local service resolves.

## Product flow and harness

Open `/?benchmark=invite-team` for the real viewport layout, or `/#invite-team` for the before/after workbench. The workbench's After mode enables product controls. Changing preview width or comparison view preserves the same session. Selecting a fixture resets its data; leaving the case cancels outstanding work.

- `default`: four reserved seats, an editable address and role.
- `loading`: starts a five-second local request; duplicate submission is disabled.
- `error`: starts a request that fails once; retained draft can be edited and retried.
- `success`: starts a request that resolves after the normal local delay. It never jumps directly to success.
- `empty`: no listed members; viewing-owner permission exists separately in this fixture.
- `full`: five reserved seats; named removal can free capacity.
- `permission`: simulated viewer access; mutations unavailable.

These controls select test inputs. They are not evidence that a user completed the product workflow. Product tests type into the form, select a role, submit, observe pending/failure and retry.

## Checks performed on 2026-09-25

`npm run verify` records current model/DOM assertions, production build output and existing demo regressions in [../../public/evidence/verification.log](../../public/evidence/verification.log). The generated [manifest](../../public/evidence/invite-team.json) includes the source fingerprint, tested revision, dirty-tree flag, environment, requirement status and artifact hash. The website shows stale evidence if relevant source changes or the assertion artifact is missing/changed when the site is built. `npm run verify` never records a browser pass.

Browser preflight was attempted using `npm run dev -- --host 127.0.0.1`; Vite reported ready on port 5173. Opening `http://127.0.0.1:5173/?benchmark=invite-team` in the available cloud browser returned `net::ERR_BLOCKED_BY_CLIENT`. The preceding all-interface start failed on the environment's network-interface lookup. Neither event is evidence of rendered correctness.

**Unverified:** screenshots, actual 390/820/1440 px layouts, zoom, keyboard traversal, visible focus, contrast, screen-reader output and task completion time. No final screenshots exist. The other five cases remain presentation drafts against the canonical benchmarks; their shell tests are not product-flow acceptance.

## Separate-agent code review

A separate agent reviewed the original brief, implementation, integration and evidence scripts read-only on 2026-09-25. Its existing Invite tests passed, as did a focused JSDOM flow: full fixture → cancel a named invitation → invite a replacement → five occupied seats. This was a code/DOM review, not a rendered design review.

One minor finding was reproduced: failure of the final packaging build left an earlier passing build entry in the saved manifest. The implementation now records the failure, updates its artifact hash, marks the benchmark incomplete and removes partial distribution output. The reviewer repeated its injected-failure reproduction and confirmed all those outcomes. No local product-flow blocker was found within this review's scope. Browser-dependent requirements remain open.

## Browser review still required

Use the same source fingerprint in the manifest. Record browser/version, date, viewport, route, input method, result and actual artifact path for each check. Do not mark this section passed merely because the procedure exists.

1. Open `/?benchmark=invite-team` at actual viewport widths **390, 820 and 1440 px**. Confirm the email, roles, seats and Send invitation stay reachable without horizontal page scrolling. Inspect long addresses, the full roster and 200% zoom. Capture default at each width.
2. Using only Tab, Shift+Tab, arrows, Space and Enter, fill `ada@example.com`, choose Editor and submit. Observe disabled pending controls and exactly one new invited record. Capture pending and success; confirm visible, unobscured focus and the local-only success text.
3. Open `?benchmark=invite-team&scenario=error`, wait for failure, edit the retained draft, retry and verify the final record. Capture error and retry result. Confirm error association with the field for an invalid address.
4. Open the full fixture. Keyboard-activate a named removal, cancel and verify focus returns; repeat and confirm removal, then invite into the freed seat. Confirm owner removal is unavailable.
5. Inspect the empty and permission fixtures. Verify disabled actions do not imply actual server authorization. With a screen reader, check names, status announcements, radio descriptions and focus after retry/removal separately.
6. In `/#invite-team`, type a draft in After mode, change width/view and return. Confirm the draft survives and hidden comparison layers cannot receive focus. Change a fixture while loading; confirm the abandoned request never changes the new fixture.
7. Capture the affected state again after fixes, then record one composition judgment with screenshot coordinates/regions: what draws attention first, what content is compressed, the correction and its observed outcome. Save real screenshots under `docs/screenshots/` and link them from the README only after capture.

A later controlled skill evaluation should keep these examples as development cases and use held-out prompts/fixtures under the same tooling and time constraints, as described in [evaluation.md](../../skills/craft-product-ui/references/evaluation.md). This implementation does not demonstrate general superiority.
