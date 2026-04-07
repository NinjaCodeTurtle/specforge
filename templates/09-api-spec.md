---
title: "API Specification"
version: "1.0"
phase: 5
template_id: "SF-T09"
owner: "Solutions Architect (Builder)"
status: "draft"  # draft | in-review | approved
project: "[Project Name]"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
base_url: "https://api.example.com"
api_version: "v1"
auth_type: "[Bearer Token / API Key / OAuth 2.0]"
content_type: "application/json"
dependencies:
  - "08-architecture.md"
  - "10-data-model.md"
traceability:
  architecture_doc: "[link to architecture doc]"
  data_model: "[link to data model]"
---

# API Specification

<!-- 
  PURPOSE: This document provides a complete, implementation-ready specification
  for the system's API. It complements the OpenAPI/Swagger spec with context,
  examples, and design rationale.
  
  AUDIENCE: Backend developers, frontend developers, third-party integrators,
  QA engineers.
  
  NOTE: This document should be kept in sync with the generated OpenAPI spec.
  When in doubt, the OpenAPI spec is the source of truth for exact schemas;
  this document provides context and examples.
-->

---

## 1. API Overview

### 1.1 Base URL

| Environment | Base URL |
|-------------|----------|
| Production | `https://api.[domain].com/v1` |
| Staging | `https://api.staging.[domain].com/v1` |
| Development | `http://localhost:[port]/api/v1` |

### 1.2 Authentication

<!-- Describe how clients authenticate with the API. -->

**Method:** [Bearer Token (JWT) / API Key / OAuth 2.0]

**Obtaining credentials:**
1. [Step 1 — e.g., Register an application in the developer portal]
2. [Step 2 — e.g., Receive client_id and client_secret]
3. [Step 3 — e.g., Exchange for access token via POST /auth/token]

**Token lifecycle:**
- Access token TTL: [e.g., 15 minutes]
- Refresh token TTL: [e.g., 7 days]
- Token refresh: [e.g., POST /auth/refresh with refresh_token]

**Example authentication header:**

```
Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
```

### 1.3 Common Request Headers

| Header | Required | Description | Example |
|--------|----------|-------------|---------|
| `Authorization` | Yes (except public endpoints) | Bearer token | `Bearer eyJ...` |
| `Content-Type` | Yes (for request body) | Media type of body | `application/json` |
| `Accept` | No | Desired response format | `application/json` |
| `X-Request-ID` | No | Client-generated request ID for tracing | `550e8400-e29b-41d4-a716-446655440000` |
| `X-API-Version` | No | API version override (if not in URL) | `2026-04-01` |

### 1.4 Common Response Headers

| Header | Description | Example |
|--------|-------------|---------|
| `X-Request-ID` | Echo of client request ID or server-generated | `550e8400-...` |
| `X-RateLimit-Limit` | Max requests allowed in window | `100` |
| `X-RateLimit-Remaining` | Requests remaining in current window | `87` |
| `X-RateLimit-Reset` | Unix timestamp when window resets | `1712505600` |
| `Content-Type` | Response media type | `application/json; charset=utf-8` |

### 1.5 Standard Error Format

