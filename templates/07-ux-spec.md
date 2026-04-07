---
title: "UX & Design Specification"
version: "1.0"
phase: 4
template_id: "SF-T07"
owner: "UX Strategist (Advocate)"
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
  - "04-user-stories.md"
  - "05-use-cases.md"
  - "06-nfr.md"
traceability:
  requirements_doc: "[link to PRD]"
  market_analysis: "[link to market report]"
---

# UX & Design Specification

<!-- 
  PURPOSE: This document defines the complete user experience design for the system.
  It translates requirements into concrete interaction patterns, layouts, and design
  decisions that guide visual design and front-end implementation.
  
  AUDIENCE: Designers, front-end developers, product managers, QA testers.
  
  INSTRUCTIONS: Fill in each section. Replace placeholder text in [brackets].
  Remove HTML comments before finalizing.
-->

---

## 1. Design Principles & Philosophy

<!-- Define 4-6 guiding principles that inform every design decision. These should
     be specific to this project, not generic platitudes. Each principle should help
     resolve design trade-offs. -->

| # | Principle | Description | Trade-off Guidance |
|---|-----------|-------------|--------------------|
| 1 | [e.g., Clarity over cleverness] | [What this means in practice] | [When faced with X vs Y, choose...] |
| 2 | [e.g., Progressive disclosure] | [What this means in practice] | [When faced with X vs Y, choose...] |
| 3 | [e.g., Speed of task completion] | [What this means in practice] | [When faced with X vs Y, choose...] |
| 4 | [e.g., Accessible by default] | [What this means in practice] | [When faced with X vs Y, choose...] |
| 5 | [e.g., Data-informed confidence] | [What this means in practice] | [When faced with X vs Y, choose...] |

**Design Philosophy Statement:**

