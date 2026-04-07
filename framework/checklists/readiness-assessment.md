---
document_type: readiness-assessment
version: "1.0"
applies_to: "development-handoff"
---

# Development Readiness Assessment

## Overview

This comprehensive assessment evaluates whether the full specification package is ready for development handoff. It is the final quality check before code is written, covering all dimensions of the specification lifecycle.

**When to use:** After Phase 6 is complete and before the development kickoff meeting.

**Who evaluates:** The Orchestrator agent (or a cross-functional review panel including Product Owner, Tech Lead, QA Lead, and UX Lead).

**Scoring System:**
- Each item is scored **0-10** using the criteria described for each item
- **0** = Not addressed
- **3** = Superficially addressed with significant gaps
- **5** = Partially addressed; gaps exist but are documented
- **7** = Well addressed with only minor gaps
- **10** = Thoroughly addressed; no meaningful gaps

**Pass Criteria:**
- **Overall average >= 7.0**
- **Category averages: No category below 6.0**
- **No individual item below 3** (a score below 3 is a critical gap that blocks handoff)
- **Conditional pass:** Overall average >= 7.0 but one category at 6.0-6.5; may proceed with documented remediation plan owned and scheduled

---

## Category 1: Vision & Strategy

*Source: Phase 1 artifacts. Evaluates whether the team has a clear, shared understanding of what they are building and why.*

### VS-01: Problem Clarity

**The problem being solved is clearly articulated, evidence-backed, and understood by the entire team.**

| Score | Criteria |
|-------|----------|
| 0     | No problem statement exists |
| 3     | Problem is stated but vague or unsupported by evidence |
| 5     | Problem is clearly stated with some supporting evidence, but impact is not quantified |
| 7     | Problem is specific, supported by multiple evidence sources, with quantified impact |
| 10    | Problem is crystal clear, backed by strong evidence (interviews, data, research), impact is quantified, and the team can articulate it consistently |

**Score:** [ ] / 10

### VS-02: Target User Definition

**Primary user personas are defined with enough specificity to guide design and prioritization decisions.**

| Score | Criteria |
|-------|----------|
| 0     | No personas defined |
| 3     | Generic descriptions ("small business owners") without behavioral detail |
| 5     | Personas exist with roles and goals but lack workflow, pain, and decision context |
| 7     | Personas include role, goals, frustrations, current workflow, and decision authority |
| 10    | Personas are specific, validated against research, and consistently referenced across all phase artifacts |

**Score:** [ ] / 10

### VS-03: Value Proposition Differentiation

**The product's value proposition clearly differentiates from alternatives and is validated against market reality.**

| Score | Criteria |
|-------|----------|
| 0     | No value proposition documented |
| 3     | Value proposition lists features but does not articulate differentiation |
| 5     | Differentiation is claimed but not validated against competitive analysis |
| 7     | Differentiation is validated against competitors and tied to user needs |
| 10    | Value proposition is validated, differentiated, and reflected consistently in requirements, design, and positioning |

**Score:** [ ] / 10

### VS-04: Success Metrics

**Business and user objectives are SMART with measurable targets that the team can track.**

| Score | Criteria |
|-------|----------|
| 0     | No success metrics defined |
| 3     | Metrics exist but are vague ("increase engagement") without targets |
| 5     | Metrics have targets but lack timelines or measurement methods |
| 7     | Metrics are SMART with targets, timelines, and identified measurement tools |
| 10    | Metrics are SMART, instrumentation is planned, leading and lagging indicators are distinguished, and baselines are established |

**Score:** [ ] / 10

### VS-05: Scope Boundaries

**What is in scope and out of scope is explicitly defined and enforced across all phases.**

| Score | Criteria |
|-------|----------|
| 0     | No scope boundaries defined |
| 3     | In-scope is defined but out-of-scope is not |
| 5     | Both in-scope and out-of-scope defined but not enforced (scope creep evident in later phases) |
| 7     | Scope is well-defined, enforced, and changes are documented with rationale |
| 10    | Scope boundaries are explicit, enforced, referenced by downstream artifacts, and a change control process exists |

