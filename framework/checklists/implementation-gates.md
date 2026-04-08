---
document_type: quality-gates
version: "1.0"
applies_to: "phase-07-implementation, add-feature"
---

# Phase 7: Implementation Quality Gates

## Overview

Phase 7 uses a three-tier quality gate structure. Unlike Phases 1-6 which have a single transition gate between phases, implementation has gates at three granularities: **Story**, **Sprint**, and **Release**. Each tier must pass before proceeding to the next level.

This structure catches problems early -- a failing story gate prevents a bad story from poisoning the sprint, and a failing sprint gate prevents incomplete sprints from contaminating a release.

---

## Tier 1: Story Gate (After Each Story)

**Purpose:** Confirm that a single user story is fully implemented, tested, and code-clean before marking it complete.

**Scoring:** Binary PASS/FAIL. **All 12 items must pass.** There is no partial credit and no conditional pass at this tier. A story is either done or it is not.

| #  | Criterion | Pass? |
|----|-----------|-------|
| 1  | All acceptance criteria have corresponding automated tests that pass | [ ] |
| 2  | Unit test coverage for new/modified code meets or exceeds the threshold defined in Definition of Done | [ ] |
| 3  | Lint: zero errors | [ ] |
| 4  | Type check: zero errors | [ ] |
| 5  | No TODO/FIXME/HACK comments in new code | [ ] |
| 6  | No hardcoded secrets or credentials | [ ] |
| 7  | No console.log/print debug statements outside the logging framework | [ ] |
| 8  | No commented-out code blocks | [ ] |
| 9  | All new public functions have documentation (JSDoc, docstrings, or equivalent) | [ ] |
| 10 | API responses match API spec contract exactly (status codes, schemas, error formats) -- if applicable | [ ] |
| 11 | Data model changes match data model spec (column types, constraints, relationships) -- if applicable | [ ] |
| 12 | UI matches UX spec wireframe layout and interaction patterns -- if applicable | [ ] |

**Result:** PASS (all 12 checked) / FAIL (any unchecked)

### Common Failure Reasons — Story Gate

1. **Missing test for an acceptance criterion.** The code works manually but there is no automated test proving it. Every acceptance criterion needs a test, not just the "main" ones.
2. **Lint or type errors treated as "not a big deal."** Zero means zero. Suppressing warnings to pass the gate defeats its purpose.
3. **Leftover debug statements.** A stray `console.log` or `print` statement indicates incomplete cleanup. Use the logging framework.
4. **API contract drift.** The implementation returns a slightly different response shape than the API spec. Even minor differences (extra fields, different casing, missing error codes) break consumers.
5. **TODO comments as placeholders.** A TODO in new code means the story is not done. Either implement it now or create a new story for it.

### Remediation Guidance — Story Gate

- Fix all failing items before re-running the gate. Do not proceed to the next story.
- If an acceptance criterion is ambiguous and cannot be tested, HALT and request clarification from the user. Do not mark it as "passing" because you interpreted it favorably.
- If a lint or type error requires a code architecture change, document the deviation and get approval before proceeding.

---

## Tier 2: Sprint Gate (After Each Sprint)

**Purpose:** Confirm that all stories in the sprint are complete, integrated, and the sprint goal is achieved.

**Scoring System:**
- Each item is scored **0-10**
- **0** = Not addressed at all
- **3** = Mentioned but superficial or incomplete
- **5** = Addressed with notable gaps
- **7** = Solid coverage with minor gaps
- **10** = Thoroughly addressed, no meaningful gaps

**Pass Criteria:**
- **Average score >= 7.0** across all items
- **No individual item below 4** (a score below 4 indicates a critical gap)
- **Conditional pass (7.0 average but 1-2 items at 4-5):** May proceed with documented remediation plan

| #  | Criterion | Score (0-10) |
|----|-----------|--------------|
| 1  | All stories in the sprint pass their story-level gates | [ ] |
| 2  | Sprint goal is achieved (or deviation is documented with justification) | [ ] |
| 3  | Cumulative code coverage meets the sprint threshold defined in DoD | [ ] |
| 4  | All integration tests pass | [ ] |
| 5  | Zero TODO/FIXME comments remain in the codebase | [ ] |
| 6  | No critical or high-severity bugs are open from this sprint's work | [ ] |
| 7  | Progress tracker is updated with accurate velocity and coverage metrics | [ ] |
| 8  | No unjustified deviations from the sprint plan (reordered stories, changed scope) | [ ] |
| 9  | CI/CD pipeline passes all stages (build, lint, test, security scan) | [ ] |
| 10 | Database migrations are reversible (up and down migrations both work) | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

### Common Failure Reasons — Sprint Gate

1. **Story gates passed individually but integration fails.** Each story works in isolation but they conflict when combined. Integration tests catch this.
2. **Sprint goal missed without documentation.** The sprint delivered different functionality than planned but nobody recorded why. Undocumented deviations erode trust in the plan.
3. **Coverage backsliding.** New code was added without proportional tests, causing cumulative coverage to drop below the threshold.
4. **Irreversible migrations.** Up-migration works but down-migration was never written or tested, making rollback impossible.
5. **Stale progress tracker.** Metrics have not been updated since mid-sprint, making the tracker unreliable for planning.

