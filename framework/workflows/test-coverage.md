---
workflow: test-coverage
description: "Analyze codebase testing gaps, create a prioritized test plan, implement missing test cases following project conventions, verify coverage improvement, and configure CI/CD coverage enforcement."
estimated_duration: "1-3 hours"
artifacts_produced: 2
---

# Test Coverage Workflow

## Overview

The Test Coverage workflow is designed for improving test coverage on any existing codebase. It detects the technology stack and testing conventions, measures a coverage baseline, performs risk-based gap analysis, creates a prioritized test plan, implements missing tests following existing conventions, verifies coverage improvement, and configures CI/CD enforcement.

This workflow acknowledges a reality of software development: test coverage is often insufficient, accrued gradually as a deficit alongside feature development. The Test Coverage workflow provides a structured, quality-gated process for closing that deficit systematically -- prioritizing by risk, following existing conventions, and delivering measurable improvement with enforcement to prevent regression.

Unlike most SpecForge workflows, this one is a standalone tool. It does not require Phase 1-7 artifacts, a specific project structure, or handoff from another agent. It works on any codebase that builds and has a test framework configured (or configurable).

## When to Use

Use the Test Coverage workflow when:

- A codebase has insufficient test coverage and needs a systematic improvement effort.
- Before adding new features -- build a safety net of tests first so regressions are caught early.
- Post-implementation quality improvement -- the feature is shipped but tests are thin.
- Compliance or audit requirements mandate minimum coverage thresholds.
- Onboarding new team members -- tests serve as executable documentation of how the system behaves.
- Preparing for a major refactoring effort -- tests must exist before refactoring to verify behavior is preserved.
- Technical debt reduction initiative -- systematically improving the test suite as part of a quality push.

## When NOT to Use

Do NOT use when:

- **No codebase exists** -- there is nothing to test. Use **Full Lifecycle** to build the product first.
- **The codebase does not compile or run** -- fix build issues first. Coverage analysis requires executing the test suite, which requires a buildable project.
- **Fundamental architecture issues need resolution first** -- if the code is untestable due to tight coupling, global state, or missing dependency injection, refactoring is needed before testing. This workflow does not refactor code.
- **The codebase is being replaced entirely** -- do not invest in test coverage for code that will be discarded.
- **You need to write the application, not just the tests** -- this workflow writes tests for existing code. It does not write production code, fix bugs, or add features.

## Prerequisites

1. **Working codebase** that builds and runs successfully. The project must compile (or interpret) without errors.
2. **Test framework configured** or configurable for the detected language/stack. If no test framework is present, the agent will recommend and set one up, but the user must approve.
3. **Source control** -- the codebase should be under version control so test additions can be reviewed, and reverted if necessary.

This workflow does NOT require:

- Phase 1-7 SpecForge artifacts
- Existing test coverage (handles codebases with zero tests)
- CI/CD pipeline (will recommend configuration if none exists)
- Any specific language, framework, or toolchain

## Workflow Summary

```
Codebase Discovery ──> HALT: Confirm Tech Stack & Scope
                                    │
                                    v
                         Coverage Baseline Measurement
                                    │
                                    v
                              Gap Analysis
                                    │
                                    v
                         HALT: Review Gap Analysis
                                    │
                                    v
                       Generate Test Coverage Plan
                                    │
                                    v
                        HALT: Approve Test Plan
                                    │
                                    v
                   ┌─> Implement Test Cases ─────┐
                   │   (unit → integration → e2e) │
                   │   (critical → low priority)  │
                   │           │                   │
                   │           v                   │
                   │   Run & verify new tests      │
                   │   Run full suite (regression) │
                   │           │                   │
                   └───────────┘  (repeat per      │
                                   priority level) │
                                    │
                                    v
                         Coverage Verification
                                    │
                                    v
                       HALT: Coverage Results
                                    │
                                    v
                         CI/CD Integration
                                    │
                                    v
                    Generate Test Coverage Report
```

### Artifact Dependency Map

```
Existing Codebase ──────────────────┐
                                    ├──> Test Coverage Plan (template 25)
Coverage Baseline + Gap Analysis ───┘           │
                                                v
                                    Test Coverage Report (template 26)
```

## Workflow Steps

| Step | Name | Type | Description |
|------|------|------|-------------|
| 1 | Codebase Discovery & Tech Stack Detection | Automated | Scan config files, detect stack, read test conventions |
| 2 | Confirm Tech Stack & Scope | **HALT** | Present detected stack, ask scope/targets/exclusions |
| 3 | Coverage Baseline Measurement | Automated | Run tests with coverage, capture baseline metrics |
| 4 | Gap Analysis | Automated | Parse coverage, categorize files, prioritize gaps by risk |
| 5 | Review Gap Analysis | **HALT** | Present gap summary and priorities for confirmation |
| 6 | Generate Test Coverage Plan | Automated | Produce template 25 artifact |
| 7 | Approve Test Plan | **HALT** | Last gate before writing tests |
| 8 | Implement Test Cases | Automated | Write tests by priority and type, verify each batch |
| 9 | Coverage Verification | Automated | Run full suite with coverage, compare against targets |
| 10 | Coverage Results | **HALT** | Present before/after, ask accept or implement more |
| 11 | CI/CD Integration | Automated | Add coverage thresholds and reporting to CI config |
| 12 | Generate Test Coverage Report | Automated | Produce template 26 artifact |

