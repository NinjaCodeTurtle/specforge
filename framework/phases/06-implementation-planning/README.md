---
phase: "06-implementation-planning"
phase_number: 6
phase_name: "Implementation Planning"
agent: "Delivery Manager"
agent_persona: "Planner"
version: "1.0"
---

# Phase 6: Implementation Planning

## Purpose

Phase 6 transforms the complete specification package -- product vision, market validation, detailed requirements, UX design, and technical architecture -- into an actionable, sequenced delivery plan. This is the bridge between "what to build" and "how and when to build it."

The Delivery Manager ("Planner") agent takes ownership of this phase, ensuring that every requirement is assigned to an epic, every epic is sequenced with its dependencies, and the team has a realistic, risk-aware plan for execution.

**Phase 6 answers the question:** *"Given everything we know, what is the most effective way to deliver this product?"*

---

## Activities

### 1. Epic Decomposition
- Group related requirements into cohesive epics
- Define epic-level acceptance criteria
- Estimate effort ranges using three-point estimation
- Identify and document inter-epic dependencies
- Map every requirement (REQ-XXX) to at least one epic

### 2. Sprint / Iteration Planning
- Define sprint cadence, capacity, and velocity assumptions
- Allocate stories to sprints based on priority and dependencies
- Define the Minimum Viable Product (MVP) scope
- Establish Definition of Done and Definition of Ready
- Build in appropriate buffer for risk and unknowns

### 3. Roadmap Construction
- Define implementation phases with milestones and exit criteria
- Identify the critical path and parallel execution opportunities
- Document resource requirements and skills gaps
- Build the risk register with mitigation strategies and owners
- Create the launch plan including rollout and rollback procedures

### 4. Traceability Verification
- Build the full traceability matrix (Business Goal -> Requirement -> Design -> Story -> Test)
- Perform coverage analysis across all dimensions
- Identify and resolve gaps before development handoff
- Establish the change impact analysis process

### 5. Development Readiness Preparation
- Verify all technical prerequisites are in place or scheduled
- Confirm integration plans with external system dependencies
- Validate testing strategy across all levels
- Prepare the development handoff package

---

## Artifacts

| # | Artifact                     | Template          | Description                                         |
|---|------------------------------|-------------------|-----------------------------------------------------|
| 1 | Epic Breakdown               | `templates/12-epic-breakdown.md` | All requirements organized into prioritized, estimated epics with dependencies |
| 2 | Sprint / Iteration Plan      | `templates/13-sprint-plan.md` | Sprint-by-sprint execution plan with goals, capacity, and risks |
| 3 | Implementation Roadmap       | `templates/14-implementation-roadmap.md` | Comprehensive delivery roadmap with resources, risks, and launch plan |
| 4 | Requirements Traceability Matrix | `templates/15-traceability-matrix.md` | End-to-end traceability from goals through testing |

---

## Agent Role: Delivery Manager ("Planner")

The Delivery Manager operates as the Planner persona in Phase 6. Their core concerns are:

- **Scope management:** Ensuring every requirement is accounted for without gold-plating
- **Sequencing:** Ordering work to respect dependencies and maximize parallel execution
- **Risk awareness:** Identifying what could go wrong and building in mitigation
- **Delivery realism:** Creating plans that are achievable, not aspirational
- **Traceability:** Maintaining the thread from business goals through to test cases

The Planner consumes all artifacts from Phases 1-5 and produces the final delivery package.

---

## Workflow

