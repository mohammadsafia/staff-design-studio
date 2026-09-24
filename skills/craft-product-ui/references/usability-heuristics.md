# Usability Heuristics

Use this reference for audits, redesigns, and substantial interaction work. Treat heuristics as diagnostic lenses, not a numerical score.

## Review lenses

### 1. Visibility of system status
The interface should make current state, progress, pending work, completion, and failure understandable within an appropriate time.

Check:
- loading versus empty,
- saving/submitting state,
- stale or partially updated data,
- background processing,
- long-running jobs,
- success/failure confirmation.

### 2. Match with the real world
Use domain language, meaningful ordering, familiar units, and concepts that match the user’s task.

Avoid exposing implementation terminology when the user thinks in business concepts.

### 3. User control and freedom
Support safe cancellation, reversal, backtracking, and exit from accidental states.

A destructive confirmation is not a substitute for undo when genuine undo is practical.

### 4. Consistency and standards
Equivalent actions should look, behave, and be named consistently unless a deliberate difference communicates a different consequence.

### 5. Error prevention
Prefer preventing high-cost mistakes over explaining them afterward.

Use constraints, previews, validation, defaults, warnings, idempotency, and confirmation proportional to risk.

### 6. Recognition over recall
Keep required context visible. Avoid forcing users to remember IDs, previous selections, hidden filters, or instructions from an earlier step.

### 7. Flexibility and efficiency
Frequent users may need shortcuts, saved views, bulk operations, keyboard paths, remembered settings, or automation.

Do not make expert efficiency harm novice comprehensibility.

### 8. Aesthetic and minimalist design
Remove content or controls that compete with the main task. Minimalism means low competition for attention, not visual emptiness.

### 9. Error recognition and recovery
Errors should identify:
- what happened,
- what is affected,
- what remains preserved,
- what the user can do next,
- whether retry is safe.

### 10. Help and documentation
Prefer self-explanatory design. When documentation is needed, make it contextual, searchable, concise, and task-oriented.

## Severity

Classify each finding by demonstrated impact:

- **Blocker:** prevents task completion, risks data loss, creates false success, exposes unauthorized capability, or makes an essential action inaccessible.
- **Major:** causes repeated failure, serious misunderstanding, recovery loss, or important responsive/accessibility blockage.
- **Minor:** localized friction, inconsistency, or clarity issue with a workaround.
- **Preference:** viable alternative without demonstrated task harm.

Do not inflate severity because an issue is visually unattractive.

## Finding format

Each finding should include:
- affected route/component,
- heuristic or interaction contract,
- evidence,
- reproduction steps,
- affected user/task,
- consequence,
- proposed correction,
- verification after correction.

Primary reference:
- Nielsen Norman Group, 10 usability heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/
