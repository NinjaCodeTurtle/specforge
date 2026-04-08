---
workflow: add-feature
description: "Add a new feature to an existing SpecForge project. Reads existing specs and codebase, generates a Feature Spec, implements story-by-story with quality gates and regression testing, and delivers a Feature Delivery Report."
estimated_duration: "1-4 hours"
artifacts_produced: 3
---

# Add Feature Workflow

## Overview

The Add Feature workflow is designed for adding new capabilities to existing SpecForge projects that have completed Phases 1-7. It reads all existing specification artifacts and the actual codebase, elicits feature requirements from the user, performs impact analysis, generates a Feature Spec, implements the feature story-by-story with quality gates, runs regression tests at every step, and produces a Feature Delivery Report.

This workflow acknowledges a reality of software development: most work on a product happens after the initial release. The Add Feature workflow provides a structured, quality-gated process for extending a system without compromising its existing stability. It is lighter than Brownfield (no full Phase 0 reverse-engineering) but heavier than ad-hoc development (rigorous requirements, impact analysis, and regression verification).

## When to Use

Use the Add Feature workflow when:

- Adding a new, well-scoped feature to an existing SpecForge project.
- Enhancing an existing feature with significant new functionality.
- Extending the system with new API endpoints, data entities, or UI screens.
- The existing project has complete Phase 1-7 artifacts and a working codebase.
- The feature can be decomposed into user stories and implemented incrementally.

## When NOT to Use

Do NOT use when:

- **Building a new product from scratch** -- use **Full Lifecycle**. There is no existing codebase to extend.
- **Working with an undocumented system** -- use **Brownfield**. Without existing SpecForge artifacts, you need Phase 0 system discovery first.
- **Fixing small bugs or making minor tweaks** -- this workflow is too heavyweight. Fix bugs directly with standard development practices.
- **Making fundamental architecture changes** -- use **Brownfield**. If the feature requires changing the core architecture (e.g., monolith to microservices, new database engine, new authentication model), the scope exceeds a single feature addition.
- **Adding multiple interconnected features simultaneously** -- use **Brownfield** with a fresh Phase 3-6 cycle. Interconnected features need holistic planning, not independent feature additions.
- **The existing codebase has no tests or a failing test suite** -- stabilize the codebase first. This workflow relies on regression tests to verify safety; without a passing baseline, regression verification is meaningless.

## Prerequisites

1. **Existing SpecForge project with Phase 1-7 artifacts** in the `output/` directory (artifacts 01 through 22).
2. **Working codebase** with all existing tests passing. The test suite is the regression safety net; it must be green before adding new functionality.
3. **Existing CI/CD pipeline** configured and passing all stages (build, lint, type-check, test, security scan).
4. **Clear feature objective** -- the user must be able to articulate what the new feature does, who it serves, and why it is needed.
5. **Project directory** with `output/` directory containing existing artifacts.

## Workflow Summary

```
Context Loading ──> HALT: Feature Elicitation ──> Requirements Definition
       │                                                    │
       │                                                    v
       │                                          HALT: Confirm Requirements
       │                                                    │
       │                                                    v
       │                                            Impact Analysis
       │                                                    │
       │                                                    v
       │                                          HALT: Review Impact
       │                                                    │
       │                                                    v
       │                                         Generate Feature Spec
       │                                                    │
       │                                                    v
       │                                         HALT: Approve Feature Spec
       │                                                    │
       │                                                    v
       │                                    ┌─> Story Implementation ─┐
       │                                    │   (plan/code/test/review)│
       │                                    │           │              │
       │                                    │           v              │
       │                                    │     Story Gate +         │
       │                                    │     Regression Tests     │
       │                                    │           │              │
       │                                    └───────────┘  (repeat)   │
       │                                                    │
       │                                                    v
       │                                       Regression Verification
       │                                                    │
       │                                                    v
       │                                            Feature Gate
       │                                                    │
       │                                                    v
       │                                     HALT: Feature Gate Report
       │                                                    │
       │                                                    v
       │                                    Feature Delivery Report
```

### Artifact Dependency Map

```
Existing Phase 1-7 Artifacts ──┐
                               ├──> Feature Spec (template 23)
Existing Codebase ─────────────┘           │
                                           v
                                   Story Reports (template 17, per story)
                                           │
                                           v
                                   Feature Delivery Report (template 24)
```

## Workflow Steps

| Step | Name | Type | Description |
|------|------|------|-------------|
| 1 | Context Loading | Automated | Read all existing artifacts and codebase |
| 2 | Feature Elicitation | **HALT** | Present project understanding, ask feature questions |
| 3 | Requirements Definition | Automated | Define FR-FEAT-XXX, US-FEAT-XXX, use cases |
| 4 | Confirm Requirements | **HALT** | Present requirements for user approval |
| 5 | Impact Analysis | Automated | Analyze architecture, API, data model, file impact |
| 6 | Review Impact | **HALT** | Present impact assessment for confirmation |
| 7 | Generate Feature Spec | Automated | Produce template 23 artifact |
| 8 | Approve Feature Spec | **HALT** | Last gate before code changes begin |
| 9 | Story Implementation | Automated | Plan, code, test, self-review per story |
| 10 | Story Gate | Automated | 12-item checklist + regression tests per story |
| 11 | Regression Verification | Automated | Full test suite + contract verification |
| 12 | Feature Gate | Automated | 10 items scored 0-10, avg >= 7.0, no item < 4 |
| 13 | Feature Gate Report | **HALT** | Present gate scores and recommendation |
| 14 | Feature Delivery Report | Automated | Produce template 24 artifact |

