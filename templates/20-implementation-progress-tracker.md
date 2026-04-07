---
document_type: implementation-progress-tracker
phase: "07-implementation"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "Epic Breakdown (Template 12)"
  - "Sprint Plan (Template 13)"
  - "Implementation Roadmap (Template 14)"
  - "Story Implementation Reports (Template 17)"
  - "Sprint Verification Reports (Template 18)"
---

# Implementation Progress Tracker: [Product Name]

<!-- INSTRUCTIONS: This is a living document updated after every story completion. It provides
     a single-pane-of-glass view into implementation progress, including epic and sprint
     status, deviations from the plan, and risks surfaced during implementation. The data
     here feeds into Sprint Verification Reports (Template 18) and Release Verification
     Reports (Template 19). Remove all HTML comments before finalizing. -->

## 1. Epic Progress

<!-- Track completion at the epic level. Update after every story is completed.
     Status values: Not Started / In Progress / Complete / Blocked. -->

| Epic ID  | Epic Name               | Total Stories | Completed | Remaining | % Done | Status       |
|----------|-------------------------|---------------|-----------|-----------|--------|--------------|
| EPIC-001 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | In Progress  |
| EPIC-002 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | Not Started  |
| EPIC-003 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | Not Started  |
| EPIC-004 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | Not Started  |
| EPIC-005 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | Not Started  |
| EPIC-006 | [Epic Name]             | [N]           | [N]       | [N]       | [N%]   | Not Started  |
| **Total**|                         | [N]           | [N]       | [N]       | [N%]   |              |

---

## 2. Sprint Progress

<!-- Track velocity and completion at the sprint level. Update at sprint boundaries. -->

| Sprint # | Planned Points | Completed Points | Carry-Over | Velocity | Status     |
|----------|----------------|------------------|------------|----------|------------|
| Sprint 1 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | Complete   |
| Sprint 2 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | In Progress|
| Sprint 3 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | Planned    |
| Sprint 4 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | Planned    |
| Sprint 5 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | Planned    |
| Sprint 6 | [Pts]          | [Pts]            | [Pts]      | [Pts]    | Planned    |

---

## 3. Current Sprint Detail

<!-- Detailed view of the active sprint. Update after every story state change.
     Status values: Not Started / In Progress / Done / Blocked. -->

**Sprint [N]: [Sprint Goal]**

| Story ID | Title                              | Points | Epic     | Status       | Notes                       |
|----------|------------------------------------|--------|----------|--------------|-----------------------------|
| US-[XXX] | [Story title]                      | [Pts]  | EPIC-001 | Done         | [Gate: PASS]                |
| US-[XXX] | [Story title]                      | [Pts]  | EPIC-001 | In Progress  |                             |
| US-[XXX] | [Story title]                      | [Pts]  | EPIC-001 | Not Started  |                             |
| US-[XXX] | [Story title]                      | [Pts]  | EPIC-002 | Blocked      | [Blocked by: description]   |
| US-[XXX] | [Story title]                      | [Pts]  | EPIC-002 | Not Started  |                             |

**Sprint Points:** [Completed] / [Planned] ([Percentage]%)

---

## 4. Cumulative Burnup Data

<!-- Record cumulative data for burnup charting. Update at each sprint boundary.
     Total scope may change if stories are added or removed. -->

| Sprint # | Total Scope (Points) | Completed (Cumulative) | Remaining | Completion % |
|----------|----------------------|------------------------|-----------|--------------|
| Sprint 0 | [Pts]                | 0                      | [Pts]     | 0%           |
| Sprint 1 | [Pts]                | [Pts]                  | [Pts]     | [%]          |
| Sprint 2 | [Pts]                | [Pts]                  | [Pts]     | [%]          |
| Sprint 3 | [Pts]                | [Pts]                  | [Pts]     | [%]          |
| Sprint 4 | [Pts]                | [Pts]                  | [Pts]     | [%]          |
| Sprint 5 | [Pts]                | [Pts]                  | [Pts]     | [%]          |
| Sprint 6 | [Pts]                | [Pts]                  | [Pts]     | [%]          |

**Projected Completion:** [Sprint N, based on average velocity]
**On Track:** Yes / No / At Risk

---

## 5. Spec Clarification Log

<!-- Log every question or ambiguity found in the Phase 1-6 specification artifacts
     during implementation. This ensures no assumption goes undocumented. -->

