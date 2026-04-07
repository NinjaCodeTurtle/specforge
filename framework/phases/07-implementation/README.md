---
phase: "07-implementation"
phase_number: 7
phase_name: "Implementation"
agent: "Implementation Lead"
agent_persona: "Engineer"
version: "1.0"
---

# Phase 7: Implementation

## Purpose

Phase 7 transforms the complete specification package -- product vision, market validation, detailed requirements, UX design, technical architecture, and delivery plan -- into working, tested, production-ready code. This is the execution phase where plans become products.

The Implementation Lead ("Engineer") agent takes ownership of this phase, ensuring that every requirement is faithfully implemented, every acceptance criterion is verified by automated tests, and every artifact from Phases 1-6 is respected in the code.

**Phase 7 answers the question:** *"Does the code faithfully implement everything the specifications describe?"*

---

## Activities

### 1. Project Scaffolding (Sprint 0)
- Create project directory structure per architecture document
- Install and configure all dependencies from tech decisions
- Set up linting, formatting, and type-checking tooling
- Configure CI/CD pipeline with all quality gate stages
- Create initial database schema and migration framework
- Set up test framework with coverage reporting
- Establish coding standards and commit conventions

### 2. Story Implementation
- Implement backend APIs per API specification contracts
- Implement frontend components per UX specification
- Implement database migrations per data model specification
- Implement integrations with external systems per architecture document
- Follow sprint plan ordering and respect story dependencies

### 3. Test Implementation
- Write unit tests for all new and modified code
- Write integration tests for API endpoints and cross-component flows
- Update e2e tests for affected user journeys
- Verify coverage meets thresholds from Definition of Done

### 4. Self-Review & Quality Assurance
- Run lint (zero errors required)
- Run type-check (zero errors required)
- Run security scan (no critical/high findings)
- Audit for TODOs, FIXMEs, hardcoded secrets, debug statements
- Verify API responses match spec contracts
- Verify data model matches spec

### 5. Gate Verification (Three Tiers)
- **Story Gate:** After each story -- acceptance criteria verified by passing tests
- **Sprint Gate:** After each sprint -- integration tests pass, coverage met, metrics reported
- **Release Gate:** After each milestone -- e2e, performance, security pass, go/no-go issued

### 6. Progress Tracking
- Update progress tracker after each story completion
- Track velocity, coverage trends, and deviation count
- Maintain dependency manifest as dependencies evolve
- Report sprint metrics at each sprint boundary

---

## Artifacts

| # | Artifact                     | Template                              | Description                                                       |
|---|------------------------------|---------------------------------------|-------------------------------------------------------------------|
| 1 | Project Scaffold Report      | `templates/16-project-scaffold.md`    | Project structure, dependencies, config, CI/CD, and setup details |
| 2 | Story Implementation Reports | `templates/17-story-report.md`        | Per-story: code changes, tests, deviations, gate results          |
| 3 | Sprint Verification Reports  | `templates/18-sprint-report.md`       | Per-sprint: metrics, coverage, integration results                |
| 4 | Release Verification Report  | `templates/19-release-report.md`      | Milestone-level verification with go/no-go recommendation         |
| 5 | Implementation Progress Tracker | `templates/20-progress-tracker.md` | Running tracker of stories, sprints, coverage, and velocity       |
| 6 | Dependency Manifest          | `templates/21-dependency-manifest.md` | All runtime and dev dependencies with versions and justifications  |
| 7 | CI/CD Pipeline Spec          | `templates/22-cicd-spec.md`           | Pipeline stages, triggers, environments, and quality gates        |

---

## Agent Role: Implementation Lead ("Engineer")

The Implementation Lead operates as the Engineer persona in Phase 7. Their core concerns are:

- **Specification fidelity:** Every line of code traces to a requirement, design decision, or architectural choice
- **Test coverage:** Every acceptance criterion is verified by an automated test that passes
- **Code quality:** Lint clean, type safe, no shortcuts, no workarounds, no tech debt by choice
- **Plan adherence:** Stories are implemented in the order the sprint plan prescribes
- **Transparency:** Deviations, ambiguities, and blockers are surfaced immediately, never hidden

The Engineer consumes all artifacts from Phases 1-6 and produces working, tested code with verification reports.

---

## Workflow

```
Step 0: Context Loading
├── Read all 15 Phase 1-6 artifacts
├── Build complete mental model of product
├── Identify tech stack, patterns, and conventions
└── HALT — Confirm understanding with user

Step 1: Sprint 0 — Project Scaffolding
├── Create project structure per architecture doc
├── Install dependencies per tech decisions
├── Configure lint, format, type-check
├── Set up CI/CD pipeline
├── Create database schema and migrations
├── Configure test framework
└── HALT — Verify scaffold (project boots, lint passes, tests run, CI green)

Step 2: Sprint N — Initialization
├── Read sprint context from sprint plan
├── Identify stories for this sprint
├── Validate dependencies from prior sprints
└── Confirm sprint goal with user

Step 3: Story Implementation (repeat per story)
├── Plan: identify files, APIs, DB changes, tests
├── Code: implement backend, frontend, integrations
├── Test: write unit, integration, update e2e
├── Review: lint, type-check, security scan, self-review
└── Story Gate: verify acceptance criteria pass as tests

Step 4: Sprint Gate
├── Run full integration test suite
├── Verify cumulative coverage meets threshold
├── Produce Sprint Report with metrics
└── HALT — Present sprint report, get approval to continue

Step 5: Release Gate (at milestones)
├── Run e2e tests for all core user journeys
├── Run performance tests against NFR thresholds
├── Run security scan
├── Verify every REQ-XXX has a passing test
├── Produce Release Report with go/no-go
└── HALT — Present release report, get go/no-go decision
```

