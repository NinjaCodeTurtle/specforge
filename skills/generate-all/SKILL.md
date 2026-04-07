---
name: "specforge:generate-all"
description: "Full lifecycle orchestration. Runs all 6 SpecForge phases sequentially with quality gates between each, producing a complete specification package ready for development handoff."
role: "Orchestrator"
phase: "all"
produces:
  - "Product Brief (template 01)"
  - "Market Analysis (template 02)"
  - "Competitive Analysis (template 03)"
  - "PRD (template 04)"
  - "User Stories (template 05)"
  - "Use Cases (template 06)"
  - "UX Specification (template 07)"
  - "Architecture Doc (template 08)"
  - "API Spec (template 09)"
  - "Data Model (template 10)"
  - "Tech Decisions (template 11)"
  - "Epic Breakdown (template 12)"
  - "Sprint Plan (template 13)"
  - "Implementation Roadmap (template 14)"
  - "Traceability Matrix (template 15)"
  - "Validation Report"
---

# /specforge:generate-all — Full Lifecycle Orchestration

## Purpose

This is the "big red button" — a single skill that orchestrates the entire SpecForge lifecycle, running all 6 phases sequentially with quality gates between each. It produces a complete specification package (15 artifacts + validation report) ready for handoff to a development team.

The Orchestrator agent manages the flow, delegates to phase-specific agents, enforces quality gates, and ensures cross-phase consistency. It pauses at defined HALT points for human review and course correction.

## Prerequisites

- A project directory initialized with the SpecForge structure.
- The user must have a product concept to specify. It can range from "a vague idea" (Phase 1 will sharpen it) to "a well-defined product that needs formal documentation."
- Significant time investment: A full lifecycle run takes 2-4 hours of active participation across all 6 phases. The user should be prepared for a thorough process.
- Web search access is recommended for Phase 2 (Market & Competitive Analysis).

## Workflow Steps

### Step 0: Orientation & Setup

Introduce the SpecForge full lifecycle process:

1. Explain what will be produced: 15 specification documents covering vision, market analysis, requirements, UX design, architecture, and implementation planning.
2. Set time expectations: 2-4 hours of active participation, broken into 6 phases with natural pause points.
3. Confirm the user wants the full lifecycle (vs. Quick Spec or Brownfield workflow).
4. Verify the `output/` directory exists; create it if needed.

Ask: "Are you ready to begin? We will start with Discovery & Vision. You can pause between any two phases and resume later."

---

### Phase 1: Discovery & Vision

**Delegate to**: `/specforge:discover` (Strategist agent)

Execute the full Phase 1 workflow:
- Problem exploration and stakeholder identification.
- User persona and value proposition development.
- Objectives, scope, assumptions, and risk assessment.

**Produces**: `output/01-product-brief.md`

#### Quality Gate 1→2

Run the Phase 1 quality checklist. All items must score 7/10 or higher on average.

> **HALT POINT**: Present the completed Product Brief and quality gate scores. Ask: "Phase 1 is complete. The Product Brief is ready. Would you like to proceed to Phase 2 (Market & Competitive Analysis), revise the Product Brief, or pause and resume later?"

If the user pauses, save progress. The lifecycle can resume from this point.

---

### Phase 2: Market & Competitive Analysis

**Delegate to**: `/specforge:analyze-market` (Market Analyst agent)

Execute the full Phase 2 workflow:
- Market definition and sizing (TAM/SAM/SOM).
- Competitor research and profiling.
- Competitive positioning analysis.
- Opportunity validation against Product Brief assumptions.

**Produces**: `output/02-market-analysis.md`, `output/03-competitive-analysis.md`

#### Quality Gate 2→3

Run the Phase 2 quality checklist. All items must score 7/10 or higher on average.

> **HALT POINT**: Present the Market Analysis, Competitive Analysis, and quality gate scores. Ask: "Phase 2 is complete. The market opportunity is [validated/questionable/invalidated]. Would you like to proceed to Phase 3 (Requirements Engineering), revisit the Product Brief based on market findings, or pause?"

**Decision point**: If market analysis reveals a weak opportunity, recommend revising the Product Brief (loop back to Phase 1) rather than proceeding with flawed assumptions.

---

### Phase 3: Requirements Engineering

**Delegate to**: `/specforge:define-requirements` (Requirements Analyst agent)

Execute the full Phase 3 workflow:
- Functional requirements elicitation and structuring.
- Non-functional requirements specification.
- User story development with acceptance criteria.
- Use case specification.
- Requirements consistency check.

**Produces**: `output/04-prd.md`, `output/05-user-stories.md`, `output/06-use-cases.md`

#### Quality Gate 3→4

Run the Phase 3 quality checklist. All items must score 7/10 or higher on average.

> **HALT POINT**: Present the PRD summary (requirement counts by priority), User Stories summary (epic and story counts), and quality gate scores. Ask: "Phase 3 is complete. We have [N] functional requirements, [N] user stories across [N] epics, and [N] use cases. Would you like to proceed to Phase 4 (UX & Design Specification) or refine the requirements?"

---

### Phase 4: UX & Design Specification

**Delegate to**: `/specforge:design-ux` (UX Strategist agent)

Execute the full Phase 4 workflow:
- Persona refinement with UX context.
- Information architecture and navigation design.
- User flow design for all primary use cases.
- Wireframe specifications for key screens.
- Interaction patterns and accessibility specification.