All error responses follow this structure:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request body contains invalid fields.",
    "details": [
      {
        "field": "email",
        "issue": "Must be a valid email address.",
        "value": "not-an-email"
      }
    ],
    "request_id": "550e8400-e29b-41d4-a716-446655440000",
    "documentation_url": "https://docs.example.com/errors/VALIDATION_ERROR"
  }
}
```

### 1.6 Standard HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| `200 OK` | Request succeeded | GET, PUT, PATCH success |
| `201 Created` | Resource created | POST success |
| `204 No Content` | Success, no body | DELETE success |
| `400 Bad Request` | Invalid request | Malformed JSON, missing required fields |
| `401 Unauthorized` | Authentication failed | Missing or invalid token |
| `403 Forbidden` | Authorization failed | Valid token but insufficient permissions |
| `404 Not Found` | Resource not found | Invalid ID or deleted resource |
| `409 Conflict` | Resource conflict | Duplicate unique field (e.g., email) |
| `422 Unprocessable Entity` | Validation failed | Valid JSON but business rule violation |
| `429 Too Many Requests` | Rate limited | Exceeded rate limit |
| `500 Internal Server Error` | Server error | Unexpected failure (include request_id for support) |
| `503 Service Unavailable` | Temporarily unavailable | Maintenance or overload |

---

## 2. Resource Definitions

<!-- Define each API resource. Copy this section template for each resource. -->

### 2.1 Resource: [Users]

#### `POST /api/v1/users` — Create a User

<!-- Trace: User Story [US-XXX] -->

**Description:** Creates a new user account.

**Authentication:** Required (Admin role)

**Rate Limit:** [e.g., 10 requests/minute]

**Request Body:**

| Field | Type | Required | Description | Constraints |
|-------|------|----------|-------------|-------------|
| `email` | string | Yes | User's email address | Valid email, max 255 chars, unique |
| `name` | string | Yes | Full name | Min 1, max 100 chars |
| `role` | string | No | User role | One of: `admin`, `member`, `viewer`. Default: `member` |
| `avatar_url` | string | No | Profile picture URL | Valid URL or null |

**Request Example:**

```json
{
  "email": "jane@example.com",
  "name": "Jane Smith",
  "role": "member"
}
```

**Response — `201 Created`:**

```json
{
  "data": {
    "id": "usr_abc123",
    "email": "jane@example.com",
    "name": "Jane Smith",
    "role": "member",
    "avatar_url": null,
    "created_at": "2026-04-07T12:00:00Z",
    "updated_at": "2026-04-07T12:00:00Z"
  }
}
```

**Error Responses:**

| Status | Code | Scenario |
|--------|------|----------|
| `400` | `INVALID_REQUEST` | Malformed JSON |
| `401` | `UNAUTHORIZED` | Missing or invalid token |
| `403` | `FORBIDDEN` | Non-admin attempting to create user |
| `409` | `DUPLICATE_EMAIL` | Email already registered |
| `422` | `VALIDATION_ERROR` | Field validation failed |

**Example `curl`:**

```bash
curl -X POST https://api.example.com/v1/users \
  -H "Authorization: Bearer eyJ..." \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "name": "Jane Smith",
    "role": "member"
  }'
