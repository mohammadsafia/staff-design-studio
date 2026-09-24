# Forms and Content Design

Use this reference for forms, onboarding, checkout, settings, search, filters, approvals, and any interface where wording affects task success.

## Ask only necessary questions

For every field, know:
- why it is needed,
- who uses the answer,
- when it is needed,
- whether the system can infer or reuse it,
- whether asking creates legal, privacy, or completion cost.

Remove questions that do not change the outcome.

## Structure

Design the common path first. Group fields by the user’s mental model, not by database schema.

Prefer:
- one clear topic per section,
- logical ordering,
- progressive disclosure for conditional complexity,
- visible dependencies,
- short explanatory text near the decision it affects.

## Labels and controls

Use persistent labels. Do not rely on placeholder text as the only label.

Choose controls by task:
- checkbox: independent yes/no choices,
- radio: one visible choice among a small set,
- select: one choice where showing all options is impractical,
- combobox: searchable selection,
- date input/picker: depends on precision, frequency, and allowed range,
- segmented control/tabs: only for small peer choices where immediate switching is appropriate.

## Validation

Validate at the moment that best helps correction without interrupting unnecessarily.

Rules:
- preserve entered values after failure,
- identify the specific field,
- explain what is wrong,
- state the expected format/constraint,
- avoid blaming language,
- keep server-side validation authoritative,
- handle duplicate submission safely,
- show cross-field errors where the relationship is visible.

For long forms, pair an error summary with field-level errors when helpful.

## Required and optional fields

Use one consistent convention. If most fields are required, marking optional fields may reduce noise; if optionality is complex or consequential, be explicit.

## Defaults

Use defaults only when they are:
- likely correct,
- easy to notice,
- safe if accepted accidentally.

Never preselect consent, destructive options, or financially meaningful extras merely to increase completion.

## Content design

Write for action and comprehension:
- buttons use specific verbs,
- headings describe the task or outcome,
- helper text explains unfamiliar rules before error,
- warnings state consequence and action,
- success messages say what changed and what happens next,
- empty states explain why the space is empty and the next useful action,
- status labels use domain language.

Avoid “OK,” “Submit,” and “Error occurred” when a more precise label is available.

## Destructive actions

Communicate:
- object affected,
- scope,
- reversibility,
- downstream consequence,
- alternative when available.

Require typed confirmation only for unusually high-impact actions where the added friction meaningfully reduces mistakes.

## Privacy and sensitive data

Ask for sensitive information only when required. Explain why when context is not obvious. Avoid exposing secrets or personal data in helper text, logs, URLs, screenshots, or examples.

Primary references:
- GOV.UK form structure: https://www.gov.uk/service-manual/design/form-structure
- GOV.UK writing for user interfaces: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
