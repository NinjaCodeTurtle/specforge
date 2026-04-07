---
document_type: Use Cases
phase: 3
version: "0.1.0"
status: draft
last_updated: YYYY-MM-DD
owner: "[Product Owner / Requirements Analyst]"
project: "[Project Name]"
related_prd: "[Link to PRD document]"
---

# Use Cases Specification

<!-- 
  SpecForge Template — Phase 3: Requirements Engineering
  
  Instructions:
  - Each use case describes a complete interaction between an actor and the system.
  - Use cases complement user stories by providing detailed step-by-step flows.
  - Replace all [bracketed placeholders] with project-specific content.
  - Remove HTML comments before finalizing.
-->

---

## 1. Use Case Diagram

<!-- 
  Include a system boundary diagram showing actors and their relationships to use cases.
  This provides a high-level visual overview before diving into detailed specifications.
  
  Use ASCII art, Mermaid, PlantUML, or reference an external diagram tool.
-->

```
┌─────────────────────────────────────────────────────────────┐
│                     [System Name]                           │
│                                                             │
│   ┌──────────────┐    ┌──────────────┐                      │
│   │  UC-001:     │    │  UC-002:     │                      │
│   │  [Use Case]  │    │  [Use Case]  │                      │
│   └──────┬───────┘    └──────┬───────┘                      │
│          │                   │                              │
│   ┌──────────────┐    ┌──────────────┐                      │
│   │  UC-003:     │    │  UC-004:     │                      │
│   │  [Use Case]  │    │  [Use Case]  │                      │
│   └──────────────┘    └──────────────┘                      │
│                                                             │
└─────────┬───────────────────┬───────────────────┬───────────┘
          │                   │                   │
     ┌────┴─────┐       ┌────┴─────┐       ┌────┴─────┐
     │  Actor:  │       │  Actor:  │       │  Actor:  │
     │ [End User]│      │ [Admin]  │       │ [System] │
     └──────────┘       └──────────┘       └──────────┘
```

<!-- 
  Diagram conventions:
  - System boundary = rectangle containing all use cases
  - Actors = stick figures or labeled boxes outside the boundary
  - Use cases = ovals or rectangles inside the boundary
  - Lines connect actors to the use cases they participate in
  - <<include>> and <<extend>> relationships shown with dashed arrows
-->

---

## 2. Actors

| Actor ID | Name            | Type     | Description                                        |
|----------|-----------------|----------|----------------------------------------------------|
| A1       | [End User]      | Primary  | [Person who directly uses the system for core tasks] |
| A2       | [Administrator] | Primary  | [Person who configures and manages the system]      |
| A3       | [External System]| Secondary | [Automated system that interacts via API]           |
| A4       | [Timer/Scheduler]| Secondary | [System-initiated time-based triggers]              |

---

## 3. Use Cases

### UC-001: [Use Case Name — e.g., Register New Account]

| Field                | Value                                                       |
|----------------------|-------------------------------------------------------------|
| **Use Case ID**      | UC-001                                                      |
| **Name**             | [Register New Account]                                      |
| **Actor(s)**         | [End User (A1)]                                             |
| **Priority**         | [Must / Should / Could]                                     |
| **Related Reqs**     | [REQ-001, REQ-003]                                          |
| **Related Stories**  | [US-001, US-002]                                            |
| **UI Mockup**        | [Link to wireframe or mockup, or "See UX Spec Section X"]  |

**Brief Description:**  
[One to two sentences summarizing the use case. A new visitor creates an account by providing their email and password, then verifies their email address to activate the account.]

**Preconditions:**
1. [The user has navigated to the application in a supported browser.]
2. [The user does not already have an active account with the same email.]

**Postconditions (Success):**
1. [A new user account exists in the system with status "pending verification."]
2. [A verification email has been sent to the provided address.]

**Postconditions (Failure):**
1. [No new account is created.]
2. [The user is informed of the reason for failure.]
3. [No verification email is sent.]

**Main Success Scenario:**

