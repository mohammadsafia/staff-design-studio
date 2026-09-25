# AI UX Quality Gates

Use this reference whenever AI generated, substantially redesigned, or auto-refactored a user interface.

Generated output is a design hypothesis. Rendering successfully does not establish usability, accessibility, correctness, or product fit.

## Gate 1: Brief integrity

Before implementation verify:
- target user/task,
- scope,
- known constraints,
- design-system boundaries,
- business behavior that must not change,
- assumptions,
- success criteria.

Reject output that silently invents product requirements.

## Gate 2: Product truth

Confirm the generated UI reflects real:
- entities,
- terminology,
- permissions,
- data shapes,
- status models,
- risky actions,
- integration boundaries.

Mock behavior must be labeled as mock behavior.

## Gate 3: Journey completeness

Exercise the main path and important recovery paths.

Check:
- entry,
- decision points,
- validation,
- cancellation,
- failure,
- retry,
- completion,
- next action.

A polished happy path is incomplete if realistic failures are absent.

## Gate 4: Interaction correctness

Verify state transitions and async behavior.

Examples:
- stale search response does not overwrite newer results,
- duplicate submit is controlled,
- failed save preserves work,
- dialogs manage focus,
- bulk actions report partial failures truthfully.

## Gate 5: Accessibility

Perform the applicable semantic, keyboard, focus, zoom/reflow, contrast, and assistive-technology checks from accessibility.md.

AI-generated semantic markup must be verified; visual resemblance is not evidence.

## Gate 6: Responsive and content pressure

Test:
- narrow width,
- intermediate pressure point,
- desktop,
- long/realistic content,
- empty/error/loading states,
- localization/RTL when in scope.

Do not approve from one desktop screenshot.

## Gate 7: Visual-system coherence

Check:
- hierarchy,
- typography,
- density,
- spacing rhythm,
- color semantics,
- component consistency,
- imagery,
- signature product-specific decisions.

Reject “generic AI SaaS” composition when it is unrelated to the product’s purpose.

## Gate 8: Evidence review

For substantial work use the requirement-linked, revision-bound evidence ledger in [implementation-qa.md](implementation-qa.md). Report failed invariants, stale evidence and unverified checks explicitly.

Do not convert agent self-critique into independent validation.

## Gate 9: Human/user validation proportional to risk

Escalate to real user or domain review when:
- terminology/mental model is uncertain,
- workflow changes materially,
- mistakes are costly,
- users have specialized operational behavior,
- accessibility risk is significant,
- evidence conflicts.

AI review cannot substitute for missing user evidence.

## Gate 10: Debt check

Before shipping large AI-generated changes ask:
- Did implementation outrun understanding?
- Were unverified assumptions copied across many screens?
- Did generated components create parallel patterns?
- Did visual polish conceal unresolved workflow questions?
- Did the change expand scope without a product decision?

Prefer one verified vertical slice over a large unverified redesign.

Related reading:
- Nielsen Norman Group, AI and UX research/design articles: https://www.nngroup.com/topic/artificial-intelligence/
