---
title: "Data Model Specification"
version: "1.0"
phase: 5
template_id: "SF-T10"
owner: "Solutions Architect (Builder)"
status: "draft"  # draft | in-review | approved
project: "[Project Name]"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
database_type: "[PostgreSQL / MySQL / MongoDB / etc.]"
orm: "[Prisma / TypeORM / Drizzle / SQLAlchemy / etc.]"
dependencies:
  - "03-prd.md"
  - "08-architecture.md"
traceability:
  architecture_doc: "[link to architecture doc]"
  api_spec: "[link to API spec]"
---

# Data Model Specification

<!-- 
  PURPOSE: This document defines the complete data model for the system — entities,
  attributes, relationships, constraints, validation rules, and data lifecycle policies.
  It serves as the blueprint for database schema design and ORM model implementation.
  
  AUDIENCE: Backend developers, database administrators, data engineers, QA engineers.
  
  INSTRUCTIONS: Fill in each section. Replace [brackets]. Remove HTML comments
  before finalizing. Entity definitions should be detailed enough to generate
  migration files directly.
-->

---

## 1. Conceptual Data Model

<!-- High-level view of the major entities and their relationships. No attributes —
     just entity names and relationship types. This should fit on one page. -->

### 1.1 Entity Overview

```
┌──────────┐         ┌──────────────┐         ┌──────────┐
│   User   │──1:N───▶│  Membership  │◀──N:1───│   Org    │
└──────────┘         └──────────────┘         └──────────┘
     │                                              │
     │ 1:N                                     1:N  │
     ▼                                              ▼
┌──────────┐                                  ┌──────────┐
│  Session │                                  │  Project │
└──────────┘                                  └─────┬────┘
                                                    │
                                               1:N  │
                                                    ▼
                                              ┌──────────┐
                                              │ [Entity] │
                                              └──────────┘
```

<!-- Replace with your actual entity relationship diagram. -->

### 1.2 Entity Summary

| Entity | Description | Owner | Estimated Volume |
|--------|-------------|-------|-----------------|
| User | Registered user account | System | [e.g., 100K in year 1] |
| Organization | Tenant / company account | User (creator) | [e.g., 10K in year 1] |
| Membership | User-Org association with role | System | [e.g., 150K in year 1] |
| Project | Primary work container | Organization | [e.g., 50K in year 1] |
| [Entity] | [Description] | [Owner] | [Volume] |
| [Entity] | [Description] | [Owner] | [Volume] |

### 1.3 Relationship Summary

| Relationship | Type | Description | Cascade Behavior |
|-------------|------|-------------|-----------------|
| User → Membership | One-to-Many | A user belongs to multiple organizations | Delete user → soft-delete memberships |
| Organization → Membership | One-to-Many | An org has multiple members | Delete org → soft-delete memberships |
| Organization → Project | One-to-Many | An org contains multiple projects | Delete org → soft-delete projects |
| User → Session | One-to-Many | A user has multiple active sessions | Delete user → hard-delete sessions |
| [Entity A] → [Entity B] | [Type] | [Description] | [Cascade behavior] |

---

## 2. Logical Data Model

<!-- Detailed attribute-level definitions for each entity. These should be
     precise enough to generate database migrations. -->

### 2.1 Entity: `users`

**Description:** Registered user accounts.

**Table name:** `users`

| Column | Type | Nullable | Default | Description | Constraints |
|--------|------|----------|---------|-------------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key | PK |
| `email` | `varchar(255)` | No | — | Email address | UNIQUE, valid email format |
| `name` | `varchar(100)` | No | — | Full display name | Min 1 char |
| `password_hash` | `varchar(255)` | No | — | Bcrypt hashed password | Never returned in API |
| `avatar_url` | `varchar(2048)` | Yes | `null` | Profile picture URL | Valid URL format |
| `email_verified` | `boolean` | No | `false` | Email verification status | — |
| `last_login_at` | `timestamptz` | Yes | `null` | Last successful login | Updated on login |
| `created_at` | `timestamptz` | No | `now()` | Creation timestamp | Immutable |
| `updated_at` | `timestamptz` | No | `now()` | Last update timestamp | Auto-updated on change |
| `deleted_at` | `timestamptz` | Yes | `null` | Soft-delete timestamp | Non-null = deleted |

