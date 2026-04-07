---
title: "System Architecture Document"
version: "1.0"
phase: 5
template_id: "SF-T08"
owner: "Solutions Architect (Builder)"
status: "draft"  # draft | in-review | approved
project: "[Project Name]"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
approvers:
  - name: "[Approver Name]"
    role: "[Role]"
    approved_date: ""
dependencies:
  - "03-prd.md"
  - "06-nfr.md"
  - "07-ux-spec.md"
traceability:
  requirements_doc: "[link to PRD]"
  nfr_doc: "[link to NFR]"
  ux_spec: "[link to UX Spec]"
---

# System Architecture Document

<!-- 
  PURPOSE: This document describes the technical architecture of the system at
  multiple levels of abstraction, following the C4 model (Context, Containers,
  Components). It captures key technical decisions, quality attribute strategies,
  and provides the blueprint for implementation.
  
  INSPIRED BY: C4 Model (Simon Brown), matklad's architecture invariant pattern,
  arc42 template, and Harness Engineering SDD.
  
  AUDIENCE: Developers, DevOps engineers, security reviewers, technical leads.
  
  INSTRUCTIONS: Fill in each section. Replace [brackets]. Remove HTML comments
  before finalizing. Use ASCII diagrams where possible for version-control
  friendliness; link to rendered diagrams as supplements.
-->

---

## 1. Architecture Overview

### 1.1 System Purpose

<!-- One paragraph describing what this system does and why it exists. -->

[Project Name] is a [type of system] that [primary purpose]. It serves [target users] by [key value delivered]. The system [key technical characteristic — e.g., processes X events/sec, stores Y TB of data, serves Z concurrent users].

### 1.2 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        [System Name]                            │
│                                                                 │
│  ┌──────────┐    ┌──────────────┐    ┌──────────────────────┐  │
│  │  Client   │───▶│  API Gateway │───▶│  Application Layer   │  │
│  │  (Web/    │◀───│  / Load      │◀───│  (Services)          │  │
│  │   Mobile) │    │  Balancer    │    │                      │  │
│  └──────────┘    └──────────────┘    └──────────┬───────────┘  │
│                                                  │              │
│                                      ┌───────────┼───────────┐ │
│                                      │           │           │ │
│                                      ▼           ▼           ▼ │
│                                 ┌────────┐ ┌─────────┐ ┌─────┐│
│                                 │Database│ │  Cache  │ │Queue││
│                                 └────────┘ └─────────┘ └─────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          │                    ▲
                          ▼                    │
                   ┌──────────────┐    ┌──────────────┐
                   │ External API │    │  3rd Party   │
                   │  (e.g., X)   │    │  Service Y   │
                   └──────────────┘    └──────────────┘
```

<!-- Replace this diagram with your actual high-level architecture. Keep ASCII
     for version control; link to a rendered C4 diagram as supplement. -->

### 1.3 Key Quality Attributes

<!-- Rank the quality attributes by priority for this system. Reference NFR doc. -->

| Priority | Quality Attribute | Target | Rationale |
|----------|-------------------|--------|-----------|
| 1 | [e.g., Availability] | [e.g., 99.9% uptime] | [Why this is the top priority] |
| 2 | [e.g., Performance] | [e.g., p95 < 200ms API response] | [Rationale] |
| 3 | [e.g., Security] | [e.g., SOC 2 Type II compliant] | [Rationale] |
| 4 | [e.g., Scalability] | [e.g., 10x current load without re-architecture] | [Rationale] |
| 5 | [e.g., Maintainability] | [e.g., New dev productive in < 1 week] | [Rationale] |

### 1.4 Architecture Style

<!-- State the chosen architecture style and justify it. -->

**Style:** [e.g., Modular monolith / Microservices / Event-driven / Serverless / Hybrid]

**Rationale:** [Why this style fits the project's constraints — team size, complexity, timeline, scale requirements.]

**Trade-offs accepted:**
- [Trade-off 1 — e.g., "Monolith means simpler deployment but couples all services"]
- [Trade-off 2]

---

## 2. System Context (C4 Level 1)

<!-- Show the system as a black box and its relationships with external actors
     and systems. Every arrow should be labeled with what flows across it. -->

```
                    ┌──────────────┐
                    │   [Actor 1]  │
                    │  (End User)  │
                    └──────┬───────┘
                           │ HTTPS / WebSocket
                           ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ [External    │◀───│  [SYSTEM]    │───▶│ [External    │
│  System A]   │    │              │    │  System B]   │
│ (e.g., Auth  │    │  [Project    │    │ (e.g., Email │
│  Provider)   │───▶│   Name]      │◀───│  Service)    │
└──────────────┘    └──────────────┘    └──────────────┘
                           │
                           │ API calls
                           ▼
                    ┌──────────────┐
                    │ [External    │
                    │  System C]   │
                    │ (e.g., Payment│
                    │  Gateway)    │
                    └──────────────┘