**HALT points**: 5 (Steps 2, 4, 6, 8, 13)

## Artifacts Produced

| # | Artifact | File | Description |
|---|----------|------|-------------|
| 23 | Feature Spec | `output/23-feature-spec-[FEATURE-NAME].md` | Requirements, impact analysis, implementation plan, rollback plan |
| 17 | Story Implementation Reports | `output/17-story-report-[STORY-ID].md` | Per-story report with code changes, tests, deviations, gate results |
| 24 | Feature Delivery Report | `output/24-feature-delivery-report-[FEATURE-NAME].md` | Feature-level delivery with gate scores, regression results, traceability |

## What It Intentionally Skips

This workflow is scoped to a single feature addition. It intentionally does not include:

- **Market analysis and competitive analysis.** The market context was established in Phases 1-2. A single feature does not warrant re-analyzing the market.
- **Full UX redesign.** UX changes are scoped to the new feature's screens and flows. The existing design system and interaction patterns are assumed correct.
- **Full architecture rethink.** The existing architecture is assumed sound. The feature must integrate with the current architecture, not replace it.
- **Sprint and release planning.** This is a single feature, not a sprint. The implementation plan is story-level, not sprint-level. The feature integrates into the existing release cadence.
- **Phase 1-2 re-execution.** Business goals and market context are inherited from the existing project.
- **Phase 4-6 re-execution.** UX, architecture, and implementation planning are scoped to feature-level changes within the existing framework, not full-phase re-runs.

## Escalation Triggers

Switch to a different workflow if any of these conditions are discovered during the Add Feature process:

| Trigger | Escalate To | Reason |
|---------|-------------|--------|
| Feature requires fundamental architecture changes (new service boundary, new database engine, new auth model) | **Brownfield** | Scope exceeds single feature; needs Phase 5 re-run |
| Feature introduces a new user persona not covered in existing specs | **Brownfield** (Phase 3+) | New persona requires requirements and UX re-analysis |
| Feature requires significant UX redesign of existing screens | **Brownfield** (Phase 4+) | UX changes beyond the scope of a feature addition |
| Multiple interconnected features are needed (feature A depends on feature B) | **Brownfield** (Phase 3-6) | Interconnected features need holistic planning |
| Existing codebase has significant spec drift (code does not match specs) | **Brownfield** (Phase 0) | Need system discovery before extending |
| Existing test suite is failing or coverage is critically low | **Stabilization first** | Cannot verify regression without a passing baseline |

## Estimated Duration

| Feature Complexity | Duration | Characteristics |
|-------------------|----------|-----------------|
| Small | 1-2 hours | 1-3 stories, no DB changes, 1-2 new endpoints, < 10 files affected |
| Medium | 2-3 hours | 3-6 stories, minor DB changes, 2-5 new/modified endpoints, 10-25 files affected |
| Large | 3-4 hours | 6-10 stories, significant DB changes, 5+ new/modified endpoints, 25+ files affected |

Duration depends on: feature complexity, codebase size, test suite thoroughness, number of HALT-point iterations with the user, and the clarity of the feature request.

## Key Differences from Other Workflows

| Aspect | Full Lifecycle | Brownfield | Add Feature |
|--------|---------------|------------|-------------|
| Starting point | Blank slate | Existing codebase, no specs | Existing codebase + existing specs |
| Scope | Entire product | Entire system retrofit | Single feature |
| Phases executed | 1-7 | 0, 3-6 | Feature-scoped subset |
| Requirements | All new | Existing + modified + new + deprecated | New feature requirements only |
| Architecture | Design from scratch | Current state to target state | Extend existing architecture |
| Implementation | Full sprint cycle | Not included (planning only) | Story-by-story with regression |
| Primary risk | Market + technical | Migration + regression | Regression + backward compatibility |
| Typical duration | 6-12 hours | 3-6 hours | 1-4 hours |

## Common Add Feature Pitfalls

1. **Skipping impact analysis.** It is tempting to jump straight to coding. But discovering a missed dependency mid-implementation is expensive. Impact analysis is cheap insurance.

2. **Ignoring regression tests.** A new feature that breaks an old feature is not a feature -- it is a net-zero change at best. Run existing tests after every story, not just at the end.

3. **Introducing new patterns.** The Feature Engineer should follow existing patterns, not introduce new ones. A codebase with three different error-handling patterns is worse than one with a single consistent pattern, even if the new one is "better."

4. **Underestimating data model impact.** Schema changes ripple through the entire application -- migrations, ORM models, API serializers, validation logic, test fixtures. A "simple" new column can touch dozens of files.

5. **Breaking backward compatibility.** Existing API consumers, database queries, and UI flows must continue working. Every change must be additive or have an explicit migration path.

6. **Scope creep during implementation.** The Feature Spec defines the scope. If implementation reveals additional needs, document them as future work -- do not expand the current feature mid-implementation without returning to a HALT point.
