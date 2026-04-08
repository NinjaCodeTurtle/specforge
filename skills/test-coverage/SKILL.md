---
name: "specforge:test-coverage"
description: "Analyze codebase testing gaps, create a prioritized test plan, implement missing test cases following project conventions, verify coverage improvement, and configure CI/CD coverage enforcement."
role: "Test Coverage Analyst"
phase: "post-implementation"
produces:
  - "Test Coverage Plan (template 25)"
  - "Test Coverage Report (template 26)"
---

# /specforge:test-coverage -- Test Coverage Analysis & Implementation

## Purpose

This skill analyzes an existing codebase for testing gaps, creates a prioritized test plan, implements missing test cases following existing project conventions, verifies coverage improvement against defined targets, and configures CI/CD coverage enforcement.

This skill operates in the post-implementation phase. It acts as a **Test Coverage Analyst (Inspector)** -- examining the codebase for untested code paths, categorizing gaps by risk, writing meaningful tests that follow existing conventions exactly, and delivering measurable coverage improvement with CI/CD enforcement.

Unlike other SpecForge skills, this skill does NOT require Phase 1-7 SpecForge artifacts. It works on any codebase that builds and runs. Its only prerequisites are a working codebase with a test framework configured (or configurable). When this skill is complete, the codebase has improved test coverage, a prioritized test plan, a before/after coverage report, and CI/CD coverage thresholds configured.

## Prerequisites

- **Working codebase** that builds and runs successfully.
- **Test framework** configured or configurable for the detected language/stack.
- **Source control** -- the codebase should be under version control so changes can be reviewed and reverted.

This skill does NOT require:

- Phase 1-7 SpecForge artifacts (product brief, PRD, architecture doc, etc.)
- Existing test coverage (the skill handles codebases with zero tests)
- CI/CD pipeline (the skill will recommend configuration if none exists)

## Workflow Steps

### Step 1: Codebase Discovery & Tech Stack Detection

Scan the codebase to build a complete understanding of the technology stack and testing landscape:

1. **Configuration files**: Scan for `package.json`, `tsconfig.json`, `pyproject.toml`, `setup.py`, `go.mod`, `pom.xml`, `build.gradle`, `Cargo.toml`, `Gemfile`, `composer.json`, `.csproj`, and similar files to detect language, framework, and dependencies.
2. **Test framework detection**: Identify the test framework(s) in use -- Jest, Vitest, Mocha, pytest, unittest, Go testing, JUnit, RSpec, PHPUnit, xUnit, Catch2, etc. Detect test runners, assertion libraries, and mocking frameworks.
3. **Coverage tool detection**: Identify existing coverage tools -- Istanbul/nyc, c8, coverage.py, go tool cover, JaCoCo, SimpleCov, etc. Check for existing coverage configuration (thresholds, reporters, exclusion patterns).
4. **Directory structure**: Map the source directory layout -- where source code lives, where tests live, the relationship between source and test directories (co-located, mirrored, flat).
5. **Existing test files**: Read existing test files to learn project conventions:
   - Naming conventions (`.test.ts`, `.spec.js`, `_test.go`, `test_*.py`, `*Test.java`, etc.)
   - File organization (one test file per source file, grouped by feature, grouped by type)
   - Import patterns and test utilities
   - Mocking strategies (dependency injection, module mocks, test doubles, fakes)
   - Assertion style (expect/toBe, assert, should, custom matchers)
   - Setup/teardown patterns (beforeEach, fixtures, factories, test helpers)
   - Test grouping (describe/it, test classes, subtests)
6. **Build and run verification**: Confirm the project builds and existing tests can be executed.

### Step 2: HALT -- Confirm Tech Stack & Scope

> **HALT POINT**: Present the detected technology stack and testing landscape:
> - "Detected language/framework: [language] / [framework]"
> - "Test framework: [test framework] with [assertion library] and [mocking library]"
> - "Coverage tool: [tool] (configured / not configured)"
> - "Existing tests: [count] test files, [count] test cases"
> - "Test conventions: [naming pattern], [organization pattern], [mocking strategy]"
> - "Directory structure: [source dir] -> [test dir]"
>
> Then ask:
> 1. "What is the scope? Whole project, or specific directories/modules?" (default: whole project)
> 2. "What are your coverage targets?" (defaults: 80% line, 70% branch, 80% function)
> 3. "Are there any files or directories to exclude from coverage analysis?"
> 4. "Are there any priority areas or known gaps I should focus on first?"
>
> Wait for user responses before proceeding.

