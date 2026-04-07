---
document_type: traceability-matrix
phase: "06-implementation-planning"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "Product Brief (Phase 1)"
  - "PRD (Phase 3)"
  - "Architecture Document (Phase 5)"
  - "Epic Breakdown (Template 12)"
---

# Requirements Traceability Matrix: [Product Name]

<!-- INSTRUCTIONS: This matrix traces every business goal through to its implementation
     and verification. It ensures nothing falls through the cracks -- every requirement
     is designed, planned, and tested. Review this document whenever scope changes occur.
     Remove all HTML comments before finalizing. -->

## 1. Purpose

This Requirements Traceability Matrix (RTM) provides end-to-end traceability from
business goals through requirements, design decisions, implementation artifacts, and
test cases. It serves three critical purposes:

1. **Completeness verification** -- Every business goal is addressed by at least one requirement, and every requirement has a corresponding implementation and test.
2. **Impact analysis** -- When a requirement changes, this matrix identifies all downstream artifacts affected.
3. **Coverage assurance** -- Gaps where requirements lack implementation or testing are surfaced and addressed before development begins.

---

## 2. Full Traceability Matrix

<!-- This is the core artifact. Each row traces a single requirement from its business
     origin through to its verification. Fill in every column; empty cells represent gaps
     that must be resolved. -->

### 2.1 Functional Requirements Traceability

| Business Goal | Req ID   | Requirement Description            | Design Decision / Component | Epic / Story   | Test Case ID | Test Type     | Status       |
|---------------|----------|------------------------------------|-----------------------------|----------------|--------------|---------------|--------------|
| BG-001        | REQ-001  | [Requirement description]          | [e.g., Auth module, DD-003] | EPIC-001/US-001| TC-001       | Unit + E2E    | Not Started  |
| BG-001        | REQ-002  | [Requirement description]          | [e.g., User service, DD-004]| EPIC-001/US-002| TC-002       | Integration   | Not Started  |
| BG-001        | REQ-003  | [Requirement description]          | [e.g., API gateway, DD-005] | EPIC-002/US-005| TC-003       | E2E           | Not Started  |
| BG-002        | REQ-004  | [Requirement description]          | [e.g., Payment service]     | EPIC-003/US-008| TC-004       | Unit + E2E    | Not Started  |
| BG-002        | REQ-005  | [Requirement description]          | [e.g., Notification service]| EPIC-003/US-009| TC-005       | Integration   | Not Started  |
| BG-003        | REQ-006  | [Requirement description]          | [Component / decision ref]  | EPIC-004/US-010| TC-006       | E2E           | Not Started  |
| BG-003        | REQ-007  | [Requirement description]          | [Component / decision ref]  | EPIC-004/US-011| TC-007       | Unit          | Not Started  |
| BG-003        | REQ-008  | [Requirement description]          | [Component / decision ref]  | EPIC-005/US-014| TC-008       | E2E + Perf    | Not Started  |

### 2.2 Non-Functional Requirements Traceability

| Category       | Req ID     | Requirement Description           | Design Decision / Approach      | Validation Method    | Test Case ID | Status       |
|----------------|------------|-----------------------------------|---------------------------------|----------------------|--------------|--------------|
| Performance    | REQ-NF-001 | [e.g., p95 response < 500ms]    | [e.g., Caching layer, CDN]      | Load testing         | TC-NF-001    | Not Started  |
| Performance    | REQ-NF-002 | [e.g., Support 10K concurrent users] | [e.g., Horizontal scaling]  | Stress testing       | TC-NF-002    | Not Started  |
| Security       | REQ-NF-003 | [e.g., Data encrypted at rest]   | [e.g., AES-256, KMS]           | Security audit       | TC-NF-003    | Not Started  |
| Security       | REQ-NF-004 | [e.g., OWASP Top 10 compliance] | [e.g., Input validation, CSP]   | Pen testing          | TC-NF-004    | Not Started  |
| Availability   | REQ-NF-005 | [e.g., 99.9% uptime SLA]        | [e.g., Multi-AZ deployment]     | Monitoring           | TC-NF-005    | Not Started  |
| Accessibility  | REQ-NF-006 | [e.g., WCAG 2.1 AA compliance]  | [e.g., Semantic HTML, ARIA]     | Accessibility audit  | TC-NF-006    | Not Started  |
| Scalability    | REQ-NF-007 | [e.g., Scale to 100K users in Y1]| [e.g., Microservices, auto-scale] | Capacity testing   | TC-NF-007    | Not Started  |
| Compliance     | REQ-NF-008 | [e.g., GDPR data handling]       | [e.g., Data retention policy]   | Compliance review    | TC-NF-008    | Not Started  |

---

## 3. Coverage Analysis

<!-- Analyze the matrix above for gaps. Every cell that is empty represents a potential
     gap that must be addressed or explicitly accepted as a risk. -->

### 3.1 Requirements Without Implementation (Stories)

<!-- These requirements have been documented but no epic or story has been created
     to implement them. They represent planned work that has not been scheduled. -->

| Req ID   | Requirement Description              | Reason for Gap                         | Action Required                  |
|----------|--------------------------------------|----------------------------------------|----------------------------------|
| REQ-XXX  | [Requirement]                        | [e.g., Deferred to post-MVP]          | [e.g., Add to v1.1 backlog]     |
| REQ-XXX  | [Requirement]                        | [e.g., Dependency not ready]          | [e.g., Monitor dependency, plan for Sprint N] |

**Summary:** [X] of [Y] requirements ([Z]%) have corresponding implementation stories.

### 3.2 Stories Without Test Cases

<!-- These stories have been planned but no test case has been defined to verify them.
     This is a quality risk that should be resolved before development begins. -->

