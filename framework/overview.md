# SpecForge Framework Overview

## What is SpecForge?

SpecForge is a comprehensive, AI-assisted framework for crafting production-ready software specifications and driving their implementation. It guides teams through the complete software development lifecycle — from initial product vision through market validation, specification, and all the way to working, tested code.

**SpecForge ensures no critical document is missed and every line of code traces back to a specification.**

## Why SpecForge?

The #1 cause of failed software projects is poor specifications. Teams rush to code without:
- Validating the market opportunity
- Clarifying requirements with precision
- Designing the user experience thoughtfully
- Making sound architectural decisions
- Planning implementation realistically

SpecForge solves this by providing a structured, phase-gated process with production-grade templates, specialized AI agents, and quality checkpoints.

## Design Philosophy

SpecForge synthesizes best practices from three leading frameworks:

| Principle | Origin | How SpecForge Applies It |
|-----------|--------|--------------------------|
| Document-first development | BMAD | Every phase produces concrete artifacts before the next begins |
| Role-based specialization | GStack | Each agent has a distinct persona, expertise, and concern |
| Progressive disclosure | Harness Engineering | Templates guide without overwhelming; detail emerges phase by phase |
| Quality gates | BMAD | Scored checklists validate completeness at phase boundaries |
| Skill-based architecture | GStack + Harness Eng | Each workflow is a self-contained skill invocable as a slash command |
| Traceability | Industry (IEEE/ISO) | Requirements trace to design decisions trace to implementation stories |
| Verifiable specifications | Harness Eng SDD | Every requirement has acceptance criteria; every spec has validation |

## The Seven Phases

```
  ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗
  ║   Phase 1     ║    ║   Phase 2     ║    ║   Phase 3     ║
  ║  Discovery &  ║───▶║    Market     ║───▶║ Requirements  ║
  ║    Vision     ║    ║   Analysis    ║    ║  Engineering  ║
  ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝
                                                    │
  ╔═══════════════╗    ╔═══════════════╗    ╔═══════════════╗
  ║   Phase 6     ║    ║   Phase 5     ║    ║   Phase 4     ║
  ║Implementation ║◀───║ Architecture  ║◀───║  UX & Design  ║
  ║   Planning    ║    ║ & Tech Design ║    ║ Specification ║
  ╚═══════════════╝    ╚═══════════════╝    ╚═══════════════╝
         │
         ▼
  ╔═══════════════╗
  ║   Phase 7     ║
  ║Implementation ║───▶  Working, tested, production-ready code
  ║  (Code+Test)  ║
  ╚═══════════════╝
```

### Phase 1: Discovery & Vision
**Agent**: Strategist ("Visionary")
**Purpose**: Clarify what we're building and why
**Artifacts**: Product Brief
**Key Activities**: Stakeholder interviews, problem definition, vision workshops, value proposition design

### Phase 2: Market & Competitive Analysis
**Agent**: Market Analyst ("Scout")
**Purpose**: Validate the opportunity with data and competitive intelligence
**Artifacts**: Market Analysis Report, Competitive Analysis
**Key Activities**: Market sizing (TAM/SAM/SOM), competitor research, PESTEL analysis, Jobs-to-be-Done

### Phase 3: Requirements Engineering
**Agent**: Requirements Analyst ("Clarifier")
**Purpose**: Define WHAT the system must do with precision and completeness
**Artifacts**: Product Requirements Document, User Stories, Use Cases
**Key Activities**: Requirements elicitation, analysis, specification, validation, traceability

### Phase 4: UX & Design Specification
**Agent**: UX Strategist ("Advocate")
**Purpose**: Define HOW users interact with the system
**Artifacts**: UX Specification (personas, flows, wireframe specs, design system)
**Key Activities**: User research, persona creation, flow mapping, interaction design, accessibility planning

### Phase 5: Architecture & Technical Design
**Agent**: Solutions Architect ("Builder")
**Purpose**: Define HOW the system is built technically
**Artifacts**: Architecture Document, API Specification, Data Model, Technology Decision Records
**Key Activities**: System design, technology selection, API design, data modeling, security architecture

### Phase 6: Implementation Planning
**Agent**: Delivery Manager ("Planner")
**Purpose**: Break the work into actionable, estimable units ready for development
**Artifacts**: Epic Breakdown, Sprint Plan, Implementation Roadmap, Traceability Matrix
**Key Activities**: Epic decomposition, story mapping, sprint planning, risk assessment, launch planning

### Phase 7: Implementation
**Agent**: Implementation Lead ("Engineer")
**Purpose**: Transform specifications into working, tested, production-ready code
**Artifacts**: Project Scaffold Report, Story Implementation Reports, Sprint Verification Reports, Release Verification Report, Progress Tracker, Dependency Manifest, CI/CD Pipeline Spec
**Key Activities**: Project scaffolding, story-by-story coding, test writing (unit/integration/e2e), self-review, three-tier quality gates (Story → Sprint → Release), progress tracking

### Post-Implementation: Add Feature
**Agent**: Feature Engineer ("Extender")
**Purpose**: Add new end-to-end features to an existing SpecForge project
**Artifacts**: Feature Spec, Story Implementation Reports, Feature Delivery Report
**Key Activities**: Codebase analysis, impact analysis, feature specification, story-by-story implementation, regression testing, Feature Gate verification
**Skill**: `/specforge:add-feature`

## Quality Gates

