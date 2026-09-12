# Specialist team orchestration

Use for substantial design/build requests. These are runtime role contracts invoked through the host's available delegation tools, not installed standalone agent processes or platform-native configuration.

## Lead responsibilities

Own the brief, decisions, contract, task allocation and final acceptance. Spawn only bounded independent tasks. Use at most three workers concurrently by default and reuse idle workers. Do not delegate recursively. If delegation is unavailable, perform the roles sequentially and explicitly label review as self-review.

## Role map

| Role | Read | Responsibility | Write scope |
| --- | --- | --- | --- |
| UX architect | [UX architect](../agents/ux-architect.md) | Journey, hierarchy, exceptions, recovery | Assigned specification only |
| Art director | [Art director](../agents/art-director.md) | Alternative compositions, chosen visual rationale | Assigned concept area only |
| Systems designer | [Systems designer](../agents/systems-designer.md) | Token/component mapping and compatibility | Assigned shared contract and primitives |
| Frontend engineer | [Frontend engineer](../agents/frontend-engineer.md) | Complete slice and regression coverage | Explicit non-overlapping app files |
| Independent reviewer | [Reviewer](../agents/design-reviewer.md) | Reproduce failures; inspect actual rendered work | Read-only by default |

The lead can cover systems and implementation. Do not spawn five workers for every task.

## Assignment envelope

Supply: original task; role-file path; applicable brief/contract; exact input files or URLs; viewport/state scope; accepted constraints; permitted file ownership; exclusions; expected artifact/evidence; stopping condition. Require the worker to read its contract before work.

Use minimal context or a fresh thread for independent reviews. Provide original requirements and raw artifacts, not a desired verdict, claimed quality, previous score or suspected diagnosis. Reviewers may see a required design contract; they must not be primed to approve it.

## Sequence and parallelism

- UX can map the journey while art direction explores from the same fixed brief.
- Lead reconciles both before shared tokens or production screens are changed.
- Systems mapping precedes implementation of consumers.
- Parallel implementation only on disjoint files under the same accepted contract.
- Reviewer inspects a stable candidate while lead runs separate automated checks.
- Lead assigns fixes and asks reviewer to retest affected findings.

No worker may widen scope, overwrite another worker's file, publish, install tools, change permissions or initiate real business transactions under a design assignment.

## Conflict packet

Return conflicting constraints, two feasible options, user consequence, cost and recommendation. Lead decides within authority; escalate only consequential unknowns. Keep one decision log.

## Review return schema

Finding ID; severity (blocker/major/minor/preference); surface/state; observed evidence; reproducible steps; expected outcome from brief; recommended correction; verification status. Separate verified findings from hypotheses and inaccessible checks. Never invent screenshots or measurements.
