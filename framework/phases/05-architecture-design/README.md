# Phase 5: Architecture & Technical Design

## Purpose

Phase 5 defines **how** the system is built technically. It translates requirements (Phase 3) and UX design (Phase 4) into a complete technical blueprint: system architecture, data model, API design, security posture, infrastructure plan, and technology decisions. The output is detailed enough for developers to begin implementation without ambiguity about technical direction.

## Agent

| Attribute | Details |
|-----------|---------|
| **Agent Name** | Solutions Architect |
| **Persona** | "Builder" |
| **Core Concern** | Technical feasibility, scalability, maintainability |
| **Mindset** | "Every architectural decision is a trade-off. My job is to make those trade-offs explicit, justified, and recorded. The best architecture is the simplest one that meets all quality attributes." |

### Agent Principles

1. **Simplicity over cleverness.** Choose the simplest architecture that meets the requirements. Complexity must earn its place.
2. **Decisions are trade-offs.** Every choice has consequences. Record them in Technology Decision Records so future engineers understand why.
3. **Quality attributes drive architecture.** Performance, security, scalability, and maintainability targets (from NFRs) dictate architectural choices, not technology trends.
4. **Invariants are sacred.** Identify properties that must always hold true (data consistency rules, security boundaries, authorization constraints) and document how the architecture enforces them.
5. **Design for change.** The only certainty is that requirements will evolve. Prefer modularity and clear boundaries over tight coupling.
6. **Security by design.** Security is not a layer added later. Authentication, authorization, encryption, and input validation are architectural decisions made now.
7. **Observable by default.** If you cannot measure it, you cannot manage it. Monitoring, logging, and tracing are first-class architectural concerns.

## Activities

| # | Activity | Description | Output |
|---|----------|-------------|--------|
| 1 | Architecture Design | Define system structure at Context, Container, and Component levels (C4 model) | Architecture Document (08-architecture.md) |
| 2 | Technology Selection | Evaluate and select technologies for every layer of the stack | Technology Decision Records (11-tech-decisions.md) |
| 3 | Data Modeling | Design the complete data model with entities, relationships, and constraints | Data Model Specification (10-data-model.md) |
| 4 | API Design | Specify all API endpoints with schemas, auth, errors, and examples | API Specification (09-api-spec.md) |
| 5 | Security Design | Define authentication, authorization, encryption, and OWASP mitigations | Security section in Architecture Document |
| 6 | Infrastructure Planning | Design deployment architecture, CI/CD pipeline, scaling, and monitoring | Infrastructure section in Architecture Document |
| 7 | Cross-Cutting Concerns | Define error handling, logging, configuration management strategies | Cross-cutting section in Architecture Document |
| 8 | Risk Assessment | Identify technical risks and define mitigations | Risks section in Architecture Document |

## Artifacts

| Artifact | Template | Description |
|----------|----------|-------------|
| **System Architecture Document** | `templates/08-architecture.md` | Complete architecture at all C4 levels, with security, infrastructure, and cross-cutting concerns |
| **API Specification** | `templates/09-api-spec.md` | Full API definition with endpoints, schemas, examples, and policies |
| **Data Model Specification** | `templates/10-data-model.md` | Entity definitions, relationships, indexes, validation, migration strategy |
| **Technology Decision Records** | `templates/11-tech-decisions.md` | Structured decisions with context, options, rationale, consequences |

## Workflow

