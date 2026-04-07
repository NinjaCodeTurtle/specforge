---
workflow: brownfield
description: "Specification retrofit for existing systems. Starts with reverse-engineering documentation from the existing codebase, performs gap analysis, then runs Phases 3-6 to produce forward-looking specifications."
estimated_duration: "3-6 hours"
artifacts_produced: 13
---

# Brownfield Workflow

## Overview

The Brownfield workflow is designed for existing systems that lack formal specifications. It starts by reverse-engineering documentation from the current codebase and system behavior, performs a gap analysis to identify what needs to change, and then runs SpecForge Phases 3-6 to produce forward-looking specifications for the next iteration of the system.

This workflow acknowledges a reality of software development: most projects are not greenfield. Most teams inherit codebases with implicit requirements, undocumented architecture decisions, and tribal knowledge locked in the heads of long-tenured engineers. The Brownfield workflow makes that implicit knowledge explicit.

## When to Use

Use the Brownfield workflow when:

- An existing system needs significant enhancement or refactoring.
- A team has inherited a codebase with little or no documentation.
- Technical debt has accumulated and the team needs to plan a systematic overhaul.
- Compliance or audit requirements demand formal documentation of an existing system.
- A new team is taking over an existing product and needs to build shared understanding.
- The system is being migrated to a new technology stack.

Do NOT use when:

- Building a new product from scratch — use **Full Lifecycle**.
- Adding a small, well-understood feature — use **Quick Spec**.
- The existing system is being replaced entirely (no code reuse) — use **Full Lifecycle** with competitive context from the old system.

## Prerequisites

1. **Access to the existing codebase** — the agent needs to read source code, configuration files, database schemas, and API definitions.
2. **Access to existing documentation** (if any) — READMEs, wiki pages, API docs, architecture diagrams, runbooks.
3. **Access to a subject matter expert** — someone who understands the current system's behavior, history, and pain points.
4. **Clear objectives for the brownfield effort** — what is the goal? Refactoring? Feature addition? Migration? Compliance documentation?
5. **Project directory** with `output/` directory.

## Workflow Steps

### Phase 0: System Discovery (Reverse Engineering)

This phase does not exist in the Full Lifecycle workflow. It is unique to Brownfield and replaces Phases 1-2.

#### Step 0.1: Codebase Reconnaissance

Analyze the existing codebase to understand:

1. **Technology stack**: Languages, frameworks, libraries, and their versions.
2. **Project structure**: Directory layout, module organization, entry points.
3. **Dependencies**: External packages, services, and APIs consumed.
4. **Build and deployment**: Build tools, CI/CD configuration, deployment targets.
5. **Test coverage**: Existing tests, testing frameworks, coverage reports.

Document findings in a structured inventory.

#### Step 0.2: Architecture Recovery

Reverse-engineer the system architecture from code:

1. **Component identification**: Identify major modules, services, and their boundaries.
2. **Communication patterns**: How do components interact? (HTTP, message queues, shared database, function calls)
3. **Data flow mapping**: Trace how data enters, transforms, and exits the system.
4. **External integrations**: Identify all third-party services, APIs, and data sources.
5. **Infrastructure**: Hosting, database(s), caching, CDN, monitoring.

Produce a **Current State Architecture Document** describing the system as it exists today.

#### Step 0.3: Data Model Recovery

Reverse-engineer the data model:

1. **Schema extraction**: Read database schemas, ORM models, or migration files.
2. **Entity identification**: Map database tables/collections to domain entities.
3. **Relationship mapping**: Document foreign keys, joins, and implicit relationships.
4. **Data access patterns**: Identify common queries, indexes, and performance-critical paths.
5. **Data quality issues**: Note any schema inconsistencies, unused tables, or technical debt.

Produce a **Current State Data Model** documenting the existing schema.

#### Step 0.4: API Surface Recovery

Document the existing API:

1. **Endpoint inventory**: List all API endpoints (from route definitions, OpenAPI specs, or code analysis).
2. **Request/response schemas**: Document parameters, body schemas, and response formats.
3. **Authentication/authorization**: How are API calls authenticated and authorized?
4. **Versioning**: Is there API versioning? How is backward compatibility maintained?
5. **Undocumented behavior**: Note any quirks, workarounds, or implicit contracts.

Produce a **Current State API Inventory**.

#### Step 0.5: Implicit Requirements Extraction

Extract requirements from existing behavior:

1. **Feature inventory**: List all features the system currently provides (from UI, API, and code analysis).
2. **Business rules**: Identify validation logic, calculation rules, and workflow constraints embedded in code.
3. **User roles and permissions**: Document the current authorization model.
4. **Non-functional characteristics**: Measure or estimate current performance, availability, and scalability.
5. **Known bugs and limitations**: Catalog known issues from bug trackers, code comments (TODO, FIXME, HACK), and team knowledge.