```
Step 1: Review All Phase 1-5 Artifacts
├── Product Brief, Vision & Goals (Phase 1)
├── Market Research, Competitive Analysis (Phase 2)
├── PRD, User Stories, NFRs (Phase 3)
├── UX Spec, User Flows, Wireframes (Phase 4)
└── Architecture Doc, API Spec, Data Model (Phase 5)

Step 2: Decompose into Epics
├── Group requirements into coherent epics
├── Define epic-level acceptance criteria
├── Map dependencies between epics
└── Estimate effort ranges

Step 3: Plan Sprints
├── Define MVP scope (minimum viable story set)
├── Sequence stories into sprints
├── Calculate capacity and velocity assumptions
└── Apply buffer strategy

Step 4: Build Roadmap
├── Define phases and milestones
├── Identify critical path
├── Document resource needs and prerequisites
├── Create risk register and launch plan

Step 5: Verify Traceability
├── Build full traceability matrix
├── Perform coverage analysis
├── Resolve gaps
└── Prepare handoff package

Step 6: Quality Gate (Phase 6 → Development)
├── Run quality gate checklist
├── Conduct development readiness assessment
├── Obtain stakeholder sign-off
└── Hand off to development team
```

---

## Quality Gate: Phase 6 → Development Handoff

This is the final gate before code is written. It must be thorough.

### Gate Criteria

| # | Criterion                                                        | Weight | Score (0-10) |
|---|------------------------------------------------------------------|--------|--------------|
| 1 | All requirements are mapped to epics with user stories           | High   | [ ]          |
| 2 | Epic dependencies are documented with a clear critical path      | High   | [ ]          |
| 3 | MVP scope is explicitly defined and stakeholder-approved         | High   | [ ]          |
| 4 | Sprint plan covers full scope with realistic capacity and buffer | High   | [ ]          |
| 5 | Definition of Done and Definition of Ready are established       | Medium | [ ]          |
| 6 | Risk register is populated with mitigations and owners           | High   | [ ]          |
| 7 | Technical prerequisites are identified with owners and dates     | Medium | [ ]          |
| 8 | Integration plan covers all external dependencies                | Medium | [ ]          |
| 9 | Testing strategy addresses unit, integration, E2E, perf, security| High   | [ ]          |
| 10| Traceability matrix achieves >= 95% coverage across all dimensions| High  | [ ]          |
| 11| Launch plan includes rollout strategy and rollback procedure     | Medium | [ ]          |
| 12| All stakeholders have reviewed and approved the delivery plan    | High   | [ ]          |

### Scoring

- **Score each item 0-10** where 0 = not addressed, 5 = partially addressed with gaps, 10 = fully addressed
- **Minimum threshold to pass:** Average score >= 7.0 AND no individual item scores below 4
- **High-weight items:** Must each score >= 6 individually

### Common Failure Reasons

1. **Incomplete traceability** -- Requirements exist that have no corresponding stories or test cases
2. **Unrealistic velocity** -- Sprint plan assumes higher throughput than the team can sustain
3. **Missing dependencies** -- External system integrations not accounted for in the timeline
4. **No buffer** -- Plan has zero slack for unknowns, making delays inevitable
5. **Vague MVP** -- MVP scope is not explicitly defined or is too large to be "minimum"
6. **Unstaffed risks** -- Risk register exists but mitigations have no owners
7. **Missing prerequisites** -- Infrastructure, accounts, or licenses not arranged in time
8. **No rollback plan** -- Launch plan assumes success with no contingency

---

## Inputs from Previous Phases

| Phase | Key Inputs                                                      |
|-------|-----------------------------------------------------------------|
| 1     | Business goals, success metrics, assumptions, stakeholder map   |
| 2     | Market validation, competitive landscape, opportunity sizing    |
| 3     | Functional requirements, NFRs, user stories, acceptance criteria|
| 4     | User flows, wireframe specs, design system, interaction patterns|
| 5     | Architecture decisions, API contracts, data model, tech stack   |

---

## Output to Development

The development handoff package consists of:

1. **Epic Breakdown** -- Prioritized, estimated, dependency-mapped epics
2. **Sprint Plan** -- Time-boxed execution plan with goals and capacity
3. **Implementation Roadmap** -- Phases, milestones, resources, risks, and launch plan
4. **Traceability Matrix** -- Full requirements-to-test coverage with gap analysis
5. **All Phase 1-5 artifacts** -- The complete specification package

The development team should be able to begin Sprint 0 immediately upon receiving this package.