```

### Context Table

| Entity | Type | Description | Data Flow | Protocol |
|--------|------|-------------|-----------|----------|
| [Actor 1] | Person | [Description] | [What data flows in/out] | [HTTPS, WebSocket, etc.] |
| [External System A] | External System | [Description] | [What data flows in/out] | [REST API, OAuth, etc.] |
| [External System B] | External System | [Description] | [What data flows in/out] | [SMTP, Webhook, etc.] |
| [External System C] | External System | [Description] | [What data flows in/out] | [REST API, etc.] |

---

## 3. Container Diagram (C4 Level 2)

<!-- Zoom into the system boundary. Show all deployable units (services, databases,
     message queues, file stores) and how they communicate. -->

```
┌─────────────────────────────────────────────────────────────────┐
│                        [System Name]                            │
│                                                                 │
│  ┌────────────────┐         ┌─────────────────────┐            │
│  │  Web App (SPA) │         │  Mobile App          │            │
│  │  [Technology]   │         │  [Technology]         │            │
│  │  Port: 443     │         │                       │            │
│  └───────┬────────┘         └───────────┬───────────┘            │
│          │                              │                       │
│          └──────────┬───────────────────┘                       │
│                     ▼                                           │
│          ┌─────────────────────┐                                │
│          │    API Gateway      │                                │
│          │    [Technology]     │                                │
│          │    Port: 443       │                                │
│          └─────────┬──────────┘                                │
│                    │                                            │
│       ┌────────────┼──────────────┐                            │
│       ▼            ▼              ▼                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│  │Service A │ │Service B │ │Service C │                       │
│  │[Tech]    │ │[Tech]    │ │[Tech]    │                       │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘                       │
│       │            │              │                             │
│       ▼            ▼              ▼                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐  ┌──────────┐        │
│  │Primary DB│ │Cache     │ │Object    │  │Message   │        │
│  │[Tech]    │ │[Tech]    │ │Storage   │  │Queue     │        │
│  │          │ │          │ │[Tech]    │  │[Tech]    │        │
│  └──────────┘ └──────────┘ └──────────┘  └──────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Container Inventory

| Container | Technology | Purpose | Scaling Strategy | Data Stored |
|-----------|-----------|---------|------------------|-------------|
| Web App | [e.g., React 18, TypeScript] | User-facing web interface | CDN + static hosting | None (client-side) |
| Mobile App | [e.g., React Native] | User-facing mobile interface | App store distribution | Local cache only |
| API Gateway | [e.g., NGINX, AWS ALB, Kong] | Request routing, rate limiting, TLS termination | Horizontal auto-scale | None |
| Service A | [e.g., Node.js, Express] | [Core business logic] | [Horizontal, 2-8 instances] | [Via Primary DB] |
| Service B | [e.g., Python, FastAPI] | [Secondary business logic] | [Horizontal, 1-4 instances] | [Via Cache + DB] |
| Service C | [e.g., Go] | [Background processing] | [Horizontal, workers] | [Via Queue + DB] |
| Primary DB | [e.g., PostgreSQL 16] | Persistent data storage | [Vertical + read replicas] | [All application data] |
| Cache | [e.g., Redis 7] | Session storage, query caching | [Cluster mode, 3 nodes] | [Sessions, hot data] |
| Object Storage | [e.g., AWS S3] | File and media storage | [Managed, unlimited] | [User uploads, exports] |
| Message Queue | [e.g., RabbitMQ, SQS] | Async task processing | [Managed, auto-scale] | [Job payloads, events] |

---

## 4. Component Design (C4 Level 3)

<!-- For each significant container, describe its internal modules/components. -->

### 4.1 [Service A] — Component Breakdown