**Score:** [ ] / 10

**Category 1 Average:** [ ] / 10

---

## Category 2: Market Validation

*Source: Phase 2 artifacts. Evaluates whether the market opportunity is real and the competitive position is defensible.*

### MV-01: Market Sizing

**Market size is calculated with cited data, using appropriate methodology.**

| Score | Criteria |
|-------|----------|
| 0     | No market sizing |
| 3     | Single top-down estimate without sources |
| 5     | TAM/SAM/SOM calculated with sources but using only one methodology |
| 7     | Multiple methodologies used with cited sources; SOM is realistic |
| 10    | Market sizing is thorough, cross-validated, assumptions are explicit, and the beachhead segment is clearly identified |

**Score:** [ ] / 10

### MV-02: Competitive Landscape

**Direct and indirect competitors are thoroughly analyzed.**

| Score | Criteria |
|-------|----------|
| 0     | No competitive analysis |
| 3     | Competitors listed but not analyzed |
| 5     | 2-3 competitors analyzed at a surface level |
| 7     | 3-5 competitors analyzed with capabilities, pricing, positioning, strengths, and weaknesses |
| 10    | Comprehensive analysis including direct, indirect, and substitute competitors; feature matrix complete; competitive moats identified |

**Score:** [ ] / 10

### MV-03: Differentiation Validation

**Claimed differentiators are tested against competitive reality.**

| Score | Criteria |
|-------|----------|
| 0     | No differentiation analysis |
| 3     | Differentiators listed but not compared to competitors |
| 5     | Differentiators compared to competitors but not validated with user needs |
| 7     | Differentiators are validated against both competitors and user priorities |
| 10    | Differentiators are validated, sustainable, and reflected in requirements prioritization |

**Score:** [ ] / 10

### MV-04: Market Trends

**Relevant market trends are identified with trajectory analysis.**

| Score | Criteria |
|-------|----------|
| 0     | No trend analysis |
| 3     | Trends mentioned but not analyzed for impact |
| 5     | Trends identified with general impact assessment |
| 7     | Trends analyzed with specific opportunities and threats to the product |
| 10    | Trends are analyzed with trajectory, product positioning is aligned with favorable trends, and threats have mitigation strategies |

**Score:** [ ] / 10

### MV-05: Data Quality

**All market claims are backed by cited, current data.**

| Score | Criteria |
|-------|----------|
| 0     | No data citations |
| 3     | Some citations but many unsourced claims |
| 5     | Most claims cited but some sources are outdated (> 2 years) |
| 7     | All significant claims cited with current sources |
| 10    | All claims cited, sources are current and credible, methodology is transparent, and limitations are acknowledged |

**Score:** [ ] / 10

**Category 2 Average:** [ ] / 10

---

## Category 3: Requirements Quality

*Source: Phase 3 artifacts. Evaluates whether requirements are complete, consistent, and testable.*

### RQ-01: Functional Completeness

**All necessary functional requirements are identified and documented.**

| Score | Criteria |
|-------|----------|
| 0     | No functional requirements documented |
| 3     | Major features listed but requirements are incomplete |
| 5     | Core requirements documented but secondary flows and edge cases are missing |
| 7     | Comprehensive requirements covering main flows, alternative flows, and key edge cases |
| 10    | Exhaustive requirements including all flows, edge cases, error states, and boundary conditions |

**Score:** [ ] / 10

### RQ-02: Testability

**Every requirement is written as a testable statement with acceptance criteria.**

| Score | Criteria |
|-------|----------|
| 0     | Requirements are not testable |
| 3     | Some requirements are testable; many are vague or subjective |
| 5     | Most requirements have acceptance criteria but some are ambiguous |
| 7     | All requirements have clear acceptance criteria; Given/When/Then format used consistently |
| 10    | Every requirement is testable, has detailed acceptance criteria, and test scenarios are already identified |

**Score:** [ ] / 10

### RQ-03: Non-Functional Requirements

**NFRs are specified with measurable thresholds across all quality attributes.**