**Indexes:**

| Index Name | Columns | Type | Purpose |
|-----------|---------|------|---------|
| `users_pkey` | `id` | Primary Key | Row lookup |
| `users_email_unique` | `email` | Unique | Login lookup, duplicate prevention |
| `users_created_at_idx` | `created_at` | B-tree | Sorting, pagination |
| `users_deleted_at_idx` | `deleted_at` | B-tree (partial: WHERE deleted_at IS NULL) | Exclude soft-deleted from queries |

---

### 2.2 Entity: `organizations`

**Description:** Tenant accounts (companies, teams).

**Table name:** `organizations`

| Column | Type | Nullable | Default | Description | Constraints |
|--------|------|----------|---------|-------------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key | PK |
| `name` | `varchar(100)` | No | — | Organization name | Min 1 char |
| `slug` | `varchar(100)` | No | — | URL-safe identifier | UNIQUE, lowercase, alphanumeric + hyphen |
| `plan` | `varchar(20)` | No | `'free'` | Subscription plan | One of: `free`, `pro`, `enterprise` |
| `owner_id` | `uuid` | No | — | Creating user | FK → `users.id` |
| `settings` | `jsonb` | No | `'{}'` | Organization-level settings | Valid JSON object |
| `created_at` | `timestamptz` | No | `now()` | Creation timestamp | Immutable |
| `updated_at` | `timestamptz` | No | `now()` | Last update timestamp | Auto-updated |
| `deleted_at` | `timestamptz` | Yes | `null` | Soft-delete timestamp | — |

**Indexes:**

| Index Name | Columns | Type | Purpose |
|-----------|---------|------|---------|
| `organizations_pkey` | `id` | Primary Key | Row lookup |
| `organizations_slug_unique` | `slug` | Unique | URL routing |
| `organizations_owner_id_idx` | `owner_id` | B-tree | Owner lookup |

---

### 2.3 Entity: `memberships` (Junction Table)

**Description:** Associates users with organizations, including their role within the org.

**Table name:** `memberships`

| Column | Type | Nullable | Default | Description | Constraints |
|--------|------|----------|---------|-------------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key | PK |
| `user_id` | `uuid` | No | — | Member user | FK → `users.id` |
| `organization_id` | `uuid` | No | — | Organization | FK → `organizations.id` |
| `role` | `varchar(20)` | No | `'member'` | Role within org | One of: `owner`, `admin`, `member`, `viewer` |
| `invited_by` | `uuid` | Yes | `null` | User who sent invite | FK → `users.id` |
| `joined_at` | `timestamptz` | No | `now()` | When user joined | Immutable |
| `created_at` | `timestamptz` | No | `now()` | Creation timestamp | Immutable |
| `updated_at` | `timestamptz` | No | `now()` | Last update timestamp | Auto-updated |

**Indexes:**

| Index Name | Columns | Type | Purpose |
|-----------|---------|------|---------|
| `memberships_pkey` | `id` | Primary Key | Row lookup |
| `memberships_user_org_unique` | `(user_id, organization_id)` | Unique | Prevent duplicate membership |
| `memberships_user_id_idx` | `user_id` | B-tree | Find user's organizations |
| `memberships_org_id_idx` | `organization_id` | B-tree | Find org's members |

---

### 2.4 Entity: `projects`

**Description:** [Description of the project entity.]

**Table name:** `projects`

