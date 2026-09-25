# Visual Direction

Use this reference when creating or substantially changing an interface's visual language.

Contents: [Direction](#derive-rather-than-decorate), [composition](#composition-and-visual-weight), [typography](#typography), [density](#density-and-rhythm), [color](#color-and-surfaces), [media](#imagery-and-illustration), [signature](#create-a-signature-without-friction), [comparison](#originality-check), [review artifact](#composition-review-artifact), [removal](#removal-pass), [motion](#motion).

## Derive rather than decorate

Build the direction from four inputs: audience, job, content, and two or three compatible character traits such as precise, calm, tactile, bold, editorial, technical, warm, or premium.

Translate them into deliberate decisions:

| Layer | Decide deliberately |
| --- | --- |
| Composition | Dominant region, reading path, asymmetry or strict grid, density |
| Typography | Display/body roles, scale contrast, measure, numeric treatment |
| Color | Neutral foundation, semantic colors, controlled accent strategy |
| Surfaces | Flat, bordered, elevated, tonal, or image-led—not all at once |
| Shape | Radius logic, border weight, icon geometry, control silhouette |
| Media | Photography, illustration, diagrams, textures, or no media |
| Motion | Feedback, continuity, hierarchy, and reduced-motion behavior |

## Composition and visual weight

Use hierarchy before decoration.

Check:
- where the eye lands first,
- whether the main task owns enough visual weight,
- whether secondary information competes,
- whether whitespace groups related content,
- whether alignment creates a deliberate rhythm,
- whether repeated containers are necessary.

Optical alignment may differ slightly from mathematical alignment. Judge actual rendered shapes, icons and type, not only box coordinates.

## Typography

Define roles rather than arbitrary sizes:
- display/hero when justified,
- page heading,
- section heading,
- body,
- secondary/meta,
- label/control,
- numeric/tabular data.

Consider:
- contrast between roles,
- line length,
- line height,
- weight distribution,
- tabular versus proportional numbers,
- uppercase/letter-spacing restraint,
- long strings and translated copy,
- text scaling.

Do not use more type families or weights than the direction can justify.

## Density and rhythm

Density should match work frequency and content complexity.

Operational tools may need compact but disciplined spacing; marketing surfaces may use larger rhythm. In either case:
- reuse a spacing logic,
- avoid arbitrary gaps,
- give repeated rows/cards predictable rhythm,
- use separators only when spacing/grouping cannot carry the structure.

## Color and surfaces

Start with semantic hierarchy, then expression.

Define:
- background/surface hierarchy,
- text hierarchy,
- border/divider role,
- accent role,
- semantic success/warning/error/info colors,
- selected/focus state.

Do not rely on color alone. Avoid shadows, gradients, blur and glow on every surface. Elevation should communicate layering, interaction or hierarchy.

## Imagery and illustration

Use media when it explains, differentiates, or creates meaningful emotion.

Specify:
- subject,
- crop/coverage,
- art direction,
- foreground/background relationship,
- consistency across the set,
- responsive behavior,
- rights/source boundary.

Avoid random stock-like imagery that could belong to any product.

## Create a signature without friction

Choose one recognizable device connected to the product: distinctive navigation rhythm, editorial typography, task-specific visualization, meaningful spatial metaphor, branded illustration system, or unusually clear interaction.

Keep controls and critical workflows conventional enough to understand immediately.

A signature in an operations product can be exceptional exception prioritization or selection feedback; it need not be spectacle.

## Originality check

Before committing to substantial new direction, compare two or three compositions using the same content.

Differences must survive a grayscale view:
- emphasis,
- grouping,
- reading sequence,
- task placement,
- interaction model.

Render a representative desktop composition and narrow-screen adaptation when tools permit. Choose one coherent direction rather than blending all candidates.

For each candidate state:
- user task supported,
- signature decision,
- main tradeoff,
- implementation cost,
- evidence that would make you reject it.

## Composition review artifact

For substantial new direction, retain a small comparison sheet or linked captures with candidate IDs, identical realistic content/state, desktop and narrow viewport sizes, and the selected candidate. Label wireframes, static concepts and live rendered UI accurately. If alternatives were not rendered, record them as proposed concepts; do not claim a completed visual study. Existing-system work can use baseline versus changed captures with the reason exploration was unnecessary.

Attach a concise review record to actual captures:
- identify the primary task and intended first/second reading targets;
- annotate the region where hierarchy, grouping, density, wrapping or action placement helps or obstructs that task;
- state each candidate's material tradeoff and the reason for selection;
- for each correction, identify its capture/region, requirement ID when applicable, severity, concrete change and observable retest;
- link the final reviewed captures to their revision/content fingerprint per [implementation-qa.md](implementation-qa.md).

Compare composition before surface effects; check whether grouping and emphasis survive grayscale without treating grayscale as a contrast test. Distinguish observed layout defects, reviewer preference and user evidence. A screenshot diff can locate change but does not measure design quality. If captures are unavailable, leave visual judgments unverified and retain the proposed review criteria.

## Removal pass

Remove decoration with no informational, emotional or navigational purpose. Then verify the result still has product-specific identity.

Ask:
- Could this belong unchanged to an unrelated AI, finance, fitness and travel product?
- Is the strongest visual decision connected to the product's purpose?
- Is hierarchy clear without putting a card around everything?
- Does the interface remain credible with real, imperfect content?
- Would removing gradients/shadows destroy hierarchy?
- Does the design still work with long text, errors and empty states?

Minimalism alone is not originality. Existing brand typography and component shapes are constraints, not defects to eradicate.

## Motion

Use [motion-and-feedback.md](motion-and-feedback.md) for motion contracts. Do not delay user input to finish decorative entrances.

Useful reference:
- Apple Human Interface Guidelines, typography/layout/motion: https://developer.apple.com/design/human-interface-guidelines/
