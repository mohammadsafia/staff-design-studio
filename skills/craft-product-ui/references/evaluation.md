# Behavioral Evaluation

Use when assessing this skill, not during every UI task. Structure validation proves packaging only. Test realistic work and preserve the user's scope.

## Task set

1. **Operational reconciliation:** invoice reconciliation with mixed statuses, cross-page selection, keyboard workflow, partial batch failure and narrow mobile.
2. **Brand-constrained refinement:** required Inter font, purple accent and established card library; improve hierarchy without changing navigation/business logic.
3. **Read-only audit:** screenshot plus source with an unexplained disabled action; no edits authorized.
4. **Recovery-focused booking:** capacity changes before confirmation, retry and duplicate submission; server mocked explicitly.
5. **Small edit:** tooltip spacing in an established component; no new design system or full agent team.
6. **Complex form:** conditional application form with server validation, preserved values, error summary and optional sections.
7. **Dense admin tool:** table with 500+ conceptual records, filters, saved view, inline edit, null values, long identifiers and partial permissions.
8. **Accessibility pattern:** dialog plus combobox tested by keyboard, focus restoration, zoom/reflow and accessible naming.
9. **RTL adaptation:** Arabic operational screen with mixed Latin IDs, date/number formatting, long translated labels and responsive behavior.
10. **AI redesign restraint:** ask for a visual refresh while preserving business behavior; evaluate whether generated work invents requirements or parallel components.

Run selected prompts in independent threads with raw inputs and minimum context. Do not leak expected findings into the task. Use isolated temporary work for test artifacts. Do not install, publish or perform real transactions.

## Freeze a fair protocol

Treat the task set above and repository showcases as development cases. Reserve held-out briefs, content fixtures and acceptance checks that were not used to tune the skill. Separate them before revision; do not call a renamed or lightly reworded showcase held out. Include more than one domain and preserve small-edit and read-only tasks so process cost and scope compliance are measured too.

Before running comparisons, record:
- skill revision, baseline definition and task split;
- identical model/version, tools, starting repository, brief, content, allowed dependencies, time/token budget and stopping rule for each pair;
- required task outcomes, invariant checks, visual-review rubric and disqualifying failures;
- number of runs, run ordering/randomization and how failed or unavailable environments will be reported.

Use fresh isolated contexts for each run. Keep prior solutions, reviewer findings and acceptance answers out of implementation context. A reviewer may receive the original requirements and raw artifacts; hide treatment labels and randomize presentation when judging appearance. Preserve checkable implementation and interaction evidence for behavioral review; screenshots alone cannot establish it.

Use multiple runs where feasible and report their spread, failures and resource cost, not only the strongest output. If budgets, tools or environments differ, disclose the difference and limit the comparison. Do not retune on held-out results and keep calling the same set held out; move it to development and reserve new cases for the next claim.

## Compare with a baseline

For empirical quality claims, use identical brief/content/stack/time budget with and without the skill.

Compare:
- task completion,
- recovery success,
- error rate where measurable,
- interaction correctness,
- keyboard access,
- narrow/intermediate layout,
- accessibility findings,
- design-system consistency,
- content clarity,
- product-specific visual identity.

Use blinded screenshot review only for visual questions; screenshots cannot evaluate keyboard, async correctness or recovery behavior.

Repeat across more than one domain. Prefer user judgments and task outcomes to an agent's numerical self-rating.

## Evidence quality

Separate:
- automated test output,
- rendered inspection,
- interaction reproduction,
- accessibility checks,
- reviewer judgment,
- user/domain feedback,
- measured product outcome.

Do not merge them into one score.

## Regression tests for the skill itself

When changing this repository, test whether the new guidance causes:
- unnecessary process on tiny fixes,
- invented research,
- overuse of ARIA,
- generic visual sameness,
- excessive documentation,
- refusal to make reasonable assumptions,
- uncontrolled scope growth.

A stronger skill should improve decision quality without making every task ceremonial.

## Report honestly

State what was exercised, evidence, failures and limitations. Bind outputs, commands, review records and saved artifacts to each run's revision/content fingerprint using [implementation-qa.md](implementation-qa.md); label missing or superseded evidence unverified or stale. Report requirement-level results and blocker counts separately from visual preferences and any measured task outcomes.

Planning-only scenarios do not establish rendered design quality. A benchmark suite specification is not a completed benchmark. A successful showcase is development evidence, not proof of generalization. Do not claim superiority over upstream projects without a fair executed comparison.
