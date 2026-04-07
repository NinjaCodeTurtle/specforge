---
name: "specforge:design-ux"
description: "Phase 4 — UX & Design Specification. Guides the user through persona refinement, user flow design, wireframe specifications, and design system definition to produce a comprehensive UX Specification."
role: "UX Strategist"
phase: "04-ux-design-spec"
produces:
  - "UX Specification (template 07-ux-spec)"
---

# /specforge:design-ux — UX & Design Specification

## Purpose

This skill runs the Phase 4 UX & Design Specification workflow. It acts as a **UX Strategist (Advocate)** — translating requirements into user-centered design specifications that define how users will interact with the system.

This phase bridges the gap between "what the system must do" (requirements) and "how the system is built" (architecture). The UX Specification ensures that technical implementation serves the user, not the other way around.

## Prerequisites

- **Product Brief** (`output/01-product-brief.md`) — Personas and value proposition.
- **PRD** (`output/04-prd.md`) — Functional and non-functional requirements.
- **User Stories** (`output/05-user-stories.md`) — Epics and stories with acceptance criteria.
- **Use Cases** (`output/06-use-cases.md`) — Primary workflow specifications.

## Workflow Steps

### Step 1: Review Prior Artifacts

Read all prior outputs with a UX lens, focusing on:

- User personas — goals, frustrations, tech proficiency, context of use.
- Use cases — the primary user journeys that must be designed.
- Non-functional requirements — especially usability, accessibility, and device/browser support.
- Competitive analysis — UX strengths and weaknesses of competitors (if available).

Summarize the design challenge to the user: "Based on the requirements, here are the key user journeys we need to design for and the constraints we're working within."

### Step 2: Persona Refinement

Deepen the personas from Phase 1 with UX-specific detail:

1. **Context of use**: Where and when does the user interact with the system? (office, mobile, field, under time pressure?)
2. **Device and environment**: Primary device, screen size, network conditions, accessibility needs.
3. **Mental model**: How does the user think about this problem domain? What terminology do they use?
4. **Experience level**: Novice, intermediate, or expert with similar tools?
5. **Emotional state**: What emotional context surrounds use? (stressed, exploratory, routine?)

For each persona, write a brief **scenario narrative** — a paragraph describing a specific moment when they use the product.

### Step 3: Information Architecture

Define the structural organization of the product:

1. **Content inventory**: List all distinct screens, pages, or views the product needs.
2. **Navigation model**: How do users move between areas? (tab bar, sidebar, breadcrumbs, hub-and-spoke, wizard)
3. **Hierarchy**: What is the primary, secondary, and tertiary navigation structure?
4. **Search and discovery**: How do users find content or features not in the primary navigation?
5. **URL/route structure**: For web applications, define the logical URL hierarchy.

### Step 4: User Flow Design

For each primary use case from Phase 3, create a detailed user flow:

1. **Entry point**: How does the user arrive at this flow? (direct URL, navigation, notification, deep link)
2. **Step-by-step sequence**: Each screen or state the user encounters, including:
   - What the user sees
   - What actions are available
   - What happens when each action is taken
3. **Decision points**: Where the flow branches based on user choice or system state.
4. **Error states**: What happens when something goes wrong at each step.
5. **Exit points**: How the user completes or abandons the flow.

Describe flows in structured text (suitable for conversion to diagrams by developers or design tools).

> **HALT POINT**: Present the user flows to the user. Ask: "Do these flows represent the journeys you envision? Are there any steps that feel unnecessary or any missing paths?"

### Step 5: Wireframe Specifications

For each key screen identified in the user flows, create a wireframe specification:

1. **Screen name and purpose**: What this screen does and when the user sees it.
2. **Layout description**: Spatial arrangement of content zones (header, main content, sidebar, footer) described structurally.
3. **Component inventory**: List every UI element on the screen:
   - Input fields (type, validation rules, placeholder text, character limits)
   - Buttons (label, action, primary/secondary/tertiary styling)
   - Display elements (data tables, cards, lists, charts)
   - Navigation elements (tabs, breadcrumbs, pagination)
   - Feedback elements (alerts, toasts, progress indicators, empty states)
4. **Content specifications**: Actual copy for headings, labels, buttons, help text, and error messages.
5. **Interaction behavior**: What happens on click, hover, focus, swipe, and other interactions.
6. **Responsive behavior**: How the layout adapts across breakpoints (mobile, tablet, desktop).

Note: SpecForge produces textual wireframe specifications, not visual mockups. These specs are detailed enough for a designer to create high-fidelity mockups or for a developer to implement directly.

### Step 6: Interaction Patterns & Microinteractions

Define the interaction design language for the product:

