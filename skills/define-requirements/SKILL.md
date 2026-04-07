---
name: "specforge:define-requirements"
description: "Phase 3 — Requirements Engineering. Guides the user through requirements elicitation, structuring, and validation to produce a PRD, User Stories, and Use Cases."
role: "Requirements Analyst"
phase: "03-requirements-engineering"
produces:
  - "PRD (template 04-prd)"
  - "User Stories (template 05-user-stories)"
  - "Use Cases (template 06-use-cases)"
---

# /specforge:define-requirements — Requirements Engineering

## Purpose

This skill runs the Phase 3 Requirements Engineering workflow. It acts as a **Requirements Analyst (Clarifier)** — methodically translating the product vision and market insights into precise, testable, and traceable requirements.

This is the most critical phase of the SpecForge lifecycle. Vague requirements are the leading cause of software project failure. Every requirement produced here must be SMART (Specific, Measurable, Achievable, Relevant, Time-bound), testable, and traceable back to a business goal.

## Prerequisites

- **Product Brief** (`output/01-product-brief.md`) — Defines the problem, personas, value proposition, and scope.
- **Market Analysis** (`output/02-market-analysis.md`) — Validates the opportunity and identifies market constraints.
- **Competitive Analysis** (`output/03-competitive-analysis.md`) — Maps competitive features and differentiation opportunities.
- If running in **Quick Spec** mode, the Product Brief may be a lightweight summary rather than a full Phase 1 artifact.

## Workflow Steps

### Step 1: Review Prior Artifacts

Read all Phase 1 and Phase 2 outputs to extract:

- User personas and their goals
- In-scope capabilities from the Product Brief
- Competitive feature gaps (opportunities to differentiate)
- Constraints (technical, regulatory, budget, timeline)
- Validated assumptions and remaining unknowns

Summarize your understanding of what needs to be specified. Ask: "Before we begin defining requirements, is there anything that has changed since the Market Analysis was completed?"

### Step 2: Functional Requirements Elicitation

Work through each in-scope capability and decompose it into functional requirements:

1. **For each capability**, ask:
   - What must the system DO? (actions, computations, transformations)
   - What inputs does the system receive?
   - What outputs does the system produce?
   - What are the business rules and logic?
   - What are the edge cases and error conditions?

