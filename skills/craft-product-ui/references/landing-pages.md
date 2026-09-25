# Landing Pages and Conversion Paths

Use this reference when building a public landing page, campaign page, product marketing page, or a gallery of such pages. Pair it with visual-direction.md, forms-and-content.md, accessibility.md and implementation-qa.md as needed.

## Start with the visitor's decision

Record the audience, entry context, offer, evidence available, desired next action and what happens after that action. Separate supplied facts from invented demonstration content. A landing page needs a coherent path beyond an attractive first viewport: orientation, explanation, relevant proof or product detail, objections or practical questions, and a next step.

For each primary CTA, specify the destination and consequence before styling it. If there is no backend, choose an honest local action such as exploring an interactive product preview, showing a sample estimate, or reviewing a sample itinerary. Label the result as simulated. Do not aim a high-emphasis CTA at a placeholder email address or display a fake submission confirmation.

## Compose a full page

- Make the opening promise specific to the product and audience. Give the visitor enough context to decide whether to continue.
- Vary section rhythm according to content: explanation, concrete example, objection, and next action. Repeated feature cards are not a default structure.
- Use product-specific visual material. Diagrams, illustrations and interface previews should explain the offer or atmosphere; do not add generic artwork to fill a hero.
- Keep claims attributable. Sample numbers, events, rooms, routes and testimonials are fixtures unless a source supports them. Do not present them as measured customer outcomes.
- Let the page work without animation. Motion may orient the visitor or show a state change, but must not delay a task.

## Route and anchor contract

Choose a route model before creating section links. In a hash-routed app, plain `#section` links can be mistaken for page routes and destroy the current page state. Use URL paths or query-based page routes, reserve fragment identifiers for on-page sections, and verify direct loading, back navigation, refresh and section links. Preserve browser-native anchor behavior and a meaningful heading target.

## Interactive proof and forms

An interactive preview should show a domain-relevant decision, not only decorative hover. Define the initial state, selectable states, immediate feedback, keyboard operation and what data is simulated. Keep selected controls and detail content synchronized. Do not style non-interactive text as a button.

For enquiry, waitlist or booking forms, distinguish validation from fulfillment. Keep the entered value after an error, focus the invalid field, associate a visible message, and state plainly whether the form sends data, checks availability, saves a record, or only calculates a local sample. A local confirmation must not imply that an email, reservation or sales request was sent.

## Responsive and locale review

Inspect the entire page at narrow, intermediate and desktop widths: navigation, hero, long headings, content sections, primary CTA and footer. Adapt composition when content pressure appears. Check keyboard focus, text enlargement, reflow and reduced motion. For RTL pages, use real target-language copy, logical reading order and isolated Latin identifiers. Mirroring a desktop English layout is insufficient.

## Evidence boundary

Record checks at the level actually performed. A successful build or DOM interaction exercise confirms neither visual quality nor browser behavior. When browser access is unavailable, keep rendered layout, contrast, keyboard path and screenshots explicitly unverified. Do not infer conversion performance from a constructed landing page.
