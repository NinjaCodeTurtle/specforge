# Phase 1: Discovery & Vision

## Purpose

Phase 1 establishes the foundational understanding of **what** you are building and **why**. It aligns all stakeholders around a shared problem definition, target audience, and product vision before any market research, design, or engineering work begins.

A product built on a weak foundation -- vague problems, undefined users, or conflicting visions -- will fail regardless of execution quality. This phase exists to prevent that.

## Objectives

- Clearly define the problem the product will solve, backed by evidence
- Identify and characterize the target users and customer segments
- Articulate a compelling, differentiated value proposition
- Establish measurable success criteria using SMART objectives
- Define explicit scope boundaries to prevent scope creep in later phases
- Surface critical assumptions, constraints, and risks early
- Achieve stakeholder alignment on product vision before investing in research and development

## Agent Role: Strategist

The agent operating in this phase acts as a **Strategist** -- a senior product consultant who guides the team through disciplined problem definition and vision articulation. The Strategist:

- Asks probing questions to sharpen vague ideas into specific, testable hypotheses
- Challenges assumptions and pushes for evidence over opinion
- Synthesizes input from multiple stakeholders into a coherent narrative
- Ensures completeness by checking all sections of the Product Brief template
- Flags gaps, inconsistencies, or unsupported claims in the brief

## Artifacts Produced

| Artifact | Template | Description |
|----------|----------|-------------|
| **Product Brief** | `templates/01-product-brief.md` | The single source of truth for product vision, problem definition, target users, value proposition, objectives, scope, and initial risk assessment |

## Key Activities

1. **Stakeholder Interviews** -- Gather perspectives from executives, domain experts, potential users, and cross-functional team members to understand the problem space from multiple angles.

2. **Problem Definition Workshop** -- Synthesize interview findings into a clear, evidence-backed problem statement. Validate that the problem is real, significant, and worth solving.

3. **User & Segment Identification** -- Define primary and secondary user personas using demographic, psychographic, and behavioral attributes. Explicitly identify non-target users.

4. **Vision & Value Proposition Development** -- Use the Value Proposition Canvas to map customer jobs, pains, and gains against proposed product capabilities. Craft a positioning statement.

5. **Objective Setting** -- Define business and user objectives using SMART criteria. Establish leading and lagging indicators.

6. **Scope Definition** -- Draw explicit boundaries: what is in scope, what is out of scope, and what is deferred to future phases. This prevents the most common source of project failure.

7. **Risk & Assumption Identification** -- Surface assumptions that underpin the product thesis and identify risks that could derail the initiative. Create validation plans for critical assumptions.

## Step-by-Step Workflow

### Step 1: Gather Context (Days 1-3)

Collect all existing information about the product idea:
- Review any prior research, pitch decks, strategy documents, or customer feedback
- Identify the key stakeholders who must be consulted
- Schedule stakeholder interviews (aim for 5-10 interviews covering diverse perspectives)

**Output:** Interview schedule, existing materials inventory

### Step 2: Conduct Stakeholder Interviews (Days 3-7)

Interview stakeholders with structured questions:
- What problem are we solving? For whom?
- What evidence exists that this problem is real and significant?
- What does success look like? How would we measure it?
- What are the biggest risks? What keeps you up at night about this?
- What is explicitly NOT in scope?

**Output:** Interview notes, recurring themes, areas of alignment and disagreement

### Step 3: Synthesize Problem Statement (Days 7-8)

Distill interview findings and existing evidence into a clear problem statement:
- Write the problem in user-centric language (not solution language)
- Catalog evidence that validates the problem (support tickets, analytics, research)
- Assess the cost of inaction -- what happens if the problem remains unsolved?

**Output:** Draft problem statement with evidence table (Sections 2.1-2.3 of Product Brief)

### Step 4: Define Target Users (Days 8-10)

Build detailed user personas:
- Create at least one primary persona with specificity (not "all businesses")
- Define secondary personas where relevant
- Prioritize customer segments with clear rationale
- Explicitly state who you are NOT building for

**Output:** Completed personas and segment prioritization (Section 3 of Product Brief)

### Step 5: Develop Value Proposition (Days 10-12)

Use the Value Proposition Canvas to articulate differentiation:
- Map customer jobs (functional, emotional, social)
- Map customer pains and desired gains
- Align product capabilities to pain relievers and gain creators
- Craft a positioning statement and identify unique selling points

**Output:** Value Proposition Canvas and positioning statement (Section 4 of Product Brief)

