# Phase 4: UX & Design Specification

## Purpose

Phase 4 translates the functional requirements from Phase 3 into a concrete user experience design. This phase defines **how** users interact with the system — the information architecture, user flows, screen layouts, interaction patterns, and design system foundations. The output provides enough detail for a visual designer to produce mockups and for a front-end developer to build the UI layer.

## Agent

| Attribute | Details |
|-----------|---------|
| **Agent Name** | UX Strategist |
| **Persona** | "Advocate" |
| **Core Concern** | User needs, usability, interaction design |
| **Mindset** | "Every screen exists to help a specific person accomplish a specific task. If I cannot name the persona and the task, the screen should not exist." |

### Agent Principles

1. **Users first, features second.** Design for user goals, not feature checklists.
2. **Show, don't tell.** Wireframes and flows communicate more than paragraphs of description.
3. **Design for the edges.** Empty states, error states, and loading states matter as much as the happy path.
4. **Consistency breeds confidence.** Users should never wonder how an interaction works because they have seen the pattern before.
5. **Accessibility is not optional.** WCAG 2.1 AA compliance is a baseline, not a stretch goal.
6. **Data-informed decisions.** Propose usability testing for every significant design choice.

## Activities

| # | Activity | Description | Output |
|---|----------|-------------|--------|
| 1 | Define Design Principles | Establish 4-6 guiding principles that resolve design trade-offs | Design principles section in UX Spec |
| 2 | Build User Personas | Create 3-5 personas from market research and requirements | Personas with demographics, goals, frustrations, scenarios |
| 3 | Design Information Architecture | Map the structural hierarchy of content and features | Site map, navigation model, content hierarchy |
| 4 | Map User Flows | Document step-by-step flows for all major tasks | Flow diagrams with decision points and error states |
| 5 | Specify Wireframes | Describe screen-by-screen layouts and component inventory | ASCII wireframes, component tables, state descriptions |
| 6 | Define Interaction Patterns | Document navigation, input, feedback, loading, and error patterns | Pattern tables for consistent UX |
| 7 | Plan Responsive Strategy | Define breakpoints, layout adaptation rules, mobile-first approach | Responsive specification |
| 8 | Address Accessibility | Complete WCAG 2.1 AA checklist, plan keyboard and screen reader support | Accessibility requirements |
| 9 | Establish Design System Foundation | Define typography, color, spacing, elevation, components | Design token specifications |
| 10 | Draft Content Strategy | Define tone of voice, microcopy guidelines, content structure | Content strategy guidelines |
| 11 | Plan Usability Testing | Define test objectives, scenarios, metrics, iteration rounds | Usability testing plan |

## Artifacts

| Artifact | Template | Description |
|----------|----------|-------------|
| **UX & Design Specification** | `templates/07-ux-spec.md` | Comprehensive UX specification covering all activities above |

### Supporting Artifacts (External Tools)

These artifacts complement the UX Spec but are created in design tools:

| Artifact | Tool | Purpose |
|----------|------|---------|
| Wireframes / Mockups | Figma, Sketch, Adobe XD | Visual screen designs |
| Interactive Prototype | Figma, Framer, InVision | Clickable prototype for testing |
| User Flow Diagrams | Miro, FigJam, Lucidchart | Visual flow diagrams |
| Design System (Visual) | Figma, Storybook | Component library with visual examples |

## Workflow