### Step 3: Coverage Baseline Measurement

Run the existing test suite with coverage instrumentation to establish the baseline:

1. **Execute tests with coverage**: Run the full test suite with the detected (or configured) coverage tool.
2. **Capture baseline metrics**:
   - Line coverage percentage
   - Branch coverage percentage
   - Function coverage percentage
   - Statement coverage percentage (if available)
   - Total test count, passing, failing, skipped
   - Test execution time
3. **Coverage tool setup** (if needed): If no coverage tool is configured, recommend and configure one appropriate for the stack:
   - Node.js: c8 or Istanbul/nyc
   - Python: coverage.py with pytest-cov
   - Go: built-in `go test -cover`
   - Java: JaCoCo
   - Ruby: SimpleCov
   - Other: recommend the standard tool for the ecosystem
4. **Record baseline**: Store baseline metrics for comparison in Step 9.

If existing tests are failing, report the failures and ask the user whether to proceed with the passing subset or pause to fix failures first.

### Step 4: Gap Analysis

Parse the coverage report and analyze testing gaps systematically:

1. **Parse coverage data**: Read the detailed coverage report (per-file, per-function, per-line).
2. **Categorize source files** by architectural role:
   - **API layer**: Controllers, route handlers, middleware, request/response handling
   - **Business logic**: Services, domain models, use cases, workflows
   - **Data access**: Repositories, database queries, ORM models, migrations
   - **Utilities**: Helpers, formatters, validators, parsers
   - **Middleware**: Authentication, authorization, logging, error handling
   - **Models/Types**: Data structures, schemas, type definitions
   - **Configuration**: App setup, dependency injection, environment handling
3. **Identify untested code**: For each source file, identify:
   - Completely untested files (0% coverage)
   - Untested functions within partially covered files
   - Untested branches (if/else paths, switch cases, error handlers, guard clauses)
   - Untested error paths (catch blocks, error callbacks, validation failures)
4. **Prioritize gaps by risk level**:
   - **Critical** (P0): Authentication, authorization, payment processing, security-sensitive code, data mutation endpoints, encryption/hashing
   - **High** (P1): Core business logic, public API endpoints, data validation, database operations, user-facing workflows
   - **Medium** (P2): Utility functions, internal helpers, formatting/parsing, non-critical middleware
   - **Low** (P3): Configuration files, constants, type definitions, generated code, third-party wrappers

### Step 5: HALT -- Review Gap Analysis

> **HALT POINT**: Present the gap analysis summary:
> - "Baseline coverage: [line]% line, [branch]% branch, [function]% function"
> - "Files analyzed: [total] ([covered] with tests, [uncovered] without)"
> - "Gap breakdown by priority:"
>   - "Critical (P0): [count] functions across [count] files -- [examples]"
>   - "High (P1): [count] functions across [count] files -- [examples]"
>   - "Medium (P2): [count] functions across [count] files -- [examples]"
>   - "Low (P3): [count] functions across [count] files -- [examples]"
> - "Estimated new tests needed: [count] (unit: [N], integration: [N], e2e: [N])"
> - "Projected coverage after implementation: ~[X]% line, ~[X]% branch"
>
> Ask: "Does this gap analysis look correct? Should I adjust priorities or exclude any areas?"

### Step 6: Generate Test Coverage Plan

Produce the Test Coverage Plan from template 25:

- **File**: `output/25-test-coverage-plan.md`
- **Contents**: Technology stack summary, baseline metrics, gap analysis results, prioritized test list (grouped by priority and category), implementation order, coverage targets, estimated effort, and conventions guide (so tests are written consistently).
- **Format**: Markdown with YAML frontmatter. Tables for gap inventory and priority matrix. HTML instruction comments removed.

The Test Coverage Plan is the roadmap for all test implementation. Each entry specifies the source file, function/method, test type (unit/integration/e2e), priority, and a brief description of what the test should verify.

### Step 7: HALT -- Approve Test Plan

