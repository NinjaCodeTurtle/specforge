---
name: "specforge:add-feature"
description: "Add a new end-to-end feature to an existing SpecForge project. Reads existing specs and codebase, generates a Feature Spec, implements story-by-story with quality gates, runs regression tests, and delivers a Feature Delivery Report."
role: "Feature Engineer"
phase: "post-implementation"
produces:
  - "Feature Spec (template 23)"
  - "Story Implementation Reports (template 17, one per story)"
  - "Feature Delivery Report (template 24)"
---

# /specforge:add-feature -- Add Feature

## Purpose

This skill adds a new end-to-end feature to an existing SpecForge project. It acts as a **Feature Engineer (Extender)** -- reading all existing specification artifacts AND the actual codebase, generating a Feature Spec with requirements and impact analysis, implementing story-by-story with quality gates, running regression tests at every step, and delivering a Feature Delivery Report.

This skill operates in the post-implementation phase. It assumes Phases 1-7 have been completed and a working codebase exists. When this skill is complete, the new feature is implemented, tested, regression-verified, and documented with full traceability to the existing project.

## Prerequisites

- **All Phase 1-7 artifacts** must be complete:
  - Product Brief (`output/01-product-brief.md`)
  - Market Analysis (`output/02-market-analysis.md`) and Competitive Analysis (`output/03-competitive-analysis.md`)
  - PRD (`output/04-prd.md`), User Stories (`output/05-user-stories.md`), Use Cases (`output/06-use-cases.md`)
  - UX Specification (`output/07-ux-spec.md`)
  - Architecture Doc (`output/08-architecture-doc.md`), API Spec (`output/09-api-spec.md`), Data Model (`output/10-data-model.md`), Tech Decisions (`output/11-tech-decisions.md`)
  - Epic Breakdown (`output/12-epic-breakdown.md`), Sprint Plan (`output/13-sprint-plan.md`), Implementation Roadmap (`output/14-implementation-roadmap.md`), Traceability Matrix (`output/15-traceability-matrix.md`)
  - Project Scaffold Report (`output/16-project-scaffold.md`), Story Reports (`output/17-story-report-*.md`), Sprint Reports (`output/18-sprint-report-*.md`), Release Report (`output/19-release-report.md`)
- **Working codebase** with all existing tests passing.
- **Existing CI/CD pipeline** configured and green.
- Phase 7 release gate must have passed.

## Workflow Steps

### Step 1: Context Loading

Read all existing SpecForge artifacts from `output/` to build a complete mental model of the project:

- **Phase 1-2:** Business goals, success metrics, target users, market context, competitive positioning.
- **Phase 3:** Functional requirements (REQ-XXX), NFRs, user stories with acceptance criteria, use cases with all flows.
- **Phase 4:** User flows, wireframe layouts, design system, interaction patterns, accessibility requirements.
- **Phase 5:** Architecture components, API contracts (endpoints, schemas, error codes), data model (entities, relationships, constraints), technology stack and decisions.
- **Phase 6:** Epic breakdown with dependencies, sprint plan, implementation roadmap, traceability matrix.
- **Phase 7:** Implementation reports, sprint verification, release verification.

Additionally, read the **actual codebase** to understand the current state:

1. **Project structure**: Directory layout, module organization, entry points.
2. **Source files**: Key modules, services, controllers, models, utilities.
3. **Existing tests**: Unit tests, integration tests, e2e tests, coverage reports.
4. **API routes**: All currently implemented endpoints and middleware.
5. **Database schema**: Current migrations, ORM models, seed data.
6. **Configuration**: Environment variables, feature flags, build configuration.
7. **Dependencies**: Current runtime and dev dependencies with versions.

Build a unified mental model of both the specifications and the running implementation.

### Step 2: HALT -- Feature Elicitation

> **HALT POINT**: Present understanding of the current project to the user:
> - "Here is my understanding of the current project: [product summary]"
> - "Tech stack: [stack]"
> - "Current feature set: [high-level feature list]"
> - "Architecture pattern: [pattern]"
> - "Codebase health: [test count, coverage, lint status]"
>
> Then ask structured elicitation questions:
> 1. "What problem does this new feature solve?"
> 2. "Who are the primary users of this feature?"
> 3. "What is in scope and what is explicitly out of scope?"
> 4. "What existing functionality does this feature touch or depend on?"
> 5. "Are there any constraints (timeline, technology, backward compatibility)?"
> 6. "Are there any reference implementations or examples to follow?"
>
> Wait for user responses before proceeding.

### Step 3: Feature Requirements Definition

Define requirements for the new feature with the same rigor as Phase 3:

1. **Functional requirements**: Define FR-FEAT-XXX requirements with clear acceptance criteria. Each requirement must be testable.
2. **User stories**: Define US-FEAT-XXX user stories in standard format ("As a [role], I want [capability], so that [benefit]") with Given/When/Then acceptance criteria.
3. **Use cases**: Define use cases with primary flow, alternative flows, and exception flows. Include pre-conditions, post-conditions, and triggers.
4. **Non-functional requirements**: Define any NFRs specific to this feature (performance, security, accessibility).
5. **Dependencies**: Map each requirement to existing requirements it depends on or modifies.