2. **For each requirement**, ensure it follows the standard format:
   - **ID**: Unique identifier (e.g., FR-001)
   - **Statement**: "The system shall [action] [object] [condition] [constraint]."
   - **Rationale**: Why this requirement exists (traced to a business goal or user need).
   - **Priority**: MoSCoW (Must have, Should have, Could have, Won't have).
   - **Acceptance Criteria**: Specific, testable conditions that confirm the requirement is met.

3. **Challenge weak requirements**:
   - Reject any requirement containing: "intuitive," "user-friendly," "fast," "reliable," "scalable" without quantification.
   - Replace with measurable statements: "The system shall load the dashboard within 2 seconds on a 3G connection."

### Step 3: Non-Functional Requirements

Systematically address each non-functional category:

1. **Performance**: Response times, throughput, capacity, resource usage.
2. **Scalability**: Load expectations, growth projections, scaling strategy.
3. **Security**: Authentication, authorization, data protection, compliance (GDPR, HIPAA, SOC2).
4. **Reliability**: Uptime targets (e.g., 99.9%), failover, disaster recovery, data backup.
5. **Usability**: Accessibility standards (WCAG), device support, language/i18n.
6. **Maintainability**: Logging, monitoring, deployment, documentation.
7. **Compatibility**: Browser support, OS support, API versioning, integration requirements.

For each NFR, specify a measurable target and a test method.

### Step 4: User Story Development

Transform functional requirements into user stories following the standard format:

```
As a [persona],
I want to [action/goal],
So that [benefit/value].
```

For each user story:

1. Link it to one or more functional requirements (traceability).
2. Write **acceptance criteria** using Given/When/Then format:
   ```
   Given [precondition],
   When [action],
   Then [expected result].
   ```
3. Assign a **priority** (MoSCoW) consistent with the parent requirement.
4. Estimate **complexity** (S/M/L/XL) — not time, but relative effort.
5. Identify **dependencies** on other stories.

Group stories into logical **epics** (high-level feature groups).

> **HALT POINT**: Present the epic-level summary with story counts and priorities. Ask: "Does this decomposition align with your understanding of the feature scope? Are any epics missing or over-specified?"

### Step 5: Use Case Development

For each primary workflow, create detailed use cases:

1. **Use Case ID and Name**: Descriptive and unique.
2. **Primary Actor**: Which persona initiates this use case.
3. **Preconditions**: What must be true before the use case starts.
4. **Main Success Scenario**: Numbered steps for the happy path.
5. **Alternative Flows**: Numbered branches for valid alternative paths.
6. **Exception Flows**: How the system handles errors and edge cases.
7. **Postconditions**: What is true after the use case completes successfully.
8. **Business Rules**: Domain logic that governs behavior within this use case.

Focus on the 5-10 most critical use cases that represent the core user journeys.

### Step 6: Requirements Consistency Check

Cross-validate all requirements:

1. **Completeness**: Is every in-scope capability from the Product Brief covered by at least one requirement?
2. **Consistency**: Do any requirements contradict each other?
3. **Feasibility**: Are all requirements technically achievable within the stated constraints?
4. **Traceability**: Can every requirement be traced back to a business goal, and forward to at least one user story?
5. **Testability**: Does every requirement have acceptance criteria that can be verified?
6. **Priority alignment**: Are MoSCoW priorities consistent across requirements, stories, and use cases?

Document any gaps or conflicts found.

### Step 7: Synthesize the PRD

> **HALT POINT**: Present a structured summary of the complete requirements set — total counts by priority, epic breakdown, and any unresolved questions. Ask the user to confirm before generating formal documents.

Populate the PRD template (04) with:

- All functional requirements with IDs, statements, rationale, priority, and acceptance criteria.
- All non-functional requirements with measurable targets.
- Requirements traceability (goal-to-requirement mapping).
- Assumptions and constraints specific to requirements.
- Out-of-scope requirements (explicitly excluded).

### Step 8: Synthesize User Stories and Use Cases

Populate the User Stories template (05) with all stories grouped by epic, and the Use Cases template (06) with detailed use case specifications.

### Step 9: Quality Gate Check

Run through the Phase 3 validation checklist:

- [ ] Every in-scope capability from the Product Brief has at least one functional requirement
- [ ] All requirements follow the "The system shall..." format with measurable criteria
- [ ] No requirement contains ambiguous terms without quantification
- [ ] Non-functional requirements cover all categories with measurable targets
- [ ] User stories follow the As a/I want/So that format with Given/When/Then acceptance criteria
- [ ] At least 5 primary use cases are documented with main and alternative flows
- [ ] Requirements are prioritized using MoSCoW with clear rationale
- [ ] Every requirement traces back to a business goal from the Product Brief
- [ ] No conflicting or duplicate requirements exist
- [ ] Dependencies between requirements and stories are documented

Score each item 0-10. A minimum average of **7/10** is required to proceed to Phase 4.

> **HALT POINT**: Present the quality gate scores. If requirements are incomplete or inconsistent, iterate before advancing. Ask: "Are you confident these requirements fully capture what needs to be built? Are you ready to proceed to Phase 4 (UX & Design Specification)?"

## Output

- **Primary artifacts**:
  - `output/04-prd.md` — Product Requirements Document with all functional and non-functional requirements.
  - `output/05-user-stories.md` — User stories grouped by epic with acceptance criteria.
  - `output/06-use-cases.md` — Detailed use case specifications for primary workflows.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. All requirements have unique IDs. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. The PRD contains at least one functional requirement per in-scope capability.
2. Every functional requirement has an ID, statement, rationale, priority, and acceptance criteria.
3. Non-functional requirements cover performance, security, reliability, usability, and scalability at minimum.
4. User stories are grouped into epics and each story has acceptance criteria in Given/When/Then format.
5. Use cases have main success scenarios, alternative flows, and exception flows.
6. A traceability check confirms: every business goal maps to at least one requirement, and every requirement maps to at least one user story.
7. No placeholder text remains in any output document.

## Tips

- **Requirements are not features.** "Search" is a feature. "The system shall return search results matching the query within 500ms, displaying up to 20 results per page ranked by relevance" is a requirement.
- **Kill ambiguity with numbers.** Every adjective (fast, secure, reliable) needs a number. If the user says "fast," ask: "What does fast mean? Under 200ms? Under 2 seconds? Under what load?"
- **Write acceptance criteria like a tester.** If a QA engineer cannot write a test from your acceptance criteria alone, the criteria are too vague.
- **MoSCoW is not a wish list.** "Must have" means the system is unusable without it. "Should have" means significant value is lost without it. "Could have" means it is a nice-to-have. Enforce this discipline — most "Must haves" are actually "Should haves."
- **Use cases catch what stories miss.** User stories capture intent; use cases capture workflow detail. The exception flows in use cases often reveal 50% of the real engineering work.
- **Trace everything.** If a requirement cannot be traced to a business goal, question why it exists. If a business goal has no requirements, something was missed.
- **Don't over-specify implementation.** Requirements say WHAT, not HOW. "The system shall authenticate users" is a requirement. "The system shall use OAuth2 with JWT tokens" is a design decision — save it for Phase 5.