| Step | Actor       | System                                                  |
|------|-------------|---------------------------------------------------------|
| 1    | Navigates to the registration page. | Displays registration form with email, password, confirm password, and consent checkbox. |
| 2    | Enters valid email, password, confirms password, and checks consent. | Validates input in real time (email format, password strength, match). |
| 3    | Clicks "Create Account." | — |
| 4    | —           | Checks that email is not already registered. |
| 5    | —           | Creates account with status "pending verification." |
| 6    | —           | Generates a single-use verification token (expires in 24 hours). |
| 7    | —           | Sends verification email with activation link. |
| 8    | —           | Displays "Check Your Email" confirmation page. |

**Alternative Flows:**

| ID     | Branch Point | Condition                          | Steps |
|--------|--------------|------------------------------------|-------|
| AF-1   | Step 4       | Email is already registered.       | 4a. System displays: "An account with this email already exists." 4b. System offers "Sign In" and "Forgot Password" links. 4c. Flow ends. |
| AF-2   | Step 2       | User chooses social login (OAuth). | 2a. User clicks "Sign in with Google/GitHub." 2b. System redirects to OAuth provider. 2c. Provider authenticates and returns token. 2d. System creates account linked to OAuth identity. 2e. Continue from Step 8 (no email verification needed). |

**Exception Flows:**

| ID     | Trigger          | Condition                              | Steps |
|--------|------------------|----------------------------------------|-------|
| EF-1   | Step 7           | Email service is unavailable.          | 7a. System queues verification email for retry (max 3 attempts over 15 minutes). 7b. System displays confirmation page with note: "Verification email may take a few minutes." |
| EF-2   | Step 5           | Database write fails.                  | 5a. System logs error with full context. 5b. System displays generic error: "Something went wrong. Please try again." 5c. Flow ends; no account is created. |
| EF-3   | Step 2           | User submits form with empty fields.   | 2a. System highlights missing fields with validation messages. 2b. "Create Account" button remains disabled. |

**Business Rules:**

| Rule ID | Description                                                       |
|---------|-------------------------------------------------------------------|
| BR-001  | Passwords must be at least 8 characters with uppercase, number, and special character. |
| BR-002  | Email addresses are case-insensitive (stored as lowercase).       |
| BR-003  | Verification tokens are single-use, cryptographically random (min 256 bits), expire in 24 hours. |
| BR-004  | GDPR consent must be explicitly granted (pre-checked checkboxes are not permitted). |

---

### UC-002: [Use Case Name — e.g., Authenticate User]

| Field                | Value                                                       |
|----------------------|-------------------------------------------------------------|
| **Use Case ID**      | UC-002                                                      |
| **Name**             | [Authenticate User]                                         |
| **Actor(s)**         | [End User (A1), Administrator (A2)]                         |
| **Priority**         | [Must / Should / Could]                                     |
| **Related Reqs**     | [REQ-002, REQ-004]                                          |
| **Related Stories**  | [US-003, US-004]                                            |
| **UI Mockup**        | [Link or reference]                                         |

**Brief Description:**  
[Summary of the use case.]

**Preconditions:**
1. [Precondition 1]
2. [Precondition 2]

**Postconditions (Success):**
1. [Postcondition 1]

**Postconditions (Failure):**
1. [Postcondition 1]

**Main Success Scenario:**

| Step | Actor       | System                                                  |
|------|-------------|---------------------------------------------------------|
| 1    | [Actor action] | [System response]                                    |
| 2    | [Actor action] | [System response]                                    |
| 3    | —           | [System action]                                         |

**Alternative Flows:**

| ID     | Branch Point | Condition                          | Steps |
|--------|--------------|------------------------------------|-------|
| AF-1   | Step [X]     | [Condition]                        | [Steps] |

**Exception Flows:**

| ID     | Trigger      | Condition                              | Steps |
|--------|--------------|----------------------------------------|-------|
| EF-1   | Step [X]     | [Error condition]                      | [Recovery steps] |

**Business Rules:**

| Rule ID | Description                                                       |
|---------|-------------------------------------------------------------------|
| BR-XXX  | [Business rule]                                                   |

---

### UC-003: [Use Case Name]