| Story ID | Story Description                    | Reason for Gap                         | Action Required                  |
|----------|--------------------------------------|----------------------------------------|----------------------------------|
| US-XXX   | [Story]                              | [e.g., Test cases not yet written]     | [e.g., Write test cases in Sprint N] |
| US-XXX   | [Story]                              | [e.g., Requires test environment setup]| [e.g., Provision environment]    |

**Summary:** [X] of [Y] stories ([Z]%) have corresponding test cases.

### 3.3 Requirements Without Design Decisions

<!-- These requirements have no documented architectural or design decision supporting
     them. The solutions architect should review and document the approach. -->

| Req ID   | Requirement Description              | Action Required                        |
|----------|--------------------------------------|----------------------------------------|
| REQ-XXX  | [Requirement]                        | [e.g., Architecture decision needed]   |

**Summary:** [X] of [Y] requirements ([Z]%) have documented design decisions.

### 3.4 Business Goals Without Requirements

<!-- These business goals from the Product Brief do not have corresponding requirements
     in the PRD. Either the requirements need to be written, or the business goal is
     addressed indirectly and should be noted. -->

| Business Goal | Description                         | Action Required                        |
|---------------|-------------------------------------|----------------------------------------|
| BG-XXX        | [Goal description]                  | [e.g., Derive requirements, or note indirect coverage] |

**Summary:** [X] of [Y] business goals ([Z]%) have direct requirement coverage.

---

## 4. Gap Identification & Resolution

### 4.1 Gap Summary Dashboard

| Coverage Dimension                  | Total | Covered | Gaps | Coverage % | Status     |
|-------------------------------------|-------|---------|------|------------|------------|
| Business Goals → Requirements       | [N]   | [N]     | [N]  | [%]        | [R/Y/G]    |
| Requirements → Design Decisions     | [N]   | [N]     | [N]  | [%]        | [R/Y/G]    |
| Requirements → Epics/Stories        | [N]   | [N]     | [N]  | [%]        | [R/Y/G]    |
| Stories → Test Cases                | [N]   | [N]     | [N]  | [%]        | [R/Y/G]    |
| NFRs → Validation Methods           | [N]   | [N]     | [N]  | [%]        | [R/Y/G]    |

**Status Legend:**
- **G (Green):** >= 95% coverage
- **Y (Yellow):** 80-94% coverage -- gaps are known and planned
- **R (Red):** < 80% coverage -- significant gaps require immediate attention

### 4.2 Gap Resolution Plan

| Gap ID  | Gap Description                               | Severity | Owner    | Resolution Plan                  | Target Date |
|---------|-----------------------------------------------|----------|----------|----------------------------------|-------------|
| GAP-001 | [e.g., REQ-012 has no implementation story]   | High     | [Name]   | [e.g., Create story in Sprint 2] | [Date]      |
| GAP-002 | [e.g., US-015 has no test case]               | Medium   | [Name]   | [e.g., QA to write test cases]   | [Date]      |
| GAP-003 | [e.g., BG-003 has no derived requirements]    | High     | [Name]   | [e.g., Requirements workshop]    | [Date]      |

### 4.3 Accepted Gaps (Intentional)

<!-- Some gaps are intentional -- features deferred to future releases, requirements
     addressed by organizational process rather than software, etc. Document these
     explicitly so they are not flagged as oversights. -->

| Gap Description                                | Justification                          | Accepted By | Date     |
|------------------------------------------------|----------------------------------------|-------------|----------|
| [e.g., REQ-020 deferred to v1.1]              | [e.g., Not needed for MVP value prop]  | [Name]      | [Date]   |
| [e.g., REQ-NF-010 addressed by ops process]   | [e.g., Manual failover procedure]      | [Name]      | [Date]   |

---

## 5. Change Impact Analysis Guide

<!-- When a requirement changes, use this guide to identify all downstream impacts. -->

### 5.1 Impact Assessment Procedure

1. **Identify the changed requirement** (REQ-XXX)
2. **Trace forward** through the matrix to find:
   - Affected design decisions / components
   - Affected epics and user stories
   - Affected test cases
3. **Assess impact** on each downstream artifact:
   - No change needed
   - Minor update required
   - Major rework required
   - New artifact needed
4. **Estimate effort** for all changes
5. **Update the traceability matrix** to reflect the change
6. **Communicate impact** to affected team members

### 5.2 Change Impact Template

| Changed Item    | [REQ-XXX: Description of change]                  |
|-----------------|----------------------------------------------------|
| Change Type     | [Addition / Modification / Deletion]               |
| Design Impact   | [Components affected and scope of change]          |
| Story Impact    | [Stories affected: new, modified, or removed]      |
| Test Impact     | [Test cases affected: new, modified, or removed]   |
| Effort Estimate | [Person-days / story points]                       |
| Sprint Impact   | [Which sprints are affected]                       |
| Risk            | [Any new risks introduced by this change]          |
| Decision        | [Accept / Defer / Reject]                          |
| Approved By     | [Name and date]                                    |

---

## Validation Checklist

<!-- Complete before the development handoff. -->

- [ ] Every business goal has at least one requirement traced to it
- [ ] Every requirement has a corresponding design decision or component identified
- [ ] Every requirement has at least one epic/story planned for implementation
- [ ] Every story has at least one test case defined
- [ ] All non-functional requirements have validation methods identified
- [ ] Coverage analysis is complete and all gaps are documented
- [ ] Critical gaps have resolution plans with owners and target dates
- [ ] Accepted/intentional gaps are documented with justification
- [ ] Matrix has been reviewed by Product Owner, Tech Lead, and QA Lead
- [ ] Change impact analysis procedure is understood by the team
