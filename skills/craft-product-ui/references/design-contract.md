# Product and design contracts

For a substantial implementation, first locate existing product/design docs. Extend their conventions; do not create PRODUCT.md or DESIGN.md if they would duplicate a maintained source. For read-only work, propose changes inline and leave files untouched.

## Product truth

Record or reference audience, job, operating context, core entities, permissions, risky mistakes, terminology, success criteria, supported devices/locales and integration boundaries. Label each item supplied, observed or assumed. Keep durable business facts separate from temporary art direction.

## Design truth

Record:
- Current sources: token/theme files, component library, reference screens.
- Chosen composition and its task rationale; alternatives rejected and why.
- Semantic token names mapped to actual values and source locations.
- Type roles, spacing/density, elevation, radius, motion and focus treatment.
- Component reuse/extension map with state/variant contracts.
- Breakpoint behavior, content limits, RTL/mixed-script rules if applicable.
- Data/loading/empty/error conventions and accessibility requirements.
- Exceptions with scope, reason, owner and review condition.
- Decision status: proposed or accepted, with a short dated change note.

Use one master with explicit page-level exceptions only when needed. Never silently regenerate an existing accepted contract. Do not copy a catalog's recommendations directly into it without checking context and actual values.

## Example decision record

Decision: preserve selected invoice IDs across pagination.
Reason: staff reconcile a selection spanning several pages.
Constraint: changing account clears selection with an explicit notice.
Verification: select on page 1 and page 2; selection count remains 2; account switch clears both.
Status: proposed until the product rule is confirmed or stated as a prototype assumption.

## Engineering alignment

A contract is not a second CSS engine. Map rules to code tokens. If docs and code disagree, report which is current, propose a correction and keep the change scoped. Record optional polish separately from release blockers.