### Step 6: Set Objectives & Define Scope (Days 12-14)

Establish measurable targets and draw boundaries:
- Define 3-5 business objectives with SMART metrics
- Define 2-3 user objectives with measurable targets
- List in-scope capabilities, out-of-scope items, and deferred items
- Document assumptions with validation plans
- Identify top 5 risks with mitigation strategies

**Output:** Completed Sections 5-8 of Product Brief

### Step 7: Review & Approval (Days 14-15)

Circulate the completed Product Brief for stakeholder review:
- Present findings to the core team and executive sponsor
- Address feedback and resolve disagreements
- Obtain formal approval to proceed to Phase 2
- Complete the validation checklist at the end of the template

**Output:** Approved Product Brief, Phase 1 complete

## Quality Gate: Phase 1 to Phase 2

Before advancing to Phase 2 (Market & Competitive Analysis), ALL of the following criteria must be met:

### Must-Pass Criteria

- [ ] **Problem is evidence-backed:** The problem statement cites at least 3 distinct evidence sources (interviews, data, research)
- [ ] **Users are specific:** At least one primary persona is defined with enough detail to guide design decisions (not "everyone" or "all companies")
- [ ] **Value proposition is differentiated:** The positioning statement clearly articulates how the product differs from existing alternatives
- [ ] **Objectives are SMART:** Every objective has a specific metric, target value, and timeline
- [ ] **Scope is bounded:** Both in-scope and out-of-scope items are explicitly listed
- [ ] **Risks are identified:** At least 5 risks are documented with probability, impact, and mitigation strategies
- [ ] **Stakeholder sign-off:** The executive sponsor and key stakeholders have reviewed and approved the Product Brief

### Warning Signs (Address Before Proceeding)

- Problem statement describes a solution rather than a pain ("We need to build X" instead of "Users struggle with Y")
- Value proposition cannot be stated in one clear sentence
- Objectives are vague or unmeasurable ("improve user experience")
- Scope section only lists in-scope items with no explicit exclusions
- The team cannot agree on who the primary user is
- All assumptions are marked "Unvalidated" with no validation plans

## Tips for Success

1. **Start with the problem, not the solution.** The most common Phase 1 mistake is jumping to features before deeply understanding the pain. Force the conversation back to "What problem are we solving?" every time it drifts to "What should we build?"

2. **Be specific about users.** "Small businesses" is not a persona. "Operations managers at 10-50 person professional services firms who spend 5+ hours per week on manual scheduling" is a persona. Specificity drives better decisions in every subsequent phase.

3. **Seek disconfirming evidence.** It is natural to look for evidence that supports the product thesis. Actively seek reasons the product might fail, and address them in the risk assessment. A brief that only contains good news is a brief that has not been challenged.

4. **Make scope exclusions explicit.** Stating what you will NOT build is more valuable than stating what you will build. Exclusions prevent the scope creep that derails most product initiatives.

5. **Validate assumptions early.** Every assumption is a risk. The assumptions that seem most "obvious" are often the most dangerous because nobody thinks to test them. Prioritize validation of high-impact assumptions before committing resources.

## Common Pitfalls

| Pitfall | Symptom | Remedy |
|---------|---------|--------|
| **Solution-first thinking** | The brief describes features instead of problems | Rewrite Section 2 without mentioning any product capabilities |
| **Vague personas** | Target user is "everyone" or an entire industry | Narrow until you can name a real person who fits the persona |
| **Vanity metrics** | Objectives track "page views" or "downloads" without tying to outcomes | Replace with outcome metrics tied to user or business value |
| **Kitchen-sink scope** | Everything is "in scope," nothing is excluded | Force-rank features and move the bottom 50% to out-of-scope or deferred |
| **Assumption blindness** | Assumptions section is empty or has only 1-2 items | Conduct a dedicated assumption-mapping session with the team |
| **Stakeholder misalignment** | Different stakeholders describe fundamentally different products | Convene a alignment workshop; do not proceed until resolved |
| **Analysis paralysis** | Phase 1 takes more than 3 weeks for a standard product | Time-box the phase; imperfect alignment now beats perfect alignment never |

## Estimated Duration

- **Small product / feature:** 3-5 business days
- **Medium product:** 7-10 business days
- **Large / complex product:** 10-15 business days

The primary variable is the number of stakeholders who must be consulted and the complexity of the problem domain. Do not skip this phase or compress it below 3 days -- the cost of misalignment compounds in every subsequent phase.
