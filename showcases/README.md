# Staff Design Studio Showcases

These showcases are behavioral tests and portfolio-ready case studies for `craft-product-ui`.

The goal is not to prove that a screenshot “looks better.” Each case starts from an intentionally flawed but believable interface, runs the skill against a fixed brief, and records what changed across task clarity, interaction correctness, accessibility, responsiveness, product-system fit, and visual craft.

## Showcase format

Each case should publish:

1. **Before** — the flawed interface with realistic data.
2. **Task** — the exact prompt given to the agent.
3. **Evidence** — facts, assumptions, constraints, and applicable references.
4. **Findings** — severity-ranked UX/UI issues.
5. **Transformation** — the implemented result.
6. **Before / after comparison** — identical content and comparable viewport.
7. **State proof** — loading, empty, error, success, permission, and recovery states where relevant.
8. **Responsive proof** — narrow, intermediate, and desktop.
9. **Accessibility proof** — keyboard/focus/semantic checks that were actually run.
10. **Evidence ledger** — pass/fail/unverified; no invented scores.

Do not claim a case proves production readiness or general superiority.

## Benchmark set

| Case | What it tests |
| --- | --- |
| 01 — Invite the team | Forms, content hierarchy, seat limits, validation, statuses, accessibility |
| 02 — Operations dashboard | Dense SaaS hierarchy, tables, filters, exceptions, responsive adaptation |
| 03 — POS checkout | High-frequency task flow, touch, destructive/reversible actions, payment truthfulness |
| 04 — Booking recovery | Stale availability, duplicate submission, async states, error recovery |
| 05 — Arabic admin | RTL, mixed-direction identifiers, dense UI, localization pressure |
| 06 — Visual de-slop | Composition, typography, visual identity, system preservation without changing behavior |

## How to run a case

Run the exact prompt in the case file against the provided fixture or an equivalent implementation.

For empirical comparisons:
- use the same content,
- use the same viewport,
- preserve the same business rules,
- compare with and without the skill,
- do not leak expected findings into the baseline run.

The skill should remain lightweight for tiny fixes and become rigorous only when the case warrants it.

## Presentation direction

A public showcase can borrow the proof mechanics of strong design-tool sites without copying their brand:

- interactive before/after slider,
- numbered findings pinned to the flawed UI,
- “what the skill read” panel,
- task prompt,
- state switcher,
- mobile/desktop toggle,
- evidence ledger,
- code/system-preservation notes,
- case-specific design rationale.

The visual identity should belong to Staff Design Studio: evidence-led, technical, product-specific, and calmer than an effects-heavy marketing demo.
