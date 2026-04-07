---
name: "specforge:design-architecture"
description: "Phase 5 — Architecture & Technical Design. Guides the user through system design, technology selection, API design, and data modeling to produce Architecture Doc, API Spec, Data Model, and Tech Decisions."
role: "Solutions Architect"
phase: "05-architecture-design"
produces:
  - "Architecture Doc (template 08-architecture-doc)"
  - "API Spec (template 09-api-spec)"
  - "Data Model (template 10-data-model)"
  - "Tech Decisions (template 11-tech-decisions)"
---

# /specforge:design-architecture — Architecture & Technical Design

## Purpose

This skill runs the Phase 5 Architecture & Technical Design workflow. It acts as a **Solutions Architect (Builder)** — translating requirements and UX specifications into a technical architecture that is feasible, scalable, maintainable, and aligned with the product's constraints.

This phase answers the question: "How will we build this?" It defines the system's bones — the components, their interactions, the data they manage, and the technology choices that enable them.

## Prerequisites

- **PRD** (`output/04-prd.md`) — Functional and non-functional requirements, especially performance, scalability, security, and reliability targets.
- **User Stories** (`output/05-user-stories.md`) — Feature scope and complexity.
- **Use Cases** (`output/06-use-cases.md`) — Workflow details and business rules.
- **UX Specification** (`output/07-ux-spec.md`) — Screen inventory, user flows, and interaction patterns.
- **Product Brief** (`output/01-product-brief.md`) — Constraints (budget, timeline, team skills).
- Recommended: **Competitive Analysis** (`output/03-competitive-analysis.md`) — For understanding technical expectations set by competitors.

## Workflow Steps

### Step 1: Review Prior Artifacts with a Technical Lens

Read all prior outputs focusing on:

- Non-functional requirements — the architecture drivers (performance targets, scalability needs, security requirements, availability SLAs).
- Functional scope — what the system must do, to understand component boundaries.
- UX specification — the screens and flows that define the system's external interface.
- Constraints — budget, team size, existing technology stack, regulatory compliance.

Ask the user: "Before we start designing the architecture, tell me about your team's technical context. What languages, frameworks, and infrastructure are you most experienced with? Are there any existing systems this must integrate with? Are there any technology mandates or constraints?"

### Step 2: System Context & Boundaries

Define the system's external boundaries:

1. **System context diagram** (described textually, suitable for C4 model Level 1):
   - The system being built (as a single box).
   - External users (by persona).
   - External systems it integrates with (payment providers, auth services, third-party APIs, databases).
   - Data flows between the system and external entities.

2. **Key integration points**:
   - For each external system: protocol, data format, authentication method, SLA expectations.
   - Direction of data flow (inbound, outbound, bidirectional).
   - Failure handling strategy for each integration.

### Step 3: High-Level Architecture Design

Define the system's major building blocks:

1. **Architectural style**: Select and justify the primary pattern:
   - Monolith, modular monolith, microservices, serverless, event-driven, or hybrid.
   - Rationale based on team size, complexity, scalability needs, and deployment constraints.

2. **Container diagram** (C4 Level 2 — described textually):
   - Web application(s), API server(s), background workers, databases, caches, message queues, CDN.
   - For each container: technology choice, responsibility, and communication protocol.

3. **Component boundaries**: For the primary application container, identify the major components/modules and their responsibilities.

4. **Communication patterns**:
   - Synchronous (REST, GraphQL, gRPC) vs. asynchronous (message queues, events, webhooks).
   - Justify the choice for each communication path.

### Step 4: Technology Selection

For each technology decision, document it as a formal Tech Decision Record:

1. **Frontend**: Framework, rendering strategy (CSR, SSR, SSG), state management, UI component library.
2. **Backend**: Language, framework, API style (REST, GraphQL, gRPC).
3. **Database**: Primary data store (relational, document, graph, key-value), rationale for choice.
4. **Caching**: Strategy and technology (Redis, CDN, in-memory).
5. **Authentication & Authorization**: Strategy (OAuth2, SAML, API keys), identity provider.
6. **Infrastructure**: Cloud provider, container orchestration, CI/CD pipeline.
7. **Monitoring & Observability**: Logging, metrics, tracing, alerting.

For each decision, use the ADR format:
- **Context**: What constraint or requirement drives this decision?
- **Options Considered**: At least 2-3 alternatives with pros/cons.
- **Decision**: What was chosen and why.
- **Consequences**: What this enables and what trade-offs are accepted.

> **HALT POINT**: Present the architecture overview and technology selections to the user. Ask: "Does this architecture align with your team's capabilities and the product's needs? Are there any technology choices you disagree with or constraints I should reconsider?"

### Step 5: API Design

Design the system's API surface:

1. **API style and conventions**: RESTful resources, GraphQL schema, or gRPC services. Versioning strategy. Naming conventions.

2. **Endpoint inventory**: For each functional requirement that requires an API:
   - HTTP method and path (for REST) or query/mutation (for GraphQL).
   - Request parameters (path, query, headers, body) with types and validation rules.
   - Response schema with status codes and error formats.
   - Authentication and authorization requirements.
   - Rate limiting and pagination strategy.

3. **API error handling**: Standard error response format, error codes, and recovery guidance.

4. **Webhook / event contracts**: For async integrations, define event types, payload schemas, and delivery guarantees.

### Step 6: Data Model Design

Design the system's data layer:

