---
name: "specforge:plan-implementation"
description: "Phase 6 — Implementation Planning. Guides the user through epic decomposition, sprint planning, roadmap creation, and traceability matrix generation to produce development-ready plans."
role: "Delivery Manager"
phase: "06-implementation-planning"
produces:
  - "Epic Breakdown (template 12-epic-breakdown)"
  - "Sprint Plan (template 13-sprint-plan)"
  - "Implementation Roadmap (template 14-implementation-roadmap)"
  - "Traceability Matrix (template 15-traceability-matrix)"
---

# /specforge:plan-implementation — Implementation Planning

## Purpose

This skill runs the Phase 6 Implementation Planning workflow. It acts as a **Delivery Manager (Planner)** — decomposing the specified system into estimable, sequenced, development-ready work items with clear dependencies and a realistic roadmap.

This is the final SpecForge phase. Its output is the handoff package that feeds directly into a development framework (BMAD, GStack, Harness Engineering) or a project management tool (Jira, Linear, Shortcut). When this phase is complete, a development team should be able to start building without asking "What do I build first?"

## Prerequisites

- **All Phase 1-5 artifacts** must be complete:
  - Product Brief (`output/01-product-brief.md`)
  - Market Analysis (`output/02-market-analysis.md`) and Competitive Analysis (`output/03-competitive-analysis.md`)
  - PRD (`output/04-prd.md`), User Stories (`output/05-user-stories.md`), Use Cases (`output/06-use-cases.md`)
  - UX Specification (`output/07-ux-spec.md`)
  - Architecture Doc (`output/08-architecture-doc.md`), API Spec (`output/09-api-spec.md`), Data Model (`output/10-data-model.md`), Tech Decisions (`output/11-tech-decisions.md`)
- For **Quick Spec** mode, minimum: PRD, User Stories, Architecture Doc.

## Workflow Steps

### Step 1: Review All Prior Artifacts

Read all Phase 1-5 outputs to build a complete picture:

- Total scope of user stories and their priorities (MoSCoW).
- Architecture components and their dependencies.
- Technology choices and their learning curve implications.
- Team constraints (size, skills, availability).
- Timeline constraints from the Product Brief.

Ask the user: "Before we plan implementation, I need to understand your team. How many developers? What are their strengths? What is your target delivery timeline? Do you follow Scrum, Kanban, or another methodology? What is your sprint duration?"

### Step 2: Epic Refinement & Decomposition

Refine the epics from Phase 3 into implementation-ready groups:

1. **Review existing epics** from the User Stories document. Validate they are cohesive and appropriately sized.

2. **Add technical epics** that are not user-facing but architecturally necessary:
   - Infrastructure setup and CI/CD pipeline.
   - Authentication and authorization system.
   - Database schema and migration framework.
   - Monitoring, logging, and observability.
   - Third-party integration foundations.

3. **For each epic**, document:
   - **Epic ID and name**.
   - **Description**: What this epic delivers.
   - **User stories included**: List by ID.
   - **Architecture components involved**: Which system components are built or modified.
   - **Dependencies**: Other epics that must be complete before this one can start.
   - **Estimated effort**: T-shirt size (S/M/L/XL) with rationale.
   - **Risk level**: Low/Medium/High with key risk factors.
   - **Definition of Done**: What constitutes completion of this epic.

4. **Dependency mapping**: Create a dependency graph showing which epics block which others.

### Step 3: Story Point Estimation

Guide the user through estimation:

1. **Establish a baseline**: Pick one well-understood story as the reference point (typically a "Medium" story).
2. **Relative estimation**: Estimate all other stories relative to the baseline using story points or T-shirt sizes.
3. **Factor in complexity drivers**:
   - New technology or unfamiliar patterns.
   - External integration complexity.
   - Data migration requirements.
   - Security and compliance requirements.
   - UX complexity (complex interactions, accessibility).