```

---

#### `GET /api/v1/users` — List Users

**Description:** Returns a paginated list of users.

**Authentication:** Required

**Rate Limit:** [e.g., 60 requests/minute]

**Query Parameters:**

| Parameter | Type | Required | Description | Default |
|-----------|------|----------|-------------|---------|
| `page` | integer | No | Page number (1-indexed) | `1` |
| `per_page` | integer | No | Items per page | `25` (max `100`) |
| `sort` | string | No | Sort field | `created_at` |
| `order` | string | No | Sort direction | `desc` (`asc` or `desc`) |
| `search` | string | No | Search by name or email | — |
| `role` | string | No | Filter by role | — |

**Response — `200 OK`:**

```json
{
  "data": [
    {
      "id": "usr_abc123",
      "email": "jane@example.com",
      "name": "Jane Smith",
      "role": "member",
      "avatar_url": null,
      "created_at": "2026-04-07T12:00:00Z",
      "updated_at": "2026-04-07T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total_items": 142,
    "total_pages": 6,
    "has_next": true,
    "has_prev": false
  }
}
```

**Example `curl`:**

```bash
curl -X GET "https://api.example.com/v1/users?page=1&per_page=25&role=member" \
  -H "Authorization: Bearer eyJ..."
```

---

#### `GET /api/v1/users/:id` — Get User by ID

**Description:** Returns a single user by their ID.

**Authentication:** Required

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | User ID (prefixed: `usr_`) |

**Response — `200 OK`:**

```json
{
  "data": {
    "id": "usr_abc123",
    "email": "jane@example.com",
    "name": "Jane Smith",
    "role": "member",
    "avatar_url": null,
    "created_at": "2026-04-07T12:00:00Z",
    "updated_at": "2026-04-07T12:00:00Z"
  }
}
```

**Error Responses:**

| Status | Code | Scenario |
|--------|------|----------|
| `404` | `NOT_FOUND` | User ID does not exist |

---

#### `PUT /api/v1/users/:id` — Update User

**Description:** Updates an existing user. All fields in the request body are applied (full replacement of mutable fields).

**Authentication:** Required (Admin or self)

**Request Body:**

| Field | Type | Required | Description | Constraints |
|-------|------|----------|-------------|-------------|
| `name` | string | Yes | Full name | Min 1, max 100 chars |
| `role` | string | Yes | User role | One of: `admin`, `member`, `viewer` |
| `avatar_url` | string | No | Profile picture URL | Valid URL or null |

**Response — `200 OK`:** Returns the updated user object.

---

#### `DELETE /api/v1/users/:id` — Delete User

**Description:** Soft-deletes a user account.

**Authentication:** Required (Admin only)

**Response — `204 No Content`:** Empty body on success.

**Error Responses:**

| Status | Code | Scenario |
|--------|------|----------|
| `403` | `FORBIDDEN` | Non-admin attempting deletion |
| `404` | `NOT_FOUND` | User ID does not exist |

---

### 2.2 Resource: [Projects]

<!-- Repeat the pattern above for each resource. Include all CRUD operations
     plus any custom actions. -->

#### `POST /api/v1/projects` — Create Project

**Description:** [Description]

**Authentication:** Required

**Request Body:**

| Field | Type | Required | Description | Constraints |
|-------|------|----------|-------------|-------------|
| `name` | string | Yes | [Description] | [Constraints] |
| `description` | string | No | [Description] | [Constraints] |

**Response — `201 Created`:**

```json
{
  "data": {
    "id": "prj_xyz789",
    "name": "[Project name]",
    "description": "[Description]",
    "owner_id": "usr_abc123",
    "created_at": "2026-04-07T12:00:00Z",
    "updated_at": "2026-04-07T12:00:00Z"
  }
}
```

<!-- Continue with GET (list), GET (by ID), PUT, DELETE, and any custom actions. -->

---

### 2.3 Resource: [Additional Resources]

<!-- Add sections for each resource in your system. Common resources include:
     - Organizations / Teams
     - Projects / Workspaces
     - Documents / Files
     - Comments / Notes
     - Notifications
     - Billing / Subscriptions
     - Invitations
     - Webhooks
-->

---

## 3. Pagination Strategy

### 3.1 Offset-Based Pagination (Default)

Used for most list endpoints. Suitable when users need to jump to specific pages.

**Request:**
```
GET /api/v1/resources?page=2&per_page=25
```

**Response shape:**
```json
{
  "data": [...],
  "pagination": {
    "page": 2,
    "per_page": 25,
    "total_items": 142,
    "total_pages": 6,
    "has_next": true,
    "has_prev": true
  }
}
```

### 3.2 Cursor-Based Pagination (For Large/Real-Time Datasets)

Used for feeds, activity logs, and datasets where offset pagination would be inefficient.

**Request:**
```
GET /api/v1/events?limit=25&cursor=eyJpZCI6MTAwfQ==
```

**Response shape:**
```json
{
  "data": [...],
  "pagination": {
    "limit": 25,
    "has_more": true,
    "next_cursor": "eyJpZCI6MTI1fQ==",
    "prev_cursor": "eyJpZCI6MTAwfQ=="
  }
}
```

### 3.3 Pagination Limits

| Parameter | Min | Default | Max |
|-----------|-----|---------|-----|
| `per_page` / `limit` | 1 | 25 | 100 |
| `page` | 1 | 1 | Computed from total |

---

## 4. Filtering & Sorting Conventions

### 4.1 Filtering

| Pattern | Example | Description |
|---------|---------|-------------|
| Exact match | `?status=active` | Returns resources where status equals "active" |
| Multiple values | `?status=active,archived` | OR filter — status is active OR archived |
| Range (dates) | `?created_after=2026-01-01&created_before=2026-04-01` | Date range filter |
| Range (numeric) | `?amount_min=100&amount_max=500` | Numeric range filter |
| Search | `?search=keyword` | Full-text search across relevant fields |
| Nested filter | `?owner.role=admin` | Filter by related entity field |

### 4.2 Sorting

| Pattern | Example | Description |
|---------|---------|-------------|
| Single field | `?sort=created_at&order=desc` | Sort by one field |
| Multiple fields | `?sort=status,-created_at` | Sort by status asc, then created_at desc (prefix `-` for desc) |

**Sortable fields per resource should be documented in each endpoint section.**

---

## 5. Webhook Specifications

<!-- If the API supports webhooks, document them here. Remove this section if not applicable. -->

### 5.1 Webhook Overview

| Attribute | Details |
|-----------|---------|
| **Registration** | [e.g., Via API: POST /api/v1/webhooks or via UI settings] |
| **Payload format** | JSON |
| **Delivery** | HTTPS POST to registered URL |
| **Retry policy** | [e.g., 3 retries with exponential backoff: 1min, 5min, 30min] |
| **Timeout** | [e.g., 10 seconds — webhook endpoint must respond within] |
| **Signature** | [e.g., HMAC-SHA256 in `X-Webhook-Signature` header] |

### 5.2 Webhook Events

| Event | Trigger | Payload |
|-------|---------|---------|
| `user.created` | New user registered | `{ "event": "user.created", "data": { ...user }, "timestamp": "..." }` |
| `user.updated` | User profile updated | `{ "event": "user.updated", "data": { ...user }, "timestamp": "..." }` |
| `project.created` | New project created | `{ "event": "project.created", "data": { ...project }, "timestamp": "..." }` |
| `project.deleted` | Project deleted | `{ "event": "project.deleted", "data": { "id": "prj_..." }, "timestamp": "..." }` |

### 5.3 Webhook Payload Structure

```json
{
  "id": "evt_abc123",
  "event": "user.created",
  "api_version": "v1",
  "created_at": "2026-04-07T12:00:00Z",
  "data": {
    "id": "usr_abc123",
    "email": "jane@example.com",
    "name": "Jane Smith"
  }
}
```

### 5.4 Verifying Webhook Signatures

```python
# Example (Python)
import hmac
import hashlib

def verify_signature(payload_body, signature_header, secret):
    expected = hmac.new(
        secret.encode('utf-8'),
        payload_body,
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(f"sha256={expected}", signature_header)
```

---

## 6. API Versioning Policy

### 6.1 Versioning Strategy

| Attribute | Policy |
|-----------|--------|
| **Method** | [URL path versioning — `/v1/`, `/v2/`] |
| **Breaking changes** | [Require new major version — v1 → v2] |
| **Non-breaking changes** | [Added to current version — new fields, new endpoints] |
| **Deprecation notice** | [Minimum 6 months before removal, communicated via `Sunset` header + docs] |
| **Supported versions** | [Latest + one previous version] |

### 6.2 What Constitutes a Breaking Change

| Change Type | Breaking? | Example |
|-------------|-----------|---------|
| Add new endpoint | No | `GET /api/v1/reports` (new) |
| Add optional field to request | No | New optional `nickname` field on user create |
| Add field to response | No | New `last_login_at` field in user response |
| Remove endpoint | Yes | Remove `DELETE /api/v1/users/:id` |
| Remove field from response | Yes | Remove `avatar_url` from user response |
| Change field type | Yes | Change `id` from integer to string |
| Rename field | Yes | Rename `name` to `full_name` |
| Change validation rules (stricter) | Yes | Reduce max `name` length from 200 to 100 |
| Change error code format | Yes | Change `VALIDATION_ERROR` to `validation_error` |

### 6.3 Deprecation Headers

```
Deprecation: true
Sunset: Sat, 01 Nov 2026 00:00:00 GMT
Link: <https://docs.example.com/migration/v1-to-v2>; rel="successor-version"
```

---

## 7. SDK & Client Generation Notes

### 7.1 OpenAPI Specification

- **File**: [e.g., `/docs/openapi.yaml`]
- **Generation**: [e.g., Auto-generated from code annotations using `tsoa` / `swagger-jsdoc`]
- **Validation**: [e.g., Validated in CI with `swagger-cli validate`]

### 7.2 SDK Availability

| Language | Package Name | Repository | Auto-Generated |
|----------|-------------|------------|----------------|
| TypeScript | [e.g., `@example/sdk`] | [Link] | [Yes — from OpenAPI via openapi-typescript] |
| Python | [e.g., `example-sdk`] | [Link] | [Yes — from OpenAPI via openapi-generator] |
| Go | [e.g., `example-go`] | [Link] | [Yes — from OpenAPI via oapi-codegen] |

### 7.3 Client Generation Commands

```bash
# TypeScript client
npx openapi-typescript docs/openapi.yaml -o src/api-types.ts

# Python client
openapi-generator generate -i docs/openapi.yaml -g python -o sdk/python

# Go client
oapi-codegen -package api docs/openapi.yaml > api/client.gen.go
```

---

## Appendices

### A. Full OpenAPI Specification

<!-- Link to or embed the OpenAPI/Swagger YAML/JSON file. -->

- [Link to OpenAPI spec file]
- [Link to Swagger UI / Redoc hosted documentation]

### B. Postman Collection

<!-- Link to an importable Postman or Insomnia collection. -->

- [Link to Postman collection JSON]
- [Link to Postman environment file]

### C. Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | [Date] | Initial API release |

---

<!-- 
  QUALITY CHECKLIST:
  - [ ] All resources from the data model have corresponding API endpoints
  - [ ] Every endpoint has method, path, description, auth, and examples
  - [ ] Request/response schemas are complete with types and constraints
  - [ ] Error responses documented for each endpoint
  - [ ] Pagination strategy defined and consistent
  - [ ] Filtering and sorting conventions documented
  - [ ] Rate limiting documented per tier
  - [ ] Authentication flow fully described
  - [ ] Webhook events listed with payload schemas (if applicable)
  - [ ] Versioning policy and breaking change definition documented
  - [ ] curl examples provided for key endpoints
  - [ ] OpenAPI spec generated and validated
-->
