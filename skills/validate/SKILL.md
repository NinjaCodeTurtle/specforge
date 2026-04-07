---
name: "specforge:validate"
description: "Cross-phase validation and quality gate check. Reviews all existing artifacts against quality checklists, scores completeness, and produces a Validation Report with recommendations."
role: "Orchestrator"
phase: "cross-cutting"
produces:
  - "Validation Report (generated, not from template)"
---

# /specforge:validate — Cross-Phase Validation & Quality Gate Check

## Purpose

This skill performs a comprehensive quality assessment across all existing SpecForge artifacts. It acts as the **Orchestrator** — an independent reviewer that evaluates completeness, consistency, and readiness without the bias of the agent that produced the artifacts.

This skill can be run at any point during the SpecForge lifecycle:

- **Mid-phase**: To check progress and identify gaps before completing a phase.
- **Between phases**: To verify a quality gate before advancing.
- **After all phases**: To produce a final readiness report before handoff to development.
- **On demand**: Whenever the user wants an objective assessment of artifact quality.

## Prerequisites

- At least one SpecForge artifact must exist in the `output/` directory.
- No specific phase completion is required — the validator assesses whatever exists.

## Workflow Steps

### Step 1: Inventory Existing Artifacts

Scan the `output/` directory and identify which artifacts exist:

| # | Artifact | File | Status |
|---|----------|------|--------|
| 01 | Product Brief | `output/01-product-brief.md` | Exists / Missing |
| 02 | Market Analysis | `output/02-market-analysis.md` | Exists / Missing |
| 03 | Competitive Analysis | `output/03-competitive-analysis.md` | Exists / Missing |
| 04 | PRD | `output/04-prd.md` | Exists / Missing |
| 05 | User Stories | `output/05-user-stories.md` | Exists / Missing |
| 06 | Use Cases | `output/06-use-cases.md` | Exists / Missing |
| 07 | UX Specification | `output/07-ux-spec.md` | Exists / Missing |
| 08 | Architecture Doc | `output/08-architecture-doc.md` | Exists / Missing |
| 09 | API Spec | `output/09-api-spec.md` | Exists / Missing |
| 10 | Data Model | `output/10-data-model.md` | Exists / Missing |
| 11 | Tech Decisions | `output/11-tech-decisions.md` | Exists / Missing |
| 12 | Epic Breakdown | `output/12-epic-breakdown.md` | Exists / Missing |
| 13 | Sprint Plan | `output/13-sprint-plan.md` | Exists / Missing |
| 14 | Implementation Roadmap | `output/14-implementation-roadmap.md` | Exists / Missing |
| 15 | Traceability Matrix | `output/15-traceability-matrix.md` | Exists / Missing |

Report the inventory to the user.

### Step 2: Individual Artifact Quality Check

For each existing artifact, evaluate against its phase-specific quality criteria:

#### Phase 1: Product Brief
- [ ] Problem statement backed by evidence (not just opinion)
- [ ] At least one persona with demographic and behavioral detail
- [ ] Value proposition with clear differentiation statement
- [ ] Objectives with SMART criteria (all 5 components)
- [ ] Scope with both in-scope and out-of-scope items
- [ ] Assumptions identified with validation plans
- [ ] Risks documented with probability, impact, and mitigation
- [ ] Stakeholders identified with roles

#### Phase 2: Market & Competitive Analysis
- [ ] Market category clearly defined
- [ ] TAM/SAM/SOM with cited sources
- [ ] At least 3 direct competitors profiled
- [ ] Feature comparison matrix with 8+ capability rows
- [ ] Competitive gaps identified
- [ ] Product Brief assumptions tested against evidence
- [ ] Market risks documented

#### Phase 3: Requirements Engineering
- [ ] Functional requirements use "The system shall..." format
- [ ] Every requirement has an ID, priority, and acceptance criteria
- [ ] No ambiguous terms without quantification
- [ ] NFRs cover performance, security, reliability, usability, scalability
- [ ] User stories follow As a/I want/So that format
- [ ] Stories have Given/When/Then acceptance criteria
- [ ] Use cases have main, alternative, and exception flows
- [ ] Every requirement traces to a business goal

#### Phase 4: UX & Design Specification
- [ ] Personas include context of use and device information
- [ ] Information architecture defines all screens
- [ ] User flows cover all primary use cases
- [ ] Wireframe specs include component inventories
- [ ] Interaction patterns defined (forms, loading, errors)
- [ ] Accessibility requirements specified
- [ ] Design system foundations defined

#### Phase 5: Architecture & Technical Design
- [ ] System context identifies all external actors
- [ ] Architectural style justified with rationale
- [ ] Technology choices documented as ADRs
- [ ] API endpoints cover functional requirements
- [ ] Data model covers all entities from requirements
- [ ] Security architecture addresses auth and data protection
- [ ] NFRs have architectural provisions

