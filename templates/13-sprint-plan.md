---
document_type: sprint-plan
phase: "06-implementation-planning"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "Epic Breakdown (Template 12)"
  - "Implementation Roadmap (Template 14)"
  - "PRD (Phase 3)"
---

# Sprint / Iteration Plan: [Product Name]

<!-- INSTRUCTIONS: This template defines the sprint-by-sprint delivery plan for the product.
     It translates the epic breakdown into a time-boxed execution plan with clear goals,
     capacity assumptions, and risk awareness. Remove all HTML comments before finalizing. -->

## 1. Release Plan Overview

### 1.1 Release Summary

| Attribute             | Value                                             |
|-----------------------|---------------------------------------------------|
| **Product Name**      | [Product Name]                                    |
| **Release Version**   | [e.g., 1.0 / MVP]                                |
| **Release Date**      | [Target date]                                     |
| **Sprint Duration**   | [e.g., 2 weeks]                                   |
| **Total Sprints**     | [Number]                                          |
| **Start Date**        | [Date]                                            |
| **Development Team**  | [Team name(s) and size]                           |
| **Methodology**       | [Scrum / Kanban / SAFe / Custom]                  |

### 1.2 Milestones

| Milestone                  | Target Date  | Sprint | Success Criteria                         | Status  |
|----------------------------|--------------|--------|------------------------------------------|---------|
| Project Kickoff            | [Date]       | 0      | Team onboarded, environment ready        | Pending |
| Foundation Complete        | [Date]       | [N]    | Core infrastructure and auth working     | Pending |
| MVP Feature Complete       | [Date]       | [N]    | All P1 stories implemented and tested    | Pending |
| Internal Beta              | [Date]       | [N]    | Deployed to staging, internal testing    | Pending |
| External Beta / UAT        | [Date]       | [N]    | Selected users testing, feedback loop    | Pending |
| Release Candidate          | [Date]       | [N]    | All bugs triaged, go/no-go decision      | Pending |
| Production Launch (GA)     | [Date]       | [N]    | Deployed to production, monitoring active| Pending |

### 1.3 Release Scope Summary

| Priority | Epic Count | Story Count | Story Points | Included in MVP? |
|----------|------------|-------------|--------------|------------------|
| P1       | [Count]    | [Count]     | [Points]     | Yes              |
| P2       | [Count]    | [Count]     | [Points]     | Partial          |
| P3       | [Count]    | [Count]     | [Points]     | No               |
| **Total**| **[Sum]**  | **[Sum]**   | **[Sum]**    |                  |

---

## 2. Sprint Breakdown

<!-- Define each sprint with a clear goal, selected stories, and known risks.
     Sprint 0 is typically a setup/preparation sprint. -->

### Sprint 0: Project Setup & Foundation

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| **Sprint Goal**   | Establish development environment, tooling, and team agreements |
| **Duration**      | [Start date] - [End date]                          |
| **Capacity**      | [Team members] x [Available days] = [Person-days]  |

#### Selected Work Items

| Story ID  | Title                                    | Points | Assignee | Epic      |
|-----------|------------------------------------------|--------|----------|-----------|
| US-000-01 | Set up source control repository         | [Est]  | [Name]   | Setup     |
| US-000-02 | Configure CI/CD pipeline                 | [Est]  | [Name]   | Setup     |
| US-000-03 | Provision development environments       | [Est]  | [Name]   | Setup     |
| US-000-04 | Establish coding standards and PR process| [Est]  | [Name]   | Setup     |
| US-000-05 | Set up monitoring and logging framework  | [Est]  | [Name]   | Setup     |

#### Sprint Risks

| Risk                                          | Mitigation                              |
|-----------------------------------------------|-----------------------------------------|
| [e.g., Cloud account provisioning delays]     | [e.g., Request accounts 2 weeks ahead]  |

#### Definition of Done for Sprint 0

- [ ] All team members have access to repository and development environment
- [ ] CI/CD pipeline runs a hello-world build and deploy
- [ ] Team working agreements documented and agreed upon
- [ ] Backlog for Sprint 1 is refined and ready

---