```
┌─────────────────────────────────────────────────┐
│                  Service A                       │
│                                                  │
│  ┌──────────────┐    ┌──────────────────────┐   │
│  │  HTTP Layer   │───▶│  Route Handlers      │   │
│  │  (Express)    │    │  (Controllers)       │   │
│  └──────────────┘    └──────────┬───────────┘   │
│                                  │               │
│                      ┌───────────┼──────────┐   │
│                      ▼           ▼          ▼   │
│               ┌───────────┐ ┌────────┐ ┌──────┐│
│               │ Business  │ │ Auth   │ │ Event││
│               │ Logic     │ │ Module │ │ Pub  ││
│               │ (Domain)  │ │        │ │      ││
│               └─────┬─────┘ └────────┘ └──────┘│
│                     │                           │
│               ┌─────▼─────┐                     │
│               │ Data Access│                     │
│               │ (Repository│                     │
│               │  Pattern)  │                     │
│               └────────────┘                     │
│                                                  │
└─────────────────────────────────────────────────┘
```

| Component | Responsibility | Dependencies | Key Interfaces |
|-----------|---------------|--------------|----------------|
| HTTP Layer | Request parsing, middleware, routing | [Framework] | `handleRequest(req, res)` |
| Route Handlers | Input validation, response formatting | Business Logic | `POST /api/v1/[resource]` |
| Business Logic | Domain rules, orchestration | Data Access, Event Pub | `create()`, `update()`, `delete()` |
| Auth Module | Token validation, permission checks | [Auth provider] | `authenticate(token)`, `authorize(user, action)` |
| Event Publisher | Emit domain events for async processing | Message Queue | `publish(event)` |
| Data Access | Database queries, ORM mapping | Primary DB | `findById()`, `save()`, `query()` |

### 4.2 [Service B] — Component Breakdown

<!-- Repeat the structure above for each significant service. -->

| Component | Responsibility | Dependencies | Key Interfaces |
|-----------|---------------|--------------|----------------|
| [Component] | [Responsibility] | [Dependencies] | [Interfaces] |

---

## 5. Technology Stack

<!-- Justify every technology choice. If there were alternatives considered,
     reference the Technology Decision Records (template 11). -->

### 5.1 Stack Summary

| Layer | Technology | Version | Rationale | TDR Reference |
|-------|-----------|---------|-----------|---------------|
| **Frontend** | [e.g., React] | [18.x] | [Why chosen] | [TDR-001] |
| **Frontend Framework** | [e.g., Next.js] | [14.x] | [Why chosen] | [TDR-001] |
| **Styling** | [e.g., Tailwind CSS] | [3.x] | [Why chosen] | [TDR-002] |
| **API Layer** | [e.g., Node.js + Express] | [20.x LTS] | [Why chosen] | [TDR-003] |
| **Language** | [e.g., TypeScript] | [5.x] | [Why chosen] | [TDR-004] |
| **Primary Database** | [e.g., PostgreSQL] | [16.x] | [Why chosen] | [TDR-005] |
| **Cache** | [e.g., Redis] | [7.x] | [Why chosen] | [TDR-006] |
| **Object Storage** | [e.g., AWS S3] | [N/A] | [Why chosen] | — |
| **Message Queue** | [e.g., SQS / RabbitMQ] | [N/A] | [Why chosen] | [TDR-007] |
| **Search** | [e.g., Elasticsearch / Meilisearch] | [8.x] | [Why chosen] | [TDR-008] |
| **Auth Provider** | [e.g., Auth0 / Clerk / Custom] | [N/A] | [Why chosen] | [TDR-009] |
| **Cloud Provider** | [e.g., AWS / GCP / Azure] | [N/A] | [Why chosen] | [TDR-010] |
| **Container Runtime** | [e.g., Docker] | [24.x] | [Why chosen] | — |
| **Orchestration** | [e.g., Kubernetes / ECS] | [1.28] | [Why chosen] | [TDR-011] |
| **CI/CD** | [e.g., GitHub Actions] | [N/A] | [Why chosen] | — |
| **Monitoring** | [e.g., Datadog / Grafana] | [N/A] | [Why chosen] | [TDR-012] |

### 5.2 Language & Runtime Constraints

- **Node version**: [e.g., >= 20.x LTS]
- **TypeScript strictness**: [e.g., `strict: true`, no `any` without ESLint override]
- **Package manager**: [e.g., pnpm 8.x]
- **Monorepo tool**: [e.g., Turborepo / Nx / none]

---

## 6. Data Architecture

