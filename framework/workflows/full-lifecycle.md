---
workflow: full-lifecycle
description: "End-to-end specification lifecycle for greenfield products. Runs all 6 SpecForge phases with quality gates between each."
skill: "specforge:generate-all"
estimated_duration: "2-4 hours of active participation"
artifacts_produced: 15
---

# Full Lifecycle Workflow

## Overview

The Full Lifecycle workflow is the comprehensive, end-to-end SpecForge process for greenfield products and major new initiatives. It runs all 6 phases sequentially, producing 15 specification artifacts that collectively define a product from vision through implementation-ready plans.

This workflow is appropriate when the product concept is new, the market opportunity is unvalidated, and the team needs a rigorous, structured process to move from "idea" to "ready to build."

## When to Use

Use the Full Lifecycle when:

- Building a new product from scratch (greenfield).
- Entering a new market or customer segment.
- The problem space is not yet well-understood.
- Stakeholders need alignment on vision, scope, and approach.
- Regulatory or compliance requirements demand thorough documentation.
- The project is large enough that poor specifications would be costly.

Do NOT use when:

- Adding a feature to an existing, well-understood system (use **Quick Spec** instead).
- Retrofitting specifications for an existing codebase (use **Brownfield** instead).
- The scope is a single API endpoint or UI change (too lightweight for full lifecycle).

## Prerequisites

1. **A product concept** — ranging from a vague idea to a well-articulated vision.
2. **Access to stakeholders** — the user should be able to answer questions about business goals, target users, and constraints (or know who can).
3. **Web search access** (recommended) — for Phase 2 market and competitive research.
4. **Time commitment** — 2-4 hours of active participation, typically spread across multiple sessions.
5. **Project directory** — initialized with the SpecForge structure (`output/` directory must exist).

## Artifact Dependency Map

The following diagram shows which artifacts feed into which phases:

```
Phase 1: Discovery & Vision
  └─ Produces: 01-product-brief.md
       │
Phase 2: Market & Competitive Analysis
  ├─ Reads: 01-product-brief.md
  └─ Produces: 02-market-analysis.md, 03-competitive-analysis.md
       │
Phase 3: Requirements Engineering
  ├─ Reads: 01-product-brief.md, 02-market-analysis.md, 03-competitive-analysis.md
  └─ Produces: 04-prd.md, 05-user-stories.md, 06-use-cases.md
       │
Phase 4: UX & Design Specification
  ├─ Reads: 01-product-brief.md, 04-prd.md, 05-user-stories.md, 06-use-cases.md
  └─ Produces: 07-ux-spec.md
       │
Phase 5: Architecture & Technical Design
  ├─ Reads: 04-prd.md, 05-user-stories.md, 06-use-cases.md, 07-ux-spec.md
  │         (also references: 01-product-brief.md, 03-competitive-analysis.md)
  └─ Produces: 08-architecture-doc.md, 09-api-spec.md, 10-data-model.md, 11-tech-decisions.md
       │
Phase 6: Implementation Planning
  ├─ Reads: ALL prior artifacts (01 through 11)
  └─ Produces: 12-epic-breakdown.md, 13-sprint-plan.md, 14-implementation-roadmap.md, 15-traceability-matrix.md
```

## Phase-by-Phase Execution

### Phase 1: Discovery & Vision

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:discover` |
| **Agent** | Strategist |
| **Duration** | 30-60 minutes |
| **Input** | User's product concept |
| **Output** | `output/01-product-brief.md` |

**What happens**: The Strategist agent interviews the user about the problem, target users, value proposition, objectives, scope, assumptions, and risks. It challenges vague answers and pushes for specificity.

**Key activities**:
1. Problem exploration with "5 Whys" probing.
2. User persona definition with behavioral detail.
3. Value proposition development using the Value Proposition Canvas.
4. SMART objective setting.
5. Explicit scope boundaries (in-scope and out-of-scope).
6. Assumption and risk identification.

**Quality Gate 1→2**: Minimum average score of 7/10 across all checklist items.

**Decision point**: Proceed to Phase 2, or iterate on the Product Brief if the vision is unclear.

---

### Phase 2: Market & Competitive Analysis

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:analyze-market` |
| **Agent** | Market Analyst |
| **Duration** | 30-60 minutes |
| **Input** | `output/01-product-brief.md` + web research |
| **Output** | `output/02-market-analysis.md`, `output/03-competitive-analysis.md` |

**What happens**: The Market Analyst researches the market size, trends, and competitive landscape. It validates (or invalidates) assumptions from the Product Brief with real data.

**Key activities**:
1. Market definition and TAM/SAM/SOM sizing.
2. Market trends and dynamics analysis.
3. Competitor profiling (direct, indirect, substitutes).
4. Feature comparison matrix and positioning map.
5. Assumption validation against evidence.

**Quality Gate 2→3**: Minimum average score of 7/10.

**Decision point**: Three possible outcomes:
- **Opportunity validated**: Proceed to Phase 3.
- **Opportunity questionable**: Revise the Product Brief (loop back to Phase 1) with market-informed adjustments.
- **Opportunity invalidated**: Stop and pivot. Do not invest further in a product the market does not need.

---