1. **Entity-relationship model**: Identify all entities, their attributes, and relationships.
   - For each entity: name, attributes (name, type, constraints), primary key, indexes.
   - For each relationship: cardinality (1:1, 1:N, M:N), foreign keys, cascade behavior.

2. **Data lifecycle**: For each entity, define:
   - Creation triggers (what event creates this data).
   - Update patterns (what changes and how often).
   - Retention policy (how long is data kept, archival strategy).
   - Deletion policy (soft delete, hard delete, cascading).

3. **Data access patterns**: Identify the most frequent and most critical queries:
   - Read patterns (by ID, by filter, aggregations, full-text search).
   - Write patterns (single inserts, batch operations, real-time streams).
   - Index strategy based on access patterns.

4. **Data migration strategy**: For brownfield projects, define how existing data will be migrated.

### Step 7: Security Architecture

Define the security posture:

1. **Authentication**: How users prove their identity (login flow, session management, token lifecycle).
2. **Authorization**: How access is controlled (RBAC, ABAC, resource-level permissions).
3. **Data protection**: Encryption at rest, in transit, PII handling, data masking.
4. **Input validation**: Strategy for preventing injection, XSS, CSRF.
5. **Audit trail**: What actions are logged, retention period, tamper protection.
6. **Compliance**: How the architecture satisfies regulatory requirements (GDPR, HIPAA, SOC2).

### Step 8: Infrastructure & Deployment Architecture

Define the runtime environment:

1. **Deployment model**: Cloud region(s), multi-AZ, containerized, serverless.
2. **Scaling strategy**: Horizontal vs. vertical, auto-scaling triggers, expected load patterns.
3. **CI/CD pipeline**: Build, test, deploy stages. Environment promotion (dev, staging, production).
4. **Disaster recovery**: RTO (Recovery Time Objective), RPO (Recovery Point Objective), backup strategy, failover.
5. **Cost estimation**: High-level infrastructure cost model based on expected usage.

### Step 9: Synthesize Architecture Documents

> **HALT POINT**: Present a complete architecture summary. Walk through the system context, container architecture, key technology decisions, API surface, and data model. Ask: "Does this technical design give you confidence that the system can be built successfully within the stated constraints?"

Populate four templates:

1. **Architecture Doc** (template 08) — System context, high-level design, component breakdown, security, infrastructure.
2. **API Spec** (template 09) — Complete API surface with endpoints, schemas, and error handling.
3. **Data Model** (template 10) — Entity-relationship model, data lifecycle, access patterns.
4. **Tech Decisions** (template 11) — All ADRs in standard format.

### Step 10: Quality Gate Check

Run through the Phase 5 validation checklist:

- [ ] System context diagram identifies all external actors and integrations
- [ ] Architectural style is justified with rationale tied to requirements
- [ ] All technology choices are documented as ADRs with alternatives considered
- [ ] API endpoints cover all functional requirements that need external access
- [ ] API error handling follows a consistent, documented pattern
- [ ] Data model entities cover all data referenced in requirements and use cases
- [ ] Entity relationships and cardinalities are explicitly defined
- [ ] Security architecture addresses authentication, authorization, and data protection
- [ ] NFRs (performance, scalability, reliability) are addressed with specific architectural provisions
- [ ] Infrastructure and deployment strategy is defined with scaling and DR plans

Score each item 0-10. A minimum average of **7/10** is required to proceed to Phase 6.

> **HALT POINT**: Present the quality gate scores. Ask: "Are you confident this architecture can deliver the requirements within budget and timeline? Are you ready to proceed to Phase 6 (Implementation Planning)?"

## Output

- **Primary artifacts**:
  - `output/08-architecture-doc.md` — System design, component architecture, security, infrastructure.
  - `output/09-api-spec.md` — Complete API specification.
  - `output/10-data-model.md` — Entity-relationship model, lifecycle, access patterns.
  - `output/11-tech-decisions.md` — Architecture Decision Records.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. Diagrams described textually in structured format. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Every functional requirement maps to at least one API endpoint or system component.
2. Every entity referenced in user stories or use cases appears in the data model.
3. Technology decisions include at least 2 alternatives considered with pros and cons.
4. The API spec includes request/response schemas for all endpoints.
5. Non-functional requirements (performance, security, scalability) have corresponding architectural provisions.
6. The architecture can be explained to a senior engineer in under 15 minutes using the documents alone.
7. No placeholder text remains.

## Tips

- **Start with constraints, not aspirations.** A two-person team does not need microservices. A prototype does not need multi-region deployment. Let the constraints guide the architecture.
- **Boring technology wins.** Choose technologies the team knows well over technologies that are trendy. Every unfamiliar technology is a risk multiplier.
- **Design for the 90th percentile, plan for the 99th.** The architecture should handle normal load elegantly and degrade gracefully under peak load. Do not over-engineer for day-one traffic.
- **APIs are contracts.** Once published, they are hard to change. Version from day one and design with backward compatibility in mind.
- **Data models outlive code.** The database schema will survive multiple application rewrites. Invest heavily in getting it right.
- **Every technology decision is a trade-off.** If the ADR does not articulate what you are giving up, the analysis is incomplete.
- **Draw the sad path.** For every integration, ask: "What happens when this external service is down for 4 hours?" The answer shapes the architecture more than the happy path.
- **Security is not a layer — it is a property.** It must be woven into every component, not bolted on at the end.
