# Research and Evidence

Use this reference when a design decision depends on user needs, workflow assumptions, business claims, analytics, stakeholder input, or uncertain behavior.

## Separate evidence types

Classify important inputs before using them:

| Type | Meaning | Allowed use |
| --- | --- | --- |
| Fact | Verified product, technical, legal, or business constraint | Treat as binding until contradicted |
| Observation | Directly seen behavior, screen, log, support case, or workflow | Use as evidence for the observed context only |
| Research finding | Result from an actual study with known participants/method | Use within its population and limitations |
| Analytics signal | Measured product behavior | Use to identify what happens, not automatically why |
| Stakeholder claim | Informed internal statement | Treat as input, not user evidence |
| Assumption | Unverified belief needed to proceed | Label and design for validation |
| Hypothesis | Testable prediction | Define expected evidence before testing |

Never convert assumptions, stakeholder opinions, mockups, or AI-generated critique into “user research.”

## Build an evidence ledger

For substantial work, maintain a compact ledger:

- decision or question,
- current evidence,
- evidence type,
- source,
- confidence,
- affected users/journey,
- risk if wrong,
- validation method,
- status.

Prefer a few decision-relevant questions over broad research theater.

## Form research questions

Good questions are behavior- and decision-oriented:

- Where do users enter this journey?
- What information do they need before committing?
- Which mistakes are costly or hard to recover from?
- Which terms are unclear?
- What workarounds exist today?
- Which steps create delay, abandonment, duplicate work, or escalation?
- What would make the user trust the outcome?
- What differs by role, frequency, device, locale, or expertise?

Avoid leading questions, solution validation disguised as research, and “Would you use this?” as primary evidence.

## Select a method by uncertainty

| Need | Useful methods |
| --- | --- |
| Understand current behavior | Contextual inquiry, interview, support review, workflow observation |
| Understand language/mental model | Interview, card sorting, tree testing, search/support logs |
| Compare task approaches | Prototype usability test |
| Find interaction failures | Moderated or unmoderated usability testing |
| Measure funnel behavior | Analytics/event review |
| Evaluate information findability | Tree testing, first-click testing |
| Validate production behavior | Instrumentation, support trends, task metrics |

Do not prescribe research that cannot materially change the design.

## Confidence and scope

State where evidence applies:
- participant/customer segment,
- geography/locale,
- device/context,
- product version,
- date,
- task,
- sample limitations.

Do not generalize a small qualitative study into a population statistic.

## Synthesis rules

Synthesize around behaviors, needs, constraints, pain points, triggers, and decisions. Avoid decorative personas when no evidence supports them.

When evidence conflicts:
1. verify that the sources concern the same user/task/context,
2. distinguish observed behavior from stated preference,
3. prefer direct task evidence over aesthetic opinion,
4. record the conflict,
5. identify the smallest test that can resolve it.

## Design handoff

For each consequential design decision, record:
- what evidence informed it,
- what remains assumed,
- what would falsify the decision,
- what should be measured or tested after implementation.

Primary references:
- Nielsen Norman Group, UX research guidance: https://www.nngroup.com/articles/which-ux-research-methods/
- GOV.UK Service Manual, start by learning user needs: https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