| Score | Criteria |
|-------|----------|
| 0     | No NFRs documented |
| 3     | NFRs mentioned but use subjective language ("fast," "secure") |
| 5     | Some NFRs have measurable thresholds; others remain vague |
| 7     | All NFRs have measurable thresholds covering performance, security, availability, and scalability |
| 10    | Comprehensive NFRs with thresholds, measurement methods, test approaches, and acceptable degradation levels |

**Score:** [ ] / 10

### RQ-04: Requirements Consistency

**No contradictions exist between requirements.**

| Score | Criteria |
|-------|----------|
| 0     | Consistency not checked; contradictions likely |
| 3     | Obvious contradictions exist and are unresolved |
| 5     | Consistency check performed; minor contradictions remain |
| 7     | No contradictions; consistency has been validated through review |
| 10    | Formal consistency check performed, no contradictions, and cross-references validate coherence |

**Score:** [ ] / 10

### RQ-05: Prioritization

**Requirements are prioritized with a consistent framework and stakeholder agreement.**

| Score | Criteria |
|-------|----------|
| 0     | No prioritization |
| 3     | Some requirements are prioritized but inconsistently |
| 5     | All requirements prioritized but rationale is missing or "everything is P1" |
| 7     | Clear prioritization with framework (MoSCoW), rationale, and stakeholder agreement |
| 10    | Prioritization is rigorous, data-informed, stakeholder-agreed, and directly informs MVP scope |

**Score:** [ ] / 10

### RQ-06: User Story Quality

**User stories follow standard format with detailed acceptance criteria.**

| Score | Criteria |
|-------|----------|
| 0     | No user stories |
| 3     | Stories exist but lack standard format or acceptance criteria |
| 5     | Stories follow format; acceptance criteria exist but are incomplete |
| 7     | All stories follow standard format with comprehensive acceptance criteria |
| 10    | Stories are well-written, appropriately sized, have Given/When/Then acceptance criteria, and are independently testable |

**Score:** [ ] / 10

### RQ-07: Use Case Coverage

**Core workflows are modeled as use cases with main, alternative, and exception flows.**

| Score | Criteria |
|-------|----------|
| 0     | No use cases |
| 3     | Happy-path descriptions only |
| 5     | Use cases cover main flows; alternative and exception flows are sparse |
| 7     | Use cases cover main, alternative, and key exception flows for core workflows |
| 10    | Comprehensive use cases including preconditions, all flows, postconditions, and cross-references to requirements |

**Score:** [ ] / 10

### RQ-08: Traceability to Business Goals

**Every requirement traces back to at least one business goal.**

| Score | Criteria |
|-------|----------|
| 0     | No traceability |
| 3     | Some requirements reference business goals; most do not |
| 5     | Most requirements trace to goals but some orphans exist |
| 7     | All requirements trace to business goals; traceability is documented |
| 10    | Full bidirectional traceability: every goal has requirements, every requirement has a goal, and the mapping is maintained |

**Score:** [ ] / 10

**Category 3 Average:** [ ] / 10

---

## Category 4: UX & Design

*Source: Phase 4 artifacts. Evaluates whether the user experience is fully designed and specified.*

### UX-01: User Flow Coverage

**All user-facing requirements have corresponding user flows.**

| Score | Criteria |
|-------|----------|
| 0     | No user flows |
| 3     | User flows exist for 1-2 core journeys only |
| 5     | User flows cover most happy paths but miss error and edge cases |
| 7     | User flows cover all core journeys including error paths |
| 10    | Comprehensive user flows for all journeys, all paths, with decision points and system responses documented |

**Score:** [ ] / 10

### UX-02: Wireframe Completeness

**Every unique screen state is wireframed.**

| Score | Criteria |
|-------|----------|
| 0     | No wireframes |
| 3     | Key screens wireframed but many states missing |
| 5     | Primary screens wireframed; empty, loading, and error states are incomplete |
| 7     | All screens wireframed including key states (empty, loading, error, success) |
| 10    | Every screen and every state is wireframed with annotations; responsive variants included |

