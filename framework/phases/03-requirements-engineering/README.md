# Phase 3: Requirements Engineering

## Purpose

Phase 3 transforms the validated market opportunity from Phase 2 into precise, testable, and traceable requirements. This is the bridge between "why we should build it" and "what exactly we must build." Every requirement produced in this phase must be specific enough for an engineer to implement, a tester to verify, and a stakeholder to validate.

A well-executed requirements phase prevents the most expensive category of defects: building the wrong thing.

---

## Agent Role: Requirements Analyst ("Clarifier")

The Clarifier's core concern is **completeness, consistency, and testability** of requirements.

**Persona Principles:**
- Precision over brevity — ambiguity is the enemy.
- Every requirement must answer: "How would I test this?"
- Challenge assumptions — if it is not written down, it is not a requirement.
- Advocate for the user while respecting technical and business constraints.
- Trace everything — every requirement has a "why" and a "where it goes next."

---

## Key Activities

### 1. Requirements Elicitation
Gather raw needs from stakeholders, users, and existing systems.

### 2. Requirements Analysis
Resolve conflicts, identify gaps, classify requirements, and determine priorities.

### 3. Requirements Specification
Document requirements in structured, standardized formats (PRD, user stories, use cases).

### 4. Requirements Validation
Confirm that requirements are complete, consistent, feasible, testable, and traceable. Obtain stakeholder sign-off.

---

## Artifacts Produced

| Artifact | Template | Purpose |
|----------|----------|---------|
| Product Requirements Document (PRD) | `templates/04-prd.md` | Comprehensive specification of functional and non-functional requirements. |
| User Stories | `templates/05-user-stories.md` | Agile-friendly, persona-based descriptions of desired functionality with acceptance criteria. |
| Use Cases | `templates/06-use-cases.md` | Detailed step-by-step interaction flows between actors and the system. |

---

## Elicitation Techniques

Choose techniques based on stakeholder availability and requirement maturity:

| Technique | When to Use | Strengths | Limitations |
|-----------|-------------|-----------|-------------|
| **Stakeholder Interviews** | Early elicitation; exploring problem space | Deep insight into individual perspectives | Time-intensive; subject to individual bias |
| **Requirements Workshops** | When multiple stakeholders must align | Surfaces conflicts early; builds consensus | Requires skilled facilitation; scheduling is hard |
| **Observation / Contextual Inquiry** | Understanding current workflows | Reveals tacit knowledge and workarounds | Observer effect; time-consuming |
| **Prototyping** | When requirements are unclear or novel | Makes abstract concepts concrete; fast feedback | Risk of anchoring on prototype as final design |
| **Document Analysis** | Existing systems, regulations, or competitors | Leverages existing knowledge; no scheduling needed | May reflect outdated practices |
| **Surveys / Questionnaires** | Large user base; quantitative validation | Scalable; statistical confidence | Low response rates; cannot probe deeply |
| **User Story Mapping** | Organizing and prioritizing features | Visual; reveals gaps and dependencies | Requires existing understanding of user goals |

---

## Step-by-Step Workflow

### Step 1: Gather Inputs
**Input:** Phase 2 artifacts (Market Analysis Report, Competitive Analysis, validated opportunity).

- Review the Product Brief, Vision, and market validation from Phases 1-2.
- Identify all stakeholder groups and schedule elicitation activities.
- Collect existing documentation (legacy system docs, regulatory requirements, competitor analysis).

### Step 2: Elicit Requirements

- Conduct stakeholder interviews and workshops.
- Document raw requirements in unstructured notes first — do not filter prematurely.
- Use the "5 Whys" technique to move from surface requests to underlying needs.
- Capture both functional needs ("the system shall...") and quality expectations ("the system shall be...").

### Step 3: Analyze and Classify