4. **Calculate epic totals**: Sum story points per epic.
5. **Identify high-risk stories**: Stories that are large (XL) or have high uncertainty should be flagged for spike/research tasks.

> **HALT POINT**: Present the epic breakdown with effort estimates and dependencies. Ask: "Do these estimates feel realistic given your team's experience? Are there any epics that seem too large or too risky?"

### Step 4: Sprint Planning

Organize the work into sprints:

1. **Determine velocity**: If the team has historical data, use it. If not, estimate conservatively:
   - New team: 20-30 story points per sprint per developer (for 2-week sprints).
   - Reduce by 20% for unfamiliar technology stack.
   - Reduce by 30% for the first 2 sprints (ramp-up).

2. **Sprint 0 (Foundation)**:
   - Development environment setup.
   - CI/CD pipeline configuration.
   - Database schema creation.
   - Authentication scaffolding.
   - Project structure and coding standards.

3. **Sprint sequencing**: Assign epics and stories to sprints following these principles:
   - **Dependencies first**: Build foundations before features.
   - **High-risk early**: Tackle uncertain work in early sprints when there is time to adjust.
   - **Must-haves before Should-haves**: MoSCoW priority drives sequence.
   - **Vertical slices**: Each sprint should deliver a thin but complete slice of functionality (UI + API + data) rather than horizontal layers.
   - **End-to-end flow early**: Get one complete user journey working as early as possible.

4. **For each sprint**, define:
   - Sprint goal (one sentence describing the outcome).
   - Stories included with point totals.
   - Total capacity vs. committed points.
   - Key risks and mitigation.
   - Demo-able deliverables.

### Step 5: Implementation Roadmap

Create a high-level timeline view:

1. **Milestone definition**: Group sprints into milestones aligned with business goals:
   - **M1: Foundation** — Infrastructure, auth, core data model.
   - **M2: Core MVP** — Primary user journey end-to-end.
   - **M3: Feature Complete** — All Must-have and Should-have stories.
   - **M4: Production Ready** — Performance, security, monitoring, documentation.

2. **Timeline estimation**: Map milestones to calendar dates based on sprint duration and team capacity.

3. **Buffer allocation**: Add 15-25% buffer for:
   - Bug fixes discovered during development.
   - Requirements clarifications.
   - Technical debt paydown.
   - Team absences and context switching.

4. **Decision points**: Identify go/no-go decisions at each milestone:
   - After M1: Is the technical foundation sound?
   - After M2: Does the core journey work? Is the UX right?
   - After M3: Is the product feature-complete for launch?
   - After M4: Is the product stable, secure, and observable?

> **HALT POINT**: Present the sprint plan and roadmap. Ask: "Does this timeline align with your business deadlines? Are the milestones meaningful? Is the buffer sufficient?"

### Step 6: Traceability Matrix

Build the end-to-end traceability matrix:

1. **Map every business goal** (from Product Brief) to:
   - Requirements (from PRD) that fulfill it.
   - User stories that implement the requirements.
   - Architecture components that enable the stories.
   - Epics and sprints where the stories are scheduled.

2. **Verify completeness**:
   - Every business goal has at least one requirement.
   - Every requirement has at least one user story.
   - Every user story is assigned to an epic and sprint.
   - Every architecture component is covered by at least one story.

3. **Identify gaps**: Any broken trace chain indicates a gap — a business goal without implementation, a requirement without a story, or a story without a sprint assignment.

4. **Format as a matrix**: Rows are business goals, columns trace through requirements, stories, components, and sprints.

### Step 7: Risk Register & Mitigation Plan

Consolidate all risks identified across phases:

1. **Technical risks**: Unproven technology, complex integrations, performance uncertainty.
2. **Schedule risks**: Dependencies on external parties, team availability, underestimation.
3. **Scope risks**: Requirements creep, unvalidated assumptions, changing market.
4. **Resource risks**: Key person dependencies, skill gaps, vendor lock-in.