> **HALT POINT**: Present the Test Coverage Plan summary:
> - "Test Coverage Plan generated: `output/25-test-coverage-plan.md`"
> - "Total tests to implement: [count]"
> - "By priority: [P0 count] critical, [P1 count] high, [P2 count] medium, [P3 count] low"
> - "By type: [unit count] unit, [integration count] integration, [e2e count] e2e"
> - "This is the last gate before writing tests."
>
> Ask: "Do you approve this Test Coverage Plan? Once approved, I will begin implementing tests priority-by-priority."

### Step 8: Implement Test Cases

Implement tests following the Test Coverage Plan, working through priority levels and the test pyramid:

#### Implementation Order

1. **Critical (P0)** tests first -- these protect the most important code paths.
2. **High (P1)** tests next -- core business logic and API coverage.
3. **Medium (P2)** tests -- utilities and helpers.
4. **Low (P3)** tests -- only if needed to meet coverage targets.

Within each priority level, follow the test pyramid:

- **Unit tests first** (most tests here) -- isolated, fast, focused on single functions/methods.
- **Integration tests second** -- test interactions between components, API request/response cycles, database operations.
- **E2E tests last** (fewest tests here) -- critical user journeys only.

#### Implementation Process (per test file)

1. **Read the source file** to understand the function signatures, parameters, return types, error conditions, and edge cases.
2. **Write tests following detected conventions exactly**:
   - Use the same naming pattern as existing tests
   - Use the same file organization (co-located or mirrored)
   - Use the same imports, test utilities, and helpers
   - Use the same mocking strategy and assertion style
   - Use the same setup/teardown patterns
   - Use the same test grouping structure
3. **Test cases to include for each function**:
   - Happy path with typical inputs
   - Edge cases (empty inputs, boundary values, null/undefined)
   - Error cases (invalid inputs, thrown exceptions, rejected promises)
   - Branch coverage (all if/else paths, switch cases, guard clauses)
4. **Run the new tests** immediately after writing to confirm they pass.
5. **Run the full test suite** periodically to catch regressions -- new tests must not break existing tests.

#### Test Quality Standards

- Every test must assert on business-relevant behavior, not implementation details.
- No "does not throw" only tests -- every test must make a meaningful assertion about the output or side effects.
- Test descriptions must clearly state what behavior is being verified.
- Tests must be deterministic -- no flaky tests, no time-dependent assertions without mocking, no order-dependent tests.
- Mocks must be minimal -- only mock external dependencies, not the code under test.

### Step 9: Coverage Verification

After implementing all planned tests, run the full test suite with coverage to measure improvement:

1. **Run full test suite with coverage**: Execute all tests (existing and new) with coverage instrumentation.
2. **Capture after-metrics**:
   - Line coverage percentage (before vs. after)
   - Branch coverage percentage (before vs. after)
   - Function coverage percentage (before vs. after)
   - Total test count (before vs. after)
   - Test execution time (before vs. after)
   - Pass/fail/skip counts
3. **Compare against targets**: Check whether the user's coverage targets (from Step 2) are met.
4. **Identify remaining gaps**: List any files or functions still below the target thresholds.

### Step 10: HALT -- Coverage Results

> **HALT POINT**: Present the before/after coverage comparison:
> - "Coverage improvement:"
>   - "Line: [before]% -> [after]% (target: [target]%) -- [MET/NOT MET]"
>   - "Branch: [before]% -> [after]% (target: [target]%) -- [MET/NOT MET]"
>   - "Function: [before]% -> [after]% (target: [target]%) -- [MET/NOT MET]"
> - "Tests: [before count] -> [after count] (+[new count] new tests)"
> - "All tests passing: [yes/no]"
> - "Execution time: [before] -> [after]"
> - "Remaining gaps (if any): [list of files/functions still below target]"
>
> Ask: "Do you accept these coverage results, or should I implement additional tests for the remaining gaps?"

### Step 11: CI/CD Integration

Configure coverage enforcement in the project's CI/CD pipeline:

1. **Detect existing CI configuration**: Check for `.github/workflows/`, `.gitlab-ci.yml`, `Jenkinsfile`, `.circleci/config.yml`, `azure-pipelines.yml`, `bitbucket-pipelines.yml`, or similar.
2. **Add coverage thresholds**: Configure the coverage tool to enforce minimum thresholds (fail the build if coverage drops below the targets).
   - Jest: `coverageThreshold` in `jest.config`
   - pytest-cov: `--cov-fail-under` flag
   - Go: custom threshold check in CI script
   - JaCoCo: `<rule>` elements in configuration
   - Istanbul/nyc: `check-coverage` command with thresholds
