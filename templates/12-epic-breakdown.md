---
document_type: epic-breakdown
phase: "06-implementation-planning"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "PRD (Phase 3)"
  - "User Stories (Phase 3)"
  - "Architecture Document (Phase 5)"
  - "UX Specification (Phase 4)"
---

# Epic Breakdown: [Product Name]

<!-- INSTRUCTIONS: This template organizes all product requirements into epics -- large
     bodies of work that can be broken down into user stories and delivered across
     multiple sprints. Each epic should represent a coherent slice of business value.
     Remove all HTML comments before finalizing. -->

## 1. Epic Overview

<!-- Provide a high-level summary table of all epics. This serves as a quick reference
     for stakeholders and sprint planning. Prioritize using MoSCoW (Must/Should/Could/Won't)
     or a numeric scale (P1-P4). Size estimates use T-shirt sizing (XS/S/M/L/XL). -->

| Epic ID  | Epic Name               | Description                          | Priority | Size | Dependencies     |
|----------|-------------------------|--------------------------------------|----------|------|------------------|
| EPIC-001 | [Epic Name]             | [One-sentence description]           | P1       | L    | None             |
| EPIC-002 | [Epic Name]             | [One-sentence description]           | P1       | M    | EPIC-001         |
| EPIC-003 | [Epic Name]             | [One-sentence description]           | P2       | L    | EPIC-001         |
| EPIC-004 | [Epic Name]             | [One-sentence description]           | P2       | S    | None             |
| EPIC-005 | [Epic Name]             | [One-sentence description]           | P3       | M    | EPIC-002, EPIC-003 |
| EPIC-006 | [Epic Name]             | [One-sentence description]           | P3       | XL   | EPIC-004         |

**Priority Legend:**
- **P1 (Must Have):** Core functionality required for MVP; product is not viable without it
- **P2 (Should Have):** Important functionality that significantly enhances value; plan for first release
- **P3 (Could Have):** Desirable functionality; include if capacity allows
- **P4 (Won't Have This Time):** Acknowledged but explicitly deferred to a future release

**Size Legend:**
- **XS:** < 1 sprint (1-3 stories)
- **S:** ~1 sprint (4-6 stories)
- **M:** 1-2 sprints (7-12 stories)
- **L:** 2-4 sprints (13-20 stories)
- **XL:** 4+ sprints (20+ stories) -- consider splitting

---

## 2. Epic Details

<!-- Repeat this section for each epic. Every epic must be traceable back to at least
     one requirement (REQ-XXX) and contain at least one user story (US-XXX). -->

### EPIC-001: [Epic Title]

#### Overview

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| **Epic ID**       | EPIC-001                                           |
| **Title**         | [Epic Title]                                       |
| **Owner**         | [Team or individual responsible]                   |
| **Priority**      | P1                                                 |
| **Size Estimate** | L (2-4 sprints)                                    |
| **Target Release**| [Release name or version]                          |
| **Status**        | Not Started / In Progress / Complete               |

#### Description

[Provide a detailed description of what this epic delivers. Explain the scope of work,
the user capability it enables, and why it matters as a cohesive unit of delivery.]

#### Business Value / User Impact

<!-- Quantify the value wherever possible. Connect to business objectives from the
     Product Brief and metrics from the PRD. -->

- **Business Value:** [How does this epic contribute to business goals? Reference specific
  objectives from the Product Brief, e.g., "Supports Objective #2: Acquire 10,000 MAU
  within 6 months post-launch."]
- **User Impact:** [What user problem does this solve? What capability does the user gain?
  Reference persona(s) affected.]
- **Value Metric:** [How will we measure the value delivered by this epic?]

#### Related Requirements

<!-- Trace this epic back to specific requirements documented in Phase 3. Every epic
     must trace to at least one requirement. -->

| Requirement ID | Requirement Description                    | Type         |
|----------------|--------------------------------------------|--------------|
| REQ-001        | [Requirement description from PRD]         | Functional   |
| REQ-002        | [Requirement description from PRD]         | Functional   |
| REQ-NF-001     | [Non-functional requirement]               | Non-Functional |

#### User Stories

<!-- List all user stories that belong to this epic. Each story should follow the
     standard format: "As a [role], I want [capability], so that [benefit]." -->

| Story ID | User Story                                                    | Points | Priority |
|----------|---------------------------------------------------------------|--------|----------|
| US-001   | As a [role], I want [capability], so that [benefit]           | [Est]  | P1       |
| US-002   | As a [role], I want [capability], so that [benefit]           | [Est]  | P1       |
| US-003   | As a [role], I want [capability], so that [benefit]           | [Est]  | P2       |
| US-004   | As a [role], I want [capability], so that [benefit]           | [Est]  | P2       |

**Total Story Points:** [Sum]

#### Acceptance Criteria

<!-- Epic-level acceptance criteria define the overall conditions that must be true for
     the epic to be considered complete. These are broader than individual story criteria. -->

- [ ] [Criterion 1: e.g., "Users can complete the full registration flow end-to-end"]
- [ ] [Criterion 2: e.g., "All happy-path scenarios pass automated E2E testing"]
- [ ] [Criterion 3: e.g., "Performance meets NFR targets under expected load"]
- [ ] [Criterion 4: e.g., "UX review confirms adherence to design specifications"]
- [ ] [Criterion 5: e.g., "Security review completed with no critical findings"]

#### Dependencies

<!-- Identify what must be in place before work on this epic can begin or complete. -->

| Dependency Type  | Dependency Description                              | Status    | Blocker? |
|------------------|-----------------------------------------------------|-----------|----------|
| Epic Dependency  | [e.g., EPIC-003 must deliver authentication module] | Pending   | Yes      |
| External System  | [e.g., Payment gateway API access provisioned]      | In Progress | Yes    |
| Infrastructure   | [e.g., Staging environment available]               | Complete  | No       |
| Team Dependency  | [e.g., Design team delivers final mockups]          | Pending   | Yes      |

#### Estimated Effort Range

| Estimate Type | Optimistic | Most Likely | Pessimistic |
|---------------|------------|-------------|-------------|
| Duration      | [X sprints]| [Y sprints] | [Z sprints] |
| Story Points  | [Low]      | [Mid]       | [High]      |
| Team Members  | [Min]      | [Typical]   | [Max]       |

#### Risk Factors

| Risk ID | Risk Description                               | Probability | Impact | Mitigation                          |
|---------|-------------------------------------------------|-------------|--------|-------------------------------------|
| R-001   | [e.g., Third-party API may change during dev]  | Medium      | High   | [e.g., Abstract behind adapter layer] |
| R-002   | [e.g., Complex state management may slow team] | Low         | Medium | [e.g., Spike story for proof of concept] |

---

### EPIC-002: [Epic Title]

<!-- Repeat the full structure from EPIC-001 above for each additional epic.
     Copy the template block and fill in all sections. -->

[Repeat the full epic detail template for each epic...]

---

## 3. Dependency Graph

<!-- Document the ordering constraints between epics. This graph determines the critical
     path and informs sprint sequencing. Use the textual representation below and
     optionally attach a visual diagram. -->

### 3.1 Dependency Matrix

| Epic \ Depends On | EPIC-001 | EPIC-002 | EPIC-003 | EPIC-004 | EPIC-005 | EPIC-006 |
|--------------------|----------|----------|----------|----------|----------|----------|
| **EPIC-001**       | --       |          |          |          |          |          |
| **EPIC-002**       | X        | --       |          |          |          |          |
| **EPIC-003**       | X        |          | --       |          |          |          |
| **EPIC-004**       |          |          |          | --       |          |          |
| **EPIC-005**       |          | X        | X        |          | --       |          |
| **EPIC-006**       |          |          |          | X        |          | --       |

**Reading the matrix:** An "X" in row EPIC-002, column EPIC-001 means EPIC-002 depends on EPIC-001.

### 3.2 Dependency Flow

<!-- Use text-based diagram notation. Attach a visual diagram if available. -->

```
EPIC-001 (Foundation)
├──▶ EPIC-002 (Depends on 001)
│    └──▶ EPIC-005 (Depends on 002, 003)
├──▶ EPIC-003 (Depends on 001)
│    └──▶ EPIC-005 (Depends on 002, 003)
│
EPIC-004 (Independent)
└──▶ EPIC-006 (Depends on 004)
```

### 3.3 Critical Path

<!-- The critical path is the longest chain of dependent epics. Delays on the critical
     path directly delay the overall release. -->

**Critical Path:** EPIC-001 → EPIC-002 → EPIC-005

**Critical Path Duration:** [Estimated total duration of critical path in sprints]

**Implications:**
- [e.g., EPIC-001 must begin in Sprint 1; any delay cascades to the release date]
- [e.g., Parallel work on EPIC-004 can proceed independently]
- [e.g., Resource allocation should prioritize critical path epics]

### 3.4 Parallelization Opportunities

| Parallel Track A     | Parallel Track B     | Notes                                    |
|----------------------|----------------------|------------------------------------------|
| EPIC-001             | EPIC-004             | No dependencies; can start simultaneously |
| EPIC-002 + EPIC-003  | EPIC-006             | After EPIC-001 and EPIC-004 complete      |

---

## 4. Summary Statistics

| Metric                          | Value                     |
|---------------------------------|---------------------------|
| Total Epics                     | [Count]                   |
| P1 (Must Have) Epics            | [Count]                   |
| P2 (Should Have) Epics          | [Count]                   |
| P3 (Could Have) Epics           | [Count]                   |
| Total User Stories               | [Count]                   |
| Total Estimated Story Points     | [Range: Low - High]       |
| Estimated Duration (Critical Path)| [Sprints]                |
| External Dependencies            | [Count]                   |
| High-Risk Epics                  | [Count]                   |

---

## Validation Checklist

<!-- Complete before advancing this document to sprint planning. -->

- [ ] Every epic traces to at least one requirement (REQ-XXX)
- [ ] Every epic contains at least one user story (US-XXX)
- [ ] All dependencies between epics are identified and documented
- [ ] Critical path is identified and duration estimated
- [ ] Epic-level acceptance criteria are defined for each epic
- [ ] Risk factors are identified for each epic
- [ ] Effort estimates use three-point ranges (optimistic, likely, pessimistic)
- [ ] Epics marked XL have been evaluated for splitting
- [ ] Business value / user impact is articulated for each epic
- [ ] Stakeholders have reviewed and agreed on epic prioritization