**Score:** [ ] / 10

### UX-03: Design System Definition

**A design system is defined with reusable components, patterns, and standards.**

| Score | Criteria |
|-------|----------|
| 0     | No design system |
| 3     | Basic color and typography defined; no component library |
| 5     | Core components defined but design system is incomplete |
| 7     | Design system covers components, typography, colors, spacing, and interaction patterns |
| 10    | Comprehensive design system with component library, usage guidelines, accessibility notes, and responsive specifications |

**Score:** [ ] / 10

### UX-04: Accessibility

**Designs meet accessibility standards (WCAG 2.1 AA minimum).**

| Score | Criteria |
|-------|----------|
| 0     | Accessibility not considered |
| 3     | Basic awareness but no systematic audit |
| 5     | Color contrast checked; keyboard navigation and screen reader support not addressed |
| 7     | Accessibility audit completed covering color, keyboard, screen reader, and touch targets |
| 10    | Full WCAG 2.1 AA compliance verified; accessibility is integrated into the design system; testing plan includes accessibility |

**Score:** [ ] / 10

### UX-05: Interaction Specifications

**Transitions, animations, loading states, and responsive behavior are specified.**

| Score | Criteria |
|-------|----------|
| 0     | No interaction specifications |
| 3     | Basic descriptions but no detail on timing, transitions, or responsive behavior |
| 5     | Some interactions specified; responsive breakpoints defined but incomplete |
| 7     | Most interactions specified with timing and behavior; responsive breakpoints defined |
| 10    | All interactions specified with precise timing, easing, responsive behavior, and developer-ready annotations |

**Score:** [ ] / 10

### UX-06: Design-Requirements Alignment

**Designs accurately reflect all requirements without adding unspecified features.**

| Score | Criteria |
|-------|----------|
| 0     | Designs do not align with requirements |
| 3     | Significant gaps between designs and requirements |
| 5     | Designs cover most requirements; some gaps or additions exist |
| 7     | Designs align closely with requirements; minor discrepancies documented |
| 10    | Perfect alignment verified through cross-reference; no unspecified features added; no requirements missing from designs |

**Score:** [ ] / 10

**Category 4 Average:** [ ] / 10

---

## Category 5: Architecture & Technical

*Source: Phase 5 artifacts. Evaluates whether the technical design is sound, complete, and buildable.*

### AT-01: System Architecture

**High-level system design is documented with components, interactions, and boundaries.**

| Score | Criteria |
|-------|----------|
| 0     | No architecture document |
| 3     | High-level description but no diagrams or component details |
| 5     | Architecture diagram exists but component responsibilities and interactions are unclear |
| 7     | Clear architecture with component diagram, responsibilities, and interaction patterns |
| 10    | Comprehensive architecture using standard notation (C4 model), with deployment view, component view, and context view |

**Score:** [ ] / 10

### AT-02: API Specifications

**All APIs are fully specified with endpoints, schemas, authentication, and error handling.**

| Score | Criteria |
|-------|----------|
| 0     | No API specifications |
| 3     | Endpoint list exists but schemas and error handling are missing |
| 5     | Core endpoints specified; some schemas incomplete; error handling partial |
| 7     | All endpoints specified with request/response schemas, authentication, and error codes |
| 10    | Complete OpenAPI/Swagger specification with examples, pagination, rate limits, versioning, and contract tests defined |

**Score:** [ ] / 10

### AT-03: Data Model

**Database schema is defined with entities, relationships, constraints, and lifecycle.**

| Score | Criteria |
|-------|----------|
| 0     | No data model |
| 3     | Entity list exists but relationships and constraints are undefined |
| 5     | Core entities with relationships; constraints and indexes are incomplete |
| 7     | Complete data model with entities, relationships, constraints, and indexing strategy |
| 10    | Comprehensive data model with lifecycle, migration strategy, seed data, archival policy, and query pattern validation |

**Score:** [ ] / 10

### AT-04: Architecture Decision Records

**Significant technical decisions are documented with context, alternatives, and rationale.**