### Sprint 1: [Sprint Goal Title]

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| **Sprint Goal**   | [A concise statement of what this sprint achieves for users or the system] |
| **Duration**      | [Start date] - [End date]                          |
| **Capacity**      | [Team members] x [Available days] = [Person-days]  |
| **Planned Points**| [Total story points planned]                       |
| **Buffer**        | [Points reserved for unknowns, typically 10-20%]   |

#### Selected Stories

| Story ID | Title                                       | Points | Assignee | Epic     | Priority |
|----------|---------------------------------------------|--------|----------|----------|----------|
| US-001   | [Story title]                               | [Est]  | [Name]   | EPIC-001 | P1       |
| US-002   | [Story title]                               | [Est]  | [Name]   | EPIC-001 | P1       |
| US-003   | [Story title]                               | [Est]  | [Name]   | EPIC-001 | P1       |
| US-004   | [Story title]                               | [Est]  | [Name]   | EPIC-004 | P2       |

**Total Planned:** [X] points | **Capacity:** [Y] points | **Buffer:** [Z] points

#### Dependencies & Blockers

| Dependency                                   | Owner    | Status    | Blocker? |
|----------------------------------------------|----------|-----------|----------|
| [e.g., Design mockups for US-003]            | [Name]   | [Status]  | [Y/N]    |
| [e.g., API key from third-party provider]    | [Name]   | [Status]  | [Y/N]    |

#### Sprint Risks

| Risk                                          | Probability | Impact | Mitigation                    |
|-----------------------------------------------|-------------|--------|-------------------------------|
| [e.g., Authentication flow more complex than estimated] | Medium | High | [Spike story allocated for research] |

---

### Sprint 2: [Sprint Goal Title]

| Attribute         | Value                                              |
|-------------------|----------------------------------------------------|
| **Sprint Goal**   | [Sprint goal statement]                            |
| **Duration**      | [Start date] - [End date]                          |
| **Capacity**      | [Team members] x [Available days] = [Person-days]  |
| **Planned Points**| [Total story points planned]                       |
| **Buffer**        | [Points reserved]                                  |

#### Selected Stories

| Story ID | Title                                       | Points | Assignee | Epic     | Priority |
|----------|---------------------------------------------|--------|----------|----------|----------|
| US-005   | [Story title]                               | [Est]  | [Name]   | EPIC-001 | P1       |
| US-006   | [Story title]                               | [Est]  | [Name]   | EPIC-002 | P1       |
| US-007   | [Story title]                               | [Est]  | [Name]   | EPIC-002 | P1       |

**Total Planned:** [X] points | **Capacity:** [Y] points | **Buffer:** [Z] points

#### Dependencies & Blockers

| Dependency                                   | Owner    | Status    | Blocker? |
|----------------------------------------------|----------|-----------|----------|
| [e.g., Sprint 1 stories US-001, US-002 complete] | [Name] | [Status] | [Y/N]  |

#### Sprint Risks

| Risk                                          | Probability | Impact | Mitigation                    |
|-----------------------------------------------|-------------|--------|-------------------------------|
| [Risk description]                            | [P]         | [I]    | [Mitigation]                  |

---

<!-- Continue with Sprint 3, Sprint 4, etc. following the same template structure.
     Include as many sprints as needed to cover the full release scope. -->

### Sprint N: [Sprint Goal Title]

[Repeat the sprint template structure for each additional sprint...]

---

## 3. MVP Definition

<!-- The MVP is the minimum set of functionality that delivers enough value to launch
     and begin learning from real users. Be ruthless about what is truly minimum. -->

### 3.1 MVP Scope

| Epic     | Stories Included in MVP                     | Stories Deferred | Rationale         |
|----------|---------------------------------------------|------------------|--------------------|
| EPIC-001 | US-001, US-002, US-003                      | US-004           | US-004 is enhancement, not core |
| EPIC-002 | US-005, US-006                              | US-007, US-008   | Core flow only     |
| EPIC-004 | US-010                                      | US-011, US-012   | Single integration first |

### 3.2 MVP Acceptance Criteria

<!-- These are the conditions under which the MVP is considered ready to ship. -->

