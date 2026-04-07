---
name: "specforge:analyze-market"
description: "Phase 2 — Market & Competitive Analysis. Guides the user through market sizing, competitor research, and opportunity validation to produce Market Analysis and Competitive Analysis documents."
role: "Market Analyst"
phase: "02-market-analysis"
produces:
  - "Market Analysis (template 02-market-analysis)"
  - "Competitive Analysis (template 03-competitive-analysis)"
---

# /specforge:analyze-market — Market & Competitive Analysis

## Purpose

This skill runs the Phase 2 Market & Competitive Analysis workflow. It acts as a **Market Analyst (Scout)** — methodically gathering market data, mapping the competitive landscape, and validating (or invalidating) the opportunity defined in the Product Brief.

The goal is to replace assumptions with evidence. Every claim made in the Product Brief about market need, competitive gaps, and opportunity size should be tested here.

## Prerequisites

- **Product Brief** (`output/01-product-brief.md`) must be complete and approved from Phase 1.
- The Strategist should have identified the target market, customer segments, and initial competitive landscape.
- Web search access is strongly recommended for gathering real market data, competitor information, and industry reports.

## Workflow Steps

### Step 1: Review the Product Brief

Read the completed Product Brief to extract:

- Target customer segments and personas
- Problem statement and evidence
- Value proposition and claimed differentiation
- Assumptions flagged as "unvalidated"
- Initial competitive mentions (if any)

Summarize your understanding back to the user. Ask: "Is there anything that has changed since the Product Brief was finalized?"

### Step 2: Market Definition & Sizing

Guide the user through defining and sizing the market:

1. **Define the market category** — What industry or category does this product belong to? Be precise (e.g., "cloud-based project management for creative agencies," not just "project management").
2. **TAM (Total Addressable Market)** — The total revenue opportunity if 100% of the market adopted the solution. Use top-down (industry reports) and bottom-up (unit economics x addressable customers) approaches.
3. **SAM (Serviceable Addressable Market)** — The portion of TAM that your product can realistically serve given geography, segment, and capability constraints.
4. **SOM (Serviceable Obtainable Market)** — The realistic near-term capture based on go-to-market strategy, competitive dynamics, and resources.

Use web search to find industry reports, market sizing data, and analyst estimates. Cite all sources.

### Step 3: Market Trends & Dynamics

Research and document key market forces:

1. **Growth trajectory** — Is this market growing, stable, or declining? What is the CAGR?
2. **Key drivers** — What forces are expanding the market (technology shifts, regulatory changes, demographic trends)?
3. **Key barriers** — What forces constrain the market (switching costs, regulation, incumbents)?
4. **Emerging trends** — What new developments could reshape the market in the next 2-5 years?
5. **Timing assessment** — Why is now the right time for this product? What has changed?

### Step 4: Competitive Landscape Mapping

Conduct thorough competitor research:

1. **Identify competitors** across three tiers:
   - **Direct competitors**: Products solving the same problem for the same audience.
   - **Indirect competitors**: Products solving the problem differently or for an adjacent audience.
   - **Substitute solutions**: Non-product alternatives (manual processes, spreadsheets, hiring, outsourcing).

2. **For each direct competitor**, research and document:
   - Company overview (size, funding, stage)
   - Product capabilities and features
   - Pricing model and tiers
   - Target customer segment
   - Strengths and weaknesses
   - Market positioning and messaging
   - Known customer complaints or gaps (from review sites, forums, social media)

Use web search to gather real data from competitor websites, review platforms (G2, Capterra, TrustRadius), press releases, and social media.

### Step 5: Competitive Positioning Analysis

Synthesize the competitive data:

1. Build a **feature comparison matrix** — rows are key capabilities, columns are competitors.
2. Create a **positioning map** — plot competitors on 2 key dimensions (e.g., ease-of-use vs. power, price vs. features).
3. Identify **competitive gaps** — areas where no competitor excels or where the user's product can differentiate.
4. Assess **competitive moats** — what sustainable advantages (network effects, data, brand, switching costs) exist or can be built?

> **HALT POINT**: Present the competitive landscape summary and positioning analysis to the user. Ask: "Does this match your understanding of the competitive environment? Are there any competitors I've missed or any positioning insights you disagree with?"