### Remediation Guidance — Sprint Gate

- Items scoring below 4 must be remediated before starting the next sprint. This may require carrying stories into the next sprint or extending the current sprint.
- For conditional passes (items at 4-5), create explicit remediation tasks in the next sprint's backlog.
- If the sprint goal was missed, conduct a brief analysis of why and adjust velocity assumptions for future sprints.
- If integration tests fail, fix the integration issues before closing the sprint -- do not carry broken integrations forward.

---

## Tier 3: Release Gate (At Milestones)

**Purpose:** Confirm that the accumulated work across all sprints in a milestone is production-ready.

**Scoring System:**
- Each item is scored **0-10**
- Same scoring definitions as Sprint Gate

**Pass Criteria:**
- **Average score >= 8.0** across all items (higher bar than sprint gate)
- **No individual item below 5** (higher floor than sprint gate)
- **No conditional pass** -- release gates are pass/fail only

| #  | Criterion | Score (0-10) |
|----|-----------|--------------|
| 1  | All sprint gates for this milestone pass | [ ] |
| 2  | E2E tests pass for all core user journeys defined in use cases | [ ] |
| 3  | Performance meets NFR thresholds (response time, throughput, concurrency) | [ ] |
| 4  | Security scan is clean -- no critical or high vulnerabilities | [ ] |
| 5  | Accessibility meets WCAG targets defined in UX specification | [ ] |
| 6  | Test coverage meets the release threshold defined in DoD | [ ] |
| 7  | Zero open P1 or P2 bugs | [ ] |
| 8  | Every REQ-XXX from the PRD has at least one passing automated test | [ ] |
| 9  | Every business goal from the Product Brief has traceable, verified implementation | [ ] |
| 10 | Staging deployment is successful and smoke tests pass | [ ] |
| 11 | Rollback procedure is documented and has been tested | [ ] |
| 12 | Monitoring and alerting are operational (health checks, error rates, key metrics) | [ ] |

