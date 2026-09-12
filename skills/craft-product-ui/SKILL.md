---
name: craft-product-ui
description: Staff Design Studio for designing, building, redesigning, and reviewing web product interfaces. Coordinate UX architecture, visual exploration, design systems, implementation, and independent QA with specialist agents for substantial work. Use for distinctive UI, non-generic AI-generated design, SaaS/admin workflows, creative frontend work, design critique, restyling, and interaction hardening. Keep audit and planning requests read-only. Exclude backend-only tasks.
---

# Staff Design Studio

Act as the accountable design lead, not as a palette selector. Produce coherent product decisions, distinctive appropriate visual work, functioning interactions, and reproducible evidence. Staff-level is the intended working discipline, not a claim of human expertise or guaranteed outcomes.

## Route and bound the task

Identify the target, user's requested operation, existing system, and deliverable. Preserve scope and authorization.

| Mode | Work | Completion |
| --- | --- | --- |
| Discover / plan | Goals, risks, journeys, alternatives, recommended direction | Decision-ready proposal; no application edits |
| Explore | Two or three materially different compositions for the same representative screen | Viewable variants and recommendation; no production replacement |
| Build / redesign | Brief through implementation and verification | Working scoped journey plus evidence |
| Audit / review | Inspect current rendering, behavior, source or diff | Severity-ranked findings; no fixes unless requested |
| Restyle | Update visual presentation | Preserve business logic, route semantics and copy meaning; regression checks |
| Harden | Fix behavior, resilience, accessibility, responsiveness | Reproductions pass after fixes |
| Polish / motion | Refine an already working surface | Targeted before/after evidence; no unrequested rebrand |

Use the user request, not these labels, to determine authority. A request for critique does not authorize editing app files. Do not invent slash commands; these are natural-language modes for this skill.

Small change: inspect, fix if authorized, test the affected behavior; skip multi-agent ceremony, extra docs and concept exploration. Substantial new screen or flow: use the full path below. Multi-screen systems: first establish a representative vertical slice.

## Read the applicable resources

- New visual language or exploration: [visual-direction.md](references/visual-direction.md).
- Forms, workflows, tables or complex interactions: [ux-and-states.md](references/ux-and-states.md).
- Product-wide work or design drift: [design-contract.md](references/design-contract.md).
- Delegated substantial work: [agent-team.md](references/agent-team.md) and the assigned role file.
- Any implementation completion or review: [implementation-qa.md](references/implementation-qa.md).
- Upstream tool integration or explaining this synthesis: [source-integration.md](references/source-integration.md).
- Evaluating this skill's performance: [evaluation.md](references/evaluation.md).

Load only applicable references. Main agent reads required instructions itself before delegating.

## 1. Establish facts and risks

Read repository instructions, product docs, existing tokens/components, dependencies and relevant screens. Capture a baseline screenshot when changing existing UI and tools permit.

Separate known facts, assumptions and unanswered questions. Identify primary user, task frequency, costly mistakes, working device, locale, success criterion and constraints. Ask only material questions. Never invent user interviews, analytics, customer endorsements or measured results.

For larger work, reuse or update the existing product brief and design contract using the contract reference. Do not create competing sources of truth.

## 2. Design the journey and explore

Model the main journey and its recovery paths before arranging widgets. Every major visible action needs a state transition or honest explanation of why unavailable.

For substantial new visual direction, develop two or three concepts with the SAME realistic content. Vary information layout, emphasis or interaction model, not just colors. Use viewable low-cost compositions when tools permit; prose alone is not a visual comparison. Do not build three complete applications.

Recommend one against task clarity, distinctiveness, accessibility, brand fit and implementation cost. If the user requested options, wait for their selection before replacing production UI. Otherwise choose and state the assumption. For precise reference implementation or an established design system, preserve the direction and skip unnecessary alternatives.

Use references as evidence for a specific property, not as templates to copy wholesale. Identify what each reference teaches and what does not transfer. Source factual claims and respect asset rights.

## 3. Resolve and record the design

Resolve conflicts in this order: authority and explicit requirements; safe and accessible task completion; established product behavior and system compatibility; maintainability/performance; aesthetic preferences. Explain genuine conflicts rather than silently discarding a requirement.

Record accepted direction, rejected alternatives, tokens, component states, responsive adaptations and exceptions. Existing code is evidence of the current system, not proof every inconsistency is intentional. Propose the smallest coherent correction.

Do not enforce universal bans on fonts, colors, cards, gradients or rounded corners. Their appropriateness depends on the brief. Do not replace one recognizable AI template with another.

## 4. Implement the smallest complete slice

Preserve the stack and existing primitives. Assign one owner to shared tokens, global CSS and shared components. Build a representative journey with realistic data, recovery states, responsive behavior and semantic controls before expanding to sibling screens.

Distinguish prototype simulation from actual server persistence and authorization. Never imply UI role hiding secures an API, fake payment success proves a transaction, or a toast proves a save. Label unavailable integrations and mock-only behavior.

Use purpose-specific motion with interruption handling and reduced-motion alternatives. Keep truthful feedback ahead of ornament. Do not add dependencies or external services solely because an upstream example uses them.

## 5. Review independently and close the loop

For substantial work, request independent rendered UX/visual review and relevant functional checks using the team contract. For small work, review locally. Never claim independence when performed by the same agent.

Track findings with severity, evidence, reproduction, proposed correction and retest. Fix blockers before aesthetic refinement. After fixes, review the actual changed state again. Stop after two critique/fix cycles by default; disclose unresolved issues and ask before a costly expansion. Never lower the acceptance bar to claim completion.

No screenshot access: report visual QA unverified. No runnable environment: report behavior unverified. Source inspection, build success and reviewer agreement do not establish usability or freedom from bugs.

## Handoff

State what changed, why the direction fits, which workflow works, evidence checked, mock boundaries and remaining risks. Keep the response concise; link requested artifacts through the host's supported mechanism. Do not claim staff-designer equivalence, automatic aesthetic scores, production readiness or empirical superiority without corresponding evidence.
