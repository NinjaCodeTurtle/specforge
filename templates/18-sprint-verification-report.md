---
document_type: sprint-verification-report
phase: "07-implementation"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "Sprint Plan (Template 13)"
  - "Story Implementation Reports (Template 17)"
  - "Implementation Progress Tracker (Template 20)"
  - "Epic Breakdown (Template 12)"
---

# Sprint Verification Report: Sprint [N]

<!-- INSTRUCTIONS: This report is produced at the end of each sprint. It aggregates the
     results from individual Story Implementation Reports (Template 17) and provides a
     sprint-level quality assessment. The sprint gate verdict determines whether the sprint's
     work is accepted and merged to the main branch. Remove all HTML comments before finalizing. -->

## 1. Sprint Summary

<!-- Provide the essential context for this sprint. Values should match the Sprint Plan
     (Template 13) and be updated with actuals. -->

| Attribute               | Value                                             |
|-------------------------|---------------------------------------------------|
| **Sprint Number**       | [N]                                               |
| **Sprint Goal**         | [Sprint goal from Sprint Plan]                    |
| **Start Date**          | [YYYY-MM-DD]                                      |
| **End Date**            | [YYYY-MM-DD]                                      |
| **Duration**            | [e.g., 2 weeks]                                   |
| **Planned Velocity**    | [Story points planned]                            |
| **Actual Velocity**     | [Story points completed]                          |
| **Velocity Variance**   | [+/- points, percentage]                          |

---

## 2. Story Completion

<!-- Record the gate status of every story planned for this sprint. Status comes from
     the individual Story Implementation Reports (Template 17). -->

| Story ID | Title                              | Points | Gate Status | Notes                           |
|----------|------------------------------------|--------|-------------|----------------------------------|
| US-[XXX] | [Story title]                      | [Pts]  | PASS        |                                  |
| US-[XXX] | [Story title]                      | [Pts]  | PASS        |                                  |
| US-[XXX] | [Story title]                      | [Pts]  | FAIL        | [Brief reason for failure]       |
| US-[XXX] | [Story title]                      | [Pts]  | CARRY-OVER  | [Moved to Sprint N+1]           |

**Stories Planned:** [Count]
**Stories Passed:** [Count]
**Stories Failed:** [Count]
**Stories Carried Over:** [Count]
**Completion Rate:** [Percentage]

---

## 3. Aggregate Quality Metrics

<!-- These metrics are aggregated from all Story Implementation Reports in this sprint.
     They represent the cumulative state of the codebase at sprint end. -->

### 3.1 Test Summary

| Test Layer       | Total Tests | Passed | Failed | Skipped | Pass Rate |
|------------------|-------------|--------|--------|---------|-----------|
| Unit             | [Count]     | [Count]| [Count]| [Count] | [%]       |
| Integration      | [Count]     | [Count]| [Count]| [Count] | [%]       |
| E2E              | [Count]     | [Count]| [Count]| [Count] | [%]       |
| **Total**        | [Count]     | [Count]| [Count]| [Count] | [%]       |

### 3.2 Code Coverage

| Metric            | Threshold (from DoD) | Actual   | Status     |
|-------------------|----------------------|----------|------------|
| Line Coverage     | [e.g., >= 80%]       | [X%]     | PASS / FAIL|
| Branch Coverage   | [e.g., >= 75%]       | [X%]     | PASS / FAIL|
| Function Coverage | [e.g., >= 80%]       | [X%]     | PASS / FAIL|

### 3.3 Code Quality

| Metric            | Previous Sprint | Current Sprint | Trend     |
|-------------------|-----------------|----------------|-----------|
| Lint Errors       | [Count]         | [Count]        | [Up/Down/Stable] |
| Lint Warnings     | [Count]         | [Count]        | [Up/Down/Stable] |
| Type Errors       | [Count]         | [Count]        | [Up/Down/Stable] |
| Security Findings | [Count]         | [Count]        | [Up/Down/Stable] |

---

## 4. Coverage Threshold Check

<!-- Compare actual coverage against the Definition of Done thresholds established
     in the Sprint Plan (Template 13). -->

| Threshold Metric          | DoD Requirement | Actual  | Verdict    |
|---------------------------|-----------------|---------|------------|
| Unit test line coverage   | [e.g., >= 80%] | [X%]    | PASS / FAIL|
| Unit test branch coverage | [e.g., >= 75%] | [X%]    | PASS / FAIL|
| Integration test coverage | [e.g., >= 60%] | [X%]    | PASS / FAIL|
| All tests passing         | 100%            | [X%]    | PASS / FAIL|
| Lint errors               | 0               | [Count] | PASS / FAIL|
| Type errors               | 0               | [Count] | PASS / FAIL|

---

## 5. TODO Audit

<!-- Scan the codebase for TODO, FIXME, HACK, and XXX comments. The count must be zero
     at sprint end. Any remaining items are documented with justification. -->

| Marker   | Count | Files Affected                          | Status     |
|----------|-------|-----------------------------------------|------------|
| TODO     | [N]   | [List files, or "None"]                 | PASS / FAIL|
| FIXME    | [N]   | [List files, or "None"]                 | PASS / FAIL|
| HACK     | [N]   | [List files, or "None"]                 | PASS / FAIL|
| XXX      | [N]   | [List files, or "None"]                 | PASS / FAIL|

**Total Markers:** [Count] (must be 0)

---

## 6. Integration Test Results