### Step 4: HALT -- Confirm Requirements

> **HALT POINT**: Present the feature requirements and story breakdown:
> - "Feature: [feature name]"
> - "Requirements: [count] functional, [count] non-functional"
> - "User stories: [count] stories across [count] logical groups"
> - "Use cases: [count] with [count] alternative/exception flows"
> - "Dependencies on existing functionality: [list]"
> - "Story implementation order: [ordered list]"
>
> Ask: "Are these requirements correct and complete? Is the story breakdown and implementation order appropriate?"

### Step 5: Impact Analysis

Analyze the impact of the new feature on the existing system:

1. **Architecture impact**: Does this feature require new components, services, or modules? Does it change the communication patterns between existing components?
2. **API changes**: New endpoints to add. Existing endpoints to modify (with backward-compatibility assessment). Request/response schema changes.
3. **Data model changes**: New entities or tables. Schema modifications to existing entities (new columns, changed constraints, new relationships). Migration strategy (reversible migrations only).
4. **Affected source files**: List every existing file that needs modification. Estimate the scope of changes per file.
5. **Affected test files**: List every existing test file that needs updates. Identify tests at risk of regression.
6. **New dependencies**: Any new runtime or dev dependencies required. Justification for each.
7. **Configuration changes**: New environment variables, feature flags, or build configuration.

### Step 6: HALT -- Review Impact Analysis

> **HALT POINT**: Present the impact assessment:
> - "Architecture impact: [summary -- new components, changed patterns]"
> - "API changes: [N] new endpoints, [N] modified endpoints"
> - "Data model changes: [N] new entities, [N] modified entities, [N] migrations"
> - "Files affected: [N] source files, [N] test files"
> - "New dependencies: [list with justifications]"
> - "Backward compatibility: [assessment]"
> - "Risk areas: [highest-risk changes]"
>
> Ask: "Does this impact assessment look correct? Are there any areas I have missed or underestimated?"

### Step 7: Generate Feature Spec

Produce the Feature Spec document from template 23:

- **File**: `output/23-feature-spec-[FEATURE-NAME].md`
- **Contents**: Feature overview, requirements (FR-FEAT-XXX), user stories (US-FEAT-XXX), use cases, impact analysis, implementation plan (ordered story list with file-level detail), acceptance criteria summary, and rollback plan.
- **Format**: Markdown with YAML frontmatter. Tables for requirements and impact matrices. HTML instruction comments removed.

The Feature Spec is the single source of truth for the entire feature implementation. All subsequent steps reference this document.

### Step 8: HALT -- Approve Feature Spec

> **HALT POINT**: Present the complete Feature Spec:
> - "Feature Spec generated: `output/23-feature-spec-[FEATURE-NAME].md`"
> - "Stories to implement: [count] in [suggested order]"
> - "Estimated scope: [file count] files touched, [endpoint count] API changes, [migration count] DB migrations"
> - "This is the last gate before code changes begin."
>
> Ask: "Do you approve this Feature Spec? Once approved, I will begin implementing story-by-story."

### Step 9: Story-by-Story Implementation

For each story in the Feature Spec's implementation plan, execute the full implementation cycle:

#### 9a. Story Planning

- Identify files to create or modify.
- Identify API endpoints to implement or update (from Feature Spec).
- Identify database changes required (from Feature Spec).
- Identify UI components to build or modify (from Feature Spec).
- List all acceptance criteria and plan a test for each.

#### 9b. Code Implementation (Code Role)

- Implement backend logic: API endpoints, business logic, data access.
- Implement frontend components: UI layout, interactions, state management.
- Implement database migrations: schema changes, seed data.
- Implement integrations: external APIs, third-party services.
- Follow existing architecture patterns from the architecture document **exactly**.
- Use existing technology choices and coding conventions **exactly**.
- Match API contract style from API spec (naming, error format, pagination, auth).
- Match data model conventions from data model spec (naming, constraints, relationships).

#### 9c. Test Implementation (Test Role)

- Write unit tests for all new and modified functions.
- Write integration tests for new and modified API endpoints (request/response contract verification).
- Update e2e tests for affected user journeys.
- Test error cases and edge cases from use case exception flows.
- Verify coverage meets the threshold from the existing Definition of Done.

#### 9d. Self-Review (Review Role)

- Run lint: must produce zero errors across the entire codebase (not just new code).
- Run type check: must produce zero errors across the entire codebase.
- Run security scan: no critical or high findings.
- Audit for TODO/FIXME/HACK comments in new code.
- Audit for hardcoded secrets or credentials.
- Audit for console.log/print debug statements.
- Audit for commented-out code blocks.
- Verify all new public functions have documentation.

### Step 10: Story Gate

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

After the Story Gate passes, run all **existing regression tests**. Every pre-existing test must still pass. If any existing test fails, fix the regression before proceeding to the next story. Do not accumulate regressions.

### Step 11: Regression Verification

After all stories are complete, run comprehensive regression verification:

