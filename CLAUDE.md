# SpecForge — AI Agent Configuration

## Project Overview
SpecForge is a comprehensive framework for creating production-ready software specifications. It guides teams through 6 phases of pre-development documentation: Discovery → Market Analysis → Requirements → UX Design → Architecture → Implementation Planning.

## Key Commands
- `/specforge:discover` — Run Phase 1: Discovery & Vision
- `/specforge:analyze-market` — Run Phase 2: Market & Competitive Analysis
- `/specforge:define-requirements` — Run Phase 3: Requirements Engineering
- `/specforge:design-ux` — Run Phase 4: UX & Design Specification
- `/specforge:design-architecture` — Run Phase 5: Architecture & Technical Design
- `/specforge:plan-implementation` — Run Phase 6: Implementation Planning
- `/specforge:validate` — Cross-phase validation and quality gate check
- `/specforge:generate-all` — Full lifecycle orchestration (all 6 phases)

## Project Structure
```
templates/           — 15 production-grade document templates (01-15)
framework/
  phases/            — Phase guides (01-06) with README.md each
  agents/            — 7 agent definitions (strategist, analyst, architect, etc.)
  checklists/        — Quality gate checklists and readiness assessment
  workflows/         — Full lifecycle, quick-spec, and brownfield workflows
skills/              — 8 skill definitions (SKILL.md files for slash commands)
output/              — Generated documents go here (per-project)
examples/            — Example outputs for reference
project/             — Project management docs (plan, decisions, progress)
```

## How to Use This Framework
1. Read `framework/overview.md` for the full picture
2. Start with the appropriate skill command for your phase
3. Templates in `templates/` are filled in by agents and saved to `output/`
4. Quality gates in `framework/checklists/phase-gates.md` validate transitions
5. Agent definitions in `framework/agents/` define each specialist's behavior

## Conventions
- Template files use YAML frontmatter for metadata
- HTML comments (`<!-- -->`) in templates contain guidance to be removed in final output
- Requirement IDs follow the pattern: REQ-XXX, US-XXX, UC-XXX, EPIC-XXX
- All generated documents should be saved to `output/[project-name]/`
- Phase transitions require quality gate validation (minimum 7/10 average score)

## Quality Standards
- Every requirement must have acceptance criteria
- Every design decision must have rationale
- Every architecture choice must address security, scalability, and maintainability
- Every epic must trace back to requirements
- Every story must have Definition of Done criteria