- [ ] All P1 user stories are implemented, tested, and deployed to staging
- [ ] Core user journey can be completed end-to-end without errors
- [ ] Performance meets minimum acceptable thresholds (defined in NFRs)
- [ ] Security review completed with no critical or high vulnerabilities
- [ ] Monitoring and alerting is operational
- [ ] Rollback procedure is documented and tested
- [ ] User documentation / help content covers core flows
- [ ] Stakeholder demo completed and launch approval received

### 3.3 MVP Metrics for Success

| Metric                       | Target (30 days post-launch) | Measurement Method          |
|------------------------------|------------------------------|-----------------------------|
| [e.g., User Registration Rate] | [e.g., 500 registrations]  | [e.g., Analytics dashboard] |
| [e.g., Core Task Completion] | [e.g., 80% success rate]     | [e.g., Event tracking]      |
| [e.g., System Uptime]       | [e.g., 99.5%]                | [e.g., Monitoring platform] |
| [e.g., Critical Bug Count]  | [e.g., 0 open P1 bugs]       | [e.g., Issue tracker]       |

---

## 4. Definition of Done (DoD)

<!-- The Definition of Done applies to every user story across all sprints.
     A story is not "done" until ALL of these criteria are met. -->

### Story-Level DoD

- [ ] Code is written and follows team coding standards
- [ ] Code is peer-reviewed (minimum one approval)
- [ ] Unit tests written with >= [X]% coverage for new code
- [ ] Integration tests written for cross-component interactions
- [ ] All automated tests pass in CI pipeline
- [ ] No new static analysis warnings or security vulnerabilities introduced
- [ ] API documentation updated (if applicable)
- [ ] UI matches approved design specifications (if applicable)
- [ ] Accessibility requirements met (WCAG 2.1 AA minimum, if applicable)
- [ ] Feature deployed to staging environment and verified
- [ ] Product Owner has accepted the story against acceptance criteria
- [ ] Relevant documentation updated (README, runbooks, etc.)

### Sprint-Level DoD

- [ ] All stories committed to the sprint meet Story-Level DoD
- [ ] Sprint goal is achieved or deviation is documented
- [ ] Sprint demo conducted with stakeholders
- [ ] Sprint retrospective completed and actions documented
- [ ] Backlog for next sprint is refined (top items estimated and ready)
- [ ] Release notes drafted for completed work
- [ ] No critical or high-severity bugs remain open from this sprint

### Release-Level DoD

- [ ] All sprint-level DoD criteria met for all sprints in the release
- [ ] End-to-end testing completed against all core user journeys
- [ ] Performance testing completed and results meet NFR thresholds
- [ ] Security testing completed with no unresolved critical findings
- [ ] UAT completed and sign-off received
- [ ] Production deployment runbook reviewed and rehearsed
- [ ] Monitoring, alerting, and on-call rotation established
- [ ] Launch communication plan executed

---

## 5. Definition of Ready (DoR)

<!-- A story must meet ALL of these criteria before it can be pulled into a sprint.
     This prevents mid-sprint surprises and ensures the team has enough information
     to deliver the story. -->

### Story Readiness Criteria

- [ ] User story follows standard format: "As a [role], I want [capability], so that [benefit]"
- [ ] Acceptance criteria are written and unambiguous (Given/When/Then format preferred)
- [ ] Story is estimated by the development team (story points assigned)
- [ ] Story is small enough to complete within one sprint
- [ ] Dependencies are identified and resolved (or a plan exists to resolve them)
- [ ] Design artifacts are available (wireframes, mockups, or design specs)
- [ ] Technical approach is understood (no unresolved spikes or unknowns)
- [ ] Test scenarios are identified (happy path + key edge cases)
- [ ] API contracts are defined (if the story involves API work)
- [ ] Data requirements are documented (if the story involves data model changes)

### Refinement Process

| Activity               | Frequency          | Participants                        | Output                |
|------------------------|--------------------|-------------------------------------|-----------------------|
| Backlog Grooming       | [e.g., Weekly]     | PO, Dev Team, UX                    | Refined stories       |
| Sprint Planning        | [e.g., Bi-weekly]  | PO, Scrum Master, Dev Team          | Sprint backlog        |
| Design Handoff         | [As needed]        | UX Designer, Dev Team               | Approved designs      |
| Technical Spike Review | [As needed]        | Dev Team, Architect                 | Spike findings        |

---

## 6. Velocity Assumptions & Buffer

