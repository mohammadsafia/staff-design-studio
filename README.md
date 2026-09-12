# Staff Design Studio

A reusable UI/UX skill for brief-driven visual design, working product journeys, responsive implementation, and evidence-based review.

The installable skill is `skills/craft-product-ui`. Its five specialist role contracts cover UX architecture, art direction, design systems, frontend engineering, and independent review. Role contracts guide delegation when the host supports agents; they do not create agent processes themselves.

## Use in your apps

Keep the complete `skills/craft-product-ui` folder together. Install it through your agent host's supported skill mechanism, or vendor it into your app at `.agents/skills/craft-product-ui` and explicitly reference its `SKILL.md` from the app's instructions.

Merge `examples/app-AGENTS.md` into the application's existing `AGENTS.md`; preserve its current project rules. Explicit file references remain useful for agents that can read repository instructions but do not automatically discover skills. Other agent hosts may need the same instruction in their own supported project-rule file.

Example request:

> Use craft-product-ui to redesign the checkout flow. Preserve existing business behavior, compare two visual directions, implement the selected direction, and verify error recovery and mobile rendering.

## Scope and evidence

Includes discovery, exploration, build, audit, restyle, hardening, and polish workflows. Small fixes use a short path; substantial work calls for specialist collaboration and independent review when available. Audit-only requests stay read-only.

Used in constructed before/after demonstrations and a bilingual eight-page NEU public website prototype. These exercises are not controlled benchmarks and do not prove general superiority or production readiness. Human review remains necessary. Neither website source nor customer material is bundled here.

## Attribution

This is an original synthesis informed by UI UX Pro Max, Anthropic frontend-design, Impeccable, and public DesignMotion material. Those projects are not bundled, and their tools or datasets are not implicitly installed. See the skill's `references/source-integration.md` for links and precise research limits.