<!-- 
  Continue adding use cases following the same structure.
  
  Numbering guidance:
  - Authentication use cases: UC-001 through UC-009
  - Core workflow use cases: UC-010 through UC-029
  - Administration use cases: UC-030 through UC-039
  - Integration use cases: UC-040 through UC-049
  Leave gaps to allow inserting use cases without renumbering.
-->

| Field                | Value          |
|----------------------|----------------|
| **Use Case ID**      | UC-003         |
| **Name**             | [Name]         |
| **Actor(s)**         | [Actor(s)]     |
| **Priority**         | [Priority]     |
| **Related Reqs**     | [REQ-XXX]      |
| **Related Stories**  | [US-XXX]       |
| **UI Mockup**        | [Reference]    |

**Brief Description:**  
[Summary]

**Preconditions:**
1. [Precondition]

**Postconditions (Success):**
1. [Postcondition]

**Postconditions (Failure):**
1. [Postcondition]

**Main Success Scenario:**

| Step | Actor       | System         |
|------|-------------|----------------|
| 1    | [Action]    | [Response]     |

**Alternative Flows:**

| ID   | Branch Point | Condition | Steps |
|------|--------------|-----------|-------|
| AF-1 | Step [X]     | [Cond.]   | [Steps] |

**Exception Flows:**

| ID   | Trigger  | Condition | Steps |
|------|----------|-----------|-------|
| EF-1 | Step [X] | [Cond.]   | [Steps] |

**Business Rules:**

| Rule ID | Description |
|---------|-------------|
| BR-XXX  | [Rule]      |

---

## 4. System Boundary and Scope

<!-- 
  Define what is inside and outside the system boundary.
  This prevents scope creep and clarifies integration points.
-->

### Inside System Boundary (system is responsible for):
- [User account management and authentication]
- [Core business logic and data processing]
- [Data storage and retrieval]
- [Notification delivery orchestration]

### Outside System Boundary (handled by external systems):
- [Payment processing — delegated to [Payment Gateway]]
- [Email delivery — delegated to [Email Service Provider]]
- [Identity verification — delegated to [Identity Provider]]
- [Infrastructure monitoring — handled by [Cloud Provider tooling]]

---

## 5. Use Case Relationships

<!-- Document <<include>> and <<extend>> relationships between use cases. -->

| Relationship | Base Use Case | Related Use Case | Description |
|-------------|---------------|------------------|-------------|
| <<include>> | UC-002 (Authenticate User) | UC-005 (Validate Credentials) | Authentication always includes credential validation. |
| <<include>> | UC-010 (Place Order) | UC-002 (Authenticate User) | Placing an order requires authentication. |
| <<extend>>  | UC-002 (Authenticate User) | UC-006 (Perform MFA) | MFA extends authentication when enabled for the account. |
| <<extend>>  | UC-001 (Register) | UC-007 (Social OAuth) | Social login optionally extends registration. |

---

## 6. Supplementary Specifications

<!-- Cross-cutting concerns that apply to multiple use cases. -->

### 6.1 Audit Logging
All use cases that modify data shall log: actor identity, timestamp, action performed, affected entity, and previous/new values.

### 6.2 Error Handling
All exception flows shall:
- Log the error with correlation ID, stack trace, and request context.
- Display a user-friendly message (never expose internal details).
- Return appropriate HTTP status codes for API interactions.

### 6.3 Session Management
- Session timeout: [30 minutes] of inactivity.
- Concurrent session policy: [Allow up to X sessions / Single session only].
- Session invalidation on password change: [Yes].

---

## 7. Validation Checklist

- [ ] Every use case has a unique ID and traces to at least one requirement (REQ-XXX).
- [ ] Every use case identifies all participating actors.
- [ ] Preconditions and postconditions are specified for both success and failure.
- [ ] Main success scenario steps are numbered and alternate between actor and system.
- [ ] At least one alternative flow is documented for each use case with decision points.
- [ ] Exception flows cover error conditions (network failure, invalid data, service unavailability).
- [ ] Business rules are documented and referenced.
- [ ] Use case relationships (include/extend) are mapped.
- [ ] System boundary is clearly defined.
- [ ] UI mockup references are provided where applicable.
- [ ] No use case duplicates another (check for overlapping scope).