**Produces**: `output/07-ux-spec.md`

#### Quality Gate 4→5

Run the Phase 4 quality checklist. All items must score 7/10 or higher on average.

> **HALT POINT**: Present the UX Specification summary (screen count, flow count, key design decisions) and quality gate scores. Ask: "Phase 4 is complete. Would you like to proceed to Phase 5 (Architecture & Technical Design) or refine the UX specification?"

---

### Phase 5: Architecture & Technical Design

**Delegate to**: `/specforge:design-architecture` (Solutions Architect agent)

Execute the full Phase 5 workflow:
- System context and boundary definition.
- High-level architecture design.
- Technology selection with ADRs.
- API design.
- Data model design.
- Security architecture.
- Infrastructure and deployment planning.

**Produces**: `output/08-architecture-doc.md`, `output/09-api-spec.md`, `output/10-data-model.md`, `output/11-tech-decisions.md`

#### Quality Gate 5→6

Run the Phase 5 quality checklist. All items must score 7/10 or higher on average.

> **HALT POINT**: Present the Architecture summary (architectural style, key technology choices, component count, API endpoint count, entity count) and quality gate scores. Ask: "Phase 5 is complete. Would you like to proceed to Phase 6 (Implementation Planning) or refine the architecture?"

---

### Phase 6: Implementation Planning

**Delegate to**: `/specforge:plan-implementation` (Delivery Manager agent)

Execute the full Phase 6 workflow:
- Epic refinement and decomposition.
- Story point estimation.
- Sprint planning and sequencing.
- Implementation roadmap with milestones.
- Traceability matrix construction.
- Risk register consolidation.

**Produces**: `output/12-epic-breakdown.md`, `output/13-sprint-plan.md`, `output/14-implementation-roadmap.md`, `output/15-traceability-matrix.md`

#### Quality Gate 6→Dev (Final Gate)

Run the Phase 6 quality checklist. All items must score **8/10** or higher on average (higher bar for the final gate).

> **HALT POINT**: Present the Implementation Plan summary (epic count, total story points, sprint count, estimated timeline, milestone dates) and quality gate scores.

---

### Final Validation

**Delegate to**: `/specforge:validate` (Orchestrator agent)

Run the full cross-phase validation:
- Individual artifact quality checks.
- Cross-phase consistency verification.
- Completeness gap analysis.
- Traceability end-to-end verification.

**Produces**: `output/validation-report.md`

> **HALT POINT (Final)**: Present the Validation Report with overall readiness score. Ask: "SpecForge has produced a complete specification package with [N] artifacts. The overall readiness score is [X/10]. [READY FOR DEVELOPMENT / NOT READY]. Would you like to address any findings before finalizing, or are you ready to hand off to development?"

## Output

All 15 specification artifacts plus the Validation Report, written to the `output/` directory:

| # | Artifact | File |
|---|----------|------|
| 01 | Product Brief | `output/01-product-brief.md` |
| 02 | Market Analysis | `output/02-market-analysis.md` |
| 03 | Competitive Analysis | `output/03-competitive-analysis.md` |
| 04 | PRD | `output/04-prd.md` |
| 05 | User Stories | `output/05-user-stories.md` |
| 06 | Use Cases | `output/06-use-cases.md` |
| 07 | UX Specification | `output/07-ux-spec.md` |
| 08 | Architecture Doc | `output/08-architecture-doc.md` |
| 09 | API Spec | `output/09-api-spec.md` |
| 10 | Data Model | `output/10-data-model.md` |
| 11 | Tech Decisions | `output/11-tech-decisions.md` |
| 12 | Epic Breakdown | `output/12-epic-breakdown.md` |
| 13 | Sprint Plan | `output/13-sprint-plan.md` |
| 14 | Implementation Roadmap | `output/14-implementation-roadmap.md` |
| 15 | Traceability Matrix | `output/15-traceability-matrix.md` |
| -- | Validation Report | `output/validation-report.md` |

## Validation

The full lifecycle is complete when:

1. All 15 artifacts exist with no placeholder text.
2. All 6 quality gates pass with the required minimum scores.
3. The cross-phase consistency check finds no critical issues.
4. The traceability matrix has no broken chains.
5. The Validation Report overall score is 7/10 or higher.
6. The user has explicitly confirmed readiness for development handoff.

## Tips

- **Pace yourself.** This is a marathon, not a sprint. Take breaks between phases. The quality of input directly determines the quality of output.
- **Phase 1 is the most important.** If the Product Brief is weak, every subsequent phase amplifies the weakness. Invest time here.
- **Don't skip the market analysis.** Phase 2 is the phase most often skipped ("we already know the market"). It is also the phase most often responsible for product failure.
- **Quality gates are not bureaucracy.** They are the mechanism that prevents compounding errors. A weak Phase 3 output produces a flawed Phase 4 design, which produces an unworkable Phase 5 architecture.
- **It is cheaper to loop back than to push forward.** If a quality gate fails, fix the issue before advancing. Rework in Phase 3 takes hours; rework in development takes weeks.
- **The Orchestrator is not a rubber stamp.** This skill should actively challenge weak outputs and recommend rework when needed. The goal is a complete, consistent, development-ready specification — not a fast one.
- **Save early, save often.** Each phase produces its own artifacts. If the user needs to stop mid-lifecycle, all completed phase artifacts are preserved and the lifecycle can resume from the next phase.