| Score | Criteria |
|-------|----------|
| 0     | No decision documentation |
| 3     | Decisions mentioned in passing but not formally documented |
| 5     | Some ADRs exist; major decisions lack documentation |
| 7     | ADRs cover all significant decisions with context, alternatives, and rationale |
| 10    | Comprehensive ADRs for all decisions, including rejected alternatives with pros/cons; consequences and trade-offs explicit |

**Score:** [ ] / 10

### AT-05: Security Architecture

**Security is designed into the architecture, not deferred to implementation.**

| Score | Criteria |
|-------|----------|
| 0     | Security not addressed |
| 3     | Authentication mentioned but authorization, data protection, and input validation are not |
| 5     | Authentication and authorization designed; data protection and input validation incomplete |
| 7     | Comprehensive security design covering auth, authorization, data protection, input validation, and secrets management |
| 10    | Security architecture addresses OWASP Top 10, includes threat model, defines security testing approach, and specifies compliance controls |

**Score:** [ ] / 10

### AT-06: NFR Architectural Coverage

**Every non-functional requirement has a corresponding architectural approach.**

| Score | Criteria |
|-------|----------|
| 0     | NFRs not addressed in architecture |
| 3     | Some NFRs have architectural approaches; most are unaddressed |
| 5     | Core NFRs (performance, availability) addressed; others missing |
| 7     | All NFRs have corresponding architectural approaches documented |
| 10    | Every NFR has an architectural approach, validation method, and the approach is justified against the specific threshold |

**Score:** [ ] / 10

### AT-07: Deployment & Operations

**Deployment strategy, infrastructure, and operational concerns are defined.**

| Score | Criteria |
|-------|----------|
| 0     | No deployment or operational planning |
| 3     | Deployment target identified but strategy is undefined |
| 5     | Deployment strategy outlined; monitoring and scaling are incomplete |
| 7     | Deployment, scaling, monitoring, logging, and backup strategies defined |
| 10    | Comprehensive operational design including deployment automation, scaling policies, monitoring/alerting, disaster recovery, and runbooks |

**Score:** [ ] / 10

### AT-08: Technical Feasibility

**Architecture is achievable given the team's skills, timeline, and resources.**

| Score | Criteria |
|-------|----------|
| 0     | Feasibility not assessed |
| 3     | Architecture may be too complex for the team or timeline |
| 5     | Architecture is feasible but stretches the team in specific areas |
| 7     | Architecture is feasible; skill gaps are identified with mitigation plans |
| 10    | Architecture is well-matched to team capabilities; technology choices are proven; skill gaps have concrete training or hiring plans |

**Score:** [ ] / 10

**Category 5 Average:** [ ] / 10

---

## Category 6: Implementation Planning

*Source: Phase 6 artifacts. Evaluates whether the delivery plan is realistic and actionable.*

### IP-01: Epic Decomposition

**All requirements are organized into coherent, prioritized, estimated epics.**

| Score | Criteria |
|-------|----------|
| 0     | No epic breakdown |
| 3     | Some features grouped into epics; many requirements are unassigned |
| 5     | Most requirements assigned to epics; estimates and priorities are incomplete |
| 7     | All requirements mapped to epics with priorities, estimates, and acceptance criteria |
| 10    | Complete epic breakdown with three-point estimates, dependency graph, critical path, and parallelization opportunities |

**Score:** [ ] / 10

### IP-02: Sprint Plan Realism

**Sprint plan uses realistic capacity assumptions with appropriate buffer.**

| Score | Criteria |
|-------|----------|
| 0     | No sprint plan |
| 3     | Sprint plan exists but capacity and velocity are assumed without basis |
| 5     | Sprint plan with capacity calculations; velocity assumptions are optimistic; limited buffer |
| 7     | Realistic velocity assumptions with documented rationale; buffer at sprint and release levels |
| 10    | Sprint plan with data-backed velocity, ramp-up sprints, appropriate buffer, scope adjustment levers, and contingency plans |

**Score:** [ ] / 10

### IP-03: MVP Definition

**MVP scope is explicitly defined and is genuinely minimum.**