3. **Add coverage reporting**: Configure coverage report generation in CI (HTML, LCOV, or Cobertura format for CI integration).
4. **Add coverage comment/badge** (if applicable): Configure PR coverage comments or README badges.
5. **Verify CI configuration**: If possible, run the CI configuration locally to verify it works.

If no CI/CD pipeline exists, recommend a configuration and document the setup in the Test Coverage Report.

### Step 12: Generate Test Coverage Report

Produce the Test Coverage Report from template 26:

- **File**: `output/26-test-coverage-report.md`
- **Contents**: Executive summary, technology stack, baseline metrics, gap analysis summary, tests implemented (inventory with file paths and descriptions), before/after coverage comparison, coverage targets met/not-met, CI/CD configuration changes, remaining gaps (if any), and recommendations for ongoing coverage maintenance.
- **Format**: Markdown with YAML frontmatter. Tables for metrics comparison and test inventory. HTML instruction comments removed.

## Output

- **Primary artifacts**:
  - `output/25-test-coverage-plan.md` -- Prioritized test plan with gap analysis, implementation order, and conventions guide.
  - `output/26-test-coverage-report.md` -- Before/after coverage report with test inventory, metrics comparison, CI/CD configuration, and recommendations.
- **Secondary outputs**:
  - New test files written to the project's test directory following existing conventions.
  - Coverage tool configuration (if newly set up or modified).
  - CI/CD configuration updates for coverage enforcement.
- **Location**: Artifacts written to the project's `output/` directory. Test files written to the project's test directory.
- **Format**: Markdown with YAML frontmatter. Tables for metrics. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every test case from the Test Coverage Plan is implemented and passing.
2. All new tests pass consistently -- no flaky tests.
3. No existing tests are broken by new test additions.
4. Line coverage target is met (or justified deviation is documented).
5. Branch coverage target is met (or justified deviation is documented).
6. Function coverage target is met (or justified deviation is documented).
7. New tests follow existing project conventions exactly (naming, structure, mocking, assertions).
8. Every test asserts on business-relevant behavior, not just code execution.
9. CI/CD coverage thresholds are configured and enforced.
10. The Test Coverage Report accurately reflects the before/after state.
11. No placeholder text remains in any artifact.

## Tips

- **Test behavior, not implementation.** Tests should verify what a function does, not how it does it. A test that breaks when you refactor internals (without changing behavior) is a brittle test. Assert on outputs and observable side effects, not internal state.
- **Error paths are as important as happy paths.** Most production incidents come from untested error handling. Test what happens when the database is unavailable, the API returns 500, the input is malformed, the user is unauthorized, or the disk is full.
- **No flaky tests.** A flaky test is worse than no test -- it trains the team to ignore test failures. If a test depends on timing, network, or external state, mock those dependencies. If a test is order-dependent, fix the isolation.
- **Meaningful assertions only.** A test that only checks "does not throw" is not testing behavior -- it is testing that the code runs without crashing, which is the lowest possible bar. Every test should assert on a specific expected output, state change, or side effect.
- **Follow conventions exactly.** Do not introduce new testing patterns, assertion libraries, or mocking strategies. If the project uses Jest with `jest.mock()`, do not switch to manual dependency injection. If the project uses pytest fixtures, do not use `unittest.mock.patch` instead. Consistency is more valuable than your preferred approach.
- **The test pyramid matters.** Most tests should be unit tests (fast, isolated, focused). Integration tests should cover component interactions and API contracts. E2E tests should cover critical user journeys only. An inverted pyramid (many e2e, few unit) is slow, brittle, and expensive to maintain.
- **Coverage is a metric, not a goal.** The goal is confidence in the code. 80% coverage with meaningful tests is better than 100% coverage with trivial assertions. Do not write tests that exist solely to increase the coverage number without verifying meaningful behavior.
- **When conventions are ambiguous, HALT.** If the existing test files use inconsistent patterns, or if you are unsure how to test a particular function, stop and ask rather than guessing. A test written with the wrong pattern is technical debt.