<!-- Verify that stories implemented in this sprint work correctly together. These tests
     cover cross-story interactions that individual story reports may not catch. -->

| Test Scenario                                    | Stories Involved         | Status     |
|--------------------------------------------------|--------------------------|------------|
| [e.g., User registers and creates first project] | US-001, US-005           | PASS / FAIL|
| [e.g., Admin assigns role and user sees new permissions] | US-003, US-007  | PASS / FAIL|
| [e.g., Data created in story A visible in story B views] | US-002, US-004  | PASS / FAIL|

---

## 7. Sprint Velocity & Burndown Data

<!-- Record data points for velocity tracking and burndown charts. -->

### 7.1 Velocity Tracking

| Sprint   | Planned Points | Completed Points | Carry-Over | Velocity |
|----------|----------------|------------------|------------|----------|
| Sprint 1 | [Pts]          | [Pts]            | [Pts]      | [Pts]    |
| Sprint 2 | [Pts]          | [Pts]            | [Pts]      | [Pts]    |
| ...      | ...            | ...              | ...        | ...      |
| Sprint N | [Pts]          | [Pts]            | [Pts]      | [Pts]    |

**Average Velocity:** [Points per sprint]
**Velocity Trend:** [Increasing / Stable / Decreasing]

### 7.2 Burndown Data (Current Sprint)

| Day  | Remaining Points | Ideal Remaining |
|------|------------------|-----------------|
| Day 1| [Pts]            | [Pts]           |
| Day 2| [Pts]            | [Pts]           |
| ...  | ...              | ...             |
| Day N| [Pts]            | [Pts]           |

---

## 8. Blockers Encountered

<!-- Document any blockers that impacted sprint delivery. -->

| Blocker ID | Description                              | Impact (Stories Affected) | Resolution                | Time Lost |
|------------|------------------------------------------|--------------------------|---------------------------|-----------|
| BLK-001    | [e.g., Third-party API down for 2 days]  | US-005, US-007           | [e.g., Used mock, deferred integration] | [2 days] |
| BLK-002    | [e.g., Spec ambiguity in REQ-003]        | US-003                   | [e.g., Clarified with stakeholder]      | [0.5 days]|

---

## 9. Deviations from Sprint Plan

<!-- Document any changes from the original sprint plan. Every deviation must be justified. -->

| Deviation ID | Type                | Description                          | Justification                    | Impact                     |
|--------------|---------------------|--------------------------------------|----------------------------------|----------------------------|
| DEV-001      | Scope Change        | [e.g., US-010 added mid-sprint]      | [e.g., Critical bug discovered]  | [e.g., US-008 deferred]   |
| DEV-002      | Story Reorder       | [e.g., US-006 moved before US-005]   | [e.g., Dependency discovered]    | [No impact on sprint goal] |
| DEV-003      | Scope Reduction     | [e.g., US-009 reduced scope]         | [e.g., Technical constraint]     | [e.g., Follow-up story created] |

---

## 10. Sprint Retrospective Notes

### What Went Well

- [e.g., All P1 stories completed and passing]
- [e.g., Integration between authentication and user modules was smooth]
- [e.g., Coverage threshold met without difficulty]

### What To Improve

- [e.g., Spec ambiguity in REQ-003 caused rework -- need clearer acceptance criteria]
- [e.g., Integration test setup was slow -- need Docker optimization]
- [e.g., Underestimated complexity of US-007 by 3 points]

### Action Items

| Action                                        | Owner          | Due By          |
|-----------------------------------------------|----------------|-----------------|
| [e.g., Clarify REQ-003 acceptance criteria]   | [Name/Role]    | [Sprint N+1]   |
| [e.g., Optimize Docker test setup]            | [Name/Role]    | [Sprint N+1]   |

---

## 11. Sprint Gate Verdict

<!-- The overall verdict for this sprint. FAIL requires all failures to be resolved
     before the next sprint begins or carried as priority items. -->

| Attribute              | Value                                             |
|------------------------|---------------------------------------------------|
| **Verdict**            | **PASS** / **FAIL**                               |
| **Assessed Date**      | [YYYY-MM-DD]                                      |
| **Assessed By**        | [Name or system]                                  |

### Pass Criteria Summary

| Criterion                              | Required | Actual  | Met?       |
|----------------------------------------|----------|---------|------------|
| All planned stories pass gate          | Yes      | [Y/N]   | PASS / FAIL|
| Code coverage meets DoD thresholds     | Yes      | [Y/N]   | PASS / FAIL|
| Zero lint errors                       | Yes      | [Y/N]   | PASS / FAIL|
| Zero type errors                       | Yes      | [Y/N]   | PASS / FAIL|
| Zero TODO/FIXME markers               | Yes      | [Y/N]   | PASS / FAIL|
| All integration tests passing          | Yes      | [Y/N]   | PASS / FAIL|
| No critical security findings          | Yes      | [Y/N]   | PASS / FAIL|

---

## Validation Checklist

<!-- Complete before accepting the sprint as done. -->

- [ ] All Story Implementation Reports (Template 17) are completed for this sprint
- [ ] Story completion table is accurate and matches individual reports
- [ ] Aggregate quality metrics are collected and recorded
- [ ] Coverage thresholds checked against Definition of Done
- [ ] TODO audit completed with zero markers
- [ ] Cross-story integration tests executed and documented
- [ ] Velocity and burndown data recorded
- [ ] Blockers and deviations documented with justification
- [ ] Retrospective notes captured with action items
- [ ] Sprint gate verdict recorded with pass criteria summary