**Average Score:** [ ] / 10
**Minimum Score:** [ ] (Item #[ ])
**Result:** PASS / FAIL

### Common Failure Reasons — Release Gate

1. **E2E tests cover happy paths only.** Core user journeys include error flows and edge cases from the use case documents. If those are not tested end-to-end, the gate fails.
2. **Performance tested on dev, not staging.** NFR thresholds must be verified on a staging environment that approximates production. Dev environment results are not valid.
3. **Security scan deferred.** Running the security scan for the first time at release gate reveals issues that require significant rework. Run scans incrementally during sprints.
4. **Requirements coverage gaps.** REQ-XXX entries exist in the PRD that have no corresponding test. The traceability matrix should catch these, but the release gate is the final verification.
5. **Rollback not tested.** A documented rollback procedure that has never been executed is a hope, not a plan. Test the rollback on staging before passing the gate.
6. **Monitoring is "we will set it up after launch."** Monitoring must be operational before release, not after. You cannot diagnose production issues without observability.

### Remediation Guidance — Release Gate

- Items scoring below 5 are blockers. The release cannot proceed until they are remediated.
- There is no conditional pass at this tier. If the average is below 8.0 or any item is below 5, the release is a NO-GO.
- For NO-GO results, produce a remediation plan with specific actions, owners, and target dates. Re-run the release gate after remediation.
- If remediation requires significant work, consider whether a partial release (fewer features, same quality) is viable.

---

## Gate Evaluation Templates

### Story Gate Evaluation

```
## Story Gate: [STORY-ID] — [Story Title]

**Date:** [YYYY-MM-DD]
**Sprint:** [Sprint N]

### Checklist

| #  | Criterion (abbreviated)                        | Pass? |
|----|------------------------------------------------|-------|
| 1  | Acceptance criteria have passing tests         | [ ]   |
| 2  | Unit test coverage meets threshold             | [ ]   |
| 3  | Lint: zero errors                              | [ ]   |
| 4  | Type check: zero errors                        | [ ]   |
| 5  | No TODO/FIXME/HACK                            | [ ]   |
| 6  | No hardcoded secrets                           | [ ]   |
| 7  | No debug statements                           | [ ]   |
| 8  | No commented-out code                          | [ ]   |
| 9  | Public functions documented                    | [ ]   |
| 10 | API contract matches spec                      | [ ]   |
| 11 | Data model matches spec                        | [ ]   |
| 12 | UI matches UX spec                             | [ ]   |

**Result:** PASS / FAIL
**Failing Items:** [List any failing items with description]
**Notes:** [Any observations or deviations]
```

### Sprint Gate Evaluation

```
## Sprint Gate: Sprint [N] — [Sprint Goal]

**Date:** [YYYY-MM-DD]
**Stories Completed:** [X] / [Y]

### Scores

| #  | Criterion (abbreviated)              | Score |
|----|--------------------------------------|-------|
| 1  | All story gates pass                 | [0-10]|
| 2  | Sprint goal achieved                 | [0-10]|
| 3  | Coverage meets threshold             | [0-10]|
| 4  | Integration tests pass               | [0-10]|
| 5  | Zero TODO/FIXME                      | [0-10]|
| 6  | No critical/high bugs open           | [0-10]|
| 7  | Progress tracker updated             | [0-10]|
| 8  | No unjustified plan deviations       | [0-10]|
| 9  | CI/CD pipeline green                 | [0-10]|
| 10 | Migrations reversible                | [0-10]|

**Average Score:** [X.X] / 10
**Minimum Score:** [X] (Item #[N])
**Result:** PASS / FAIL / CONDITIONAL PASS

### Remediation Plan (if conditional pass)
| Item | Gap Description | Action Required | Target |
|------|-----------------|-----------------|--------|
| [#]  | [Gap]           | [Action]        | [When] |
```

### Release Gate Evaluation

```
## Release Gate: [Milestone Name]

**Date:** [YYYY-MM-DD]
**Sprints Included:** [Sprint X through Sprint Y]

### Scores

| #  | Criterion (abbreviated)              | Score |
|----|--------------------------------------|-------|
| 1  | All sprint gates pass                | [0-10]|
| 2  | E2E tests pass                       | [0-10]|
| 3  | Performance meets NFRs               | [0-10]|
| 4  | Security scan clean                  | [0-10]|
| 5  | Accessibility meets targets          | [0-10]|
| 6  | Coverage meets release threshold     | [0-10]|
| 7  | Zero P1/P2 bugs                      | [0-10]|
| 8  | Every REQ-XXX has passing test       | [0-10]|
| 9  | Business goals traceable & verified  | [0-10]|
| 10 | Staging deployment successful        | [0-10]|
| 11 | Rollback tested                      | [0-10]|
| 12 | Monitoring operational               | [0-10]|

**Average Score:** [X.X] / 10
**Minimum Score:** [X] (Item #[N])
**Result:** GO / NO-GO

### Blocking Items (if NO-GO)
| Item | Score | Gap Description | Remediation Required | Owner | Target Date |
|------|-------|-----------------|----------------------|-------|-------------|
| [#]  | [X]   | [Gap]           | [Action]             | [Who] | [When]      |

### Release Recommendation
[Go/No-Go with justification]
```

---

## Tier 4: Feature Gate (per `/specforge:add-feature`)

The Feature Gate is used when adding new features to an existing project via the `add-feature` workflow. It replaces Sprint/Release gates for single-feature work and emphasizes **regression safety**.

### Scoring
- **Scale**: 0-10 per item
- **Threshold**: Average >= 7.0, no item below 4
- **Items**: 10

### Feature Gate Checklist

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | All feature stories pass their story-level gates (Tier 1) | |
| 2 | All acceptance criteria from Feature Spec have passing automated tests | |
| 3 | All pre-existing tests still pass — zero regressions introduced | |
| 4 | No new TODO/FIXME/HACK comments in codebase | |
| 5 | API changes are backward-compatible (or migration path documented) | |
| 6 | Data model changes have reversible migrations (up + down) | |
| 7 | Cumulative code coverage has not decreased from pre-feature baseline | |
| 8 | No critical or high severity security findings from scans | |
| 9 | All Feature Spec requirements fully implemented — no partial delivery | |
| 10 | CI/CD pipeline passes all stages with the feature included | |

### Common Failure Reasons

| Item | Common Failure | Remediation |
|------|---------------|-------------|
| 1 | Story skipped self-review | Go back, run full self-review checklist |
| 3 | Existing test broken by new code | Fix the regression — do not skip or disable the test |
| 5 | API breaking change without versioning | Add backward-compatible endpoint or version the API |
| 6 | Migration has no down path | Write the reversible migration before proceeding |
| 7 | Coverage dropped | Add tests for uncovered paths in new code |
| 9 | Feature partially delivered | Implement remaining requirements or explicitly descope with user approval |

### Feature Gate Evaluation Template

```markdown
## Feature Gate — [Feature Name]

**Date:** [YYYY-MM-DD]
**Feature Spec:** output/23-feature-spec-[name].md
**Stories Completed:** [N] / [N]

| # | Criterion | Score | Notes |
|---|-----------|-------|-------|
| 1 | All stories pass story gates | | |
| 2 | All acceptance criteria tested | | |
| 3 | Zero regressions (existing tests pass) | | |
| 4 | No new TODO/FIXME/HACK | | |
| 5 | API backward-compatible | | |
| 6 | Migrations reversible | | |
| 7 | Coverage not decreased | | |
| 8 | No critical/high security findings | | |
| 9 | Feature Spec fully implemented | | |
| 10 | CI/CD pipeline green | | |

**Average Score:** [X.X] / 10
**Minimum Score:** [X] (Item #[N])
**Result:** PASS / FAIL

### Regression Summary
- **Pre-feature test count:** [N]
- **Post-feature test count:** [N] (+[N] new)
- **Pre-feature coverage:** [X]%
- **Post-feature coverage:** [X]%
- **Regressions found:** [N] (must be 0 to pass)
```