1. **Full test suite**: Run all unit tests, integration tests, and e2e tests (both existing and new).
2. **Existing test integrity**: Verify that no existing tests were modified in a way that weakens their assertions (no loosened checks, no skipped tests, no broadened tolerances).
3. **API contract verification**: Verify all pre-existing API endpoints still return the same response schemas and status codes.
4. **Data model constraint verification**: Verify all pre-existing database constraints, indexes, and relationships are intact.
5. **Lint and type-check**: Run lint and type-check across the entire codebase.
6. **Dependency audit**: Verify no new vulnerabilities introduced by dependency changes.

### Step 12: Feature Gate

Score the following 10 items on a 0-10 scale. Average must be >= 7.0, no individual item below 4:

1. **Story gates**: All stories pass story-level gates.
2. **Acceptance criteria coverage**: All acceptance criteria from the Feature Spec have passing automated tests.
3. **Regression integrity**: All existing tests still pass with no modifications that weaken assertions.
4. **Code cleanliness**: No new TODO/FIXME/HACK comments in the codebase.
5. **API backward compatibility**: All pre-existing API endpoints maintain their contracts. New endpoints follow existing conventions.
6. **Migration reversibility**: All database migrations are reversible (down migrations exist and work).
7. **Coverage maintenance**: Overall test coverage has not decreased from the pre-feature baseline.
8. **Security posture**: No critical or high security findings introduced.
9. **Feature Spec fidelity**: Every item in the Feature Spec is fully implemented as specified.
10. **CI/CD pipeline**: The full CI/CD pipeline passes all stages.

### Step 13: HALT -- Feature Gate Report

> **HALT POINT**: Present the Feature Gate results:
> - "Feature: [feature name]"
> - "Stories completed: [X] / [X]"
> - "Feature gate score: [X.X] / 10 (threshold: 7.0)"
> - "Individual scores: [list each item with score]"
> - "Regression status: [X] existing tests, all passing / [N] failures"
> - "Coverage: [X]% (baseline was [Y]%)"
> - "Recommendation: PASS / FAIL"
> - "Issues requiring attention (if any): [list]"
>
> Ask: "This is the Feature Gate result. Do you accept the PASS / FAIL recommendation?"

### Step 14: Generate Feature Delivery Report

Produce the Feature Delivery Report from template 24:

- **File**: `output/24-feature-delivery-report-[FEATURE-NAME].md`
- **Contents**: Feature summary, requirements traceability (every FR-FEAT-XXX mapped to implementation and tests), story completion summary, regression verification results, Feature Gate scorecard, files changed inventory, API changes inventory, data model changes inventory, dependency changes, known limitations, and rollback instructions.
- **Format**: Markdown with YAML frontmatter. Tables for traceability and metrics. HTML instruction comments removed.

## Output

- **Primary artifacts**:
  - `output/23-feature-spec-[FEATURE-NAME].md` -- Feature specification with requirements, impact analysis, and implementation plan.
  - `output/17-story-report-[STORY-ID].md` -- Per-story implementation report (one per story in the feature).
  - `output/24-feature-delivery-report-[FEATURE-NAME].md` -- Feature-level delivery report with gate scores and regression results.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. Tables for metrics. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every user story from the Feature Spec has a passing Story Gate and a Story Report.
2. The Feature Gate passes with average score >= 7.0 and no item below 4.
3. All pre-existing tests still pass without weakened assertions.
4. Every FR-FEAT-XXX from the Feature Spec has at least one passing automated test.
5. All API changes are backward-compatible with existing consumers.
6. All database migrations are reversible.
7. Test coverage has not decreased from the pre-feature baseline.
8. CI/CD pipeline passes all stages.
9. No placeholder text remains in any artifact.
10. The Feature Delivery Report accurately reflects the implementation.

## Tips

- **Read the codebase, not just the specs.** Specs describe intent; code describes reality. When they disagree, investigate before assuming either is correct. The codebase may have drifted from specs, or the specs may have been updated without implementation.
- **Regression is the primary risk.** Every change you make is guilty of breaking existing behavior until proven innocent by passing regression tests. Run existing tests after every story, not just at the end.
- **Follow existing patterns exactly.** Do not introduce new coding patterns, architectural approaches, or library conventions. Match the existing codebase in style, structure, and idiom. Consistency is more valuable than novelty.
- **Impact analysis saves implementation time.** A thorough impact analysis in Step 5 prevents surprises during implementation. Discovering a missed dependency mid-story is expensive; discovering it during analysis is cheap.
- **One story at a time, fully complete.** Complete the full cycle (plan, code, test, review, gate, regression) for one story before beginning the next. Partially done stories are inventory, not progress.
- **When the spec is ambiguous, HALT.** Do not guess. Do not "make a reasonable assumption." Stop and ask. A wrong guess baked into code is harder to fix than a question asked early.
- **Backward compatibility is not optional.** Every API change, database change, and behavior change must maintain backward compatibility unless the user explicitly approves a breaking change. Existing consumers must not be surprised.
- **Migrations must be reversible.** Every database migration must have a working down migration. If the feature needs to be rolled back, the database must be able to return to its previous state without data loss.