| Column | Type | Nullable | Default | Description | Constraints |
|--------|------|----------|---------|-------------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key | PK |
| `name` | `varchar(200)` | No | — | Project name | Min 1 char |
| `description` | `text` | Yes | `null` | Project description | Max 5000 chars |
| `organization_id` | `uuid` | No | — | Owning organization | FK → `organizations.id` |
| `created_by` | `uuid` | No | — | Creating user | FK → `users.id` |
| `status` | `varchar(20)` | No | `'active'` | Project status | One of: `active`, `archived`, `deleted` |
| `settings` | `jsonb` | No | `'{}'` | Project-level settings | Valid JSON object |
| `created_at` | `timestamptz` | No | `now()` | Creation timestamp | Immutable |
| `updated_at` | `timestamptz` | No | `now()` | Last update timestamp | Auto-updated |
| `deleted_at` | `timestamptz` | Yes | `null` | Soft-delete timestamp | — |

**Indexes:**

| Index Name | Columns | Type | Purpose |
|-----------|---------|------|---------|
| `projects_pkey` | `id` | Primary Key | Row lookup |
| `projects_org_id_idx` | `organization_id` | B-tree | List org's projects |
| `projects_created_by_idx` | `created_by` | B-tree | List user's created projects |
| `projects_status_idx` | `status` | B-tree (partial: WHERE status = 'active') | Filter active projects |

---

### 2.5 Entity: [Additional Entity]

<!-- Copy the entity template above for each additional entity in your system.
     Common entities to include:
     - Invitations
     - API Keys
     - Audit Logs
     - Files / Attachments
     - Comments
     - Notifications
     - Billing / Subscriptions
-->

| Column | Type | Nullable | Default | Description | Constraints |
|--------|------|----------|---------|-------------|-------------|
| `id` | `uuid` | No | `gen_random_uuid()` | Primary key | PK |
| [Column] | [Type] | [Nullable] | [Default] | [Description] | [Constraints] |

---

## 3. Relationship Definitions

### 3.1 One-to-Many Relationships

| Parent | Child | Foreign Key | On Delete | On Update | Description |
|--------|-------|-------------|-----------|-----------|-------------|
| `users` | `sessions` | `sessions.user_id` → `users.id` | CASCADE | CASCADE | User's login sessions |
| `organizations` | `projects` | `projects.organization_id` → `organizations.id` | RESTRICT | CASCADE | Org's projects |
| `users` | `organizations` | `organizations.owner_id` → `users.id` | RESTRICT | CASCADE | Org creator |

### 3.2 Many-to-Many Relationships

| Entity A | Entity B | Junction Table | Additional Columns | Description |
|----------|----------|---------------|-------------------|-------------|
| `users` | `organizations` | `memberships` | `role`, `joined_at` | User membership in orgs |

### 3.3 Self-Referential Relationships

<!-- If any entity references itself (e.g., parent-child hierarchy). -->

| Entity | Column | References | Description |
|--------|--------|------------|-------------|
| [e.g., `categories`] | `parent_id` | `categories.id` | [Category tree hierarchy] |

---

## 4. Data Validation Rules

<!-- Define validation rules that go beyond basic type/constraint checking.
     These are business rules enforced at the application layer. -->

| Entity | Rule | Enforcement Layer | Error Code |
|--------|------|--------------------|------------|
| User | Email must be unique (case-insensitive) | DB unique index on `lower(email)` + app validation | `DUPLICATE_EMAIL` |
| User | Password must be >= 12 characters | Application layer | `WEAK_PASSWORD` |
| Membership | Each org must have at least one owner | Application layer (prevent last owner removal) | `LAST_OWNER` |
| Organization | Slug must be URL-safe (lowercase alphanumeric + hyphens) | Application layer + DB constraint | `INVALID_SLUG` |
| Organization | Free plan limited to [X] projects | Application layer | `PLAN_LIMIT_EXCEEDED` |
| Project | Name unique within organization | DB unique index on `(organization_id, name)` | `DUPLICATE_NAME` |
| [Entity] | [Rule] | [Layer] | [Error code] |

---

## 5. Data Migration Strategy

### 5.1 Migration Approach

| Attribute | Decision |
|-----------|----------|
| **Tool** | [e.g., Prisma Migrate / Flyway / Alembic / Knex migrations / raw SQL] |
| **Naming convention** | [e.g., `YYYYMMDDHHMMSS_description.sql`] |
| **Direction** | [e.g., Up and down migrations required for all changes] |
| **Review process** | [e.g., All migrations reviewed by DBA or senior backend developer] |
| **Testing** | [e.g., Run against staging clone before production] |
| **Zero-downtime** | [e.g., Required — no locking migrations on large tables without expand/contract pattern] |