### 6.1 Entity-Relationship Model

<!-- High-level ER diagram. Detailed model is in template 10 (Data Model). -->

```
┌──────────┐       ┌──────────────┐       ┌──────────┐
│  User    │──1:N──│ Organization │──1:N──│  Project │
└──────────┘       └──────────────┘       └─────┬────┘
     │                                          │
     │                                     1:N  │
     │                                          ▼
     │                                    ┌──────────┐
     └────────────────M:N─────────────────│  [Entity]│
                                          └──────────┘
```

<!-- Replace with your actual entity relationships. -->

### 6.2 Data Flow Diagram

```
[User Action] ──▶ [API Gateway] ──▶ [Service] ──▶ [Database]
                                        │
                                        ├──▶ [Cache] (read-through)
                                        │
                                        └──▶ [Event Bus] ──▶ [Worker] ──▶ [External API]
```

### 6.3 Storage Strategy

| Data Type | Storage | Rationale |
|-----------|---------|-----------|
| User profiles, business entities | [e.g., PostgreSQL] | Relational data, ACID transactions, complex queries |
| Session data, rate limit counters | [e.g., Redis] | Fast reads, TTL-based expiry, in-memory |
| File uploads, media | [e.g., S3] | Unlimited storage, CDN integration, cost-effective |
| Search indexes | [e.g., Elasticsearch] | Full-text search, faceted filtering |
| Audit logs | [e.g., PostgreSQL append-only table / CloudWatch] | Immutable, time-series queries |
| Analytics events | [e.g., ClickHouse / BigQuery] | Columnar storage, aggregation queries |

### 6.4 Caching Strategy

| Cache Layer | Technology | TTL | Invalidation Strategy | Data Cached |
|-------------|-----------|-----|----------------------|-------------|
| CDN | [e.g., CloudFront] | [e.g., 24h for static, 5m for API] | [Cache-Control headers] | [Static assets, public API responses] |
| Application cache | [e.g., Redis] | [e.g., 15 min] | [Write-through on mutation] | [Frequently read entities, computed aggregations] |
| Query cache | [e.g., Redis] | [e.g., 5 min] | [Key-based invalidation on write] | [Complex query results, dashboard data] |
| Browser cache | Service Worker / HTTP headers | [e.g., 1h for API, immutable for assets] | [Version-based cache busting] | [API responses, static assets] |

---

## 7. API Architecture

<!-- Detailed API specifications are in template 09. This section covers
     architectural decisions about the API layer. -->

### 7.1 API Style

| Attribute | Decision | Rationale |
|-----------|----------|-----------|
| **Style** | [REST / GraphQL / gRPC / Hybrid] | [Why this style] |
| **Data format** | [JSON / Protocol Buffers] | [Why this format] |
| **Versioning** | [URL path (v1/v2) / Header / Query param] | [Why this strategy] |
| **Authentication** | [Bearer token (JWT) / API key / OAuth 2.0] | [Why this mechanism] |
| **Documentation** | [OpenAPI 3.1 / GraphQL Introspection] | [Auto-generated from code] |

### 7.2 Endpoint Overview

<!-- High-level endpoint inventory. Full specifications in API Spec (template 09). -->

| Resource | Method | Path | Purpose | Auth Required |
|----------|--------|------|---------|---------------|
| [Users] | GET | `/api/v1/users` | List users | Yes (admin) |
| [Users] | POST | `/api/v1/users` | Create user | Yes (admin) |
| [Users] | GET | `/api/v1/users/:id` | Get user by ID | Yes |
| [Projects] | GET | `/api/v1/projects` | List projects | Yes |
| [Projects] | POST | `/api/v1/projects` | Create project | Yes |
| [Projects] | PUT | `/api/v1/projects/:id` | Update project | Yes (owner) |
| [Projects] | DELETE | `/api/v1/projects/:id` | Delete project | Yes (owner) |

<!-- Add all resources. Aim for completeness. -->

### 7.3 Rate Limiting & Throttling

| Tier | Rate Limit | Burst | Scope | Response on Exceed |
|------|-----------|-------|-------|-------------------|
| Free | [e.g., 100 req/min] | [e.g., 10 req/sec] | Per API key | `429 Too Many Requests` + `Retry-After` header |
| Pro | [e.g., 1000 req/min] | [e.g., 50 req/sec] | Per API key | `429 Too Many Requests` + `Retry-After` header |
| Internal | [e.g., 10000 req/min] | [e.g., 500 req/sec] | Per service | Circuit breaker triggers |