> [1-2 sentence summary of the overall design philosophy. Example: "We design for
> the overwhelmed professional who needs to accomplish tasks quickly with minimal
> cognitive load. Every interaction should feel like a shortcut."]

---

## 2. User Personas

<!-- Define 3-5 personas derived from market research (Phase 2) and requirements (Phase 3).
     Each persona should represent a distinct user segment with different goals and behaviors.
     Personas drive design decisions — reference them in later sections. -->

### Persona 1: [Name — "The [Archetype]"]

| Attribute | Details |
|-----------|---------|
| **Photo placeholder** | [Description: age, appearance cues for empathy] |
| **Role / Title** | [e.g., Marketing Manager at a mid-size SaaS company] |
| **Age** | [e.g., 32] |
| **Location** | [e.g., Urban, US East Coast] |
| **Tech Proficiency** | [Novice / Intermediate / Advanced / Expert] |
| **Devices** | [e.g., MacBook Pro (primary), iPhone 14 (secondary)] |
| **Usage Context** | [e.g., At desk during work hours, occasionally on mobile during commute] |

**Goals:**
1. [Primary goal — what they are trying to accomplish]
2. [Secondary goal]
3. [Tertiary goal]

**Frustrations & Pain Points:**
1. [Current pain point with existing solutions]
2. [Workflow friction they experience]
3. [Unmet need]

**Key Scenarios:**
- **Scenario A**: [Brief narrative of a typical usage scenario]
- **Scenario B**: [Brief narrative of an edge-case scenario]

**Quote:** _"[A fictional but representative quote that captures their mindset]"_

---

### Persona 2: [Name — "The [Archetype]"]

| Attribute | Details |
|-----------|---------|
| **Role / Title** | [Role] |
| **Age** | [Age] |
| **Location** | [Location] |
| **Tech Proficiency** | [Level] |
| **Devices** | [Devices] |
| **Usage Context** | [Context] |

**Goals:**
1. [Primary goal]
2. [Secondary goal]
3. [Tertiary goal]

**Frustrations & Pain Points:**
1. [Pain point]
2. [Pain point]
3. [Pain point]

**Key Scenarios:**
- **Scenario A**: [Scenario]
- **Scenario B**: [Scenario]

**Quote:** _"[Quote]"_

---

### Persona 3: [Name — "The [Archetype]"]

| Attribute | Details |
|-----------|---------|
| **Role / Title** | [Role] |
| **Age** | [Age] |
| **Location** | [Location] |
| **Tech Proficiency** | [Level] |
| **Devices** | [Devices] |
| **Usage Context** | [Context] |

**Goals:**
1. [Primary goal]
2. [Secondary goal]
3. [Tertiary goal]

**Frustrations & Pain Points:**
1. [Pain point]
2. [Pain point]
3. [Pain point]

**Key Scenarios:**
- **Scenario A**: [Scenario]
- **Scenario B**: [Scenario]

**Quote:** _"[Quote]"_

---

<!-- Add Personas 4 and 5 as needed using the same structure above. -->

### Persona Priority Matrix

| Persona | Priority | Frequency of Use | Revenue Impact | Design Weight |
|---------|----------|-------------------|----------------|---------------|
| [Persona 1] | Primary | [Daily/Weekly/Monthly] | [High/Med/Low] | [60%] |
| [Persona 2] | Secondary | [Daily/Weekly/Monthly] | [High/Med/Low] | [25%] |
| [Persona 3] | Tertiary | [Daily/Weekly/Monthly] | [High/Med/Low] | [15%] |

---

## 3. Information Architecture

<!-- Define the structural organization of content and functionality.
     This is the blueprint for navigation and content hierarchy. -->

### 3.1 Site Map / App Structure

```
[Application Name]
├── Authentication
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   └── Email Verification
├── Dashboard (Home)
│   ├── Summary Widgets
│   ├── Recent Activity
│   └── Quick Actions
├── [Primary Feature Area 1]
│   ├── [Sub-feature 1a]
│   ├── [Sub-feature 1b]
│   └── [Sub-feature 1c]
├── [Primary Feature Area 2]
│   ├── [Sub-feature 2a]
│   └── [Sub-feature 2b]
├── [Primary Feature Area 3]
│   └── [Sub-features...]
├── Settings
│   ├── Profile
│   ├── Account
│   ├── Notifications
│   ├── Integrations
│   └── Billing
└── Help / Support
    ├── Documentation
    ├── FAQ
    └── Contact Support
```

### 3.2 Navigation Model

| Navigation Type | Location | Behavior | Contents |
|-----------------|----------|----------|----------|
| Primary Nav | [e.g., Left sidebar] | [e.g., Persistent, collapsible] | [Top-level sections] |
| Secondary Nav | [e.g., Top horizontal tabs] | [e.g., Contextual to primary selection] | [Sub-sections] |
| Utility Nav | [e.g., Top-right header] | [e.g., Always visible] | [Profile, settings, notifications] |
| Breadcrumbs | [e.g., Below header] | [e.g., Shown at depth > 1] | [Hierarchical path] |
| Mobile Nav | [e.g., Bottom tab bar + hamburger] | [e.g., 5 tabs max, hamburger for rest] | [Core sections] |

### 3.3 Content Hierarchy

<!-- Define how content is prioritized on key screens. -->

| Screen | Primary Content | Secondary Content | Tertiary Content |
|--------|----------------|-------------------|------------------|
| Dashboard | [e.g., Key metrics] | [e.g., Recent activity] | [e.g., Tips/onboarding] |
| [Feature 1] | [Primary] | [Secondary] | [Tertiary] |
| [Feature 2] | [Primary] | [Secondary] | [Tertiary] |

---

## 4. User Flows

<!-- Document step-by-step flows for each major task. Include decision points,
     error states, and alternative paths. Reference the use cases from Phase 3. -->

### 4.1 Flow: [Primary Task Name]

<!-- Trace: Use Case [UC-XXX] -->

**Trigger:** [What initiates this flow — e.g., User clicks "Create New Project"]
**Preconditions:** [What must be true — e.g., User is authenticated, has permission]
**Success Outcome:** [What happens when the flow completes successfully]

```
[Start]
  │
  ▼
[Step 1: Screen / Action]
  │
  ├── [Decision Point?] ──Yes──▶ [Step 2a: Alternative path]
  │         │                          │
  │        No                          ▼
  │         │                    [Step 3a: ...]
  ▼         ▼
[Step 2: Screen / Action]
  │
  ├── [Error State?] ──Yes──▶ [Error Screen / Message]
  │         │                       │
  │        No                  [Recovery Action]
  │         │                       │
  ▼         ▼                       ▼
[Step 3: Confirmation]         [Return to Step 2]
  │
  ▼
[End: Success State]
```

**Step Details:**

| Step | Screen | User Action | System Response | Error States |
|------|--------|-------------|-----------------|-------------|
| 1 | [Screen name] | [What user does] | [What system shows/does] | [Possible errors] |
| 2 | [Screen name] | [What user does] | [What system shows/does] | [Possible errors] |
| 3 | [Screen name] | [What user does] | [What system shows/does] | [Possible errors] |

**Edge Cases:**
- [Edge case 1 and how it is handled]
- [Edge case 2 and how it is handled]

---

### 4.2 Flow: [Secondary Task Name]

<!-- Repeat the flow structure above for each major task. Typically 5-10 flows
     are needed to cover the core functionality. -->

**Trigger:** [Trigger]
**Preconditions:** [Preconditions]
**Success Outcome:** [Outcome]

| Step | Screen | User Action | System Response | Error States |
|------|--------|-------------|-----------------|-------------|
| 1 | [Screen] | [Action] | [Response] | [Errors] |
| 2 | [Screen] | [Action] | [Response] | [Errors] |
| 3 | [Screen] | [Action] | [Response] | [Errors] |

---

### 4.3 Flow: [Onboarding / First-Time Experience]

<!-- The first-time user experience is critical enough to warrant its own flow. -->

**Trigger:** [New user completes registration]
**Success Outcome:** [User reaches "aha moment" — define what that is]

| Step | Screen | User Action | System Response | Success Metric |
|------|--------|-------------|-----------------|----------------|
| 1 | Welcome | [Action] | [Response] | [% who proceed] |
| 2 | Setup | [Action] | [Response] | [% who complete] |
| 3 | First Value | [Action] | [Response] | [Time to value] |

---

## 5. Wireframe Specifications

<!-- Describe screen layouts in enough detail for a designer to produce mockups
     or a developer to build. Each screen should reference the user flows above. -->

### 5.1 Screen: [Dashboard / Home]

**Purpose:** [What this screen accomplishes]
**Entry Points:** [How users arrive here — e.g., login redirect, nav click]
**Personas Served:** [Which personas use this screen most]

**Layout Description:**

```
┌─────────────────────────────────────────────────────┐
│  Header: Logo | Search Bar | Notifications | Avatar │
├──────────┬──────────────────────────────────────────┤
│          │  Page Title + Action Button              │
│  Sidebar │──────────────────────────────────────────│
│  Nav     │  [Widget 1]    │  [Widget 2]            │
│          │  Key metric    │  Key metric             │
│  - Item1 │────────────────┴────────────────────────│
│  - Item2 │  [Main Content Area]                     │
│  - Item3 │  List / Table / Cards                    │
│  - Item4 │                                          │
│          │                                          │
│          │──────────────────────────────────────────│
│          │  [Pagination / Load More]                │
├──────────┴──────────────────────────────────────────┤
│  Footer (optional)                                   │
└─────────────────────────────────────────────────────┘
```

**Component Inventory:**

| Component | Type | Behavior | Data Displayed | Interaction |
|-----------|------|----------|----------------|-------------|
| [Widget 1] | [Card / Chart / Stat] | [Static / Live updating] | [Data source] | [Click → navigates to...] |
| [Main content] | [Table / List / Grid] | [Sortable, filterable] | [Data source] | [Row click → detail view] |
| [Action button] | [Primary CTA] | [Opens modal / navigates] | [Label text] | [Click behavior] |

**States:**
- **Empty state**: [What shows when no data exists — illustration + CTA]
- **Loading state**: [Skeleton screens / spinners — describe which]
- **Error state**: [What shows when data fails to load]
- **Populated state**: [Normal view as described above]

---

### 5.2 Screen: [Feature Detail / Edit Screen]

**Purpose:** [Purpose]
**Entry Points:** [Entry points]

**Layout Description:**

```
┌─────────────────────────────────────────────────────┐
│  Breadcrumb: Home > [Section] > [Item Name]         │
├─────────────────────────────────────────────────────┤
│  [Item Title]                    [Edit] [Delete]     │
├─────────────────────────────────────────────────────┤
│  Tab 1 | Tab 2 | Tab 3                              │
├─────────────────────────────────────────────────────┤
│  [Tab Content Area]                                  │
│                                                      │
│  [Form fields / Content display]                     │
│                                                      │
├─────────────────────────────────────────────────────┤
│  [Save] [Cancel]                                     │
└─────────────────────────────────────────────────────┘
```

**Component Inventory:**

| Component | Type | Behavior | Validation | Interaction |
|-----------|------|----------|------------|-------------|
| [Field 1] | [Text input] | [Required] | [Max 100 chars] | [Inline validation] |
| [Field 2] | [Dropdown] | [Required] | [Must select one] | [Searchable] |
| [Field 3] | [Date picker] | [Optional] | [Future dates only] | [Calendar popup] |

---

<!-- Add additional screens as needed. Typical applications require 10-20 screen specs. -->

### 5.3 Component Inventory (Global)

<!-- List all reusable UI components needed across the application. -->

| Component | Variants | Used On | Notes |
|-----------|----------|---------|-------|
| Button | Primary, Secondary, Ghost, Danger, Disabled | All screens | [Size: sm, md, lg] |
| Input Field | Text, Password, Email, Search, Textarea | Forms | [Include label, helper, error states] |
| Modal | Confirmation, Form, Information | [Screens] | [Max width: 600px, closable via X/ESC/overlay] |
| Toast / Snackbar | Success, Error, Warning, Info | Global | [Auto-dismiss: 5s, manually dismissible] |
| Data Table | Sortable, Filterable, Selectable | [Screens] | [Pagination: 25/50/100 rows] |
| Card | Content, Metric, Action | Dashboard, Lists | [Shadow elevation: 1-3] |
| Navigation | Sidebar, Tab bar, Breadcrumb | Global | [Collapsible sidebar on desktop] |
| Avatar | User, Placeholder, Group | Header, Lists | [Sizes: 24px, 32px, 48px] |
| Badge / Tag | Status, Category, Count | Lists, Cards | [Color-coded by type] |
| Empty State | Illustration + CTA | Data screens | [Unique per context] |
| Loading | Skeleton, Spinner, Progress bar | All screens | [Skeleton preferred for content] |

---

## 6. Interaction Patterns

### 6.1 Navigation Patterns

| Pattern | Implementation | Rationale |
|---------|---------------|-----------|
| Primary navigation | [e.g., Persistent left sidebar with icons + labels] | [Why this pattern suits the app] |
| Page transitions | [e.g., Instant swap, no page-level animation] | [Performance priority] |
| Deep linking | [e.g., All views are URL-addressable] | [Shareability, bookmarking] |
| Back navigation | [e.g., Browser back always works, breadcrumbs as fallback] | [Predictability] |
| Search | [e.g., Global search in header, cmd+K shortcut] | [Quick access to any content] |

### 6.2 Input Patterns

| Pattern | Behavior | Validation Timing |
|---------|----------|-------------------|
| Text input | [Standard text entry with character count] | [On blur + on submit] |
| Form submission | [Button click or Enter key in last field] | [All fields validated, first error focused] |
| Inline editing | [Click text to edit, Enter to save, Esc to cancel] | [On save attempt] |
| Multi-select | [Checkbox list or tag-style tokens] | [Min/max selection enforced] |
| File upload | [Drag-and-drop zone + click to browse] | [File type + size validated immediately] |
| Auto-save | [Debounced save after 2s of inactivity] | [Continuous, with save indicator] |

### 6.3 Feedback Mechanisms

| Event | Feedback Type | Duration | Details |
|-------|---------------|----------|---------|
| Action success | Toast (success) | 5 seconds | [Green, bottom-right, dismissible] |
| Action failure | Toast (error) | Persistent until dismissed | [Red, with retry action] |
| Form validation error | Inline message | Until corrected | [Red text below field, field border red] |
| Background process | Progress indicator | Until complete | [Top progress bar or in-context spinner] |
| Destructive action | Confirmation modal | Until user decides | [Require typing confirmation for critical actions] |
| System notification | Badge count + dropdown | Until read | [Bell icon in header] |

### 6.4 Loading States

| Context | Pattern | Placeholder |
|---------|---------|-------------|
| Initial page load | Skeleton screen | [Gray blocks matching content layout] |
| Data refresh | Subtle spinner | [Small spinner in header/section, content stays visible] |
| Action in progress | Button loading state | [Button shows spinner, disabled until complete] |
| Image loading | Blur-up placeholder | [Low-res preview → sharp image] |
| Infinite scroll | Bottom spinner | [Spinner below last item, auto-trigger at 200px from bottom] |

### 6.5 Error Handling Patterns

| Error Type | User Experience | Recovery Path |
|------------|-----------------|---------------|
| Network failure | [Banner: "Connection lost. Retrying..."] | [Auto-retry with exponential backoff, manual retry button] |
| 404 / Not found | [Friendly 404 page with search + home link] | [Search or navigate home] |
| Permission denied | [Message: "You don't have access. Request it from [admin]."] | [Link to request access] |
| Server error (500) | [Message: "Something went wrong. We've been notified."] | [Retry button + support link] |
| Validation error | [Inline field-level messages + summary at top of form] | [Focus first error field] |
| Session expired | [Modal: "Your session has expired. Please log in again."] | [Redirect to login, preserve current URL for return] |
| Rate limited | [Message: "Too many requests. Please wait [X] seconds."] | [Countdown timer, auto-retry] |

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|------------|-------|----------------|----------------|
| Mobile (small) | 0 - 479px | Small phones | Single column, stacked, bottom nav |
| Mobile (large) | 480 - 767px | Large phones, small tablets | Single column, slightly wider margins |
| Tablet | 768 - 1023px | Tablets, small laptops | Two columns, collapsible sidebar |
| Desktop | 1024 - 1439px | Laptops, desktops | Full layout, persistent sidebar |
| Wide | 1440px+ | Large monitors | Max-width container (1440px), centered |

### 7.2 Layout Adaptation Rules

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Bottom tab bar (5 items) + hamburger menu | Collapsible sidebar (icons only) | Persistent sidebar (icons + labels) |
| Data tables | Card-based list view | Horizontal scroll with pinned first column | Full table |
| Forms | Full-width, single column | Full-width, single column | Two-column where logical |
| Modals | Full-screen sheet (bottom-up) | Centered modal (80% width) | Centered modal (max 600px) |
| Dashboard widgets | Stacked, full-width | 2-column grid | 3-4 column grid |
| Action buttons | Fixed bottom bar | Inline | Inline |

### 7.3 Mobile-First Approach

<!-- Define the mobile-first design strategy. -->

- **Touch targets**: Minimum 44x44px tap targets (WCAG 2.5.5)
- **Thumb zones**: Primary actions placed in bottom-right thumb-reachable area
- **Gestures**: [List supported gestures — e.g., swipe to delete, pull to refresh]
- **Offline support**: [Define offline behavior — e.g., cached data viewable, actions queued]
- **Performance budget**: [e.g., First contentful paint < 1.5s on 3G, total page weight < 500KB]

---

## 8. Accessibility Requirements

<!-- WCAG 2.1 AA is the minimum standard. Document specific accessibility
     decisions and patterns for this application. -->

### 8.1 WCAG 2.1 AA Compliance Checklist

| Criterion | Requirement | Implementation | Status |
|-----------|-------------|----------------|--------|
| 1.1.1 Non-text Content | All images have alt text | [Implementation details] | [ ] |
| 1.3.1 Info and Relationships | Semantic HTML used throughout | `<nav>`, `<main>`, `<section>`, `<article>` | [ ] |
| 1.4.1 Use of Color | Color is not the sole indicator | Icons + text accompany color indicators | [ ] |
| 1.4.3 Contrast (Minimum) | 4.5:1 for normal text, 3:1 for large text | [Verified in color palette below] | [ ] |
| 1.4.4 Resize Text | Content readable at 200% zoom | Responsive layout accommodates | [ ] |
| 2.1.1 Keyboard | All functionality via keyboard | Tab order defined per screen | [ ] |
| 2.4.1 Bypass Blocks | Skip-to-content link | Hidden link, visible on focus | [ ] |
| 2.4.3 Focus Order | Logical focus sequence | Matches visual reading order | [ ] |
| 2.4.7 Focus Visible | Clear focus indicators | 2px solid outline, offset 2px | [ ] |
| 3.1.1 Language of Page | `lang` attribute set | `<html lang="en">` | [ ] |
| 3.3.1 Error Identification | Errors described in text | Inline messages + `aria-describedby` | [ ] |
| 3.3.2 Labels or Instructions | All inputs labeled | Visible `<label>` elements, `aria-label` where needed | [ ] |
| 4.1.2 Name, Role, Value | ARIA attributes correct | Custom components use ARIA roles | [ ] |

### 8.2 Screen Reader Support

- **Landmark regions**: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` on every page
- **Heading hierarchy**: Strict `h1` > `h2` > `h3` order, one `h1` per page
- **Live regions**: `aria-live="polite"` for toast notifications, `aria-live="assertive"` for errors
- **Dynamic content**: `aria-expanded`, `aria-selected`, `aria-hidden` for interactive components
- **Form announcements**: `aria-required`, `aria-invalid`, `aria-describedby` for error messages

### 8.3 Keyboard Navigation

| Action | Key(s) | Context |
|--------|--------|---------|
| Navigate between sections | Tab / Shift+Tab | Global |
| Activate button / link | Enter or Space | When focused |
| Close modal / dropdown | Escape | When open |
| Navigate list items | Arrow Up / Down | Within lists, menus, dropdowns |
| Select item | Enter or Space | Within lists |
| Skip to main content | Tab (first element) | On any page |
| Open search | [e.g., Cmd+K / Ctrl+K] | Global |
| Navigate tabs | Arrow Left / Right | Tab components |

### 8.4 Reduced Motion

- **Preference detection**: `prefers-reduced-motion: reduce` media query
- **Behavior**: All animations replaced with instant state changes
- **Affected**: Page transitions, loading animations, hover effects, micro-interactions

---

## 9. Design System Foundation

<!-- Define the core design tokens that inform the visual design system.
     This provides enough guidance for a designer to build the full system. -->

### 9.1 Typography Scale

| Token | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| `display-lg` | 48px / 3rem | 700 (Bold) | 1.2 | Hero headings |
| `display-sm` | 36px / 2.25rem | 700 (Bold) | 1.2 | Page titles |
| `heading-1` | 30px / 1.875rem | 600 (Semibold) | 1.3 | Section headings |
| `heading-2` | 24px / 1.5rem | 600 (Semibold) | 1.3 | Sub-section headings |
| `heading-3` | 20px / 1.25rem | 600 (Semibold) | 1.4 | Card titles |
| `body-lg` | 18px / 1.125rem | 400 (Regular) | 1.6 | Lead paragraphs |
| `body-md` | 16px / 1rem | 400 (Regular) | 1.6 | Body text (default) |
| `body-sm` | 14px / 0.875rem | 400 (Regular) | 1.5 | Secondary text, captions |
| `caption` | 12px / 0.75rem | 400 (Regular) | 1.4 | Timestamps, labels |
| `overline` | 12px / 0.75rem | 600 (Semibold) | 1.4 | Category labels (uppercase) |

- **Font family (primary)**: [e.g., Inter, system-ui, -apple-system, sans-serif]
- **Font family (monospace)**: [e.g., JetBrains Mono, Fira Code, monospace]
- **Base size**: 16px (1rem)
- **Scale ratio**: [e.g., 1.25 — Major Third]

### 9.2 Color Palette

<!-- Provide HEX values. Ensure contrast ratios meet WCAG AA (4.5:1 for text). -->

**Brand Colors:**

| Token | Swatch | HEX | Usage | Contrast on White |
|-------|--------|-----|-------|-------------------|
| `brand-primary` | | [#XXXXXX] | Primary actions, links, active states | [X.X:1] |
| `brand-primary-dark` | | [#XXXXXX] | Hover states for primary | [X.X:1] |
| `brand-primary-light` | | [#XXXXXX] | Backgrounds, highlights | [N/A — not for text] |
| `brand-secondary` | | [#XXXXXX] | Secondary actions, accents | [X.X:1] |

**Semantic Colors:**

| Token | HEX | Usage |
|-------|-----|-------|
| `success` | [#XXXXXX] | Success messages, positive indicators |
| `warning` | [#XXXXXX] | Warning messages, caution indicators |
| `error` | [#XXXXXX] | Error messages, destructive actions |
| `info` | [#XXXXXX] | Informational messages, neutral highlights |

**Neutral Palette:**

| Token | HEX | Usage |
|-------|-----|-------|
| `neutral-900` | [#XXXXXX] | Primary text |
| `neutral-700` | [#XXXXXX] | Secondary text |
| `neutral-500` | [#XXXXXX] | Placeholder text, disabled |
| `neutral-300` | [#XXXXXX] | Borders, dividers |
| `neutral-100` | [#XXXXXX] | Backgrounds (subtle) |
| `neutral-50` | [#XXXXXX] | Backgrounds (page) |
| `white` | #FFFFFF | Card backgrounds, inputs |

**Dark Mode** (if applicable):
- [ ] Dark mode supported
- Strategy: [e.g., Inverted neutrals, same brand colors at adjusted lightness]

### 9.3 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px (0.25rem) | Tight: inline icon padding |
| `space-2` | 8px (0.5rem) | Compact: between related elements |
| `space-3` | 12px (0.75rem) | Default: form field gaps |
| `space-4` | 16px (1rem) | Standard: paragraph spacing, card padding |
| `space-5` | 24px (1.5rem) | Comfortable: section spacing within a card |
| `space-6` | 32px (2rem) | Generous: between cards/sections |
| `space-8` | 48px (3rem) | Spacious: page section separators |
| `space-10` | 64px (4rem) | Extra: hero sections, major separators |

**Grid System:**
- Columns: [e.g., 12-column grid]
- Gutter: [e.g., 24px]
- Margin: [e.g., 16px mobile, 24px tablet, auto-centered on desktop]
- Max content width: [e.g., 1200px]

### 9.4 Elevation & Shadows

| Level | Shadow | Usage |
|-------|--------|-------|
| `elevation-0` | None | Flat elements, inline content |
| `elevation-1` | `0 1px 3px rgba(0,0,0,0.12)` | Cards, input fields |
| `elevation-2` | `0 4px 6px rgba(0,0,0,0.12)` | Dropdowns, popovers |
| `elevation-3` | `0 8px 24px rgba(0,0,0,0.16)` | Modals, dialogs |
| `elevation-4` | `0 16px 48px rgba(0,0,0,0.20)` | Notifications, toasts |

### 9.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Buttons, inputs, small cards |
| `radius-md` | 8px | Cards, modals |
| `radius-lg` | 12px | Large containers, panels |
| `radius-full` | 9999px | Avatars, badges, pills |

### 9.6 Component Library Reference

<!-- If using an existing component library, reference it here. Otherwise, list
     the components that need to be built for this project. -->

- **Base library**: [e.g., Radix UI, Headless UI, shadcn/ui, Material UI, custom]
- **Icon set**: [e.g., Lucide, Heroicons, Phosphor, custom]
- **Illustration style**: [e.g., Flat, isometric, line art, none]
- **Animation library**: [e.g., Framer Motion, CSS transitions only, none]

---

## 10. Content Strategy

### 10.1 Tone of Voice

| Dimension | Our Position | Example |
|-----------|-------------|---------|
| Formal ←→ Casual | [e.g., 3/5 — Professional but approachable] | [Good: "Your project was created." Bad: "Awesome! You did it!"] |
| Serious ←→ Playful | [e.g., 2/5 — Mostly serious, light where appropriate] | [Good: "No results found. Try a different search." Bad: "Oopsie!"] |
| Technical ←→ Simple | [e.g., 3/5 — Clear language, technical terms where necessary] | [Good: "API key" Bad: "Secret access code thingy"] |
| Confident ←→ Humble | [e.g., 4/5 — Direct and confident] | [Good: "This will take 5 minutes." Bad: "This might maybe possibly take around 5 minutes or so."] |

### 10.2 Microcopy Guidelines

| Element | Guidelines | Example |
|---------|-----------|---------|
| Button labels | Verb + noun, max 3 words, sentence case | "Create project", "Save changes" |
| Error messages | Say what happened + what to do | "Email already in use. Try a different email or log in." |
| Empty states | Explain + guide to action | "No projects yet. Create your first project to get started." |
| Confirmation dialogs | State consequence clearly | "Delete this project? This action cannot be undone. All data will be permanently removed." |
| Placeholder text | Hint at expected format | "e.g., john@company.com" |
| Success messages | Confirm what happened | "Project 'Alpha' created successfully." |
| Loading text | Set expectations | "Loading your dashboard..." |
| Tooltips | Brief, helpful, no jargon | "Last updated 3 hours ago" |

### 10.3 Content Structure

- **Page titles**: [Naming convention — e.g., "[Object] — [Action]" or "[Section] / [Sub-section]"]
- **Date format**: [e.g., "Apr 7, 2026" for display, ISO 8601 for data]
- **Number format**: [e.g., Comma-separated thousands, 2 decimal places for currency]
- **Truncation**: [e.g., Ellipsis after 2 lines for card descriptions, full text in detail view]
- **Internationalization**: [e.g., i18n-ready with string externalization, RTL support planned]

---

## 11. Usability Testing Plan

### 11.1 Testing Objectives

1. [e.g., Validate that users can complete [primary task] within [X] minutes]
2. [e.g., Identify navigation confusion points in the information architecture]
3. [e.g., Assess first-time user onboarding effectiveness]
4. [e.g., Compare [Design A] vs [Design B] for [specific interaction]]

### 11.2 Test Plan

| Attribute | Details |
|-----------|---------|
| **Method** | [e.g., Moderated remote usability testing] |
| **Participants** | [e.g., 5-8 users matching Persona 1 and Persona 2 profiles] |
| **Recruitment** | [e.g., Customer panel, UserTesting.com, internal dogfooding] |
| **Fidelity** | [e.g., Interactive prototype in Figma / coded prototype] |
| **Duration** | [e.g., 45-minute sessions] |
| **Facilitator** | [e.g., UX researcher or product designer] |
| **Recording** | [e.g., Screen + audio + face camera, with consent] |

### 11.3 Test Scenarios

| # | Scenario | Task Description | Success Criteria | Persona |
|---|----------|-----------------|-------------------|---------|
| 1 | [Scenario name] | [Specific task: "You need to create a new project and invite a team member."] | [e.g., Completed in < 3 min, no errors] | [Persona 1] |
| 2 | [Scenario name] | [Specific task] | [Success criteria] | [Persona 2] |
| 3 | [Scenario name] | [Specific task] | [Success criteria] | [Persona 1] |
| 4 | [Scenario name] | [Specific task] | [Success criteria] | [Persona 3] |
| 5 | [Scenario name] | [Specific task] | [Success criteria] | [Persona 2] |

### 11.4 Metrics to Collect

| Metric | Type | Target |
|--------|------|--------|
| Task completion rate | Effectiveness | [e.g., > 90%] |
| Time on task | Efficiency | [e.g., < 3 minutes for primary tasks] |
| Error rate | Effectiveness | [e.g., < 10% of attempts] |
| System Usability Scale (SUS) | Satisfaction | [e.g., > 80] |
| Net Promoter Score (NPS) | Satisfaction | [e.g., > 50] |
| Task-level satisfaction | Satisfaction | [e.g., > 4/5 per task] |

### 11.5 Iteration Plan

- **Round 1**: [e.g., Test with low-fidelity wireframes, focus on IA and flows]
- **Round 2**: [e.g., Test with interactive prototype, focus on interaction patterns]
- **Round 3**: [e.g., Test with production build, focus on performance and edge cases]
- **Feedback integration**: [e.g., 1-week sprint between rounds to address findings]

---

## Appendices

### A. User Flow Diagrams

<!-- Link to or embed detailed flow diagrams created in tools like Miro, FigJam, Lucidchart. -->

- [Link to flow diagram tool / exported images]

### B. Wireframe Files

<!-- Link to wireframe files in design tools. -->

- [Link to Figma / Sketch / Adobe XD project]
- [Link to exported wireframe PDF]

### C. Competitive UX Audit

<!-- Summary of UX patterns observed in competitors (from Phase 2 market analysis). -->

| Competitor | Strengths | Weaknesses | Patterns to Adopt | Patterns to Avoid |
|------------|-----------|------------|-------------------|-------------------|
| [Competitor 1] | [Strengths] | [Weaknesses] | [Adopt] | [Avoid] |
| [Competitor 2] | [Strengths] | [Weaknesses] | [Adopt] | [Avoid] |

### D. Glossary

| Term | Definition |
|------|-----------|
| [Term] | [Definition] |

---

<!-- 
  QUALITY CHECKLIST (Phase 4 → Phase 5 Gate):
  - [ ] All personas defined with demographics, goals, and scenarios
  - [ ] Information architecture covers all features from PRD
  - [ ] User flows documented for all primary use cases
  - [ ] Wireframe specs exist for all unique screens
  - [ ] Interaction patterns are consistent and documented
  - [ ] Responsive breakpoints and adaptation rules defined
  - [ ] WCAG 2.1 AA compliance addressed
  - [ ] Design system tokens specified (typography, color, spacing)
  - [ ] Content strategy and microcopy guidelines established
  - [ ] Usability testing plan ready for execution
  - [ ] All design decisions traceable to user needs and requirements
-->