- Categorize requirements as functional or non-functional.
- Assign MoSCoW priorities (Must / Should / Could / Won't for this release).
- Identify conflicts between stakeholder requests and resolve them.
- Detect gaps — areas where no requirements exist but should.
- Validate feasibility with the engineering team for high-risk items.

> **HALT POINT 1:** Present the prioritized requirements list to stakeholders for review before detailed specification. Confirm scope boundaries and priority assignments.

### Step 4: Specify Requirements (PRD)

- Write formal requirements using `templates/04-prd.md`.
- Each requirement must have: unique ID, description, priority, rationale, acceptance criteria, and dependencies.
- Use "shall" for mandatory requirements, "should" for recommended.
- Document non-functional requirements with measurable targets (not "the system shall be fast" but "API response time shall be under 200ms at 95th percentile").
- Build the Requirements Traceability Matrix linking business goals to requirements.

### Step 5: Write User Stories

- Translate requirements into user stories using `templates/05-user-stories.md`.
- Organize stories by epic (feature area).
- Write acceptance criteria in Given/When/Then format.
- Build a story map to visualize the MVP boundary.
- Identify edge cases and error scenarios for each story.

### Step 6: Develop Use Cases

- Write detailed use cases for complex interactions using `templates/06-use-cases.md`.
- Document main success scenarios, alternative flows, and exception flows.
- Define system boundary — what is inside vs. outside the system.
- Map use case relationships (include/extend).

> **HALT POINT 2:** Full requirements review. All three artifacts (PRD, user stories, use cases) are presented for stakeholder inspection. Verify completeness, consistency, and correctness before proceeding.

### Step 7: Validate and Finalize

- Walk through the quality gate checklist (see below).
- Obtain formal approval sign-off from Product Owner, Engineering Lead, and QA Lead.
- Baseline the requirements — any changes after this point follow a change control process.

> **HALT POINT 3:** Final sign-off. Requirements are baselined. Phase 3 quality gate must pass before entering Phase 4.

---

## Common Requirements Anti-Patterns

Avoid these pitfalls that derail projects:

| Anti-Pattern | Example | Fix |
|-------------|---------|-----|
| **Ambiguity** | "The system shall respond quickly." | Quantify: "API response time shall be under 200ms at 95th percentile." |
| **Untestable requirement** | "The system shall be user-friendly." | Define measurably: "90% of test users complete onboarding in under 3 minutes." |
| **Gold plating** | Adding features no stakeholder requested. | Trace every requirement to a business goal. If it has no "why," remove it. |
| **Premature design** | "The system shall use a Redis cache for sessions." | State the need, not the solution: "Session data shall be retrievable in under 10ms." |
| **Missing non-functionals** | PRD has 50 functional requirements but no performance, security, or scalability requirements. | Use the NFR sections in the PRD template as a checklist — cover every category. |
| **Assumption masquerading as requirement** | "Users will always have internet access." | Move to the Assumptions section. Validate it. Plan for the case where it is false. |
| **Scope creep via vague boundaries** | "The system shall handle all customer communications." | Define explicit scope boundaries: in-scope vs. out-of-scope. |
| **Conflicting requirements** | REQ-001 says "single sign-on only" while REQ-015 says "support local password auth." | Cross-reference all requirements for consistency. Resolve conflicts with stakeholders. |
| **Orphan requirements** | A requirement that traces to no business goal. | Every requirement must link to a business goal in the traceability matrix. |
| **Missing error paths** | Only the happy path is specified. | Every use case must have at least one alternative flow and one exception flow. |

---

## Tips for Writing Good Requirements

Follow the SMART-T framework:

- **Specific**: State exactly what the system shall do, for whom, and under what conditions.
- **Measurable**: Include quantifiable acceptance criteria (time, count, percentage, threshold).
- **Achievable**: Verify with engineering that the requirement is technically feasible within constraints.
- **Relevant**: Every requirement traces to a validated business goal or user need.
- **Traceable**: Assign a unique ID; link to business goals upstream and stories/tests downstream.
- **Testable**: If you cannot describe a test for it, rewrite it until you can.

**Language conventions:**
- "shall" = mandatory (Must)
- "should" = recommended (Should)
- "may" = optional (Could)
- Avoid: "etc.", "and/or", "appropriate", "user-friendly", "fast", "intuitive", "robust", "flexible"

---

## Quality Gate: Phase 3 to Phase 4 Transition

All criteria must be satisfied before proceeding to Phase 4 (UX & Design Specification).

### Completeness

- [ ] All functional requirement areas identified in the Product Brief are covered.
- [ ] Non-functional requirements address: performance, security, reliability, scalability, usability, maintainability, and compatibility.
- [ ] Data requirements (entities, retention, migration) are documented.
- [ ] Integration requirements (external systems, APIs, third-party services) are documented.
- [ ] User stories exist for all "Must" and "Should" functional requirements.
- [ ] Use cases exist for all complex, multi-step interactions.

### Consistency

- [ ] No two requirements contradict each other.
- [ ] Terminology is used consistently (defined in the Glossary).
- [ ] Priority assignments are consistent across PRD, user stories, and use cases.
- [ ] Requirement IDs are unique and follow the numbering convention.

### Testability

- [ ] Every functional requirement has at least one acceptance criterion.
- [ ] Every non-functional requirement has a measurable target and measurement method.
- [ ] Every user story has Given/When/Then acceptance criteria.
- [ ] Every use case has a main success scenario with verifiable postconditions.

### Traceability

- [ ] Requirements Traceability Matrix is complete.
- [ ] Every requirement traces to at least one business goal.
- [ ] Every business goal has at least one implementing requirement.
- [ ] Forward traceability to user stories is established.

### Validation

- [ ] Stakeholders have reviewed and approved the PRD.
- [ ] Engineering team has confirmed feasibility of all "Must" requirements.
- [ ] QA team has confirmed testability of acceptance criteria.
- [ ] Assumptions are documented and critical assumptions are validated.

### Documentation Quality

- [ ] All documents pass the validation checklists in their respective templates.
- [ ] Documents are spell-checked and consistently formatted.
- [ ] Version history is up to date.
- [ ] All placeholders have been replaced with actual content.

---

## Phase Inputs and Outputs

**Inputs from Phase 2:**
- Market Analysis Report (validated market opportunity)
- Competitive Analysis (feature landscape, differentiators)
- Product Brief and Vision (from Phase 1)

**Outputs to Phase 4:**
- Baselined PRD (functional + non-functional requirements)
- Prioritized user stories with acceptance criteria
- Use cases with detailed interaction flows
- Requirements Traceability Matrix

Phase 4 (UX & Design Specification) uses these outputs to design user flows, wireframes, and interaction patterns that satisfy every documented requirement.
