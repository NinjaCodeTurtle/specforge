# SpecForge — AI Agent Configuration

## Project Overview
SpecForge is a comprehensive framework for crafting production-ready software specifications and driving their implementation. It guides teams through 7 phases: Discovery → Market Analysis → Requirements → UX Design → Architecture → Implementation Planning → Implementation.

## Key Commands
- `/specforge:discover` — Run Phase 1: Discovery & Vision
- `/specforge:analyze-market` — Run Phase 2: Market & Competitive Analysis
- `/specforge:define-requirements` — Run Phase 3: Requirements Engineering
- `/specforge:design-ux` — Run Phase 4: UX & Design Specification
- `/specforge:design-architecture` — Run Phase 5: Architecture & Technical Design
- `/specforge:plan-implementation` — Run Phase 6: Implementation Planning
- `/specforge:implement` — Run Phase 7: Implementation (code, test, verify)
- `/specforge:add-feature` — Add a new feature to an existing project (spec, implement, verify)
- `/specforge:validate` — Cross-phase validation and quality gate check
- `/specforge:generate-all` — Full lifecycle orchestration (all 7 phases)

## Project Structure
```
templates/           — 24 production-grade document templates (01-24)
framework/
  phases/            — Phase guides (01-07) with README.md each
  agents/            — 9 agent definitions (strategist through feature-engineer)
  checklists/        — Quality gate checklists, readiness assessment, implementation gates
  workflows/         — Full lifecycle, quick-spec, brownfield, and add-feature workflows
skills/              — 10 skill definitions (SKILL.md files for slash commands)
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
- Requirement IDs follow the pattern: REQ-XXX, US-XXX, UC-XXX, EPIC-XXX, FR-FEAT-XXX, US-FEAT-XXX
- All generated documents should be saved to `output/[project-name]/`
- Phase transitions require quality gate validation (minimum 7/10 average score)

## Quality Standards
- Every requirement must have acceptance criteria
- Every design decision must have rationale
- Every architecture choice must address security, scalability, and maintainability
- Every epic must trace back to requirements
- Every story must have Definition of Done criteria
- Every implemented story must have passing tests for all acceptance criteria
- Implementation must match specs exactly — no workarounds, no shortcuts
- Three-tier quality gates for implementation: Story (PASS/FAIL) → Sprint (7/10) → Release (8/10)
