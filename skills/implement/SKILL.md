---
name: "specforge:implement"
description: "Phase 7 — Implementation. Reads all Phase 1-6 specification artifacts and executes the sprint plan story-by-story, producing scaffolded project code, comprehensive tests, CI/CD configuration, and verification reports at story, sprint, and release granularity."
role: "Implementation Lead"
phase: "07-implementation"
produces:
  - "Project Scaffold Report (template 16)"
  - "Story Implementation Reports (template 17, one per story)"
  - "Sprint Verification Reports (template 18, one per sprint)"
  - "Release Verification Report (template 19)"
  - "Implementation Progress Tracker (template 20)"
  - "Dependency Manifest (template 21)"
  - "CI/CD Pipeline Spec (template 22)"
---

# /specforge:implement — Implementation

## Purpose

This skill runs the Phase 7 Implementation workflow. It acts as an **Implementation Lead (Engineer)** -- reading all Phase 1-6 specification artifacts and executing the sprint plan story-by-story, producing working, tested, production-ready code with verification reports at three levels of granularity (story, sprint, release).

This phase picks up where Phase 6 left off. The Delivery Manager produced the plan; the Engineer executes it. When this phase is complete, the codebase should be deployable to production with full test coverage, clean CI/CD, and documented verification at every level.

## Prerequisites

- **All Phase 1-6 artifacts** must be complete:
  - Product Brief (`output/01-product-brief.md`)
  - Market Analysis (`output/02-market-analysis.md`) and Competitive Analysis (`output/03-competitive-analysis.md`)
  - PRD (`output/04-prd.md`), User Stories (`output/05-user-stories.md`), Use Cases (`output/06-use-cases.md`)
  - UX Specification (`output/07-ux-spec.md`)
  - Architecture Doc (`output/08-architecture-doc.md`), API Spec (`output/09-api-spec.md`), Data Model (`output/10-data-model.md`), Tech Decisions (`output/11-tech-decisions.md`)
  - Epic Breakdown (`output/12-epic-breakdown.md`), Sprint Plan (`output/13-sprint-plan.md`), Implementation Roadmap (`output/14-implementation-roadmap.md`), Traceability Matrix (`output/15-traceability-matrix.md`)
- All 15 artifacts must exist in the `output/` directory before this skill can execute.
- Phase 6 quality gate must have passed with average score >= 7.0.

## Workflow Steps

### Step 1: Context Loading

Read all 15 Phase 1-6 artifacts to build a complete mental model:

- **Phase 1:** Business goals, success metrics, target users, scope boundaries.
- **Phase 2:** Market context, competitive positioning, differentiation requirements.
- **Phase 3:** Functional requirements (REQ-XXX), NFRs, user stories with acceptance criteria, use cases with all flows.
- **Phase 4:** User flows, wireframe layouts, design system, interaction patterns, accessibility requirements.
- **Phase 5:** Architecture components, API contracts (endpoints, schemas, error codes), data model (entities, relationships, constraints), technology stack and decisions.
- **Phase 6:** Epic breakdown with dependencies, sprint plan with story assignments, implementation roadmap with milestones, traceability matrix.

Identify:
- The technology stack and key libraries/frameworks.
- The number of epics, stories, and sprints.
- The Definition of Done and test coverage thresholds.
- The critical path and high-risk stories.
- Any open risks from the risk register.

### Step 2: HALT — Confirm Understanding

> **HALT POINT**: Present a summary of understanding to the user:
> - "Here is my understanding of what we are building: [product summary]"
> - "Tech stack: [stack]"
> - "Epics: [count], Stories: [count], Sprints: [count]"
> - "Sprint 0 will cover: [foundation items]"
> - "Critical path: [epic chain]"
> - "Key risks: [top risks]"
>
> Ask: "Is this understanding correct? Are there any clarifications before I begin Sprint 0?"

### Step 3: Sprint 0 — Project Scaffolding

Execute the foundation sprint:

1. **Project structure:** Create directory layout per architecture document (e.g., `src/`, `tests/`, `config/`, `migrations/`, `docs/`).
2. **Dependencies:** Install all runtime and development dependencies from tech decisions. Record in dependency manifest with versions and justifications.
3. **Configuration:** Set up environment configuration (`.env.example`, config files). No hardcoded values.
4. **Linting & formatting:** Configure linter (ESLint, Ruff, etc.) and formatter (Prettier, Black, etc.) per coding standards.
5. **Type checking:** Configure type checker (TypeScript, mypy, etc.) with strict settings.
6. **CI/CD pipeline:** Configure pipeline with stages: build, lint, type-check, unit test, integration test, security scan.
7. **Database:** Create initial schema migration per data model spec. Set up migration framework.
8. **Test framework:** Configure test runner, coverage reporter, and test utilities. Write a smoke test to verify the framework works.
9. **Documentation:** Create project README with setup instructions, development workflow, and coding standards.