**HALT points**: 4 (Steps 2, 5, 7, 10)

## Artifacts Produced

| # | Artifact | File | Description |
|---|----------|------|-------------|
| 25 | Test Coverage Plan | `output/25-test-coverage-plan.md` | Prioritized test list, gap analysis, implementation order, conventions guide |
| 26 | Test Coverage Report | `output/26-test-coverage-report.md` | Before/after metrics, test inventory, CI/CD configuration, recommendations |

## What It Intentionally Skips

This workflow is scoped to test coverage improvement. It intentionally does not include:

- **Code refactoring.** If code is untestable due to tight coupling or poor structure, the workflow documents this as a gap but does not refactor the production code. Refactoring is a separate effort.
- **Bug fixing.** If tests reveal bugs (the test correctly fails because the code is wrong), the workflow documents the bug but does not fix production code. The test is written to match the correct behavior and marked as expected-to-fail or skipped with documentation.
- **Architecture changes.** The workflow does not modify the application's architecture, add dependency injection, or restructure modules to improve testability.
- **New feature development.** No production code is written. The workflow only adds test code and coverage configuration.
- **Specification generation.** No SpecForge Phase 1-7 artifacts are created. This is a standalone testing tool, not a planning tool.
- **Performance testing.** Coverage analysis focuses on functional correctness (unit, integration, e2e), not load testing, stress testing, or benchmarking.

## Escalation Triggers

Switch to a different approach if any of these conditions are discovered during the Test Coverage process:

| Trigger | Escalate To | Reason |
|---------|-------------|--------|
| Codebase does not build or run | **Build stabilization** | Cannot run tests without a buildable project |
| No test framework available for the stack | **Manual setup** | Agent cannot configure an unknown or unsupported test framework |
| Existing tests are massively failing (>50% failures) | **Test stabilization** | Must fix existing failures before adding new tests |
| Code is fundamentally untestable (global state, tight coupling, no DI) | **Refactoring effort** | Production code must be restructured before meaningful tests can be written |
| Coverage tool cannot be configured for the stack | **Manual configuration** | User must set up coverage tooling before the workflow can measure baselines |
| Critical security vulnerabilities discovered during analysis | **Security remediation** | Security issues take priority over coverage improvement |

## Estimated Duration

| Codebase Size | Duration | Characteristics |
|---------------|----------|-----------------|
| Small (<10k LOC) | ~1 hour | Few source files, straightforward test patterns, limited branching |
| Medium (10-50k LOC) | ~2 hours | Multiple modules, varied code patterns, moderate branching complexity |
| Large (50k+ LOC) | 3+ hours | Many modules, complex business logic, extensive branching, multiple test types needed |

Duration depends on: codebase size, code complexity, existing coverage level (lower baseline means more tests to write), test framework familiarity, number of HALT-point iterations with the user, and whether coverage tooling needs to be set up from scratch.

## Key Differences from Other Workflows

| Aspect | Full Lifecycle | Brownfield | Add Feature | Test Coverage |
|--------|---------------|------------|-------------|---------------|
| Starting point | Blank slate | Existing codebase, no specs | Codebase + specs | Any codebase |
| Scope | Entire product | Entire system retrofit | Single feature | Test suite only |
| Prerequisites | None | Existing codebase | Phase 1-7 artifacts + codebase | Working codebase + test framework |
| Production code written | Yes | No (planning only) | Yes | No |
| Test code written | Yes (during implementation) | No | Yes (per story) | Yes (primary output) |
| SpecForge artifacts required | N/A (creates them) | No | Yes | No |
| Primary risk | Market + technical | Migration + regression | Regression + compatibility | Flaky tests + coverage padding |
| Typical duration | 6-12 hours | 3-6 hours | 1-4 hours | 1-3 hours |

## Common Test Coverage Pitfalls

1. **Writing tests for coverage, not confidence.** It is tempting to write the quickest test that covers a line. But a test that checks "function returns without throwing" does not verify behavior. Every test must assert on a specific expected outcome. Coverage percentage is the metric; confidence is the goal.

2. **Ignoring error paths.** Happy-path testing is easy and feels productive. But most production incidents come from untested error handling -- malformed inputs, unavailable dependencies, expired tokens, race conditions. Test the sad paths with the same rigor as the happy paths.

3. **Introducing new conventions.** The Test Coverage Analyst should follow existing patterns, not introduce better ones. A test suite with three different mocking strategies is harder to maintain than one with a single consistent approach, even if the new approach is technically superior.

4. **Inverted test pyramid.** Writing many e2e tests because "they test everything" creates a slow, brittle, expensive test suite. Most tests should be unit tests. Integration tests cover interactions. E2E tests cover critical journeys only.

5. **Flaky tests.** A test that passes 95% of the time is not a passing test -- it is a source of noise that trains the team to ignore failures. Every test must be deterministic. Mock time, network, and external state.

6. **Not running the full suite after additions.** New tests can interfere with existing tests (shared state, port conflicts, database pollution). Run the full suite after each batch of additions, not just the new tests in isolation.