#### Phase 6: Implementation Planning
- [ ] All stories assigned to epics with estimates
- [ ] Technical epics included (infra, auth, monitoring)
- [ ] Dependencies mapped and sequencing valid
- [ ] Sprint 0 covers foundation work
- [ ] Each sprint has a goal and demo-able deliverable
- [ ] Roadmap milestones align with business deadlines
- [ ] Traceability matrix is complete
- [ ] Risk register consolidates all risks

Score each checklist item 0-10 and calculate phase averages.

### Step 3: Cross-Phase Consistency Check

Validate consistency across artifacts:

1. **Persona consistency**: Are personas described the same way across Product Brief, PRD, UX Spec, and User Stories?
2. **Scope alignment**: Do the requirements (Phase 3) match the scope defined in the Product Brief (Phase 1)?
3. **Requirement coverage**: Does every in-scope capability have requirements, stories, and use cases?
4. **Architecture-requirement fit**: Does the architecture address all non-functional requirements?
5. **API-story alignment**: Does the API spec cover all user stories that need backend support?
6. **Data-requirement alignment**: Does the data model include all entities referenced in requirements?
7. **Story-sprint coverage**: Are all user stories assigned to sprints in the implementation plan?
8. **Traceability completeness**: Can every business goal be traced through requirements, stories, architecture, and sprints?

For each inconsistency found, document:
- What is inconsistent.
- Which artifacts are affected.
- Recommended resolution.

### Step 4: Completeness Gap Analysis

Identify what is missing:

1. **Missing artifacts**: Which expected artifacts do not exist yet?
2. **Incomplete sections**: Which existing artifacts have placeholder text or empty sections?
3. **Shallow sections**: Which sections exist but lack sufficient depth (e.g., only 1 competitor profiled, only 2 NFRs defined)?
4. **Missing traceability links**: Which business goals, requirements, or stories lack forward or backward tracing?

### Step 5: Generate Validation Report

> **HALT POINT**: Present the complete validation findings to the user before generating the formal report.

Produce a Validation Report with the following structure:

```markdown
# SpecForge Validation Report

## Date: [current date]
## Project: [project name]

## Executive Summary
[2-3 sentence overview of overall readiness]

## Artifact Inventory
[Table of all 15 artifacts with existence status]

## Phase Scores
| Phase | Score (0-10) | Status | Key Issues |
|-------|-------------|--------|------------|
| Phase 1 | X/10 | Pass/Fail/N/A | [Summary] |
| Phase 2 | X/10 | Pass/Fail/N/A | [Summary] |
| Phase 3 | X/10 | Pass/Fail/N/A | [Summary] |
| Phase 4 | X/10 | Pass/Fail/N/A | [Summary] |
| Phase 5 | X/10 | Pass/Fail/N/A | [Summary] |
| Phase 6 | X/10 | Pass/Fail/N/A | [Summary] |

## Overall Score: X/10

## Cross-Phase Consistency Issues
[List of inconsistencies with affected artifacts and recommended fixes]

## Completeness Gaps
[List of missing or incomplete elements]

## Recommendations
[Prioritized list of actions to improve readiness]

## Readiness Assessment
[READY FOR DEVELOPMENT / NOT READY — with conditions]
```

### Step 6: Provide Actionable Recommendations

Based on the findings, provide:

1. **Critical fixes** (must address before proceeding): Issues that would cause development failures.
2. **Important improvements** (strongly recommended): Issues that would cause rework or confusion.
3. **Nice-to-have enhancements** (optional): Improvements that increase quality but are not blocking.

For each recommendation, specify which artifact to update and what change to make.

## Output

- **Primary artifact**: `output/validation-report.md` — Complete quality assessment with scores and recommendations.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown. Scores are numerical (0-10). Recommendations are prioritized.

## Validation

The Validation Report itself is complete when:

1. Every existing artifact has been individually assessed with a score.
2. Cross-phase consistency has been checked across all existing artifacts.
3. Completeness gaps are documented for all missing or incomplete elements.
4. Recommendations are prioritized (critical, important, nice-to-have).
5. An overall readiness assessment is provided with a clear READY or NOT READY verdict.

## Tips

- **Be objective, not kind.** The validator's job is to catch problems before development starts. A generous score that lets weak specs through costs far more than the discomfort of a low score now.
- **Check the connections, not just the nodes.** Individual artifacts can be excellent but inconsistent with each other. The cross-phase consistency check is where the most damaging issues are found.
- **Placeholder text is a zero.** Any section with "[To be determined]" or template placeholder text scores 0 for that item. Incomplete specifications are incomplete.
- **Read acceptance criteria like a QA tester.** If you cannot write a test from the acceptance criteria, the criteria are insufficient.
- **The traceability matrix is the ultimate test.** If you can trace every business goal to a sprint-assigned story through requirements and architecture, the specification is sound. If chains are broken, something was missed.
- **Run this skill early and often.** Do not wait until the end. Validate after each phase to catch drift while it is cheap to fix.