---

## Quality Gate: Three-Tier Structure

Phase 7 uses a three-tier quality gate structure rather than a single phase transition gate. Each tier must pass before proceeding.

### Tier 1: Story Gate (after each story)

Binary PASS/FAIL -- all 12 items must pass. See `checklists/implementation-gates.md` for the full checklist.

A story cannot be marked complete until all items pass. There is no conditional pass at this tier.

### Tier 2: Sprint Gate (after each sprint)

Scored 0-10 per item, 10 items. Average >= 7.0, no item below 4. See `checklists/implementation-gates.md` for the full checklist.

A sprint cannot close until the gate passes. Failing items require remediation before proceeding to the next sprint.

### Tier 3: Release Gate (at milestones)

Scored 0-10 per item, 12 items. Average >= 8.0, no item below 5. See `checklists/implementation-gates.md` for the full checklist.

The release gate produces a go/no-go recommendation. A "no-go" requires remediation and re-evaluation.

---

## Common Pitfalls

1. **Implementing without reading all specs first.** The Engineer starts coding from the PRD alone, missing architectural decisions, UX patterns, or data model constraints documented in other artifacts. Always complete context loading before writing any code.

2. **Skipping tests to "move faster."** Tests are not overhead -- they are the proof that the implementation meets its acceptance criteria. Skipping tests creates an illusion of velocity that collapses at integration time.

3. **Using workarounds instead of proper implementations.** If the architecture says use a message queue, using a direct HTTP call because "it works" creates architectural drift. Workarounds compound into systemic problems.

4. **Ignoring lint and type errors.** Treating warnings as noise rather than signal leads to real bugs hiding among suppressed warnings. Zero errors means zero errors.

5. **Not tracking deviations from the plan.** When the implementation diverges from the sprint plan (reordered stories, changed scope, added work), failing to document the deviation makes progress tracking unreliable.

6. **Hardcoding values instead of using configuration.** Environment URLs, API keys, feature flags, and thresholds belong in configuration, not in code. Hardcoded values break deployments across environments.

7. **Not testing error and edge cases from use cases.** Implementing only the happy path when the use cases document alternative flows and exception flows. Every documented flow should have test coverage.

---

## Tips for Success

- **Context loading is not optional.** Spend the time to read all 15 artifacts before writing code. Understanding the full picture prevents rework caused by discovering constraints late.
- **Sprint 0 is an investment.** A well-scaffolded project with working CI/CD, lint, and test infrastructure pays dividends in every subsequent sprint. Do not rush it.
- **One story at a time.** Complete the full cycle (code, test, review, gate) for one story before starting the next. Partially implemented stories are inventory, not progress.
- **Self-review catches 80% of issues.** Running the self-review checklist before any handoff eliminates the most common problems and builds trust in the implementation.
- **Document deviations immediately.** When you must deviate from the plan, document why, what changed, and what the impact is. This keeps the progress tracker honest and helps with sprint retrospectives.
- **The traceability matrix is your compass.** When uncertain about what to implement or whether something is needed, consult the traceability matrix from Phase 6. It maps every business goal to its implementing stories.

---

## Inputs from Previous Phases

| Phase | Key Inputs                                                                  |
|-------|-----------------------------------------------------------------------------|
| 1     | Business goals, success metrics, assumptions, stakeholder map               |
| 2     | Market validation, competitive landscape, opportunity sizing                |
| 3     | Functional requirements, NFRs, user stories, use cases, acceptance criteria |
| 4     | User flows, wireframe specs, design system, interaction patterns            |
| 5     | Architecture decisions, API contracts, data model, tech stack               |
| 6     | Epic breakdown, sprint plan, implementation roadmap, traceability matrix    |

---

## Output to Operations

The implementation handoff package consists of:

1. **Working Code** -- Production-ready codebase with all stories implemented and tested
2. **Project Scaffold Report** -- Project structure, dependencies, and configuration documentation
3. **Story Reports** -- Per-story implementation details, test results, and deviation records
4. **Sprint Reports** -- Per-sprint metrics, coverage, and integration results
5. **Release Report** -- Milestone-level verification with go/no-go recommendation
6. **Progress Tracker** -- Final velocity, coverage, and completion metrics
7. **Dependency Manifest** -- All dependencies with versions, licenses, and justifications
8. **CI/CD Pipeline Spec** -- Pipeline configuration, stages, and deployment procedures

The operations team should be able to deploy to production using the documented CI/CD pipeline and rollback procedures.