Produce: **Project Scaffold Report** (template 16) and **Dependency Manifest** (template 21) and **CI/CD Pipeline Spec** (template 22).

### Step 4: HALT — Verify Scaffold

> **HALT POINT**: Present the scaffold verification:
> - "Project structure created: [directory tree]"
> - "Dependencies installed: [count] runtime, [count] dev"
> - "Lint passes: [yes/no]"
> - "Type check passes: [yes/no]"
> - "Test framework runs: [yes/no]"
> - "CI/CD pipeline configured: [stages]"
> - "Database migration framework ready: [yes/no]"
>
> Ask: "Does the project scaffold look correct? Can we proceed to Sprint 1?"

### Step 5: Sprint N — Load Sprint Context

For each sprint (starting with Sprint 1):

1. Read the sprint plan entry for this sprint: sprint goal, assigned stories, capacity, key risks.
2. Identify story dependencies -- which stories in this sprint depend on others.
3. Determine the implementation order based on dependencies and priority.
4. Confirm sprint scope with the user.

### Step 6: Story Implementation (Repeat Per Story)

For each story in the sprint, execute the full implementation cycle:

#### 6a. Story Planning
- Identify files to create or modify.
- Identify API endpoints to implement (from API spec).
- Identify database changes required (from data model).
- Identify UI components to build (from UX spec).
- List all acceptance criteria and plan a test for each.

#### 6b. Code Implementation (Code Role)
- Implement backend logic: API endpoints, business logic, data access.
- Implement frontend components: UI layout, interactions, state management.
- Implement database migrations: schema changes, seed data.
- Implement integrations: external APIs, third-party services.
- Follow architecture patterns from the architecture document.
- Use technology choices from tech decisions.
- Match API contracts from API spec exactly.
- Match data model from data model spec exactly.
- Match UI patterns from UX spec.

#### 6c. Test Implementation (Test Role)
- Write unit tests for all new and modified functions.
- Write integration tests for API endpoints (request/response contract verification).
- Update e2e tests for affected user journeys.
- Test error cases and edge cases documented in use cases.
- Verify coverage meets the threshold from DoD.

#### 6d. Self-Review (Review Role)
- Run lint: must produce zero errors.
- Run type check: must produce zero errors.
- Run security scan: no critical or high findings.
- Audit for TODO/FIXME/HACK comments in new code.
- Audit for hardcoded secrets or credentials.
- Audit for console.log/print debug statements.
- Audit for commented-out code blocks.
- Verify all new public functions have documentation.

### Step 7: Story Gate

Run the Tier 1 Story Gate checklist (12 items, all must pass):

1. All acceptance criteria have corresponding automated tests that pass.
2. Unit test coverage meets threshold.
3. Lint: zero errors.
4. Type check: zero errors.
5. No TODO/FIXME/HACK in new code.
6. No hardcoded secrets.
7. No debug statements outside logging framework.
8. No commented-out code.
9. Public functions documented.
10. API responses match spec (if applicable).
11. Data model changes match spec (if applicable).
12. UI matches UX spec (if applicable).

Produce: **Story Implementation Report** (template 17) for this story.

If any item fails, fix it before proceeding to the next story. Do not accumulate failures.

### Step 8: Sprint Gate

After all stories in the sprint are complete, run the Tier 2 Sprint Gate (10 items, scored 0-10):

1. All stories pass story-level gates.
2. Sprint goal achieved (or deviation documented).
3. Cumulative code coverage meets sprint threshold.
4. All integration tests pass.
5. Zero TODO/FIXME in codebase.
6. No critical/high bugs open from this sprint.
7. Progress tracker updated with accurate metrics.
8. No unjustified deviations from sprint plan.
9. CI/CD pipeline passes all stages.
10. Database migrations are reversible.

Score each item 0-10. Average must be >= 7.0, no item below 4.

Produce: **Sprint Verification Report** (template 18) for this sprint. Update **Implementation Progress Tracker** (template 20).

### Step 9: HALT — Sprint Report

