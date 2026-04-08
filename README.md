# SpecForge

**A comprehensive framework for crafting production-ready software specifications.**

SpecForge guides teams through the complete pre-development documentation lifecycle — from initial product vision through market validation to implementation-ready specifications. It ensures no critical document is missed before a single line of code is written.

## Why SpecForge?

The #1 cause of failed software projects is poor specifications. Teams rush to code without validating the market, clarifying requirements, or making sound architectural decisions. SpecForge provides a structured, phase-gated process with production-grade templates, specialized AI agents, and quality checkpoints.

**SpecForge is complementary to coding frameworks** like [BMAD](https://github.com/bmad-code-org/BMAD-METHOD), [GStack](https://github.com/garrytan/gstack), and [Harness Engineering](https://github.com/NinjaCodeTurtle/harness-engineering). It handles the "thinking before coding" that those frameworks assume has already happened.

## The Six Phases

```
  Phase 1          Phase 2          Phase 3
  Discovery   ──▶  Market      ──▶  Requirements
  & Vision         Analysis         Engineering
                                        │
  Phase 6          Phase 5          Phase 4
  Implementation◀── Architecture ◀── UX & Design
  Planning          & Tech Design    Specification
      │
      ▼
  Phase 7
  Implementation  ──▶  Working, tested, production-ready code
```

| Phase | Agent | Key Output |
|-------|-------|------------|
| 1. Discovery & Vision | Strategist | Product Brief |
| 2. Market Analysis | Market Analyst | Market Analysis, Competitive Analysis |
| 3. Requirements Engineering | Requirements Analyst | PRD, User Stories, Use Cases |
| 4. UX & Design Specification | UX Strategist | UX Specification |
| 5. Architecture & Technical Design | Solutions Architect | Architecture Doc, API Spec, Data Model, Tech Decisions |
| 6. Implementation Planning | Delivery Manager | Epic Breakdown, Sprint Plan, Roadmap, Traceability Matrix |
| 7. Implementation | Implementation Lead | Working code, tests, verification reports, CI/CD |

## Quick Start

### Install into Your Project
```bash
# Via npx
npx specforge-framework init

# Non-interactive (Claude Code)
npx specforge-framework init --tool claude-code --yes

# Or install directly from GitHub
npx github:NinjaCodeTurtle/specforge init --tool claude-code --yes

# Or via Claude Code's /install command
/install NinjaCodeTurtle/specforge
```

### Full Lifecycle (Greenfield Product)
```
/specforge:generate-all
```
Runs all 7 phases with quality gates between each.

### Single Phase
```
/specforge:discover              # Phase 1
/specforge:analyze-market        # Phase 2
/specforge:define-requirements   # Phase 3
/specforge:design-ux             # Phase 4
/specforge:design-architecture   # Phase 5
/specforge:plan-implementation   # Phase 6
/specforge:implement             # Phase 7
/specforge:add-feature           # Add feature to existing project
/specforge:test-coverage         # Analyze & fill testing gaps
```

### Validation
```
/specforge:validate              # Check readiness at any point
```

### Workflow Modes

| Mode | When to Use | Phases |
|------|------------|--------|
| **Full Lifecycle** | New product from scratch | All 7 |
| **Quick Spec** | Well-understood feature | 3 + 5 |
| **Brownfield** | Existing system enhancement | 0 (discovery) + 3-6 |

## Project Structure

```
specforge/
├── CLAUDE.md                    # AI agent configuration
├── README.md                    # This file
│
├── templates/                   # 22 production-grade document templates
│   ├── 01-product-brief.md      # ... through 15-traceability-matrix.md (Phases 1-6)
│   ├── 16-project-scaffold.md
│   ├── 17-story-implementation-report.md
│   ├── 18-sprint-verification-report.md
│   ├── 19-release-verification-report.md
│   ├── 20-implementation-progress-tracker.md
│   ├── 21-dependency-manifest.md
│   └── 22-cicd-pipeline-spec.md
│
├── framework/
│   ├── overview.md              # Detailed framework overview
│   ├── phases/                  # Phase-by-phase guides
│   │   ├── 01-discovery-vision/
│   │   ├── 02-market-analysis/
│   │   ├── 03-requirements-engineering/
│   │   ├── 04-ux-design-spec/
│   │   ├── 05-architecture-design/
│   │   ├── 06-implementation-planning/
│   │   └── 07-implementation/
│   ├── agents/                  # 8 specialized agent definitions
│   │   ├── strategist.md
│   │   ├── market-analyst.md
│   │   ├── requirements-analyst.md
│   │   ├── ux-strategist.md
│   │   ├── solutions-architect.md
│   │   ├── delivery-manager.md
│   │   ├── implementation-lead.md
│   │   └── orchestrator.md
│   ├── checklists/              # Quality gates and readiness assessment
│   │   ├── phase-gates.md       # Phase transition checklists
│   │   ├── readiness-assessment.md  # 43-item development readiness check
│   │   └── implementation-gates.md  # Three-tier implementation quality gates
│   └── workflows/               # Execution workflows
│       ├── full-lifecycle.md
│       ├── quick-spec.md
│       └── brownfield.md
│
├── skills/                      # 9 invocable skill definitions
│   ├── discover/SKILL.md
│   ├── analyze-market/SKILL.md
│   ├── define-requirements/SKILL.md
│   ├── design-ux/SKILL.md
│   ├── design-architecture/SKILL.md
│   ├── plan-implementation/SKILL.md
│   ├── implement/SKILL.md
│   ├── validate/SKILL.md
│   └── generate-all/SKILL.md
│
├── output/                      # Generated documents (per project)
├── examples/                    # Example outputs for reference
│
└── project/                     # Framework project management
    ├── PLAN.md
    ├── DECISIONS.md
    └── PROGRESS.md
```

## Template Highlights

Every template includes:
- **YAML frontmatter** for metadata and traceability
- **Instructional comments** (`<!-- -->`) guiding what to write in each section
- **Structured tables** for comparisons, requirements, and decision matrices
- **Validation checklists** for self-assessment before moving on
- **Industry frameworks** embedded where relevant (PESTEL, SWOT, MoSCoW, C4 Model, SMART, Jobs-to-be-Done, etc.)

## Quality Gates

Phase transitions require passing scored checklists (0-10 per item, minimum 7/10 average). The **Orchestrator** agent enforces these gates, ensuring:
- No phase is skipped
- Every artifact meets minimum quality standards
- Cross-phase consistency is maintained
- Requirements trace through to implementation stories

## Design Influences

| Framework | What We Took | What We Added |
|-----------|-------------|---------------|
| **BMAD** | Phase-gated lifecycle, agent personas, quality gates, HALT-based workflow | Market analysis phase, deeper requirements engineering, UX design phase |
| **GStack** | Role-based specialization, skill architecture, design review rigor | Pre-development focus, traceability matrix, formal use cases |
| **Harness Engineering** | SDD principles, progressive disclosure, anti-patterns, readiness assessment | 6 dedicated pre-dev phases, 15 templates, formal quality scoring |

## License

Apache 2.0