### 6.1 Velocity Model

| Parameter                        | Value           | Basis                                   |
|----------------------------------|-----------------|-----------------------------------------|
| Team Size                        | [N] developers  | [Current team allocation]               |
| Sprint Duration                  | [N] days        | [Team agreement]                        |
| Gross Capacity (person-days)     | [N x days]      | [Team size x sprint days]               |
| Availability Factor              | [e.g., 80%]     | [Accounts for meetings, PTO, overhead]  |
| Net Capacity (person-days)       | [Calculated]    | [Gross x Availability Factor]           |
| Estimated Velocity               | [X] points/sprint | [Based on historical data or team estimate] |
| Ramp-up Sprints                  | [N]             | [Sprints at reduced velocity for new team] |
| Ramp-up Velocity                 | [Y] points/sprint | [Typically 60-70% of steady-state]     |

### 6.2 Buffer Strategy

<!-- Buffers protect against estimation errors, unexpected complexity, and unplanned work.
     A plan without buffer is a plan that will fail. -->

| Buffer Type              | Allocation     | Rationale                                          |
|--------------------------|----------------|----------------------------------------------------|
| Sprint Buffer            | [10-20%] of capacity | Unplanned work, bug fixes, estimation variance |
| Release Buffer           | [1-2 sprints]  | Scope adjustments, integration issues, hardening   |
| Risk Buffer              | [Conditional]  | Activated if identified risks materialize          |
| Technical Debt Buffer    | [5-10%] of capacity | Refactoring and debt paydown per sprint        |

### 6.3 Velocity Tracking Plan

| Sprint   | Planned Points | Actual Points | Cumulative Planned | Cumulative Actual | Notes        |
|----------|----------------|---------------|--------------------|-------------------|--------------|
| Sprint 1 | [X]            | [Actual]      | [X]                | [Actual]          | [Ramp-up]    |
| Sprint 2 | [X]            | [Actual]      | [Sum]              | [Sum]             |              |
| Sprint 3 | [X]            | [Actual]      | [Sum]              | [Sum]             |              |
| ...      | ...            | ...           | ...                | ...               |              |

---

## 7. Risks & Contingencies

### 7.1 Sprint Plan Risks

| Risk ID | Risk                                        | Probability | Impact | Affected Sprints | Contingency Plan                  |
|---------|---------------------------------------------|-------------|--------|------------------|-----------------------------------|
| SPR-001 | [e.g., Key team member unavailable]         | Medium      | High   | All              | [e.g., Cross-train backup person]  |
| SPR-002 | [e.g., Third-party API delivery delayed]    | Medium      | High   | Sprint 3-4       | [e.g., Build mock service, defer integration] |
| SPR-003 | [e.g., Scope creep from stakeholder requests]| High       | Medium | All              | [e.g., Change control process, PO gatekeeper] |
| SPR-004 | [e.g., Underestimated technical complexity] | Medium      | Medium | Sprint 2-3       | [e.g., Spike stories, buffer allocation] |

### 7.2 Scope Adjustment Levers

<!-- If the plan falls behind, these are the levers available to get back on track,
     listed in order of preference. -->

1. **Reduce scope:** Remove P3 stories, then P2 stories from the current release
2. **Extend timeline:** Add sprints (requires stakeholder approval)
3. **Add capacity:** Onboard additional team members (has ramp-up cost)
4. **Reduce quality:** Lower test coverage thresholds (NOT recommended; last resort only)

---

## Validation Checklist

<!-- Complete before beginning Sprint 0. -->

- [ ] All P1 stories are assigned to specific sprints
- [ ] Sprint goals are clear and measurable for each sprint
- [ ] Capacity is calculated for each sprint (accounting for PTO, holidays)
- [ ] Dependencies between sprints are identified and sequenced correctly
- [ ] MVP scope is explicitly defined and agreed upon by stakeholders
- [ ] Definition of Done is agreed upon by the entire team
- [ ] Definition of Ready is agreed upon by the entire team
- [ ] Velocity assumptions are documented with supporting rationale
- [ ] Buffer is allocated at both sprint and release levels
- [ ] Risk contingencies are defined for top risks
- [ ] Stakeholders have reviewed and approved the sprint plan
