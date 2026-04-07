---
document_type: quality-gates
version: "1.0"
applies_to: "all-phases"
---

# SpecForge Quality Gate Checklists

## Overview

Quality gates are mandatory checkpoints at each phase transition. They prevent undercooked artifacts from flowing into subsequent phases, where they would cause compounding problems.

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

---

## Gate 1 → 2: Discovery & Vision → Market Analysis

**Purpose:** Confirm that the product vision is clear, the problem is validated, and there is sufficient direction for market research.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | Problem statement is specific, evidence-backed, and describes a real user pain | [ ] |
| 2 | At least one primary user persona is defined with enough specificity to guide decisions (role, goals, frustrations, workflow) | [ ] |
| 3 | Value proposition articulates clear differentiation from the status quo and known alternatives | [ ] |
| 4 | Business objectives meet SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound) | [ ] |
| 5 | Success metrics are defined with measurable targets and timelines | [ ] |
| 6 | Scope boundaries are explicit -- both in-scope and out-of-scope are documented | [ ] |
| 7 | Critical assumptions are listed with impact assessment and validation plans | [ ] |
| 8 | Top risks are identified with probability, impact, and mitigation strategies | [ ] |
| 9 | Key stakeholders are identified with roles and communication cadence | [ ] |
| 10 | Product Brief has been reviewed by at least two stakeholders with feedback incorporated | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- Problem statement is a solution description in disguise ("Users need a dashboard" vs. "Users cannot monitor X")
- Personas are too generic ("small business owners") to guide prioritization
- Value proposition lists features rather than articulating differentiation
- Objectives lack measurable targets or timelines
- Scope is defined only as in-scope, with no explicit exclusions

---

## Gate 2 → 3: Market Analysis → Requirements Engineering

**Purpose:** Confirm that the market opportunity is validated with data and the competitive landscape is understood well enough to write informed requirements.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | Market size is calculated (TAM/SAM/SOM) using at least two methodologies with cited sources | [ ] |
| 2 | At least 3 direct competitors are analyzed with product capabilities, pricing, and positioning | [ ] |
| 3 | Feature comparison matrix covers all capability areas relevant to target users | [ ] |
| 4 | Competitive differentiators from Phase 1 are validated or revised based on market evidence | [ ] |
| 5 | Market trends are identified with trajectory analysis (opportunities and threats) | [ ] |
| 6 | Target market segment is validated with size, growth rate, and accessibility assessment | [ ] |
| 7 | Barriers to entry and switching costs are analyzed | [ ] |
| 8 | Regulatory and compliance requirements relevant to the market are identified | [ ] |
| 9 | All data points and statistics have cited sources with dates | [ ] |
| 10 | Clear recommendation (proceed / pivot / reconsider) is provided with supporting evidence | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- Market size relies on a single top-down estimate without validation
- Competitive analysis dismisses competitors rather than learning from them
- Feature matrix omits capability areas where competitors are strong
- Data is unsourced or uses outdated statistics (> 2 years old)
- Analysis confirms the vision without challenging it (confirmation bias)

---

## Gate 3 → 4: Requirements Engineering → UX Design

**Purpose:** Confirm that requirements are complete, consistent, testable, and prioritized -- providing a solid foundation for interaction design.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | Every functional requirement has a unique ID (REQ-XXX) and is written as a single, testable statement | [ ] |
| 2 | Every requirement traces back to at least one business goal from the Product Brief | [ ] |
| 3 | User stories follow standard format with acceptance criteria (Given/When/Then or equivalent) | [ ] |
| 4 | Non-functional requirements specify measurable thresholds (not subjective qualities) | [ ] |
| 5 | Use cases cover core workflows including main flow, alternative flows, and exception flows | [ ] |
| 6 | Edge cases and error states are documented for primary user flows | [ ] |
| 7 | Requirements are prioritized using a consistent framework (MoSCoW or equivalent) with rationale | [ ] |
| 8 | No contradictions exist between requirements (consistency check performed) | [ ] |
| 9 | Domain glossary defines all terms that could be interpreted differently by different readers | [ ] |
| 10 | Requirements have been reviewed by technical and business stakeholders | [ ] |
| 11 | Competitive table-stakes features (from Phase 2) are reflected in the requirements | [ ] |
| 12 | Requirements are scoped within the boundaries defined in Phase 1 (no scope creep) | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- Requirements describe solutions rather than behaviors ("Use React" vs. "Display data in real-time")
- Acceptance criteria are vague ("system works correctly") rather than testable
- NFRs use subjective language ("fast," "secure," "scalable") without measurable thresholds
- Error states and edge cases are not considered
- Prioritization is absent or everything is marked P1

---

## Gate 4 → 5: UX Design → Architecture & Technical Design

