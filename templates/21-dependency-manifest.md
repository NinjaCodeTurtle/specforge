---
document_type: dependency-manifest
phase: "07-implementation"
version: "1.0"
status: draft
created_date: "[YYYY-MM-DD]"
last_updated: "[YYYY-MM-DD]"
author: "[Author Name]"
reviewers: []
approval_status: pending
related_documents:
  - "Tech Decisions (Template 11)"
  - "Architecture Document (Phase 5)"
  - "Project Scaffold Report (Template 16)"
  - "CI/CD Pipeline Specification (Template 22)"
---

# Dependency Manifest: [Product Name]

<!-- INSTRUCTIONS: This document justifies every dependency in the project. No dependency
     should be added without a clear purpose traceable to an architectural decision (ADR/TDR)
     or a specific requirement. This manifest is the source of truth for dependency governance
     and is reviewed as part of the release verification process (Template 19).
     Remove all HTML comments before finalizing. -->

## 1. Runtime Dependencies

<!-- List every dependency that ships with the production application. Each must trace
     to an architectural decision or requirement. Bundle size matters for frontend
     dependencies; mark as N/A for server-side-only packages. -->

| Name                 | Version  | Purpose                              | License    | Bundle Size | ADR/TDR Ref | Security Audit |
|----------------------|----------|--------------------------------------|------------|-------------|-------------|----------------|
| [e.g., express]      | [^4.18]  | [HTTP server framework]              | MIT        | [N/A]       | TDR-005     | Clear          |
| [e.g., pg]           | [^8.11]  | [PostgreSQL client driver]           | MIT        | [N/A]       | TDR-003     | Clear          |
| [e.g., zod]          | [^3.22]  | [Runtime schema validation]          | MIT        | [13.4 kB]   | ADR-007     | Clear          |
| [e.g., jsonwebtoken] | [^9.0]   | [JWT authentication tokens]          | MIT        | [N/A]       | ADR-004     | Clear          |
| [e.g., winston]      | [^3.11]  | [Structured logging]                 | MIT        | [N/A]       | ADR-009     | Clear          |
| [e.g., helmet]       | [^7.1]   | [HTTP security headers]              | MIT        | [N/A]       | ADR-006     | Clear          |
| [e.g., cors]         | [^2.8]   | [Cross-origin resource sharing]      | MIT        | [N/A]       | ADR-006     | Clear          |
| [e.g., react]        | [^18.2]  | [UI component framework]            | MIT        | [6.4 kB]    | TDR-004     | Clear          |
| [e.g., react-dom]    | [^18.2]  | [React DOM rendering]               | MIT        | [130 kB]    | TDR-004     | Clear          |

**Total Runtime Dependencies:** [Count]
**Total Bundle Size (frontend):** [Size]

---

## 2. Dev Dependencies

<!-- List every dependency used during development, testing, and build processes. These
     do not ship in production but still require license and security review. -->

| Name                 | Version  | Purpose                              | License    | Bundle Size | ADR/TDR Ref | Security Audit |
|----------------------|----------|--------------------------------------|------------|-------------|-------------|----------------|
| [e.g., typescript]   | [^5.3]   | [Type checking and compilation]      | Apache-2.0 | [N/A]       | TDR-002     | Clear          |
| [e.g., vitest]       | [^1.0]   | [Unit and integration test runner]   | MIT        | [N/A]       | TDR-008     | Clear          |
| [e.g., eslint]       | [^8.50]  | [Code linting]                       | MIT        | [N/A]       | ADR-010     | Clear          |
| [e.g., prettier]     | [^3.1]   | [Code formatting]                    | MIT        | [N/A]       | ADR-010     | Clear          |
| [e.g., playwright]   | [^1.40]  | [E2E browser testing]                | Apache-2.0 | [N/A]       | TDR-009     | Clear          |
| [e.g., supertest]    | [^6.3]   | [HTTP integration testing]           | MIT        | [N/A]       | TDR-008     | Clear          |
| [e.g., @types/node]  | [^20.10] | [Node.js type definitions]           | MIT        | [N/A]       | TDR-002     | Clear          |
| [e.g., husky]        | [^8.0]   | [Git hooks management]               | MIT        | [N/A]       | ADR-010     | Clear          |