Every phase transition requires passing a scored checklist. The **Orchestrator** agent enforces these gates:

| Gate | Transition | Key Validation |
|------|-----------|----------------|
| Gate 1 | Discovery → Market | Vision clarity, problem validated, stakeholders identified |
| Gate 2 | Market → Requirements | Market opportunity confirmed, competitive landscape mapped |
| Gate 3 | Requirements → UX Design | Requirements complete, consistent, testable, prioritized |
| Gate 4 | UX Design → Architecture | User flows defined, design constraints documented |
| Gate 5 | Architecture → Implementation | Architecture sound, APIs specified, data model complete |
| Gate 6 | Planning → Implementation | Stories estimated, dependencies mapped, risks mitigated |

Each gate scores items 0-10. A minimum average of **7/10** is required to proceed.

### Phase 7 Implementation Gates (Three Tiers)

Phase 7 has its own internal quality gates at three granularities:

| Tier | Scope | Scoring | Threshold |
|------|-------|---------|-----------|
| Story Gate | Per user story | Binary PASS/FAIL (12 items) | ALL must pass |
| Sprint Gate | Per sprint | 0-10 (10 items) | Average >= 7/10 |
| Release Gate | Per milestone | 0-10 (12 items) | Average >= 8/10 |

## Three Workflow Modes

### 1. Full Lifecycle
All 7 phases, for greenfield products. Use when building something new from scratch.
**Skill**: `/specforge:generate-all`

### 2. Quick Spec
Phases 3 + 5 only, for well-understood features. Use when the market is validated and UX is clear.
**Skills**: `/specforge:define-requirements` + `/specforge:design-architecture`

### 3. Brownfield
Starts with discovery of existing system, then runs Phases 3-6. Use when adding major features or redesigning an existing product.
**Workflow**: `framework/workflows/brownfield.md`

## Agent Roster

| Agent | Persona | Phase | Core Concern | Key Question |
|-------|---------|-------|-------------|--------------|
| Strategist | Visionary | 1 | Problem-solution fit | "Is this worth building?" |
| Market Analyst | Scout | 2 | Market validity | "Will the market pay for this?" |
| Requirements Analyst | Clarifier | 3 | Completeness & testability | "Is every requirement precise and testable?" |
| UX Strategist | Advocate | 4 | User needs | "Will users love using this?" |
| Solutions Architect | Builder | 5 | Technical soundness | "Can we build this reliably at scale?" |
| Delivery Manager | Planner | 6 | Delivery readiness | "Can the team execute this plan?" |
| Implementation Lead | Engineer | 7 | Code quality & spec fidelity | "Does the code faithfully implement every spec?" |
| Feature Engineer | Extender | Post-7 | Feature delivery without regression | "Does this feature work without breaking anything?" |
| Orchestrator | — | All | Cross-phase coordination | "Are we ready for the next phase?" |

## Template Library

SpecForge provides 24 production-grade templates in `templates/`:

| # | Template | Phase | Purpose |
|---|----------|-------|---------|
| 01 | Product Brief | 1 | Define the product vision and scope |
| 02 | Market Analysis | 2 | Size the market and analyze trends |
| 03 | Competitive Analysis | 2 | Map and assess competitors |
| 04 | Product Requirements Document | 3 | Specify functional and non-functional requirements |
| 05 | User Stories | 3 | Define user-centric requirements |
| 06 | Use Cases | 3 | Detail system interactions |
| 07 | UX Specification | 4 | Specify user experience and design |
| 08 | Architecture Document | 5 | Define system architecture |
| 09 | API Specification | 5 | Detail API contracts |
| 10 | Data Model | 5 | Define data entities and relationships |
| 11 | Technology Decisions | 5 | Record and justify technology choices |
| 12 | Epic Breakdown | 6 | Decompose work into epics |
| 13 | Sprint Plan | 6 | Plan sprints and releases |
| 14 | Implementation Roadmap | 6 | Chart the path to delivery |
| 15 | Traceability Matrix | 6 | Trace requirements through to implementation |
| 16 | Project Scaffold Report | 7 | Document project setup and configuration |
| 17 | Story Implementation Report | 7 | Per-story verification report |
| 18 | Sprint Verification Report | 7 | Per-sprint quality and progress report |
| 19 | Release Verification Report | 7 | Go/no-go release assessment |
| 20 | Implementation Progress Tracker | 7 | Living progress tracking document |
| 21 | Dependency Manifest | 7 | Justified dependency documentation |
| 22 | CI/CD Pipeline Spec | 7 | Pipeline configuration and quality thresholds |
| 23 | Feature Spec | Post-7 | Consolidated spec for a new feature (requirements + impact + plan) |
| 24 | Feature Delivery Report | Post-7 | Feature verification and regression report |

## End-to-End Coverage

SpecForge covers the complete software lifecycle — from "Is this worth building?" to "Ship it." Phases 1-6 produce specifications; Phase 7 implements them. For teams that prefer to use their own coding workflow, Phase 6 output can also feed directly into **BMAD**, **GStack**, or **Harness Engineering**.

## Getting Started

1. Run `/specforge:discover` to start Phase 1
2. Or run `/specforge:generate-all` for the full lifecycle (Phases 1-7)
3. Or jump to any phase with the corresponding skill command
4. Run `/specforge:implement` after Phases 1-6 to begin building
5. Use `/specforge:validate` at any point to check readiness
