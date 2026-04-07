---
workflow: quick-spec
description: "Abbreviated workflow for well-understood features. Runs Phase 3 (Requirements) and Phase 5 (Architecture) only, producing the minimum specification set needed for development."
estimated_duration: "45-90 minutes"
artifacts_produced: 7
---

# Quick Spec Workflow

## Overview

The Quick Spec workflow is the fast-track path for features and enhancements where the problem, market, and users are already well-understood. It skips the discovery, market analysis, UX design, and detailed implementation planning phases, focusing exclusively on what engineers need: precise requirements and sound architecture.

This workflow produces 7 artifacts — the PRD, User Stories, Use Cases, Architecture Doc, API Spec, Data Model, and Tech Decisions — in a single focused session.

## When to Use

Use Quick Spec when:

- Adding a new feature to an existing product where the product vision, market, and users are established.
- Building an internal tool where the users and requirements are known.
- The team has deep domain expertise and does not need discovery or market validation.
- The feature is medium-sized (1-4 weeks of development effort).
- Time pressure requires a faster specification cycle.
- UX patterns are established (existing design system, consistent interaction patterns).

Do NOT use when:

- Building a new product from scratch — use **Full Lifecycle**.
- Entering a new market or serving a new customer segment — use **Full Lifecycle**.
- The problem space is ambiguous or contested — use **Full Lifecycle** (at minimum Phase 1).
- Retrofitting specifications for existing code — use **Brownfield**.
- The feature fundamentally changes the product's user experience — add Phase 4 (UX) to this workflow.

## Prerequisites

1. **Clear feature concept** — the user must be able to articulate the feature's purpose, target user, and expected value without a discovery session.
2. **Existing product context** — the feature lives within an existing system with known architecture, design patterns, and user base.
3. **Lightweight Product Brief** — while a formal Phase 1 artifact is not required, the user must be able to answer:
   - What problem does this feature solve?
   - Who is the primary user?
   - What does success look like (1-2 metrics)?
   - What is in scope and out of scope?
4. **Project directory** with `output/` directory.

## Abbreviated Workflow

### Step 1: Context Gathering (10 minutes)

Instead of a full Phase 1 Discovery, gather essential context through 5 key questions:

1. **Problem**: What specific user pain does this feature address?
2. **User**: Who is the primary user, and how do they encounter this pain today?
3. **Success**: What metric will improve when this feature ships?
4. **Scope**: What is explicitly in scope and out of scope?
5. **Constraints**: Are there technical, timeline, or resource constraints to be aware of?

Document the answers as a lightweight context section at the top of the PRD (no separate Product Brief artifact needed).

### Step 2: Requirements Engineering (20-40 minutes)

**Delegate to**: `/specforge:define-requirements` (Requirements Analyst agent)

Run the Phase 3 workflow with the following adaptations for Quick Spec:

- **Skip**: Market-driven requirement validation (no Phase 2 artifacts to reference).
- **Lightweight**: Persona references can be brief (existing persona names, not full definitions).
- **Full rigor on**:
  - Functional requirements with IDs, SMART criteria, and acceptance criteria.
  - Non-functional requirements relevant to this feature.
  - User stories with Given/When/Then acceptance criteria.
  - Use cases with main and exception flows.

**Produces**: `output/04-prd.md`, `output/05-user-stories.md`, `output/06-use-cases.md`

> **HALT POINT**: Present the requirements summary. Ask: "Do these requirements fully capture the feature? Are we ready to design the architecture?"

### Step 3: Architecture & Technical Design (20-40 minutes)

**Delegate to**: `/specforge:design-architecture` (Solutions Architect agent)

Run the Phase 5 workflow with the following adaptations for Quick Spec:

- **Skip**: Full system context diagram (reference the existing architecture).
- **Focus on**: What is new or changing — new components, new endpoints, new entities, modified data flows.
- **Full rigor on**:
  - API endpoint design for all new/modified endpoints.
  - Data model changes (new entities, schema modifications, migrations).
  - Technology decisions for any new technology introduced.
  - Security implications of the new feature.
  - Impact on existing performance and scalability.

**Produces**: `output/08-architecture-doc.md`, `output/09-api-spec.md`, `output/10-data-model.md`, `output/11-tech-decisions.md`

> **HALT POINT**: Present the architecture summary. Ask: "Does this technical approach fit within the existing system? Are the API and data model changes clear enough for implementation?"

### Step 4: Quick Validation (5-10 minutes)

Run an abbreviated validation check:

- [ ] Every functional requirement has an ID and acceptance criteria
- [ ] Non-functional requirements relevant to this feature are specified
- [ ] User stories have Given/When/Then acceptance criteria
- [ ] API endpoints cover all functional requirements needing backend changes
- [ ] Data model changes are backward-compatible or migration path is defined
- [ ] No ambiguous terms without quantification
- [ ] Security implications are addressed

Score each item 0-10. A minimum average of **7/10** is required.

> **HALT POINT**: Present the validation scores. Ask: "Is this specification sufficient for your team to begin implementation?"

## Minimum Required Outputs

| # | Artifact | Required | Notes |
|---|----------|----------|-------|
| 04 | PRD | Yes | Must include context section in lieu of Product Brief |
| 05 | User Stories | Yes | Grouped by epic with acceptance criteria |
| 06 | Use Cases | Yes | At minimum, main success scenarios for primary flows |
| 08 | Architecture Doc | Yes | Focus on what changes, reference existing architecture |
| 09 | API Spec | Yes | New and modified endpoints only |
| 10 | Data Model | Yes | New entities and schema changes only |
| 11 | Tech Decisions | Conditional | Only if new technology is introduced |

## What Quick Spec Intentionally Skips

| Skipped Element | Why It Is Safe to Skip | When to Add It Back |
|-----------------|----------------------|---------------------|
| Product Brief (Phase 1) | Problem and users are already understood | If the feature concept is vague or contested |
| Market Analysis (Phase 2) | Market is already validated for existing product | If entering a new market segment |
| UX Specification (Phase 4) | Existing design system and patterns apply | If the feature introduces new interaction paradigms |
| Epic Breakdown (Phase 6) | Feature is small enough to be a single epic | If the feature spans 4+ weeks of work |
| Sprint Plan (Phase 6) | Team manages their own sprint planning | If the team needs external planning support |
| Traceability Matrix (Phase 6) | Lightweight tracing is embedded in the PRD | If regulatory/compliance requires formal traceability |

## Escalation to Full Lifecycle

During a Quick Spec run, escalate to the Full Lifecycle if any of these triggers occur:

1. **Discovery trigger**: The user cannot clearly articulate the problem or the target user, indicating Phase 1 is needed.
2. **Market trigger**: The feature targets a new customer segment or market, indicating Phase 2 is needed.
3. **UX trigger**: The feature requires new interaction patterns not covered by the existing design system, indicating Phase 4 is needed.
4. **Scope trigger**: The feature grows beyond a single epic (4+ weeks), indicating Phase 6 planning is needed.
5. **Risk trigger**: The feature introduces significant technical risk (new technology, major data migration), indicating full architecture review is needed.

When escalating, completed Quick Spec artifacts are preserved and become inputs to the expanded workflow.
