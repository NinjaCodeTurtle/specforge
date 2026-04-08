---
document_type: quality-gates
version: "1.0"
applies_to: "test-coverage"
---

# Coverage Gate

## Overview

The Coverage Gate is the quality gate for the `/specforge:test-coverage` workflow. It evaluates the completeness and quality of the test coverage improvement effort -- verifying that planned tests are implemented, coverage targets are met, existing tests are intact, and CI/CD enforcement is configured.

Unlike the Story/Sprint/Release gates used in implementation workflows, the Coverage Gate is a single-tier gate applied once, after all test implementation is complete and coverage verification has been performed.

---

## Scoring

**Scoring System:**
- Each item is scored **0-10**
- **0** = Not addressed at all
- **3** = Mentioned but superficial or incomplete
- **5** = Addressed with notable gaps
- **7** = Solid coverage with minor gaps
- **10** = Thoroughly addressed, no meaningful gaps

**Pass Criteria:**
- **Average score >= 7.0** across all 8 items
- **No individual item below 4** (a score below 4 indicates a critical gap that blocks the gate)
- **No conditional pass** -- the Coverage Gate is pass/fail only

---

## Coverage Gate Checklist

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | All planned test cases from the Test Coverage Plan are implemented | [ ] |
| 2 | All new tests pass consistently (no flaky tests) | [ ] |
| 3 | No existing tests broken by new test additions | [ ] |
| 4 | Line coverage target met (or justified deviation documented) | [ ] |
| 5 | Branch coverage target met (or justified deviation documented) | [ ] |
| 6 | New tests follow existing project conventions (naming, structure, mocking, assertions) | [ ] |
| 7 | Tests are meaningful -- each test asserts on business-relevant behavior, not just execution | [ ] |
| 8 | CI/CD coverage thresholds configured and enforced | [ ] |