> **HALT POINT**: Present the sprint report:
> - "Sprint [N] complete. Goal: [goal]"
> - "Stories completed: [X] / [Y]"
> - "Sprint gate score: [X.X] / 10"
> - "Coverage: [X]%"
> - "Deviations: [count] ([brief descriptions])"
> - "Open issues: [count]"
>
> Ask: "Sprint [N] is complete. Shall we proceed to Sprint [N+1]?"

### Step 10: Repeat Steps 5-9

Repeat the sprint cycle (Steps 5-9) for each remaining sprint in the milestone.

### Step 11: Release Gate

After all sprints in a milestone are complete, run the Tier 3 Release Gate (12 items, scored 0-10):

1. All sprint gates for this milestone pass.
2. E2E tests pass for all core user journeys.
3. Performance meets NFR thresholds.
4. Security scan is clean (no critical/high vulnerabilities).
5. Accessibility meets WCAG targets from UX spec.
6. Test coverage meets release threshold from DoD.
7. Zero open P1/P2 bugs.
8. Every REQ-XXX has at least one passing automated test.
9. Every business goal has traceable, verified implementation.
10. Staging deployment successful.
11. Rollback procedure documented and tested.
12. Monitoring and alerting operational.

Score each item 0-10. Average must be >= 8.0, no item below 5. No conditional pass.

Produce: **Release Verification Report** (template 19).

### Step 12: HALT — Release Report

> **HALT POINT**: Present the release report:
> - "Milestone: [name]"
> - "Sprints completed: [X]"
> - "Release gate score: [X.X] / 10"
> - "Recommendation: GO / NO-GO"
> - "Blocking items (if any): [list]"
> - "Coverage: [X]%"
> - "REQ coverage: [X] / [Y] requirements verified"
> - "Business goal coverage: [X] / [Y] goals verified"
>
> Ask: "This is the release gate result. Do you accept the GO / NO-GO recommendation?"

## Output

- **Primary artifacts**:
  - `output/16-project-scaffold.md` -- Project structure, dependencies, and configuration.
  - `output/17-story-report-[STORY-ID].md` -- Per-story implementation report (one per story).
  - `output/18-sprint-report-[N].md` -- Per-sprint verification report (one per sprint).
  - `output/19-release-report.md` -- Milestone-level release verification.
  - `output/20-progress-tracker.md` -- Running implementation metrics.
  - `output/21-dependency-manifest.md` -- All dependencies with versions and justifications.
  - `output/22-cicd-spec.md` -- CI/CD pipeline configuration and stages.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. Tables for metrics. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every user story from the sprint plan has a passing Story Gate and a Story Report.
2. Every sprint has a passing Sprint Gate and a Sprint Report.
3. The Release Gate passes with average score >= 8.0 and no item below 5.
4. Every REQ-XXX from the PRD has at least one passing automated test.
5. Every business goal from the Product Brief traces to verified, working implementation.
6. Code coverage meets the release threshold from the Definition of Done.
7. CI/CD pipeline passes all stages (build, lint, type-check, test, security).
8. No placeholder text remains in any artifact.
9. All deviations from the sprint plan are documented with justification.

## Tips

- **Read all 15 artifacts before writing any code.** The most common implementation mistake is starting with an incomplete understanding of the specifications. Context loading is not a formality -- it is the foundation for correct implementation.
- **Sprint 0 is not optional.** Teams that skip scaffolding pay for it in every subsequent sprint. A solid foundation (lint, types, CI/CD, test framework) catches problems early and cheaply.
- **One story at a time, fully complete.** Resist the temptation to "start" multiple stories in parallel. Complete the full cycle (code, test, review, gate) for one story before beginning the next. Partially done stories are inventory, not progress.
- **Self-review catches 80% of review comments.** Running the self-review checklist before any handoff eliminates debug statements, TODOs, lint errors, and type errors. It takes 5 minutes and saves hours of back-and-forth.
- **When the spec is ambiguous, HALT.** Do not guess. Do not "make a reasonable assumption." Stop and ask. A wrong guess baked into code is harder to fix than a question asked early.
- **Track deviations as they happen.** When you must deviate from the plan (different implementation order, changed scope, additional work), document it immediately. Reconstructing deviation history after the fact is unreliable.
- **Tests are the specification's proof.** Every acceptance criterion should have a test. Every error flow in the use cases should have a test. Every NFR threshold should have a test. If it is not tested, it is not verified.
- **The traceability matrix is your compass.** When uncertain about what to implement or why, trace the story back through the matrix to its business goal. When uncertain about coverage, trace forward from requirements to tests.