### 7.4 API Error Format

```json
{
  "error": {
    "code": "[ERROR_CODE]",
    "message": "[Human-readable message]",
    "details": [
      {
        "field": "[field_name]",
        "issue": "[Specific validation issue]"
      }
    ],
    "request_id": "[UUID for tracing]",
    "documentation_url": "[Link to relevant docs]"
  }
}
```

---

## 8. Security Architecture

### 8.1 Authentication

| Attribute | Decision |
|-----------|----------|
| **Mechanism** | [e.g., JWT with short-lived access tokens (15 min) + refresh tokens (7 days)] |
| **Provider** | [e.g., Auth0 / Firebase Auth / Custom implementation] |
| **MFA** | [e.g., Optional for users, required for admins — TOTP or WebAuthn] |
| **Session management** | [e.g., Stateless JWT, token rotation on refresh] |
| **Password policy** | [e.g., Min 12 chars, no max, check against HaveIBeenPwned] |
| **Account lockout** | [e.g., 5 failed attempts → 15-min lockout → CAPTCHA] |

### 8.2 Authorization

| Attribute | Decision |
|-----------|----------|
| **Model** | [RBAC / ABAC / Hybrid] |
| **Implementation** | [e.g., Middleware-based permission checks with Casbin / custom] |

**Role Definitions:**

| Role | Permissions | Scope |
|------|------------|-------|
| Super Admin | Full system access | Global |
| Org Admin | Manage organization, users, billing | Organization |
| Member | CRUD own resources, read shared resources | Organization |
| Viewer | Read-only access | Organization |
| API Consumer | API access per granted scopes | Per API key |

### 8.3 Data Encryption

| Layer | Method | Details |
|-------|--------|---------|
| In transit | TLS 1.3 | All external traffic; internal traffic within VPC optional based on threat model |
| At rest (database) | [e.g., AES-256, AWS RDS encryption] | Transparent disk encryption |
| At rest (object storage) | [e.g., SSE-S3 / SSE-KMS] | Server-side encryption |
| Application-level | [e.g., AES-256-GCM for PII fields] | Encrypt specific sensitive fields before storage |
| Secrets | [e.g., AWS Secrets Manager / HashiCorp Vault] | Rotated every [90 days], never in code/config files |

### 8.4 OWASP Top 10 Mitigations

| OWASP Risk | Mitigation Strategy |
|------------|-------------------|
| A01: Broken Access Control | [e.g., RBAC enforced at API layer, resource ownership checks, deny-by-default] |
| A02: Cryptographic Failures | [e.g., TLS everywhere, AES-256 at rest, no custom crypto, secrets in vault] |
| A03: Injection | [e.g., Parameterized queries (ORM), input validation, CSP headers] |
| A04: Insecure Design | [e.g., Threat modeling in design phase, secure defaults, rate limiting] |
| A05: Security Misconfiguration | [e.g., IaC with security baselines, automated scanning, no default credentials] |
| A06: Vulnerable Components | [e.g., Dependabot, weekly dependency audit, SBOM generation] |
| A07: Auth Failures | [e.g., MFA, account lockout, session management as described above] |
| A08: Data Integrity Failures | [e.g., Signed deployments, CI/CD pipeline integrity, input validation] |
| A09: Logging & Monitoring | [e.g., Structured logging, security event alerting, audit trail] |
| A10: SSRF | [e.g., Allowlist for outbound requests, no user-controlled URLs in server-side fetches] |

### 8.5 Secrets Management

| Secret Type | Storage | Rotation | Access Control |
|-------------|---------|----------|---------------|
| Database credentials | [e.g., AWS Secrets Manager] | [e.g., Every 90 days, automated] | [Service role only] |
| API keys (third-party) | [e.g., AWS Secrets Manager] | [e.g., On compromise or annually] | [Specific service only] |
| JWT signing keys | [e.g., KMS / Vault] | [e.g., Every 30 days, key rotation] | [Auth service only] |
| Encryption keys | [e.g., AWS KMS] | [e.g., Annual rotation, automatic] | [Per-service IAM policy] |

---

## 9. Infrastructure & Deployment