### Step 6: Opportunity Validation

Test the assumptions from the Product Brief against market evidence:

1. **For each unvalidated assumption**, assess whether market data supports, contradicts, or is inconclusive.
2. **Customer willingness to pay** — Is there evidence of budget allocation for this problem? What do competitors charge?
3. **Market entry feasibility** — Are there structural barriers to entry (regulation, network effects, high switching costs)?
4. **Differentiation sustainability** — Can the claimed USPs be defended against competitive response?

### Step 7: Risk & Opportunity Assessment

Identify market-level risks and opportunities:

1. **Market risks**: Commoditization, regulatory changes, market consolidation, technology disruption.
2. **Competitive risks**: Incumbent response, new entrants, open-source alternatives.
3. **Opportunity areas**: Underserved segments, emerging needs, integration opportunities, geographic expansion.

### Step 8: Synthesize Market Analysis Document

> **HALT POINT**: Present a structured summary of all market findings. Ask the user to confirm accuracy and completeness before generating the formal documents.

Populate the Market Analysis template (02) with:

- Market definition and sizing (TAM/SAM/SOM)
- Market trends and dynamics
- Customer segments with evidence
- Opportunity validation results
- Market risks and mitigations

### Step 9: Synthesize Competitive Analysis Document

Populate the Competitive Analysis template (03) with:

- Competitor profiles (all tiers)
- Feature comparison matrix
- Positioning map
- Competitive gaps and opportunities
- Differentiation strategy

### Step 10: Quality Gate Check

Run through the Phase 2 validation checklist:

- [ ] Market is clearly defined with a specific category
- [ ] TAM/SAM/SOM are estimated with cited sources
- [ ] At least 3 direct competitors are profiled with real data
- [ ] Feature comparison matrix covers key differentiating capabilities
- [ ] Competitive gaps are identified with evidence
- [ ] Product Brief assumptions are tested against market data
- [ ] Market risks are identified with mitigation strategies
- [ ] Opportunity is validated (or invalidated) with supporting evidence

Score each item 0-10. A minimum average of **7/10** is required to proceed to Phase 3.

> **HALT POINT**: Present the quality gate scores. If the opportunity is weak or the competitive landscape is unfavorable, recommend revisiting the Product Brief (Phase 1) before advancing. Ask: "Based on this analysis, do you want to proceed to Phase 3 (Requirements Engineering), pivot the product concept, or refine the market positioning?"

## Output

- **Primary artifacts**:
  - `output/02-market-analysis.md` — Market sizing, trends, and opportunity validation.
  - `output/03-competitive-analysis.md` — Competitor profiles, feature matrix, and positioning.
- **Location**: Written to the project's `output/` directory.
- **Format**: Markdown with YAML frontmatter. All data points cite their sources. HTML instruction comments removed.

## Validation

The output is complete and correct when:

1. Market sizing includes all three levels (TAM, SAM, SOM) with methodology explained.
2. At least 3 direct competitors and 2 indirect competitors are profiled.
3. The feature comparison matrix has at least 8 meaningful capability rows.
4. Every data point includes a source citation (URL, report name, or interview reference).
5. The opportunity validation section explicitly addresses each assumption from the Product Brief.
6. Both documents have no remaining placeholder text.

## Tips

- **Use real data, not fabrications.** If web search is available, use it. If a data point cannot be found, say "Data unavailable — recommend primary research" rather than making up numbers.
- **Competitors are not just products.** The spreadsheet, the intern, and the "we just don't do it" are often the biggest competitors. Document them.
- **Look at review sites for gold.** G2, Capterra, and TrustRadius reviews reveal what real users love and hate about competitors. These are your competitive gap indicators.
- **TAM is not your market.** Founders routinely inflate TAM by defining the market too broadly. Push for a realistic SOM based on go-to-market constraints.
- **Timing matters more than features.** The "Why now?" question is often more important than the "What?" question. If the market has existed for 10 years without a solution, understand why.
- **Be willing to kill the idea.** If the market data shows a saturated market with entrenched incumbents and no clear differentiation, say so. It is better to pivot at Phase 2 than to build something nobody needs.
- **Save your sources.** Every URL and report reference should be preserved in the document. Future phases will reference this data.