**Total Dev Dependencies:** [Count]

---

## 3. Peer Dependencies & Version Constraints

<!-- Document any peer dependency requirements and version constraints that affect
     compatibility between packages. -->

| Package              | Peer Dependency          | Required Version | Installed Version | Compatible |
|----------------------|--------------------------|------------------|-------------------|------------|
| [e.g., @testing-library/react] | react            | [>=16.0]         | [18.2]            | Yes        |
| [e.g., eslint-plugin-react]    | eslint           | [>=7.0]          | [8.50]            | Yes        |
| [e.g., ts-jest]                | typescript       | [>=4.3]          | [5.3]             | Yes        |

**Version Conflicts:** [None / List conflicts and resolutions]

---

## 4. Security Audit Summary

<!-- Record the results of the most recent dependency security audit. This should be
     run as part of the CI/CD pipeline (Template 22) and before every release (Template 19). -->

| Attribute                | Value                                             |
|--------------------------|---------------------------------------------------|
| **Last Audit Date**      | [YYYY-MM-DD]                                      |
| **Audit Tool**           | [e.g., npm audit / Snyk / OWASP Dependency-Check] |
| **Critical Vulnerabilities** | [Count]                                       |
| **High Vulnerabilities**     | [Count]                                       |
| **Medium Vulnerabilities**   | [Count]                                       |
| **Low Vulnerabilities**      | [Count]                                       |
| **Total Vulnerabilities**    | [Count]                                       |

### Vulnerability Details (if any)

| Package        | Severity | CVE / Advisory     | Description                     | Fix Available | Remediation         |
|----------------|----------|--------------------|---------------------------------|---------------|---------------------|
| [package name] | [Sev]   | [CVE-YYYY-NNNNN]  | [Brief description]             | Yes / No      | [Upgrade to vX.Y.Z] |
| [package name] | [Sev]   | [CVE-YYYY-NNNNN]  | [Brief description]             | Yes / No      | [Replace with alt]   |

---

## 5. Update Policy

<!-- Define the strategy for keeping dependencies up to date. -->

| Policy Aspect          | Approach                                           | Rationale                                       |
|------------------------|----------------------------------------------------|-------------------------------------------------|
| **Version Pinning**    | [e.g., Caret ranges (^) for all packages]          | [e.g., Allow minor/patch updates for bug fixes] |
| **Lockfile**           | [e.g., Committed, CI uses frozen install]          | [e.g., Reproducible builds]                     |
| **Update Frequency**   | [e.g., Monthly dependency update review]           | [e.g., Balance security with stability]         |
| **Major Updates**      | [e.g., Evaluated individually with migration plan] | [e.g., Breaking changes require testing]        |
| **Security Patches**   | [e.g., Applied within 48 hours of disclosure]      | [e.g., Minimize exposure window]                |
| **Automation**         | [e.g., Dependabot / Renovate for PR creation]      | [e.g., Automate detection, manual merge]        |

---

## 6. Dependency Review Checklist

<!-- Verify before each release that all dependencies meet governance standards. -->

- [ ] Every dependency traces to an architectural decision (ADR/TDR) or requirement
- [ ] No dependencies with known critical vulnerabilities
- [ ] No dependencies with known high vulnerabilities (or accepted with documented risk)
- [ ] No abandoned dependencies (last publish > 2 years)
- [ ] License compatibility verified (no GPL in proprietary projects, etc.)
- [ ] Bundle size impact assessed for all frontend dependencies
- [ ] Peer dependency version constraints satisfied without conflicts
- [ ] Security audit has been run within the last 30 days
- [ ] Update policy is being followed (no dependencies more than 2 major versions behind)
- [ ] No duplicate dependencies serving the same purpose