> **HALT POINT**: Present the complete system discovery findings to the user. Ask: "Does this accurately describe the current state of the system? Are there any aspects I've missed or mischaracterized? What tribal knowledge should be captured that isn't visible in the code?"

#### Step 0.6: Gap Analysis

Compare the current state against the desired future state:

1. **Feature gaps**: What capabilities are missing that need to be added?
2. **Quality gaps**: Where does the system fall short on performance, security, reliability, or usability?
3. **Architecture gaps**: What architectural changes are needed (e.g., monolith to services, new integrations)?
4. **Technical debt**: What accumulated shortcuts need to be addressed?
5. **Documentation gaps**: What knowledge exists only as tribal knowledge?

Produce a **Gap Analysis Report** with prioritized findings.

> **HALT POINT**: Present the gap analysis. Ask: "Do you agree with this assessment of what needs to change? Are the priorities correct? This gap analysis will drive the requirements for Phases 3-6."

**Output of Phase 0**:
- `output/00-current-state-architecture.md` — Recovered architecture document.
- `output/00-current-state-data-model.md` — Recovered data model.
- `output/00-current-state-api-inventory.md` — Recovered API surface.
- `output/00-gap-analysis.md` — Gap analysis with prioritized findings.

---

### Phase 3: Requirements Engineering (Brownfield-Adapted)

**Delegate to**: `/specforge:define-requirements` (Requirements Analyst agent)

Run Phase 3 with the following brownfield adaptations:

1. **Existing requirements baseline**: The implicit requirements extracted in Phase 0 become the baseline. New requirements are additions or modifications to this baseline.
2. **Change-focused**: Each requirement should indicate whether it is:
   - **Existing** (carried forward unchanged)
   - **Modified** (existing behavior being changed)
   - **New** (entirely new capability)
   - **Deprecated** (existing behavior being removed)
3. **Migration requirements**: Include requirements for data migration, backward compatibility, and transition periods.
4. **Technical debt requirements**: Include requirements for addressing prioritized technical debt items from the gap analysis.

**Produces**: `output/04-prd.md`, `output/05-user-stories.md`, `output/06-use-cases.md`

> **HALT POINT**: Review requirements with special attention to the change classification (existing, modified, new, deprecated). Ask: "Are the change classifications correct? Have we captured all migration and backward-compatibility requirements?"

---

### Phase 4: UX & Design Specification (Brownfield-Adapted)

**Delegate to**: `/specforge:design-ux` (UX Strategist agent)

Run Phase 4 with brownfield adaptations:

1. **Current UX baseline**: Document the existing user interface and interaction patterns before proposing changes.
2. **Change-focused**: For each screen and flow, indicate what is unchanged, modified, or new.
3. **Migration UX**: Design the user experience for the transition period (feature flags, gradual rollout, migration wizards).
4. **Backward compatibility**: If existing users depend on current workflows, design a transition path.

**Produces**: `output/07-ux-spec.md`

---

### Phase 5: Architecture & Technical Design (Brownfield-Adapted)

**Delegate to**: `/specforge:design-architecture` (Solutions Architect agent)

Run Phase 5 with brownfield adaptations:

1. **Current state as starting point**: The recovered architecture from Phase 0 is the baseline. The Phase 5 output describes the target state.
2. **Migration architecture**: Define how the system transitions from current state to target state:
   - **Strangler fig pattern**: Gradually replace components while keeping the old system running.
   - **Branch by abstraction**: Introduce abstraction layers to swap implementations.
   - **Parallel run**: Run old and new systems simultaneously for validation.
3. **Backward compatibility**: API versioning, database migration strategy, feature flags.
4. **Risk assessment**: Specific risks of modifying a running system (regression, data loss, downtime).
5. **Rollback plan**: How to revert changes if the migration fails.

**Produces**: `output/08-architecture-doc.md`, `output/09-api-spec.md`, `output/10-data-model.md`, `output/11-tech-decisions.md`

> **HALT POINT**: Review the migration architecture. Ask: "Is the migration strategy feasible given your team's capacity and the system's uptime requirements? Is the rollback plan sufficient?"

---

### Phase 6: Implementation Planning (Brownfield-Adapted)

**Delegate to**: `/specforge:plan-implementation` (Delivery Manager agent)

Run Phase 6 with brownfield adaptations:

1. **Migration-aware sequencing**: The implementation order must account for:
   - Dependencies on existing system components.
   - Data migration timing and coordination.
   - Feature flag rollout schedule.
   - Backward compatibility maintenance windows.
2. **Parallel workstreams**: Separate epics for:
   - New feature development.
   - Technical debt remediation.
   - Data migration.
   - Infrastructure changes.
   - Testing and validation of migrated components.
