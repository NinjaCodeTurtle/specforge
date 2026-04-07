# SpecForge Framework Overview

## What is SpecForge?

SpecForge is a comprehensive, AI-assisted framework for creating production-ready software specifications. It guides teams through the complete pre-development documentation lifecycle — from initial product vision through market validation to implementation-ready specifications.

**SpecForge ensures no critical document is missed before a single line of code is written.**

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

## The Six Phases

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
  ┌───────────────┐
  │  Development   │  ──▶  Hand off to BMAD / GStack / Harness Engineering
  │   Handoff     │
  └───────────────┘
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

## Quality Gates

Every phase transition requires passing a scored checklist. The **Orchestrator** agent enforces these gates:

| Gate | Transition | Key Validation |
|------|-----------|----------------|
| Gate 1 | Discovery → Market | Vision clarity, problem validated, stakeholders identified |
| Gate 2 | Market → Requirements | Market opportunity confirmed, competitive landscape mapped |
| Gate 3 | Requirements → UX Design | Requirements complete, consistent, testable, prioritized |
| Gate 4 | UX Design → Architecture | User flows defined, design constraints documented |
| Gate 5 | Architecture → Implementation | Architecture sound, APIs specified, data model complete |
| Gate 6 | Implementation → Dev Handoff | Stories estimated, dependencies mapped, risks mitigated |

Each gate scores items 0-10. A minimum average of **7/10** is required to proceed.

## Three Workflow Modes

### 1. Full Lifecycle
All 6 phases, for greenfield products. Use when building something new from scratch.
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
| Orchestrator | — | All | Cross-phase coordination | "Are we ready for the next phase?" |

## Template Library

SpecForge provides 15 production-grade templates in `templates/`:

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

## Complementary, Not Competing

SpecForge explicitly stops at **implementation-ready specifications**. Its output is designed to feed into:
- **BMAD** Phase 4 (Implementation)
- **GStack** Build phase
- **Harness Engineering** SDD Execution sessions

SpecForge handles the "thinking before coding" that these frameworks assume has already happened.

## Getting Started

1. Run `/specforge:discover` to start Phase 1
2. Or run `/specforge:generate-all` for the full lifecycle
3. Or jump to any phase with the corresponding skill command
4. Use `/specforge:validate` at any point to check readiness