For each risk, define:
- Probability (High/Medium/Low).
- Impact (High/Medium/Low).
- Trigger condition (how we know the risk is materializing).
- Mitigation strategy (what we do proactively).
- Contingency plan (what we do if the risk materializes).
- Owner (who monitors this risk).

### Step 8: Synthesize Implementation Documents

> **HALT POINT**: Present the complete implementation plan summary including epic breakdown, sprint assignments, roadmap milestones, and traceability matrix. Ask: "Is this plan development-ready? Can your team start executing from these documents?"

Populate four templates:

1. **Epic Breakdown** (template 12) — All epics with stories, estimates, dependencies, and definitions of done.
2. **Sprint Plan** (template 13) — Sprint-by-sprint assignment of stories with goals and capacity.
3. **Implementation Roadmap** (template 14) — Milestone-based timeline with decision points and buffer.
4. **Traceability Matrix** (template 15) — End-to-end mapping from business goals to sprint assignments.

### Step 9: Quality Gate Check (Final Gate)

Run through the Phase 6 validation checklist — the final gate before development:

- [ ] All user stories are assigned to epics with effort estimates
- [ ] Technical epics (infrastructure, auth, monitoring) are included
- [ ] Epic dependencies are mapped and sequencing respects them
- [ ] Sprint 0 covers all foundation work
- [ ] Each sprint has a clear goal and demo-able deliverable
- [ ] Sprint capacity does not exceed team velocity (with buffer)
- [ ] Roadmap milestones align with business deadlines
- [ ] Buffer (15-25%) is allocated for unknowns
- [ ] Traceability matrix shows complete chains from goals to sprints
- [ ] Risk register consolidates all risks with owners and mitigation plans
- [ ] A development team can start working from these documents without further clarification

Score each item 0-10. A minimum average of **8/10** is required — this is the final gate and the standard is higher.

> **HALT POINT**: Present the final quality gate scores. This is the moment of truth. Ask: "SpecForge has produced a complete specification package. Are you confident this is ready for handoff to development?"

## Output

- **Primary artifacts**:
  - `output/12-epic-breakdown.md` — Epics with stories, estimates, and dependencies.
  - `output/13-sprint-plan.md` — Sprint-by-sprint execution plan.
  - `output/14-implementation-roadmap.md` — Milestone timeline with decision points.
  - `output/15-traceability-matrix.md` — End-to-end traceability from goals to sprints.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. Tables for matrices. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every user story from Phase 3 appears in exactly one epic and one sprint.
2. Epic dependencies form a valid DAG (no circular dependencies).
3. No sprint exceeds the estimated team velocity.
4. The roadmap end date falls within the timeline constraint from the Product Brief.
5. The traceability matrix has no broken chains (every goal traces to a sprint).
6. The risk register includes risks from all prior phases plus new implementation-specific risks.
7. No placeholder text remains.

## Tips

- **Sprint 0 is not optional.** Teams that skip foundation work pay for it in every subsequent sprint. Budget 1-2 full sprints for infrastructure, CI/CD, and project setup.
- **Vertical slices over horizontal layers.** "Build the entire database first, then the entire API, then the entire UI" is a recipe for late integration failures. Instead, build one feature end-to-end, then the next.
- **Estimate in ranges, not points.** "3-5 points" is more honest than "4 points." If forced to give a single number, round up.
- **Buffer is not slack.** The 15-25% buffer will be consumed by bug fixes, requirement clarifications, and unforeseen complexity. It is not padding — it is realism.
- **The traceability matrix is your audit trail.** When someone asks "Why are we building this?" the matrix traces any story back to a business goal. When someone asks "Is this goal covered?" it traces forward to the implementing stories.
- **Flag the critical path.** Identify the longest chain of dependent epics — that is the minimum project duration regardless of team size. Parallelism helps only for independent epics.
- **Plan for the team you have, not the team you want.** If your senior engineer is the only person who can do the infrastructure work, that is a single point of failure. Document it as a risk.