### 9.1 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     [Cloud Provider]                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────┐           │
│  │  Region: [e.g., us-east-1]                      │           │
│  │                                                  │           │
│  │  ┌─────────────┐    ┌─────────────────────┐     │           │
│  │  │    CDN      │    │  Load Balancer      │     │           │
│  │  │ (CloudFront)│    │  (ALB)              │     │           │
│  │  └──────┬──────┘    └──────────┬──────────┘     │           │
│  │         │                      │                 │           │
│  │         ▼                      ▼                 │           │
│  │  ┌──────────┐    ┌──────────────────────┐       │           │
│  │  │  S3      │    │  Container Cluster   │       │           │
│  │  │ (Static) │    │  (ECS / EKS)         │       │           │
│  │  └──────────┘    │  ┌────┐ ┌────┐ ┌────┐│       │           │
│  │                  │  │Svc │ │Svc │ │Svc ││       │           │
│  │                  │  │ A  │ │ B  │ │ C  ││       │           │
│  │                  │  └────┘ └────┘ └────┘│       │           │
│  │                  └──────────┬───────────┘       │           │
│  │                             │                    │           │
│  │                  ┌──────────┼──────────┐        │           │
│  │                  ▼          ▼          ▼        │           │
│  │             ┌────────┐ ┌────────┐ ┌────────┐   │           │
│  │             │  RDS   │ │ Redis  │ │  SQS   │   │           │
│  │             │(Primary│ │Cluster │ │        │   │           │
│  │             │+Replica)│ │        │ │        │   │           │
│  │             └────────┘ └────────┘ └────────┘   │           │
│  └─────────────────────────────────────────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.2 Environments

| Environment | Purpose | URL | Data | Deployment Trigger |
|-------------|---------|-----|------|--------------------|
| Development | Local dev + shared services | `localhost` / `dev.example.com` | Synthetic seed data | Manual / on save |
| Staging | Pre-production testing | `staging.example.com` | Anonymized production clone | Auto on merge to `main` |
| Production | Live system | `app.example.com` | Real data | Manual approval after staging |

### 9.3 CI/CD Pipeline

```
[Push to branch]
     │
     ▼
[Lint + Type Check] ──fail──▶ [Block merge]
     │ pass
     ▼
[Unit Tests] ──fail──▶ [Block merge]
     │ pass
     ▼
[Integration Tests] ──fail──▶ [Block merge]
     │ pass
     ▼
[Build Container Image]
     │
     ▼
[Security Scan (SAST + container)] ──fail──▶ [Block merge]
     │ pass
     ▼
[Deploy to Staging] ──▶ [Smoke Tests] ──fail──▶ [Rollback + alert]
     │ pass
     ▼
[Manual Approval Gate]
     │ approved
     ▼
[Deploy to Production (rolling/blue-green)]
     │
     ▼
[Post-deploy Smoke Tests] ──fail──▶ [Auto-rollback + alert]
     │ pass
     ▼
[Done — monitoring active]
```

### 9.4 Scaling Strategy

| Component | Scaling Type | Trigger | Min | Max | Cooldown |
|-----------|-------------|---------|-----|-----|----------|
| API services | Horizontal (auto) | CPU > 70% or p95 latency > 500ms | [2] | [10] | [5 min] |
| Worker services | Horizontal (auto) | Queue depth > 1000 | [1] | [8] | [3 min] |
| Database (read) | Read replicas | Manual / scheduled | [1 replica] | [3 replicas] | — |
| Database (write) | Vertical | Manual | [db.r6g.large] | [db.r6g.2xlarge] | — |
| Cache | Cluster scaling | Memory > 80% | [3 nodes] | [6 nodes] | [10 min] |

### 9.5 Monitoring & Observability

#### Metrics

| Metric | Source | Alert Threshold | Severity |
|--------|--------|-----------------|----------|
| API response time (p95) | [e.g., Application / APM] | > 500ms for 5 min | Warning |
| API response time (p99) | [e.g., Application / APM] | > 2000ms for 2 min | Critical |
| Error rate (5xx) | [e.g., Load balancer logs] | > 1% for 5 min | Critical |
| CPU utilization | [e.g., CloudWatch] | > 80% for 10 min | Warning |
| Memory utilization | [e.g., CloudWatch] | > 85% for 10 min | Warning |
| Database connections | [e.g., RDS metrics] | > 80% of max | Warning |
| Queue depth | [e.g., SQS metrics] | > 10,000 messages | Warning |
| Disk usage | [e.g., CloudWatch] | > 80% | Warning |
| Certificate expiry | [e.g., ACM / custom check] | < 30 days | Warning |