```
┌──────────────────────────────────────────────────────────────────┐
│                      Phase 5 Workflow                            │
│                                                                  │
│  ┌─────────┐    ┌──────────┐    ┌──────────┐                   │
│  │ Review   │───▶│ Arch     │───▶│ Tech     │                   │
│  │ Phase 3  │    │ Overview │    │ Decisions│                   │
│  │ & 4      │    │ (C4 L1-3)│    │ (TDRs)  │                   │
│  └─────────┘    └──────────┘    └──────┬───┘                   │
│                                         │                       │
│       ┌────────────────┬────────────────┤                       │
│       ▼                ▼                ▼                       │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐                   │
│  │ Data     │   │ API      │   │ Security │                   │
│  │ Model    │   │ Design   │   │ Design   │                   │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘                   │
│       │               │              │                          │
│       └───────────────┼──────────────┘                          │
│                       ▼                                         │
│               ┌──────────────┐                                  │
│               │ Infrastructure│                                  │
│               │ & Deployment  │                                  │
│               └──────┬───────┘                                  │
│                      ▼                                          │
│               ┌──────────────┐   ┌──────────┐                  │
│               │ Cross-Cutting│──▶│ Quality  │                  │
│               │ & Risks      │   │ Gate 5→6 │                  │
│               └──────────────┘   └──────────┘                  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Process

1. **Review Phase 3 & 4 Artifacts** — Read the PRD, NFRs, user stories, and UX Spec. Identify all technical requirements: data entities, API endpoints needed by the UI, performance targets, security requirements, and integration points.

2. **Design Architecture Overview** — Choose the architecture style (monolith, microservices, serverless, hybrid) based on quality attribute priorities. Create C4 diagrams at Context (Level 1), Container (Level 2), and Component (Level 3) levels. Define key invariants.

3. **Make Technology Decisions** — For each layer of the stack (frontend, backend, database, cache, queue, infrastructure), evaluate options using a weighted criteria matrix. Record every significant decision as a TDR with context, alternatives, rationale, and consequences.

4. **Design the Data Model** — Define all entities with full attribute specifications (type, nullable, default, constraints). Map relationships (1:1, 1:N, M:N with junction tables). Define indexes for query patterns. Specify validation rules, migration strategy, seed data, retention policy, and PII classification.

5. **Design the API** — Specify every endpoint with method, path, request/response schemas, authentication, error codes, rate limits, and curl examples. Define pagination, filtering, sorting, and webhook strategies. Document versioning policy.

6. **Design Security Architecture** — Define authentication mechanism, authorization model (RBAC/ABAC), data encryption strategy (at rest + in transit), secrets management, and OWASP Top 10 mitigations.

7. **Plan Infrastructure** — Design the deployment architecture, CI/CD pipeline, environment strategy, scaling rules, and monitoring/observability stack (metrics, logs, traces, alerts).

8. **Address Cross-Cutting Concerns** — Define strategies for error handling, logging standards, and configuration management. Identify technical risks with mitigation plans.

9. **Quality Gate** — Run the Phase 5 to Phase 6 quality gate checklist.

## Input Requirements

This phase requires the following from Phases 3 and 4:

- [ ] Product Requirements Document (PRD) — complete feature list
- [ ] Non-Functional Requirements — performance, security, scalability targets
- [ ] User Stories — with acceptance criteria (drives API design)
- [ ] Use Cases — primary and alternative flows (drives data model)
- [ ] UX & Design Specification — screens, flows, components (drives API and data needs)
- [ ] Phase 4 quality gate passed

## Quality Gate: Phase 5 → Phase 6

All criteria must score >= 7/10 for the gate to pass. Minimum overall average: 8/10.

| # | Criterion | Score (0-10) | Evidence |
|---|-----------|-------------|----------|
| 1 | **Architecture Clarity** — System structure is clearly communicated at Context, Container, and Component levels; a new developer can understand the system in 30 minutes | [ ] | [Link to architecture overview] |
| 2 | **Technology Justification** — Every significant technology choice has a TDR with context, options, weighted evaluation, and rationale | [ ] | [Link to TDRs] |
| 3 | **Data Model Completeness** — All entities have full attribute definitions, indexes, relationships, and constraints | [ ] | [Link to data model] |
| 4 | **API Coverage** — Every user-facing feature has corresponding API endpoints with schemas, auth, errors, and examples | [ ] | [Link to API spec] |
| 5 | **Security Depth** — Authentication, authorization, encryption, secrets management, and OWASP mitigations are specified | [ ] | [Link to security section] |
| 6 | **Infrastructure Readiness** — Deployment architecture, CI/CD pipeline, scaling strategy, and monitoring are planned | [ ] | [Link to infrastructure section] |
| 7 | **Data Lifecycle** — Migration strategy, seed data, retention policy, and PII classification are defined | [ ] | [Link to data lifecycle sections] |
| 8 | **Invariants Documented** — Key system invariants are explicitly listed with enforcement mechanisms | [ ] | [Link to invariants section] |
| 9 | **Risk Awareness** — Technical risks are identified with probability, impact, and mitigation strategies | [ ] | [Link to risks section] |
| 10 | **NFR Traceability** — Architecture decisions are traceable to non-functional requirements; every NFR has a corresponding architectural strategy | [ ] | [Cross-reference NFR → Architecture] |

### Gate Scoring

| Score Range | Interpretation | Action |
|-------------|---------------|--------|
| 9-10 | Exceptional | Proceed to Phase 6 |
| 7-8 | Adequate | Proceed with noted improvements to address during implementation planning |
| 5-6 | Insufficient | Address gaps before proceeding |
| 0-4 | Incomplete | Major rework required |

**Minimum to proceed:** All individual scores >= 7, overall average >= 8.

## Common Pitfalls

| Pitfall | Prevention |
|---------|-----------|
| Over-engineering (microservices for a simple app) | Start with the simplest architecture that meets NFRs; document why more complexity is not needed |
| Technology choices driven by hype, not requirements | Require weighted evaluation matrices in TDRs; team experience and support ecosystem outweigh novelty |
| Incomplete data model (missing indexes, constraints) | Use the detailed template; every column must have type, nullable, default, description, constraints |
| API designed for data model, not for UI needs | Design APIs by tracing user flows from the UX spec; what data does each screen need? |
| Security as an afterthought | Security architecture is a required section; OWASP checklist must be completed |
| No monitoring plan | Monitoring section with specific metrics, thresholds, and alert channels is required |
| Architecture decisions not recorded | TDR for every significant choice; if someone might ask "why did we pick X?", write a TDR |
| Ignoring operational concerns | CI/CD, deployment, scaling, and disaster recovery are first-class architecture concerns |

## Handoff to Phase 6

The Architecture, API Spec, Data Model, and Technology Decisions serve as inputs to Phase 6 (Implementation Planning). The Delivery Manager uses them to:

- Break the architecture into implementable epics and stories
- Estimate complexity based on technology choices and component designs
- Identify implementation dependencies from the component and data model
- Plan the build sequence based on API endpoint dependencies
- Assess team skill gaps based on technology decisions
- Create a risk-aware implementation roadmap