### 5.2 Migration Safety Rules

1. **Never** drop a column in a single migration — use expand/contract:
   - Migration 1: Add new column, backfill, update application code
   - Migration 2: Remove old column after all clients migrated
2. **Never** use `ALTER TABLE ... ADD COLUMN ... DEFAULT` on large tables without `SET DEFAULT` first (PostgreSQL)
3. **Always** add indexes `CONCURRENTLY` in production
4. **Always** include a rollback (down) migration
5. **Test** all migrations against a production-sized dataset before deploying

### 5.3 Baseline Migration

<!-- If migrating from an existing system, describe the initial data migration. -->

| Source | Target | Records | Strategy | Validation |
|--------|--------|---------|----------|------------|
| [Legacy DB / CSV / API] | [Target table] | [Estimated count] | [ETL script / Bulk insert / API sync] | [Checksum / Row count / Sample verification] |

---

## 6. Seed Data / Initial Data

<!-- Define data that must exist in the system from day one. -->

### 6.1 System Seed Data

| Entity | Data | Purpose | Environment |
|--------|------|---------|-------------|
| [e.g., Roles] | `owner`, `admin`, `member`, `viewer` | Role definitions | All |
| [e.g., Plans] | `free`, `pro`, `enterprise` | Subscription plans | All |
| [e.g., Admin user] | `admin@example.com` | System administrator | Development, Staging |
| [e.g., Demo org] | "Demo Company" with sample projects | Onboarding demo | Development, Staging |

### 6.2 Test Data

| Scenario | Data Required | Generation Method |
|----------|--------------|-------------------|
| Empty state testing | 1 user, 1 org, 0 projects | Seed script |
| Populated state testing | 10 users, 3 orgs, 50 projects | Faker / factory library |
| Performance testing | 100K users, 10K orgs, 500K projects | Bulk generation script |
| Edge case testing | Users with special characters, max-length fields | Manual seed data |

---

## 7. Data Retention & Archival Policy

| Data Category | Retention Period | Archival Strategy | Deletion Method |
|---------------|-----------------|-------------------|-----------------|
| Active user data | Indefinite (while account active) | N/A | Soft-delete on account closure |
| Soft-deleted records | [e.g., 30 days] | [e.g., Move to archive table, then delete] | Hard-delete after retention period |
| Session data | [e.g., 30 days after expiry] | None | Hard-delete |
| Audit logs | [e.g., 2 years] | [e.g., Move to cold storage (S3 / Glacier)] | Hard-delete from primary DB |
| Analytics events | [e.g., 1 year in hot storage] | [e.g., Aggregate and move to data warehouse] | Purge raw events after aggregation |
| File uploads | [e.g., Indefinite while parent exists] | [e.g., Move to infrequent access tier after 90 days] | Delete when parent entity is hard-deleted |
| Backups | [e.g., Daily: 30 days, Weekly: 90 days, Monthly: 1 year] | [e.g., Automated RDS backups + manual snapshots] | Auto-expire per policy |

### 7.1 Right to Deletion (GDPR Article 17)

**Process for user data deletion request:**

1. Verify identity of requesting user
2. Soft-delete user account immediately
3. Within [30 days]:
   - Hard-delete PII from all tables
   - Remove from backups is not required (GDPR allows backup retention with access controls)
   - Remove from third-party systems (analytics, email, CRM)
4. Retain anonymized data for aggregate analytics
5. Confirm deletion to user

---

## 8. Privacy & PII Classification

<!-- Classify all data fields by sensitivity level. This drives encryption,
     access control, and audit requirements. -->

### 8.1 Data Classification