1. **Common patterns**: How the product handles universal interactions:
   - Form submission and validation (inline vs. on-submit, error message placement)
   - Loading states (skeleton screens, spinners, progress bars)
   - Empty states (first use, no results, error recovery)
   - Confirmation dialogs (destructive actions, unsaved changes)
   - Notifications and alerts (in-app, push, email triggers)
2. **Data entry patterns**: Autocomplete, date pickers, file uploads, multi-step forms.
3. **Feedback patterns**: Success confirmation, error recovery, undo capabilities.
4. **Transition patterns**: Page transitions, modal behavior, drawer behavior.

### Step 7: Accessibility Specification

Define accessibility requirements in detail:

1. **Target standard**: WCAG 2.1 Level AA (or as specified in NFRs).
2. **Color and contrast**: Minimum contrast ratios, color-blind safe palette considerations.
3. **Keyboard navigation**: Tab order, focus management, keyboard shortcuts.
4. **Screen reader support**: ARIA landmarks, roles, labels, and live regions.
5. **Motion and animation**: Reduced motion support, no autoplay.
6. **Touch targets**: Minimum size for interactive elements on touch devices.

### Step 8: Design System Foundations

Define the design system parameters (not the visual design itself, but the structural rules):

1. **Spacing system**: Base unit and scale (e.g., 4px base with 4/8/12/16/24/32/48 scale).
2. **Typography scale**: Heading levels, body text, captions — sizes, weights, line heights.
3. **Color roles**: Primary, secondary, accent, background, surface, error, warning, success, info.
4. **Component library**: List of standard components needed (buttons, inputs, cards, tables, modals, etc.) with behavioral notes.
5. **Iconography**: Icon style (outlined, filled, duotone) and sizing standards.
6. **Motion principles**: Duration and easing standards for animations.

### Step 9: Synthesize UX Specification

> **HALT POINT**: Present a structured summary of the complete UX specification. Walk through each major user flow and key screen. Ask: "Does this design approach align with your vision for the user experience? Are there any flows, screens, or interactions you want to adjust?"

Populate the UX Specification template (07) with all gathered design specifications.

### Step 10: Quality Gate Check

Run through the Phase 4 validation checklist:

- [ ] Personas include UX-specific context (device, environment, mental model)
- [ ] Information architecture defines all screens and navigation structure
- [ ] User flows cover all primary use cases from Phase 3
- [ ] User flows include error states and edge cases
- [ ] Wireframe specs exist for all key screens with component inventories
- [ ] Interaction patterns are defined for common behaviors (forms, loading, errors)
- [ ] Accessibility requirements meet or exceed the target standard
- [ ] Design system foundations define spacing, typography, and color roles
- [ ] Content specifications include actual copy for key UI elements
- [ ] Responsive behavior is specified for at least mobile and desktop breakpoints

Score each item 0-10. A minimum average of **7/10** is required to proceed to Phase 5.

> **HALT POINT**: Present the quality gate scores. Ask: "Are you ready to proceed to Phase 5 (Architecture & Technical Design), or would you like to refine any aspect of the UX specification?"

## Output

- **Primary artifact**: `output/07-ux-spec.md` — Comprehensive UX Specification.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. Flows described in structured text. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every primary use case from Phase 3 has a corresponding user flow.
2. Every screen in the user flows has a wireframe specification.
3. Wireframe specifications include component inventories with interaction details.
4. Accessibility requirements are explicit and testable.
5. The design system section defines structural rules sufficient for a designer to create a full style guide.
6. Content specifications include real UI copy, not placeholder text like "Button Label."
7. No placeholder text remains.

## Tips

- **Design for the stressed user, not the demo user.** The demo always shows the happy path with perfect data. Real users have typos, edge cases, slow connections, and interruptions. Design for them.
- **Name every screen.** If you cannot name a screen, you do not understand its purpose. "Settings > Notification Preferences" is better than "that page where you configure stuff."
- **Error states are features.** A "Something went wrong" message is a design failure. Specify what went wrong and what the user can do about it for every error condition.
- **Write real copy.** "Lorem ipsum" in a spec is a promise to think about it later (and never actually do it). Write the actual heading, the actual button label, the actual error message.
- **Specify what is NOT on the screen.** Explicitly note what elements were considered and excluded. This prevents developers from adding "helpful" features that clutter the interface.
- **Describe layouts structurally, not visually.** "The filter controls appear above the data table, spanning the full content width, with a search field on the left and filter dropdowns on the right" is better than trying to draw ASCII art.
- **Accessibility is not an afterthought.** Specify it alongside every interaction, not in a separate section that nobody reads. Every button needs a label. Every image needs alt text. Every form needs error handling.