#### Logging

- **Format**: [e.g., Structured JSON — `{timestamp, level, service, trace_id, message, context}`]
- **Levels**: `DEBUG` (dev only), `INFO`, `WARN`, `ERROR`, `FATAL`
- **Aggregation**: [e.g., CloudWatch Logs → OpenSearch / Datadog Log Management]
- **Retention**: [e.g., 30 days hot, 90 days warm, 1 year cold storage]
- **PII**: [e.g., PII fields are masked in logs — email → `j***@example.com`]

#### Distributed Tracing

- **Tool**: [e.g., OpenTelemetry → Jaeger / Datadog APM / AWS X-Ray]
- **Trace propagation**: [e.g., W3C Trace Context headers]
- **Sampling rate**: [e.g., 100% in staging, 10% in production, 100% on errors]

#### Alerting

- **Channels**: [e.g., PagerDuty (critical), Slack #alerts (warning), Email (informational)]
- **Escalation**: [e.g., Warning → team Slack → 15 min → PagerDuty on-call]
- **Runbooks**: [e.g., Each alert links to a runbook in /docs/runbooks/]

---

## 10. Cross-Cutting Concerns

### 10.1 Error Handling Strategy

| Layer | Strategy |
|-------|----------|
| API layer | Return structured error responses (see Section 7.4). Log with request context. Never expose internal details to clients. |
| Service layer | Throw typed domain exceptions. Catch at handler boundary. Include error codes for programmatic handling. |
| Data layer | Wrap database errors in application-specific exceptions. Retry on transient failures (connection timeout, deadlock). |
| Background jobs | Retry with exponential backoff (3 attempts). Dead-letter queue for permanent failures. Alert on DLQ growth. |
| Client-side | Display user-friendly messages. Log to error tracking service (e.g., Sentry). Provide retry/recovery where possible. |

### 10.2 Logging Standards

<!-- Every log entry must include: -->

```json
{
  "timestamp": "2026-04-07T12:00:00.000Z",
  "level": "INFO",
  "service": "api-gateway",
  "trace_id": "abc123",
  "span_id": "def456",
  "user_id": "usr_789",
  "message": "Request completed",
  "context": {
    "method": "POST",
    "path": "/api/v1/projects",
    "status": 201,
    "duration_ms": 45
  }
}
```

### 10.3 Configuration Management

| Configuration Type | Storage | Example |
|-------------------|---------|---------|
| Application config | [e.g., Environment variables via .env (local) / SSM Parameter Store (deployed)] | `PORT`, `LOG_LEVEL`, `DATABASE_URL` |
| Feature flags | [e.g., LaunchDarkly / Unleash / database-backed] | `ENABLE_NEW_DASHBOARD`, `MAX_UPLOAD_SIZE` |
| Secrets | [e.g., AWS Secrets Manager / Vault] | `DB_PASSWORD`, `JWT_SECRET`, `API_KEY_STRIPE` |
| Infrastructure | [e.g., Terraform / Pulumi / CloudFormation] | VPC, RDS, ECS task definitions |

**Principle**: Configuration follows the 12-Factor App methodology. No secrets in code. Environment-specific config injected at deploy time.

---

## 11. Architecture Decision Records (ADRs)

<!-- Embed the ADR template here. Each significant architecture decision should be
     recorded as an ADR. Use the Technology Decision Records (template 11) for
     technology-specific choices. -->

### ADR Template

```markdown
## ADR-[NNN]: [Title]

**Date**: YYYY-MM-DD
**Status**: [Proposed | Accepted | Deprecated | Superseded by ADR-XXX]
**Deciders**: [List of people involved in the decision]

### Context
[Why is this decision needed? What is the technical or business driver?]

### Decision
[What is the change that we are proposing and/or doing?]

### Consequences
**Positive:**
- [Benefit 1]
- [Benefit 2]

**Negative:**
- [Drawback 1]
- [Drawback 2]

**Risks:**
- [Risk 1 — with mitigation]
```

### ADR Log

| ID | Title | Date | Status | Impact |
|----|-------|------|--------|--------|
| ADR-001 | [e.g., Use PostgreSQL as primary database] | [Date] | Accepted | High |
| ADR-002 | [e.g., Adopt modular monolith over microservices] | [Date] | Accepted | High |
| ADR-003 | [e.g., Use JWT for API authentication] | [Date] | Accepted | Medium |
| ADR-004 | [Decision title] | [Date] | [Status] | [Impact] |

---

## 12. Key Invariants & Constraints

<!-- Inspired by matklad's architecture pattern. List properties that MUST always
     hold true in the system. These are the non-negotiable rules that protect
     system integrity. Any code change that violates an invariant is a bug. -->

### System Invariants

| ID | Invariant | Enforcement | Violation Consequence |
|----|-----------|-------------|----------------------|
| INV-001 | [e.g., Every API request must be authenticated except health check endpoints] | [Middleware, integration tests] | [Unauthorized data access] |
| INV-002 | [e.g., A user can only access resources within their organization] | [Authorization middleware, DB queries scoped by org_id] | [Data leak across tenants] |
| INV-003 | [e.g., All database mutations are wrapped in transactions] | [Repository layer, code review] | [Data inconsistency] |
| INV-004 | [e.g., PII fields are encrypted before storage] | [Model hooks, integration tests] | [Compliance violation] |
| INV-005 | [e.g., Deleted resources are soft-deleted with a 30-day retention] | [Soft-delete middleware, no hard DELETE queries] | [Data loss, compliance violation] |

### Technical Constraints

| Constraint | Reason | Impact on Design |
|------------|--------|-----------------|
| [e.g., Must run on AWS] | [Business agreement, existing infrastructure] | [Limits service choices to AWS ecosystem] |
| [e.g., Max 500ms API response time] | [UX requirement, SLA] | [Requires caching, query optimization] |
| [e.g., Support 10,000 concurrent users] | [Business growth projection] | [Horizontal scaling, connection pooling] |
| [e.g., GDPR compliance required] | [EU user base, legal requirement] | [Data residency, PII handling, deletion support] |
| [e.g., Must integrate with [Legacy System X]] | [Existing business process] | [Adapter pattern, API compatibility layer] |

---

## 13. Risks & Mitigations

| ID | Risk | Probability | Impact | Mitigation | Owner |
|----|------|-------------|--------|------------|-------|
| RISK-001 | [e.g., Database becomes performance bottleneck at scale] | [Medium] | [High] | [Read replicas, caching layer, query optimization, sharding plan] | [Architect] |
| RISK-002 | [e.g., Third-party auth provider outage blocks all users] | [Low] | [Critical] | [Fallback auth flow, cached tokens, SLA with provider] | [Backend Lead] |
| RISK-003 | [e.g., Data migration from legacy system fails or corrupts data] | [Medium] | [High] | [Dry-run migrations, checksums, rollback plan, parallel running] | [Data Engineer] |
| RISK-004 | [e.g., Team lacks experience with [chosen technology]] | [Medium] | [Medium] | [Training, proof-of-concept before full build, external review] | [Tech Lead] |
| RISK-005 | [Risk description] | [Probability] | [Impact] | [Mitigation] | [Owner] |

---

## Appendices

### A. Glossary

| Term | Definition |
|------|-----------|
| [Term] | [Definition] |

### B. Reference Documents

- [Link to PRD]
- [Link to NFR Document]
- [Link to UX Specification]
- [Link to API Specification (template 09)]
- [Link to Data Model (template 10)]
- [Link to Technology Decision Records (template 11)]

### C. Diagram Sources

<!-- Links to editable diagram files (e.g., draw.io, Mermaid, PlantUML sources). -->

- [Link to C4 diagram source files]
- [Link to infrastructure diagram source files]

---

<!-- 
  QUALITY CHECKLIST (Phase 5 → Phase 6 Gate):
  - [ ] Architecture overview clearly communicates system structure
  - [ ] C4 diagrams present at Context, Container, and Component levels
  - [ ] Every technology choice is justified with rationale
  - [ ] Data architecture covers storage, caching, and data flow
  - [ ] API architecture defines style, versioning, error handling, rate limits
  - [ ] Security architecture addresses auth, authorization, encryption, OWASP
  - [ ] Infrastructure covers deployment, CI/CD, scaling, monitoring
  - [ ] Cross-cutting concerns (error handling, logging, config) documented
  - [ ] Key invariants and constraints explicitly listed
  - [ ] All significant decisions recorded as ADRs
  - [ ] Risks identified with mitigation strategies
  - [ ] Architecture traceable to requirements (NFR, PRD)
-->