| Classification | Description | Access Control | Encryption | Logging |
|---------------|-------------|---------------|------------|---------|
| **Public** | Non-sensitive, publicly visible | No restriction | At rest (disk) | Standard |
| **Internal** | Business data, not PII | Authenticated users | At rest (disk) | Standard |
| **Confidential** | PII, business-sensitive | Role-based, need-to-know | At rest (disk) + field-level | Audit trail |
| **Restricted** | Credentials, payment data, health data | Strict role-based, MFA | At rest + field-level + in-transit | Audit trail + alerts |

### 8.2 Field Classification

| Entity | Field | Classification | PII | Encryption | Masking in Logs |
|--------|-------|---------------|-----|------------|-----------------|
| User | `id` | Internal | No | Disk | No |
| User | `email` | Confidential | Yes | Disk + field | `j***@example.com` |
| User | `name` | Confidential | Yes | Disk + field | `J*** S***` |
| User | `password_hash` | Restricted | N/A | Disk + field | `[REDACTED]` |
| User | `avatar_url` | Internal | No | Disk | No |
| User | `last_login_at` | Internal | No | Disk | No |
| Organization | `name` | Internal | No | Disk | No |
| Organization | `settings` | Internal | Possibly | Disk | Depends on content |
| [Entity] | [Field] | [Classification] | [PII?] | [Encryption] | [Masking] |

### 8.3 PII Processing Register

| PII Field | Purpose | Legal Basis | Retention | Third-Party Sharing |
|-----------|---------|-------------|-----------|-------------------|
| Email | Account identification, communication | Contract performance | Until account deletion + 30 days | [e.g., Email service provider (SendGrid)] |
| Name | Display, personalization | Contract performance | Until account deletion + 30 days | None |
| IP Address | Security, rate limiting, audit | Legitimate interest | [e.g., 90 days] | None |
| [Field] | [Purpose] | [Legal basis] | [Retention] | [Third parties] |

---

## Appendices

### A. Database Configuration

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Connection pool size | [e.g., 20 per service instance] | [Based on expected concurrency] |
| Statement timeout | [e.g., 30 seconds] | [Prevent runaway queries] |
| Idle connection timeout | [e.g., 10 minutes] | [Free resources] |
| Max connections (DB level) | [e.g., 100] | [RDS instance limit] |
| Character set | [e.g., UTF-8 / utf8mb4] | [Full Unicode support] |
| Timezone | [e.g., UTC] | [All timestamps stored in UTC] |

### B. Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Table names | `snake_case`, plural | `users`, `project_members` |
| Column names | `snake_case` | `created_at`, `organization_id` |
| Primary keys | `id` (UUID) | `id` |
| Foreign keys | `{referenced_table_singular}_id` | `user_id`, `organization_id` |
| Junction tables | `{table_a}_{table_b}` alphabetical or domain-named | `memberships`, `project_tags` |
| Indexes | `{table}_{columns}_idx` | `users_email_idx` |
| Unique constraints | `{table}_{columns}_unique` | `users_email_unique` |
| Boolean columns | `is_` or `has_` prefix | `is_active`, `has_verified` |
| Timestamp columns | `_at` suffix | `created_at`, `deleted_at` |
| Enum columns | Stored as `varchar`, not DB enums | `status varchar(20)` |

### C. ERD (Full)

<!-- Link to a rendered ERD from a tool like dbdiagram.io, pgModeler, or DBeaver. -->

- [Link to full ERD diagram]
- [Link to dbdiagram.io source / SQL DDL export]

---

<!-- 
  QUALITY CHECKLIST:
  - [ ] All entities from the architecture doc are defined with full schemas
  - [ ] Every column has type, nullable, default, description, and constraints
  - [ ] Indexes defined for all foreign keys and common query patterns
  - [ ] All relationships documented with cascade behavior
  - [ ] Junction tables defined for many-to-many relationships
  - [ ] Data validation rules cover all business constraints
  - [ ] Migration strategy defined with safety rules
  - [ ] Seed data specified for each environment
  - [ ] Retention and archival policies defined per data category
  - [ ] PII fields identified and classified
  - [ ] GDPR deletion process documented
  - [ ] Naming conventions documented and consistent
-->
