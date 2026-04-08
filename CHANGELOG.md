# Changelog

All notable changes to this repository will be documented in this file.

The format is based on Keep a Changelog and the repository uses calendar dates
for documentation releases.

## 2026-04-08 (v0.3.0)

### Added

- `/specforge:add-feature` command for adding features to existing projects
- Feature Engineer agent ("Extender") with 9 principles including regression safety
- 2 new templates (23-24): Feature Spec (consolidated single-doc), Feature Delivery Report
- Feature Gate (Tier 4) quality checklist with 10 regression-focused items
- Add-feature workflow document with escalation triggers
- Impact analysis as a first-class concept (architecture, API, data model, code, tests)

---

## 2026-04-07 (v0.2.0)

### Added

- Phase 7: Implementation — transforms specifications into working, tested code
- Implementation Lead agent ("Engineer") with three sub-roles: Code, Test, Review
- 7 new templates (16-22): Project Scaffold, Story/Sprint/Release Verification Reports, Progress Tracker, Dependency Manifest, CI/CD Pipeline Spec
- `/specforge:implement` skill for Phase 7 execution
- Three-tier implementation quality gates (Story PASS/FAIL, Sprint 7/10, Release 8/10)
- Implementation gates checklist with 34 total quality criteria

### Changed

- Framework expanded from 6 phases to 7 phases
- CLI installs to `.claude/commands/` for proper slash command discovery
- npm package renamed to `specforge-framework` (avoid name conflict)
- Updated all documentation to reflect Phase 7

---

## 2026-04-07 (v0.1.0)

### Added

- Initial release of SpecForge framework
- 15 production-grade document templates (Product Brief through Traceability Matrix)
- 6 phase guides covering Discovery, Market Analysis, Requirements, UX Design, Architecture, and Implementation Planning
- 7 agent definitions (Strategist, Market Analyst, Requirements Analyst, UX Strategist, Solutions Architect, Delivery Manager, Orchestrator)
- 8 skills for slash command invocation
- 3 workflow modes (Full Lifecycle, Quick Spec, Brownfield)
- Quality gate checklists for all 6 phase transitions
- 43-item Development Readiness Assessment
- CLI installer supporting Claude Code, Cursor, and Codex
- Interactive setup script
- Claude Code marketplace registration
- Community health files (Contributing, Code of Conduct, Security Policy)
- GitHub Actions CI for markdown linting, link checking, and tests