3. **Rollback milestones**: Each milestone includes a rollback checkpoint.
4. **Risk register**: Include migration-specific risks (data corruption, regression, downtime).

**Produces**: `output/12-epic-breakdown.md`, `output/13-sprint-plan.md`, `output/14-implementation-roadmap.md`, `output/15-traceability-matrix.md`

---

### Final Validation

**Delegate to**: `/specforge:validate` (Orchestrator agent)

Run the full validation with an additional brownfield-specific check:

- [ ] Current state documents (Phase 0) accurately describe the existing system
- [ ] Gap analysis is comprehensive and prioritized
- [ ] Every requirement is classified as existing, modified, new, or deprecated
- [ ] Migration requirements (data, API, UX) are explicitly documented
- [ ] Architecture includes a migration strategy with rollback plan
- [ ] Implementation plan accounts for parallel workstreams (new + migration + debt)
- [ ] Rollback checkpoints exist at each milestone
- [ ] Traceability matrix includes current-state-to-future-state mappings

**Produces**: `output/validation-report.md`

## Complete Artifact List

| # | Artifact | File | Brownfield-Specific |
|---|----------|------|---------------------|
| 00a | Current State Architecture | `output/00-current-state-architecture.md` | Yes |
| 00b | Current State Data Model | `output/00-current-state-data-model.md` | Yes |
| 00c | Current State API Inventory | `output/00-current-state-api-inventory.md` | Yes |
| 00d | Gap Analysis | `output/00-gap-analysis.md` | Yes |
| 04 | PRD | `output/04-prd.md` | Adapted |
| 05 | User Stories | `output/05-user-stories.md` | Adapted |
| 06 | Use Cases | `output/06-use-cases.md` | Adapted |
| 07 | UX Specification | `output/07-ux-spec.md` | Adapted |
| 08 | Architecture Doc | `output/08-architecture-doc.md` | Adapted |
| 09 | API Spec | `output/09-api-spec.md` | Adapted |
| 10 | Data Model | `output/10-data-model.md` | Adapted |
| 11 | Tech Decisions | `output/11-tech-decisions.md` | Adapted |
| 12 | Epic Breakdown | `output/12-epic-breakdown.md` | Adapted |
| 13 | Sprint Plan | `output/13-sprint-plan.md` | Adapted |
| 14 | Implementation Roadmap | `output/14-implementation-roadmap.md` | Adapted |
| 15 | Traceability Matrix | `output/15-traceability-matrix.md` | Adapted |
| -- | Validation Report | `output/validation-report.md` | Adapted |

## Timeline Guidance

| Phase | Duration | Notes |
|-------|----------|-------|
| Phase 0: System Discovery | 60-120 min | Depends on codebase size and complexity |
| Phase 3: Requirements | 30-60 min | Faster than greenfield (baseline exists) |
| Phase 4: UX Design | 20-40 min | Focus on changes only |
| Phase 5: Architecture | 45-90 min | Migration architecture adds complexity |
| Phase 6: Implementation | 30-60 min | Migration sequencing adds complexity |
| Validation | 15-30 min | Additional brownfield checks |
| **Total** | **3-6 hours** | |

## Key Differences from Full Lifecycle

| Aspect | Full Lifecycle | Brownfield |
|--------|---------------|------------|
| Starting point | Blank slate | Existing codebase |
| Phase 1-2 | Full discovery and market analysis | Replaced by Phase 0 (system discovery) |
| Requirements baseline | None — all new | Existing implicit requirements extracted from code |
| Change classification | Not needed — everything is new | Every requirement tagged as existing/modified/new/deprecated |
| Architecture | Design from scratch | Current state → target state with migration path |
| Migration planning | Not applicable | Central concern: data, API, UX transitions |
| Rollback planning | Not applicable | Required at every milestone |
| Risk profile | Market and technical risks | Migration, regression, and data integrity risks |

## Common Brownfield Pitfalls

1. **Underestimating the current state.** Teams often think they know how the system works, only to discover surprises during Phase 0. Invest time in thorough code analysis.

2. **Boiling the ocean.** Not everything needs to change at once. Prioritize the gap analysis ruthlessly and focus the Phases 3-6 effort on the highest-impact changes.

3. **Ignoring data migration.** Data migration is frequently the hardest and riskiest part of a brownfield project. It deserves its own epic with dedicated testing.

4. **Breaking existing users.** Backward compatibility is not optional. Every API change, UI change, and behavior change must have a transition plan that does not strand existing users.

5. **Skipping Phase 0.** It is tempting to jump straight to "what we want to build." But without a thorough understanding of the current state, requirements will miss critical dependencies and the migration plan will have gaps.

6. **No rollback plan.** Every brownfield milestone must answer the question: "What do we do if this goes wrong?" If the answer is "we can't go back," the risk needs explicit mitigation.