**Average Score:** [ ] / 10
**Minimum Score:** [ ] (Item #[ ])
**Result:** PASS / FAIL

---

## Criterion Details

### 1. All planned test cases from the Test Coverage Plan are implemented

Every test case listed in `output/25-test-coverage-plan.md` has a corresponding implemented test. No planned tests are skipped, deferred, or marked as "TODO." If a planned test was determined to be unnecessary during implementation, the deviation is documented with justification.

- **10**: Every planned test case is implemented. Zero gaps.
- **7**: 90%+ of planned tests implemented. Remaining gaps are minor (low-priority items) and documented.
- **5**: 70-90% implemented. Notable gaps in medium-priority areas.
- **3**: 50-70% implemented. Significant gaps including high-priority items.
- **0**: Less than 50% of planned tests implemented.

### 2. All new tests pass consistently (no flaky tests)

Every newly written test passes reliably across multiple consecutive runs. No tests exhibit intermittent failures due to timing, ordering, shared state, network dependencies, or non-deterministic behavior.

- **10**: All new tests pass on every run. Zero flakiness observed.
- **7**: All tests pass. One or two tests required minor fixes for determinism during implementation (but are now stable).
- **5**: Most tests pass, but 1-2 tests show occasional flakiness that has not been fully resolved.
- **3**: Multiple tests are flaky. The new test suite is not reliable.
- **0**: New tests are failing or massively flaky.

### 3. No existing tests broken by new test additions

The pre-existing test suite continues to pass in its entirety. No existing tests were modified to make them pass (weakened assertions, broadened tolerances, added skips). No existing tests were deleted or disabled.

- **10**: All pre-existing tests pass unmodified. Zero regressions.
- **7**: All pre-existing tests pass. Minor test infrastructure changes were made (e.g., shared test utility updated) but no assertions were weakened.
- **5**: 1-2 existing tests required modification due to legitimate shared state issues. Changes are documented and justified.
- **3**: Multiple existing tests were modified or skipped to accommodate new tests.
- **0**: Existing tests are failing or have been deleted/disabled.

### 4. Line coverage target met (or justified deviation documented)

The line coverage percentage meets or exceeds the target agreed upon in Step 2 (default: 80%). If the target is not met, a specific justification is documented explaining which areas remain below threshold and why.

- **10**: Line coverage target met or exceeded.
- **7**: Within 5 percentage points of target. Remaining gaps are in low-risk areas and documented.
- **5**: Within 10 percentage points of target. Notable gaps documented with justification.
- **3**: More than 10 points below target. Gaps include high-priority areas.
- **0**: No meaningful improvement from baseline, or coverage decreased.

### 5. Branch coverage target met (or justified deviation documented)

The branch coverage percentage meets or exceeds the target agreed upon in Step 2 (default: 70%). If the target is not met, a specific justification is documented explaining which branches remain untested and why.

- **10**: Branch coverage target met or exceeded.
- **7**: Within 5 percentage points of target. Untested branches are in low-risk code paths and documented.
- **5**: Within 10 percentage points of target. Notable gaps documented with justification.
- **3**: More than 10 points below target. Untested branches include error handling or security paths.
- **0**: No meaningful improvement from baseline, or coverage decreased.

### 6. New tests follow existing project conventions

All newly written tests match the existing project's testing conventions exactly: file naming pattern, directory organization, import style, test grouping structure, assertion library and style, mocking strategy, setup/teardown patterns, and test data management approach.

- **10**: New tests are indistinguishable from existing tests in style and convention. A reviewer could not tell which tests are new based on style alone.
- **7**: New tests follow conventions with very minor stylistic differences (e.g., slightly different description wording). No structural or pattern differences.
- **5**: New tests mostly follow conventions but introduce minor pattern variations (e.g., different assertion style in some tests, inconsistent test grouping).
- **3**: New tests introduce noticeably different patterns (different mocking approach, different file organization, different naming convention).
- **0**: New tests ignore existing conventions entirely.

### 7. Tests are meaningful -- each test asserts on business-relevant behavior

Every new test makes a specific assertion about expected behavior -- verifying outputs, state changes, side effects, or error conditions. No tests exist solely to execute code without verifying results. No "does not throw" only tests. No trivial assertions that do not verify meaningful behavior.

- **10**: Every test verifies specific business-relevant behavior. Test descriptions clearly state what is being proven. Edge cases, error paths, and boundary conditions are tested alongside happy paths.
- **7**: Tests are meaningful overall. A few tests could have stronger assertions or cover additional edge cases, but no tests are trivial.
- **5**: Most tests are meaningful, but some tests are thin (e.g., only testing happy path, shallow assertions, missing error case coverage).
- **3**: Many tests are superficial -- they execute code but make weak or missing assertions. Coverage is inflated beyond actual confidence.
- **0**: Tests are primarily coverage padding with no meaningful behavioral verification.

### 8. CI/CD coverage thresholds configured and enforced

The project's CI/CD pipeline (or coverage tool configuration) includes minimum coverage thresholds that will fail the build if coverage drops below the targets. Coverage reporting is configured to generate reports on each CI run.

- **10**: Coverage thresholds configured in CI/CD, coverage reporting enabled, thresholds match agreed targets, and the configuration has been verified to work (build fails when coverage drops).
- **7**: Coverage thresholds configured and coverage reporting enabled. Configuration appears correct but has not been verified with a failing case.
- **5**: Coverage thresholds configured but coverage reporting is missing, or thresholds are set but not at the agreed targets.
- **3**: Coverage reporting is configured but no enforcement thresholds are set (coverage is measured but not enforced).
- **0**: No CI/CD coverage configuration. No enforcement mechanism.

---

## Common Failure Reasons

| Item | Common Failure | Root Cause | Impact |
|------|---------------|------------|--------|
| 1 | Planned tests partially implemented | Ran out of time or skipped low-priority items without documentation | Gap between plan and reality; plan loses credibility |
| 2 | Flaky tests in new suite | Time-dependent assertions, shared state between tests, unmocked network calls | Erodes trust in the test suite; team ignores failures |
| 3 | Existing test broken by new test | Shared database state, port conflicts, global variable pollution, test ordering dependency | Regression introduced by the coverage effort itself |
| 4 | Line coverage target missed | Untestable code (tight coupling, global state), or too many low-priority areas deferred | Coverage gap remains; targets not enforced meaningfully |
| 5 | Branch coverage target missed | Complex branching logic not fully exercised; error paths skipped | Untested branches are where bugs hide in production |
| 6 | New tests introduce new patterns | Analyst used preferred patterns instead of project conventions | Inconsistent test suite; maintenance burden increases |
| 7 | Tests are coverage padding | Tests execute code but make trivial or no assertions | False confidence; coverage number is meaningless |
| 8 | CI/CD not configured | No CI/CD pipeline exists, or configuration was deferred | Coverage will regress with the next code change |

---

## Remediation Guidance

### Items scoring below 4 (blockers)

Items scoring below 4 must be remediated before the Coverage Gate can pass. These represent critical gaps:

- **Item 1 below 4**: Return to Step 8 (Implement Test Cases) and complete the remaining planned tests. If tests were intentionally skipped, document justification and get user approval.
- **Item 2 below 4**: Identify and fix all flaky tests. Common fixes: mock time/date functions, isolate database state per test, mock network calls, remove test ordering dependencies. Run the suite multiple times to verify stability.
- **Item 3 below 4**: Identify the broken existing tests and determine root cause. Fix the interference (usually shared state or port conflicts). If the existing test was genuinely wrong (testing incorrect behavior), document the finding and get user approval before modifying it.
- **Item 4 or 5 below 4**: Implement additional tests for the uncovered areas. If code is genuinely untestable (requires refactoring), document the specific files and functions that cannot be tested without production code changes.
- **Item 6 below 4**: Rewrite non-conforming tests to match existing conventions. Read existing test files again to refresh understanding of the project's patterns.
- **Item 7 below 4**: Review each test and add meaningful assertions. Replace "does not throw" tests with specific output/behavior checks. Add error path and edge case tests.
- **Item 8 below 4**: Configure CI/CD coverage thresholds. If no CI/CD pipeline exists, configure the coverage tool's built-in threshold enforcement (e.g., `--cov-fail-under` for pytest, `coverageThreshold` for Jest) and document the recommended CI/CD setup in the report.

### General remediation process

1. Identify all items scoring below the threshold.
2. Address items in order of impact: items 2 and 3 first (test reliability), then items 4 and 5 (coverage targets), then items 1, 6, 7, and 8.
3. Re-run the full test suite after each remediation to verify no new issues are introduced.
4. Re-score all items and verify the average is >= 7.0 with no item below 4.

---

## Coverage Gate Evaluation Template

```markdown
## Coverage Gate -- [Project Name]

**Date:** [YYYY-MM-DD]
**Test Coverage Plan:** output/25-test-coverage-plan.md
**Test Coverage Report:** output/26-test-coverage-report.md

### Baseline Metrics
- **Pre-effort line coverage:** [X]%
- **Pre-effort branch coverage:** [X]%
- **Pre-effort function coverage:** [X]%
- **Pre-effort test count:** [N]

### Post-Effort Metrics
- **Post-effort line coverage:** [X]% (target: [X]%)
- **Post-effort branch coverage:** [X]% (target: [X]%)
- **Post-effort function coverage:** [X]% (target: [X]%)
- **Post-effort test count:** [N] (+[N] new)
- **All tests passing:** [Yes/No]
- **Flaky tests detected:** [0/N]

### Gate Scores

| # | Criterion | Score | Notes |
|---|-----------|-------|-------|
| 1 | All planned tests implemented | [0-10] | |
| 2 | All new tests pass consistently | [0-10] | |
| 3 | No existing tests broken | [0-10] | |
| 4 | Line coverage target met | [0-10] | |
| 5 | Branch coverage target met | [0-10] | |
| 6 | New tests follow conventions | [0-10] | |
| 7 | Tests are meaningful | [0-10] | |
| 8 | CI/CD thresholds configured | [0-10] | |

**Average Score:** [X.X] / 10
**Minimum Score:** [X] (Item #[N])
**Result:** PASS / FAIL

### Remediation Plan (if FAIL)
| Item | Score | Gap Description | Action Required | Priority |
|------|-------|-----------------|-----------------|----------|
| [#]  | [X]   | [Gap]           | [Action]        | [H/M/L]  |

### Coverage Delta Summary
| Metric | Before | After | Delta | Target | Status |
|--------|--------|-------|-------|--------|--------|
| Line   | [X]%   | [X]%  | +[X]% | [X]%   | MET / NOT MET |
| Branch | [X]%   | [X]%  | +[X]% | [X]%   | MET / NOT MET |
| Function | [X]% | [X]%  | +[X]% | [X]%   | MET / NOT MET |
| Tests  | [N]    | [N]   | +[N]  | --     | -- |

### Recommendation
[PASS/FAIL with justification. If FAIL, summarize the remediation path and estimated effort.]
```