### Phase 3: Requirements Engineering

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:define-requirements` |
| **Agent** | Requirements Analyst |
| **Duration** | 45-90 minutes |
| **Input** | Artifacts 01, 02, 03 |
| **Output** | `output/04-prd.md`, `output/05-user-stories.md`, `output/06-use-cases.md` |

**What happens**: The Requirements Analyst translates the product vision and market insights into precise, testable requirements, user stories, and use cases.

**Key activities**:
1. Functional requirements elicitation per capability.
2. Non-functional requirements across all categories.
3. User story development with Given/When/Then acceptance criteria.
4. Use case specification with main, alternative, and exception flows.
5. Cross-requirement consistency validation.

**Quality Gate 3→4**: Minimum average score of 7/10.

**Decision point**: Proceed to Phase 4, or refine requirements if gaps or inconsistencies are found.

---

### Phase 4: UX & Design Specification

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:design-ux` |
| **Agent** | UX Strategist |
| **Duration** | 30-60 minutes |
| **Input** | Artifacts 01, 04, 05, 06 |
| **Output** | `output/07-ux-spec.md` |

**What happens**: The UX Strategist designs the user experience — information architecture, user flows, wireframe specifications, interaction patterns, and accessibility requirements.

**Key activities**:
1. Persona refinement with UX context (device, environment, emotional state).
2. Information architecture and navigation model.
3. User flow design for every primary use case.
4. Wireframe specifications with component inventories.
5. Interaction pattern and accessibility specification.

**Quality Gate 4→5**: Minimum average score of 7/10.

**Decision point**: Proceed to Phase 5, or refine the UX specification if flows or interactions are unclear.

---

### Phase 5: Architecture & Technical Design

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:design-architecture` |
| **Agent** | Solutions Architect |
| **Duration** | 45-90 minutes |
| **Input** | Artifacts 01, 03, 04, 05, 06, 07 |
| **Output** | `output/08-architecture-doc.md`, `output/09-api-spec.md`, `output/10-data-model.md`, `output/11-tech-decisions.md` |

**What happens**: The Solutions Architect designs the system — components, technology stack, API surface, data model, security architecture, and infrastructure.

**Key activities**:
1. System context and boundary definition.
2. Architectural style selection with justification.
3. Technology selection with formal ADRs.
4. API endpoint design with request/response schemas.
5. Data model with entities, relationships, and access patterns.
6. Security, infrastructure, and deployment architecture.

**Quality Gate 5→6**: Minimum average score of 7/10.

**Decision point**: Proceed to Phase 6, or refine the architecture if technical concerns are unresolved.

---

### Phase 6: Implementation Planning

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:plan-implementation` |
| **Agent** | Delivery Manager |
| **Duration** | 30-60 minutes |
| **Input** | ALL prior artifacts (01-11) |
| **Output** | `output/12-epic-breakdown.md`, `output/13-sprint-plan.md`, `output/14-implementation-roadmap.md`, `output/15-traceability-matrix.md` |

**What happens**: The Delivery Manager decomposes the work into epics and sprints, builds a milestone roadmap, constructs the traceability matrix, and consolidates the risk register.

**Key activities**:
1. Epic refinement with technical epics added.
2. Story point estimation.
3. Sprint sequencing with capacity planning.
4. Milestone-based roadmap with decision points.
5. End-to-end traceability matrix.
6. Risk register consolidation.

**Quality Gate 6→Dev (Final)**: Minimum average score of **8/10** (higher bar).

**Decision point**: Accept as development-ready, or address remaining gaps.

---

### Final Validation

| Attribute | Value |
|-----------|-------|
| **Skill** | `/specforge:validate` |
| **Agent** | Orchestrator |
| **Duration** | 15-30 minutes |
| **Input** | ALL artifacts (01-15) |
| **Output** | `output/validation-report.md` |

**What happens**: The Orchestrator runs a comprehensive cross-phase validation — checking each artifact individually, verifying cross-phase consistency, and testing the traceability matrix for completeness.

**Final decision point**: The Validation Report provides a READY or NOT READY verdict with an overall score and prioritized recommendations.

## Timeline Guidance

| Session Model | Duration | Best For |
|---------------|----------|----------|
| **Single session** | 3-5 hours continuous | Hackathons, rapid prototyping, individual use |
| **Two sessions** | 2 x 2 hours | Phases 1-3 in session 1, Phases 4-6 in session 2 |
| **Phase-per-session** | 6 x 30-90 min | Teams with busy schedules, allows reflection between phases |
| **Async with reviews** | 1-2 weeks | Enterprise projects with stakeholder review cycles |

Natural pause points exist between every phase. Completed artifacts are saved to `output/` and the lifecycle can resume from any phase boundary.

## Branching Logic & Recovery

| Situation | Action |
|-----------|--------|
| Quality gate fails | Fix issues in the current phase, re-run the gate |
| Market analysis invalidates the opportunity | Loop back to Phase 1 to pivot the concept |
| Requirements reveal scope exceeds constraints | Revisit scope in Phase 1, re-prioritize in Phase 3 |
| Architecture reveals technical infeasibility | Revisit requirements (Phase 3) or constraints (Phase 1) |
| Sprint plan exceeds timeline | Reduce scope (Phase 3 priorities) or extend timeline (Phase 1 constraints) |
| User wants to skip a phase | Permitted for Phases 2 and 4 only (not recommended). Phases 1, 3, 5, 6 are mandatory |

## Handoff to Development

When the Full Lifecycle is complete, the `output/` directory contains everything a development team needs:

1. **Context**: Why this product exists and who it serves (artifacts 01-03).
2. **Requirements**: What to build, with testable acceptance criteria (artifacts 04-06).
3. **Design**: How users interact with it (artifact 07).
4. **Architecture**: How to build it technically (artifacts 08-11).
5. **Plan**: When and in what order to build it (artifacts 12-15).
6. **Quality assurance**: An independent validation of the entire package (validation report).

These artifacts are designed to feed into development frameworks like BMAD, GStack, or Harness Engineering, or directly into project management tools like Jira, Linear, or Shortcut.
