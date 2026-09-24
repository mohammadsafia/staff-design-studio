# Product and Design Contracts

For a substantial implementation, first locate existing product/design docs. Extend their conventions; do not create PRODUCT.md or DESIGN.md if they would duplicate a maintained source. For read-only work, propose changes inline and leave files untouched.

## Product truth

Record or reference:
- audience and primary jobs,
- operating context and frequency,
- core entities,
- permissions,
- risky mistakes,
- terminology,
- success criteria,
- supported devices/input methods/locales,
- integration and persistence boundaries.

Label each item as supplied, observed, researched, measured, or assumed. Keep durable business facts separate from temporary art direction.

For consequential uncertainty, link or include the evidence ledger from [research-and-evidence.md](research-and-evidence.md).

## Design truth

Record:
- current sources: token/theme files, component library, reference screens,
- chosen composition and task rationale,
- alternatives rejected and why,
- semantic token names mapped to actual values/source locations,
- type roles, spacing/density, elevation, radius, color and focus treatment,
- component reuse/extension map with state/variant contracts,
- interaction-pattern contracts for complex widgets,
- content/microcopy conventions,
- responsive adaptations and the content failure that triggers them,
- RTL/mixed-script rules if applicable,
- data/loading/empty/stale/error conventions,
- accessibility requirements,
- motion/feedback vocabulary,
- exceptions with scope, reason, owner and review condition,
- decision status: proposed or accepted, with a short dated change note.

Use one master with explicit page-level exceptions only when needed. Never silently regenerate an existing accepted contract. Do not copy a catalog's recommendations directly into it without checking context and actual values.

## Decision record

A useful decision record contains:

**Decision:** preserve selected invoice IDs across pagination.  
**Evidence:** staff reconcile one set across multiple pages; current workflow requires repeated selection.  
**Reason:** losing selection creates duplicate work and error risk.  
**Constraint:** changing account clears selection with an explicit notice.  
**Verification:** select on page 1 and page 2; count remains 2; account switch clears both.  
**Falsifier:** research shows staff never intentionally select across pages.  
**Status:** proposed until confirmed or explicitly accepted as a prototype assumption.

## Responsive contract

Do not record breakpoint numbers without behavior.

For each adaptation document:
- trigger/failure,
- before behavior,
- after behavior,
- preserved task/context,
- accessibility impact.

Example: when invoice columns no longer allow meaningful comparison, preserve the table with deliberate horizontal scrolling and sticky row identity rather than converting every row to an unrelated card.

## Engineering alignment

A contract is not a second CSS engine. Map rules to code tokens and components.

If docs and code disagree:
1. identify which appears current,
2. avoid silently choosing,
3. propose the smallest correction,
4. keep optional polish separate from release blockers.

For AI-generated large changes, do not allow a new pattern into the contract merely because it appeared repeatedly in generated code. Verify it first.
