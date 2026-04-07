# Contributing to SpecForge

Thank you for your interest in contributing to SpecForge. This project aims to be the definitive framework for crafting production-ready software specifications, and contributions from the community are essential.

---

## How You Can Contribute

### Content

- **Templates** -- new document templates for additional specification needs (placed in `templates/`).
- **Phase Guides** -- improvements to phase-by-phase workflow guides (placed in `framework/phases/`).
- **Agent Definitions** -- new or improved agent personas (placed in `framework/agents/`).
- **Skills** -- new slash command skills (placed in `skills/`).
- **Checklists** -- quality gate improvements or new assessment criteria (placed in `framework/checklists/`).

### Improvements

- Fixing errors, typos, or unclear guidance in existing content.
- Updating outdated information as practices evolve.
- Improving template structure or organization.
- Adding examples of completed specifications.

---

## Contribution Process

### 1. Fork the Repository

Fork the repository to your own GitHub account.

### 2. Create a Branch

```bash
git checkout -b add-security-audit-template
```

Use a descriptive prefix:

| Prefix | Use for |
|---|---|
| `add-` | New content (templates, skills, guides) |
| `fix-` | Corrections to existing content |
| `update-` | Updates to existing content |
| `improve-` | Structural or organizational improvements |

### 3. Make Your Changes

Follow the Content Quality Standards and Style Guide below.

### 4. Test Locally

```bash
npm test        # Run all tests
npm run lint    # Lint all SKILL.md files
```

Verify that:
- All Markdown renders correctly
- Internal links resolve
- Template placeholders are consistent
- Quality gate checklists align with phase guides

### 5. Commit and Push

```bash
git commit -m "Add security audit template for Phase 5"
git push origin add-security-audit-template
```

### 6. Open a Pull Request

Fill out the pull request template completely. A maintainer will review within one week.

---

## Content Quality Standards

### Accuracy
- All guidance must be technically accurate and verifiable.
- Template examples must be syntactically valid.

### Completeness
- Templates must be self-contained with inline guidance comments.
- Phase guides must cover the full workflow from start to quality gate.

### Clarity
- Write for a professional software engineering audience.
- Define specialized terms on first use.

### Actionability
- Every template must be usable with minimal modification.
- Every checklist must be directly applicable to a real project.

---

## Style Guide

### Formatting
- Use GitHub-flavored Markdown.
- Use ATX-style headings (`#`, `##`, `###`). Do not skip levels.
- Use fenced code blocks with language identifiers.
- Use tables for structured comparisons.

### Language
- American English, active voice, present tense.
- Use second person ("you") in guides.
- Avoid vague qualifiers ("simply," "just," "easily").
- Do not use emojis.

### Template Standards
- YAML frontmatter required on all templates.
- HTML comments (`<!-- -->`) for guidance that should be removed in final output.
- Placeholder text in brackets: `[Company Name]`, `[Describe...]`.
- Validation checklist at the end of every template.

### Naming Conventions
- File names: lowercase with hyphens (`market-analysis.md`).
- Directory names: lowercase with hyphens (`01-discovery-vision/`).
- Requirement IDs: `REQ-XXX`, `US-XXX`, `UC-XXX`, `EPIC-XXX`.

---

## Reporting Issues

Use the appropriate issue template:
- **Bug Report** -- broken templates, incorrect guidance, formatting errors.
- **Feature Request** -- new templates, phases, agents, or skills.
- **Content Suggestion** -- improvements to existing content.

---

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).