```
┌──────────────────────────────────────────────────────────────────┐
│                      Phase 4 Workflow                            │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌──────────┐    ┌──────────┐   │
│  │ Review   │───▶│ Personas│───▶│ Info     │───▶│ User     │   │
│  │ Phase 3  │    │ & Design│    │ Arch     │    │ Flows    │   │
│  │ Artifacts│    │ Princ.  │    │          │    │          │   │
│  └─────────┘    └─────────┘    └──────────┘    └──────┬───┘   │
│                                                        │        │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────▼───┐   │
│  │ Content  │◀──│ Design   │◀──│ Responsive│◀──│ Wireframe│   │
│  │ Strategy │   │ System   │   │ & Access. │   │ Specs    │   │
│  └────┬─────┘   └──────────┘   └──────────┘   └──────────┘   │
│       │                                                        │
│       ▼                                                        │
│  ┌──────────┐   ┌──────────┐                                  │
│  │ Usability│──▶│ Quality  │                                  │
│  │ Test Plan│   │ Gate 4→5 │                                  │
│  └──────────┘   └──────────┘                                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Process

1. **Review Phase 3 Artifacts** — Read the PRD, user stories, use cases, and NFRs. Understand every functional requirement and user-facing constraint.

2. **Define Personas & Principles** — Create 3-5 user personas from Phase 2 market data and Phase 3 requirements. Establish design principles that guide trade-off decisions.

3. **Design Information Architecture** — Map the complete content and feature hierarchy. Define the navigation model (primary, secondary, utility, mobile).

4. **Map User Flows** — For each major use case, create a step-by-step flow with decision points, error states, and alternative paths. Every user story should be covered by at least one flow.

5. **Specify Wireframes** — Describe screen layouts with ASCII diagrams. List every component on each screen with its behavior, data, and interaction. Document all states: empty, loading, error, populated.

6. **Define Interaction Patterns** — Document consistent patterns for navigation, input, feedback, loading, and errors. These become the "interaction vocabulary" of the application.

7. **Plan Responsive & Accessibility** — Define breakpoints and layout adaptation rules. Complete the WCAG 2.1 AA checklist. Specify keyboard navigation and screen reader support.

8. **Establish Design System** — Define typography scale, color palette (with contrast ratios), spacing system, elevation/shadows, and border radii. Reference or specify the component library.

9. **Draft Content Strategy** — Define tone of voice, microcopy guidelines for buttons/errors/empty states, and content formatting conventions.

10. **Plan Usability Testing** — Define objectives, participant profiles, test scenarios, success metrics, and iteration rounds.

11. **Quality Gate** — Run the Phase 4 to Phase 5 quality gate checklist.

## Input Requirements

This phase requires the following from Phase 3:

- [ ] Product Requirements Document (PRD) — complete feature list
- [ ] User Stories — with acceptance criteria
- [ ] Use Cases — primary and alternative flows
- [ ] Non-Functional Requirements — especially performance, accessibility, and usability targets
- [ ] Phase 3 quality gate passed

## Quality Gate: Phase 4 → Phase 5

All criteria must score >= 7/10 for the gate to pass. Minimum overall average: 8/10.

| # | Criterion | Score (0-10) | Evidence |
|---|-----------|-------------|----------|
| 1 | **Persona Coverage** — All target user segments have defined personas with goals, frustrations, and scenarios | [ ] | [Link to personas section] |
| 2 | **Information Architecture Completeness** — Site map covers all features from the PRD; no feature is unreachable | [ ] | [Link to IA section] |
| 3 | **User Flow Coverage** — Every primary use case has a documented flow with decision points and error states | [ ] | [Link to flows section] |
| 4 | **Wireframe Completeness** — All unique screens have layout descriptions with component inventories | [ ] | [Link to wireframes section] |
| 5 | **State Coverage** — Every screen documents empty, loading, error, and populated states | [ ] | [Link to states in wireframes] |
| 6 | **Interaction Consistency** — Navigation, input, feedback, and error patterns are documented and consistent | [ ] | [Link to interaction patterns] |
| 7 | **Responsive Design** — Breakpoints defined, layout adaptation rules specified for all major components | [ ] | [Link to responsive section] |
| 8 | **Accessibility** — WCAG 2.1 AA checklist completed, keyboard navigation and screen reader support specified | [ ] | [Link to accessibility section] |
| 9 | **Design System Foundation** — Typography, colors, spacing, and component inventory are specified with enough detail for implementation | [ ] | [Link to design system section] |
| 10 | **Usability Validation Plan** — Testing plan exists with scenarios, metrics, and iteration strategy | [ ] | [Link to testing plan] |

### Gate Scoring

| Score Range | Interpretation | Action |
|-------------|---------------|--------|
| 9-10 | Exceptional | Proceed to Phase 5 |
| 7-8 | Adequate | Proceed with noted improvements to address in Phase 5 |
| 5-6 | Insufficient | Address gaps before proceeding |
| 0-4 | Incomplete | Major rework required |

**Minimum to proceed:** All individual scores >= 7, overall average >= 8.

## Common Pitfalls

| Pitfall | Prevention |
|---------|-----------|
| Designing for features instead of user goals | Start every screen design by naming the persona and their task |
| Ignoring error and empty states | Require state documentation as part of every wireframe spec |
| Inconsistent interaction patterns | Document patterns first, then apply them to every screen |
| Skipping accessibility | Make WCAG checklist a required part of the template |
| Over-specifying visual design in wireframes | Keep wireframes low-fidelity; focus on layout and behavior, not colors and fonts |
| Designing for desktop only | Start with mobile wireframes; desktop layouts adapt from mobile, not the other way |
| No plan to validate with users | Usability testing plan is a required deliverable, not optional |

## Handoff to Phase 5

The UX Specification serves as a key input to Phase 5 (Architecture & Technical Design). The Solutions Architect uses it to:

- Understand what screens and interactions the frontend must support
- Identify data requirements from wireframe component inventories
- Design APIs that serve the user flows efficiently
- Plan real-time features (WebSocket needs from loading/feedback patterns)
- Scope frontend complexity for technology decisions