**Purpose:** Confirm that user experience is fully designed with enough specificity for technical architecture decisions.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | Every user-facing requirement from the PRD has a corresponding user flow | [ ] |
| 2 | User flows cover happy paths AND error/edge case paths | [ ] |
| 3 | Every unique screen state is wireframed (including empty, loading, error, and success states) | [ ] |
| 4 | Information architecture and navigation structure are defined | [ ] |
| 5 | Design system specifies reusable components, typography, colors, and spacing | [ ] |
| 6 | Interaction specifications cover transitions, animations, and responsive breakpoints | [ ] |
| 7 | Accessibility requirements are addressed (WCAG 2.1 AA minimum) | [ ] |
| 8 | Designs are validated against user personas from Phase 1 | [ ] |
| 9 | Data display requirements are clear (what data appears on each screen, format, update frequency) | [ ] |
| 10 | Real-time behavior requirements are specified (push updates, polling, live data) | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- User flows only cover happy paths; error and edge cases are undefined
- Wireframes omit key states (empty, loading, error) leaving developers to guess
- Design system is incomplete, leading to inconsistent implementation
- Accessibility is not addressed or deferred to "later"
- Data display requirements are ambiguous (developers do not know what data to show)

---

## Gate 5 → 6: Architecture & Technical Design → Implementation Planning

**Purpose:** Confirm that the technical architecture is sound, feasible, and documented well enough for accurate implementation planning.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | System architecture diagram shows all major components and their interactions | [ ] |
| 2 | Every non-functional requirement has a corresponding architectural approach documented | [ ] |
| 3 | API specifications are complete with endpoints, schemas, authentication, and error codes | [ ] |
| 4 | Data model is defined with entity relationships, constraints, and lifecycle | [ ] |
| 5 | Architecture Decision Records (ADRs) document all significant technical choices with rationale | [ ] |
| 6 | Technology stack is finalized and justified against project requirements and team capabilities | [ ] |
| 7 | Security architecture addresses authentication, authorization, data protection, and input validation | [ ] |
| 8 | Deployment architecture is defined (environments, infrastructure, scaling strategy) | [ ] |
| 9 | Cross-cutting concerns are addressed (logging, monitoring, error handling, configuration) | [ ] |
| 10 | Architecture is feasible given the team's skills and the project timeline | [ ] |
| 11 | Integration points with external systems are specified with contracts and error handling | [ ] |
| 12 | Architecture accommodates known future requirements without structural changes | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- Architecture is over-engineered for the current scale (microservices for a 3-person team)
- API specs are incomplete -- missing error codes, pagination, or authentication details
- Data model does not support known query patterns or reporting needs
- No ADRs -- decisions were made but not documented, making them unchallengeable
- Security is deferred to "implementation time" rather than designed into the architecture
- Deployment strategy is undefined or assumes infrastructure that does not exist

---

## Gate 6 → Development: Implementation Planning → Development Handoff

**Purpose:** Confirm that the delivery plan is realistic, complete, and the development team has everything they need to begin.

| # | Criterion | Score (0-10) |
|---|-----------|--------------|
| 1 | All requirements are mapped to epics with user stories | [ ] |
| 2 | Epic dependencies are documented with a clear critical path | [ ] |
| 3 | MVP scope is explicitly defined and stakeholder-approved | [ ] |
| 4 | Sprint plan covers full scope with realistic capacity assumptions and buffer | [ ] |
| 5 | Definition of Done and Definition of Ready are established and team-agreed | [ ] |
| 6 | Risk register is populated with mitigations and named owners | [ ] |
| 7 | Technical prerequisites are identified with owners and target dates | [ ] |
| 8 | Integration plan covers all external dependencies with fallback strategies | [ ] |
| 9 | Testing strategy addresses all levels (unit, integration, E2E, performance, security) | [ ] |
| 10 | Traceability matrix achieves >= 95% coverage across all dimensions | [ ] |
| 11 | Launch plan includes rollout strategy and tested rollback procedure | [ ] |
| 12 | Development team has reviewed the handoff package and confirmed readiness | [ ] |

**Average Score:** [ ] / 10
**Pass:** Yes / No / Conditional

**Common Failure Reasons:**
- Requirements exist that have no corresponding stories (traceability gaps)
- Sprint plan assumes higher velocity than achievable (no historical basis)
- No buffer at sprint or release level -- plan has zero tolerance for error
- MVP scope is too large to be "minimum" or too vague to be actionable
- External dependencies (APIs, accounts, infrastructure) are not provisioned
- Risk register exists but mitigations are generic ("we will handle it") rather than specific
- Development team has not reviewed the plan and may disagree with estimates
- Rollback plan does not exist or has not been tested

---

## Quality Gate Summary Template

Use this template to record the results of each quality gate evaluation.

```
## Quality Gate Evaluation: Gate [X] → [Y]

**Date:** [YYYY-MM-DD]
**Evaluator:** [Name / Agent]
**Project:** [Product Name]

### Scores

| # | Criterion (abbreviated) | Score |
|---|------------------------|-------|
| 1 | [Criterion]            | [0-10]|
| 2 | [Criterion]            | [0-10]|
| ...| ...                   | ...   |

**Average Score:** [X.X] / 10
**Minimum Score:** [X] (Item #[N])
**Result:** PASS / FAIL / CONDITIONAL PASS

### Items Below Threshold (if any)
- Item #[N]: [Score] -- [Description of gap and remediation required]

### Remediation Plan (if conditional pass)
| Item | Gap Description | Action Required | Owner | Target Date |
|------|-----------------|-----------------|-------|-------------|
| [#]  | [Gap]           | [Action]        | [Name]| [Date]      |

### Evaluator Notes
[Any additional observations or recommendations]
```
