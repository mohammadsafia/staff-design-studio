# Staff Design Studio

A reusable UI/UX skill for evidence-aware product design, distinctive visual direction, working product journeys, responsive implementation, accessibility, and reproducible review.

**Skill name:** `craft-product-ui`  
**Display name:** Staff Design Studio

Use it to build distinctive interfaces, improve existing UX, implement approved references, and find interaction bugs. It includes five specialist role contracts: UX architect, art director, systems designer, frontend engineer, and design reviewer.

The skill keeps the core orchestration file compact and loads targeted references only when needed: research/evidence, usability heuristics, navigation/IA, forms/content, interaction patterns, accessibility, dense SaaS tools, responsive/RTL behavior, visual craft, motion/feedback, AI UX quality gates, design contracts, and implementation QA.

## Quick installation

You need Node.js/npm available to run `npx`.

From your application's root folder:

```bash
npx skills add mohammadsafia/staff-design-studio --skill craft-product-ui
```

Follow the prompts to select your agent and installation method.

### Install for a specific agent

For Codex in the current project:

```bash
npx skills add mohammadsafia/staff-design-studio --skill craft-product-ui --agent codex
```

For Claude Code or Cursor, replace `codex` with `claude-code` or `cursor`.

### Install globally

To make the skill available to Codex across your projects on this machine:

```bash
npx skills add mohammadsafia/staff-design-studio --skill craft-product-ui --agent codex --global
```

Project installation is useful for sharing a reviewed version with your team. Global installation is useful for your personal workflow. Installing globally makes the skill available; it does not force every task to use it.

### Check installation

List the skills available in this repository before installing:

```bash
npx skills add mohammadsafia/staff-design-studio --list
```

List installed skills:

```bash
npx skills list
```

Start a new agent session if the skill does not appear in an existing session. Ask the agent to identify the skill file it loaded before relying on it.

Installation options are documented in the [Skills CLI](https://github.com/vercel-labs/skills#install-a-skill).

## Use the skill

Explicitly name the skill in your request. Include your app, intended users, scope, existing constraints, and any visual reference.

### Build a feature

> Use craft-product-ui to design and implement our inventory page. Users need to find low-stock products and prepare replenishment requests. Preserve our stack and existing components. Include realistic data, loading, empty, stale, error and success states. Verify the main workflow, keyboard path and mobile layout.

### Redesign an existing interface

> Use craft-product-ui to improve this dashboard. First inspect the existing UI and capture a baseline. Separate facts from assumptions, show two materially different visual directions with the same content, then wait for my selection before implementation. Preserve business behavior and verify the selected result.

### Implement a reference

> Use craft-product-ui to implement this approved screenshot. Preserve the composition, image coverage, typography hierarchy and CTA placement. Adapt it for narrow layouts and compare actual browser screenshots with the reference.

### Audit without editing

> Use craft-product-ui to review our checkout flow. Do not change files. Report UX, visual, accessibility and interaction findings with severity, reproduction steps and evidence.

### Fix a small issue

> Use craft-product-ui to fix this mobile menu overlap. Keep the change focused and verify the affected interaction at narrow and intermediate widths.

Small fixes follow a lightweight path. Substantial design work uses the full workflow: establish evidence, understand the journey, explore when appropriate, implement, review, and retest.

## Reference architecture

The main skill routes tasks to focused guidance under `skills/craft-product-ui/references/`.

Key references include:
- research and evidence classification,
- usability heuristics,
- UX/state-transition coverage,
- navigation and information architecture,
- forms and content design,
- interaction-pattern semantics,
- WCAG-oriented accessibility,
- data-dense SaaS/admin workflows,
- responsive, RTL and input adaptation,
- visual direction and craft,
- motion and feedback,
- AI-generated UI quality gates,
- design contracts,
- implementation QA and evaluation.

These are decision contracts and acceptance criteria, not a universal visual style.

## Make it the default for UI/UX work

Merge [examples/app-AGENTS.md](examples/app-AGENTS.md) into your application's existing `AGENTS.md`. Preserve your current project instructions.

For a repository-local Codex setup, keep the complete skill folder at:

```text
.agents/skills/craft-product-ui/
```

Add this instruction to the app's `AGENTS.md`:

```md
For UI/UX design, implementation, review, restyling, and bug-fixing tasks:
- Read and apply .agents/skills/craft-product-ui/SKILL.md.
- If installed elsewhere, resolve and read its actual installed location.
- Preserve the app's design system, architecture, and business behavior.
- Compare rendered results with approved references when provided.
- Verify relevant interactions, accessibility, and responsive layouts.
- Treat substantial AI-generated UI as a hypothesis and apply the skill's quality gates.
- Use independent review for substantial changes when delegation is available.
- Keep small fixes lightweight; skip this workflow for backend-only tasks.
- If the skill is unavailable, report that honestly and follow existing app rules.
```

For personal Codex defaults across repositories, you can put the same scope rule in `~/.codex/AGENTS.md`, referring to the installed skill's actual location. Repository-specific instructions can refine those defaults.

For other agents, place the instruction in their supported project-rule file; do not assume every agent automatically reads `AGENTS.md`.

See the official [Codex skill discovery](https://learn.chatgpt.com/docs/build-skills) and [AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

## Specialist roles

| Role | Responsibility |
| --- | --- |
| UX architect | Evidence, journeys, information architecture, recovery paths |
| Art director | Visual concepts, composition, typography, brand fit |
| Systems designer | Tokens, reusable components, states, consistency |
| Frontend engineer | Implementation, responsive behavior, interactions |
| Design reviewer | Independent rendered review, findings, retest evidence |

These are role instructions, not standalone agent executables. Delegation requires a host that supports subagents. Without that capability, the implementing agent must disclose that its review was not independent.

## Updating

To update this installed skill through the Skills CLI:

```bash
npx skills update craft-product-ui
```

For team projects, review skill updates through PRs so changes to the design workflow are intentional.

## Scope and evidence

Includes discovery, exploration, build, audit, restyle, hardening, and polish workflows. Audit-only requests stay read-only. Visual and interaction checks require suitable browser or rendering tools; the agent must report unavailable checks honestly.

Generated interfaces are treated as design hypotheses until applicable journey, interaction, accessibility, responsive, and visual checks are performed. Human/user validation remains necessary when uncertainty or consequence warrants it.

Used in constructed before/after demonstrations and a bilingual eight-page NEU public website prototype. These exercises are not controlled benchmarks and do not prove general superiority or production readiness. Neither website source nor customer material is bundled here.

## Attribution and research

This is an original synthesis informed by UI UX Pro Max, Anthropic frontend-design, Impeccable, public DesignMotion material, and authoritative public UX/accessibility/platform guidance including Nielsen Norman Group, W3C/WAI, GOV.UK, Apple HIG, and web.dev.

Those projects and organizations are not bundled, and their tools or datasets are not implicitly installed.

See [source integration and research limits](skills/craft-product-ui/references/source-integration.md).