| Score | Criteria |
|-------|----------|
| 0     | No MVP defined |
| 3     | MVP mentioned but scope is vague or includes nearly everything |
| 5     | MVP scope defined but includes non-essential features |
| 7     | MVP is well-scoped with clear inclusion/exclusion criteria and stakeholder agreement |
| 10    | MVP is ruthlessly minimal, tied to core value proposition, has success metrics, and every inclusion is justified |

**Score:** [ ] / 10

### IP-04: Risk Management

**Risks are identified, quantified, and have mitigation plans with owners.**

| Score | Criteria |
|-------|----------|
| 0     | No risk management |
| 3     | Risks listed but not quantified or mitigated |
| 5     | Risks quantified (probability/impact) but mitigations are generic |
| 7     | Risks quantified with specific mitigations and named owners |
| 10    | Comprehensive risk register with quantification, specific mitigations, named owners, monitoring triggers, and contingency budgets |

**Score:** [ ] / 10

### IP-05: Traceability Coverage

**End-to-end traceability from business goals through test cases is achieved.**

| Score | Criteria |
|-------|----------|
| 0     | No traceability matrix |
| 3     | Partial traceability; significant gaps exist |
| 5     | Traceability covers most requirements; some gaps in design or testing links |
| 7     | >= 90% traceability coverage; gaps are documented with resolution plans |
| 10    | >= 95% traceability coverage across all dimensions; gaps are documented, accepted, or have resolution plans; coverage analysis is complete |

**Score:** [ ] / 10

### IP-06: Launch Readiness

**Launch plan includes rollout strategy, rollback procedure, and monitoring.**

| Score | Criteria |
|-------|----------|
| 0     | No launch plan |
| 3     | Launch date identified but no strategy or contingency |
| 5     | Rollout strategy defined; rollback procedure is incomplete |
| 7     | Complete launch plan with rollout, rollback, monitoring, and success metrics |
| 10    | Launch plan includes rollout strategy, tested rollback procedure, monitoring with alert thresholds, post-launch support plan, and communication plan |

**Score:** [ ] / 10

**Category 6 Average:** [ ] / 10

---

## Category 7: Risk & Compliance

*Source: Cross-phase. Evaluates whether risks are managed and compliance requirements are addressed.*

### RC-01: Risk Aggregation

**Risks from all phases are aggregated into a unified risk register.**

| Score | Criteria |
|-------|----------|
| 0     | No risk aggregation |
| 3     | Risks exist in individual phases but are not consolidated |
| 5     | Risks consolidated but not consistently quantified |
| 7     | Unified risk register with consistent quantification across all phases |
| 10    | Comprehensive unified risk register with cross-phase risk dependencies, aggregated exposure analysis, and executive summary |

**Score:** [ ] / 10

### RC-02: Compliance Requirements

**Regulatory and compliance requirements are identified and addressed.**

| Score | Criteria |
|-------|----------|
| 0     | Compliance not considered |
| 3     | Compliance mentioned but requirements are not specific |
| 5     | Key compliance requirements identified; architectural approach is partial |
| 7     | All compliance requirements identified with architectural approaches and validation plans |
| 10    | Comprehensive compliance coverage with specific controls, audit trail design, validation methods, and legal/compliance team sign-off |

**Score:** [ ] / 10

### RC-03: Assumption Validation

**Critical assumptions from all phases have validation plans and current status.**

| Score | Criteria |
|-------|----------|
| 0     | Assumptions not tracked |
| 3     | Assumptions listed in Phase 1 but not tracked or validated |
| 5     | Some assumptions validated; others remain unvalidated without plans |
| 7     | All critical assumptions have validation plans; most are validated or scheduled |
| 10    | All assumptions tracked with status; validated assumptions confirmed; unvalidated assumptions have specific validation activities scheduled before they become critical |

**Score:** [ ] / 10

### RC-04: Data Privacy & Protection

**Data handling requirements are specified (collection, storage, retention, deletion).**