| Date       | Artifact (Template #) | Section             | Question                                | Resolution                          | Impact                    |
|------------|----------------------|---------------------|-----------------------------------------|-------------------------------------|---------------------------|
| [YYYY-MM-DD]| [e.g., PRD (T4)]   | [e.g., REQ-005]     | [e.g., Does "admin" include super-admin?]| [e.g., Yes, confirmed with stakeholder] | [e.g., Added role check] |
| [YYYY-MM-DD]| [e.g., API Spec (T9)]| [e.g., POST /users]| [e.g., Should return 201 or 200?]       | [e.g., 201 per REST conventions]    | [e.g., None]              |
| [YYYY-MM-DD]| [e.g., Data Model (T10)]| [e.g., User entity]| [e.g., Is email unique across tenants?] | [e.g., Unique per tenant only]     | [e.g., Compound unique index] |

---

## 6. Deviation Log

<!-- Log every deviation from the planned implementation order, scope, or approach.
     Every deviation must be justified. -->

| Date       | Type       | Description                                    | Justification                       | Impact                          |
|------------|------------|------------------------------------------------|-------------------------------------|---------------------------------|
| [YYYY-MM-DD]| Reorder  | [e.g., US-012 moved from Sprint 3 to Sprint 2]| [e.g., Dependency on US-008 output] | [e.g., Sprint 2 +3 pts, Sprint 3 -3 pts] |
| [YYYY-MM-DD]| Scope    | [e.g., US-015 split into US-015a and US-015b]  | [e.g., Too large for single sprint] | [e.g., +2 pts total scope increase] |
| [YYYY-MM-DD]| Blocker  | [e.g., US-020 blocked by external API delay]   | [e.g., Vendor deployment delayed]   | [e.g., Deferred to Sprint 5]    |

---

## 7. Risk Log

<!-- Track risks surfaced during implementation. These may be new risks not identified
     during planning or escalations of previously identified risks. -->

| Risk ID | Date Identified | Description                              | Probability | Impact | Mitigation                      | Status     |
|---------|-----------------|------------------------------------------|-------------|--------|---------------------------------|------------|
| IR-001  | [YYYY-MM-DD]    | [e.g., Database performance degrades with projected data volume] | Medium | High | [e.g., Add indexes, test with production-scale data] | Open |
| IR-002  | [YYYY-MM-DD]    | [e.g., Third-party auth library lacks feature X] | Low | Medium | [e.g., Implement custom wrapper] | Resolved |
| IR-003  | [YYYY-MM-DD]    | [e.g., Sprint velocity lower than planned] | High | Medium | [e.g., Reduce scope of Sprint 4] | Monitoring |

---

## 8. Key Metrics Dashboard

<!-- Summary metrics providing an at-a-glance health check. Update after every story. -->

| Metric                        | Value                                    |
|-------------------------------|------------------------------------------|
| **Total Stories**             | [Count]                                  |
| **Stories Completed**         | [Count]                                  |
| **Stories Remaining**         | [Count]                                  |
| **Stories Blocked**           | [Count]                                  |
| **Overall Completion**        | [Percentage]                             |
| **Average Velocity**          | [Points per sprint]                      |
| **Current Sprint Velocity**   | [Points completed so far this sprint]    |
| **Code Coverage (Line)**      | [Percentage]                             |
| **Code Coverage (Branch)**    | [Percentage]                             |
| **Open Bugs**                 | [Count by severity: C/H/M/L]            |
| **Open Risks**                | [Count]                                  |
| **Spec Clarifications**       | [Count total, Count unresolved]          |
| **Deviations from Plan**      | [Count]                                  |
| **Projected Completion**      | [Sprint N / On Track / At Risk / Behind] |

---

## Validation Checklist

<!-- Verify this tracker is current and accurate. -->

- [ ] Epic progress table reflects all completed stories
- [ ] Sprint progress table is current through the active sprint
- [ ] Current sprint detail shows accurate status for every story
- [ ] Cumulative burnup data is updated through the current sprint
- [ ] All spec clarifications are logged with resolutions
- [ ] All deviations from plan are logged with justification
- [ ] Risk log is reviewed and updated
- [ ] Key metrics dashboard values are current
- [ ] Projected completion date is realistic based on velocity data