| Score | Criteria |
|-------|----------|
| 0     | Data privacy not addressed |
| 3     | Data types mentioned but handling requirements are undefined |
| 5     | Data handling requirements exist for some data types; retention and deletion policies are incomplete |
| 7     | Comprehensive data handling specifications including collection, storage, retention, deletion, and user rights |
| 10    | Full data privacy design including GDPR/CCPA compliance, data flow diagrams, retention policies, deletion procedures, user consent management, and privacy impact assessment |

**Score:** [ ] / 10

### RC-05: Contingency Planning

**Major risk scenarios have contingency plans that go beyond the immediate mitigation.**

| Score | Criteria |
|-------|----------|
| 0     | No contingency planning |
| 3     | Contingencies mentioned for 1-2 risks |
| 5     | Contingency plans exist for major risks but lack detail |
| 7     | Detailed contingency plans for all high-severity risks including triggers, actions, and owners |
| 10    | Comprehensive contingency playbooks for all high-severity scenarios; plans are reviewed, communicated, and rehearsed where applicable |

**Score:** [ ] / 10

**Category 7 Average:** [ ] / 10

---

## Assessment Summary

### Category Scores

| Category                       | Items | Average Score | Status     |
|--------------------------------|-------|---------------|------------|
| 1. Vision & Strategy           | 5     | [ ] / 10      | [R/Y/G]    |
| 2. Market Validation           | 5     | [ ] / 10      | [R/Y/G]    |
| 3. Requirements Quality        | 8     | [ ] / 10      | [R/Y/G]    |
| 4. UX & Design                 | 6     | [ ] / 10      | [R/Y/G]    |
| 5. Architecture & Technical    | 8     | [ ] / 10      | [R/Y/G]    |
| 6. Implementation Planning     | 6     | [ ] / 10      | [R/Y/G]    |
| 7. Risk & Compliance           | 5     | [ ] / 10      | [R/Y/G]    |

**Status Legend:**
- **G (Green):** Category average >= 7.0
- **Y (Yellow):** Category average 6.0-6.9
- **R (Red):** Category average < 6.0

### Overall Assessment

| Metric                          | Value                     |
|---------------------------------|---------------------------|
| **Total Items**                 | 43                        |
| **Overall Average**             | [ ] / 10                  |
| **Highest Category**            | [Category: Score]         |
| **Lowest Category**             | [Category: Score]         |
| **Items Scoring Below 5**       | [Count]                   |
| **Items Scoring Below 3**       | [Count] (critical gaps)   |

### Decision

| Outcome              | Criteria Met?                                    |
|----------------------|--------------------------------------------------|
| **PASS**             | Overall avg >= 7.0, all categories >= 6.0, no item < 3 |
| **CONDITIONAL PASS** | Overall avg >= 7.0, one category 6.0-6.5, no item < 3 |
| **FAIL**             | Any of: overall avg < 7.0, category < 6.0, item < 3 |

**Result:** [ PASS / CONDITIONAL PASS / FAIL ]

### Critical Gaps (Items Below 5)

| Item ID | Item Name                    | Score | Gap Description              | Remediation Required          |
|---------|------------------------------|-------|------------------------------|-------------------------------|
| [ID]    | [Name]                       | [0-4] | [What is missing or deficient]| [What must be done]          |

### Remediation Plan (if Conditional Pass or Fail)

| Item ID | Remediation Action           | Owner    | Target Date | Verification Method           |
|---------|------------------------------|----------|-------------|-------------------------------|
| [ID]    | [Action]                     | [Name]   | [Date]      | [How to verify completion]    |

### Evaluator Sign-off

| Role              | Name     | Date     | Signature / Approval |
|-------------------|----------|----------|----------------------|
| Product Owner     | [Name]   | [Date]   | [ ]                  |
| Tech Lead         | [Name]   | [Date]   | [ ]                  |
| QA Lead           | [Name]   | [Date]   | [ ]                  |
| UX Lead           | [Name]   | [Date]   | [ ]                  |
| Delivery Manager  | [Name]   | [Date]   | [ ]                  |

---

## Notes

[Any additional observations, context, or recommendations from the evaluation team.]
