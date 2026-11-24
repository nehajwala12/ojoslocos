# Ojos Locos: growing sales and EBITDA (CreditSwan, management edition 4.5)

DRAFT, built on Ojos's system data to FY2026 period 11 (closed monthly pack) and the weekly sales reports to 22 Nov 2026. Prepared 24 Nov 2026. This is the edition for Ojos Locos's management. It matches the Comvest 4.5 packet in layout and navigation, and the material kept for Comvest is left out.

One file, `index.html`. Open it in a browser, or deploy the folder as a static site to a separate Vercel project; it carries its own password page (below). `vercel.json` and `robots.txt` set clean URLs and block indexing, and `.vercelignore` keeps this README off the site.
What is new in 4.5 (24 Nov 2026)
- **Period 11 closed.** The FY2026 P11 monthly pack and the weekly reports to 15 and 22 Nov are in. P11: sales $11.72M (-7.0%), store profit $1.41M (12.0% against 13.4% a year earlier and the 10.4% forecast), adjusted EBITDA $0.52M (against $0.88M); same-store sales -6.6%, transactions -4.3%.
- **Run-rate windows, 24 Nov refresh.** The run-rate now uses periods 7 to 9 and 9 to 11 of 2026: periods 8 and 9 carried a hangover after the World Cup in period 7, and management takes P7-P9 as the better guide. P7-P9 +$6.85M, P9-P11 +$4.13M (P8-P10 +$0.85M kept as one mention). Base case with every saving $11.9M to $14.7M; FY2027 on the timing assumed $9.6M to $12.3M. Savings unchanged. Simulators restated; bridge (6.33) ends at P9-P11.
- **Run-rate restated** with store profit for periods 8 to 11 from the closed packs: P8-P10 +$0.85M, P9-P11 +$4.13M a year (was -$1.25M and +$1.62M): the packs carry no extra insurance week and P11 closed above the ledger as pulled. Base case with every saving $8.7M to $11.9M; FY2027 on the timing assumed $6.3M to $9.6M. Savings unchanged. Simulators restated.
- **New sections:** Overview, Period 11 and latest weeks (Start-here card 2; Exhibit 1.04) and 02 Diagnosis, Period 11 (Exhibits 2.36 to 2.39). The first three weeks of period 12 ran 9.8% below last year.
- **Restated:** bridge to the run-rate (6.33, 6.34), booking questions (6.35), reported history to P11 (2.32 to 2.35 and the Overview copy). **04 Stores:** Exhibit 4.36, the pack's list of stores with negative store profit for the year. Assumption A-60 added. Comvest-only material (covenant, cash, $13M target, sponsor fee) stays out.

What was new in 4.4 (23 Nov 2026)
- New section 03 Market, Customer survey (Exhibits 3.29 to 3.31, assumption A-59): Beckett Square's study of 1 Sep 2026, with cross-references in security, DJs and crew hours.
- Crew hours: California scheduling rules and the 2022/23 payroll-claims settlement in the 2027 budget. Insurance: the $0.53M premium audit from the GSP purchase.
- One-page summary (Overview, B) rebuilt as four tiles, three charts (Exhibits 1.01 to 1.03: run-rate to base case, the base case by quarter of FY2027, what the base case depends on) and eight short linked lines; the other Overview exhibits move up three numbers.
- Lever sizes and totals unchanged from 4.3.

Password (management edition)
- Before anything loads, the site shows a CreditSwan page with a single password box (no username). Password: **OjosLocos2026**. A correct password sets a cookie for 7 days, so the reader is not asked again on that browser. It is enforced on Vercel's servers by `middleware.js` (Vercel Routing Middleware), so the packet is never sent without it. `package.json` only marks the folder as an ES module; there is nothing to install.
- Deploy the whole folder (Vercel CLI `vercel --prod` from inside it, or a Git import). Framework preset: Other. After deploying, open the link in a private window: the password page should appear.
- To change the password, edit `PASSWORD` in `middleware.js` and redeploy.

How to find things
- **Start here.** Seven key sections are pinned at the top of the menu on every tab, and repeated as cards at the top of the Overview:
  1. One-page summary
  2. Period 11 and latest weeks (new in 4.5)
  3. Quick hits, Q4
  4. Savings at a glance
  5. Overhead
  6. Next 100 days
  7. Decisions

  Each card opens its summary on the Overview, and the line under it opens the full detail.
- **The Overview reads in two parts.**
  - Part 1 is the plan and what to do now: the seven sections above.
  - Part 2 is how the business got here: Position, Diagnosis, Market, Stores and Revenue.

  Every Overview section links to its detail, and its exhibits are numbered 1.01 to 1.18 in page order.
- **New on the Overview:** a one-page summary, and Quick hits, Q4 as its own section, with the table of the ten actions and their owners (Exhibit 1.02, from Exhibit 6.43).
- **Key sections.** Each detail tab, 02 to 09, opens with a line linking to its most-used sections.

What changed in 4.3 (23 Nov 2026)
- **Names taken out.** People appear by title only (CFO, VP of FP&A, CTO, outsourced controller and so on), including the data tables, the timeline and the access notes.
- **07 Overhead, Where to save:** the nine head-office roles removed in 2026 ($1.28M of base pay; the last $0.38M left in October); Sous Chef against the three accounting roles it replaced; store managers (145 across the 35 stores, three to six a store); the 1 January 2027 California salaried-pay floor. Pay is shown only in totals.
- **02 Diagnosis, Cost of goods:** management's reason for the liquor cost step-up (a 22oz frozen mug at $1 over the 16oz, and discounted daily drink specials), with the two actions it points to; the same note in the timeline and the liquor candidate.
- **Statuses:** loss runs requested; Sous Chef letter to come; lease renewal plans for seven stores to follow. Lever sizes and totals are unchanged.

What changed in 4.2 (23 Nov 2026)
- **02 Diagnosis, Reported history (new, first section):** adjusted EBITDA and store profit FY2024, FY2025 and the last twelve months from the company's own monthly packs, and the bridge between them (Exhibits 2.32 to 2.35). No $13M goal.
- **01 Overview:** Reported history added at the start of Part 2 (Exhibit 1.06); later Overview exhibits renumbered 1.07 to 1.14.
- **09 Appendix, Reporting consistency (new):** the restatement log and the three pack formats (Exhibits 9.28, 9.29).
- **08 Way forward:** new questions for the CFO, the outsourced controller and the VP of FP&A on the packs. **10 Assumptions:** A-58.
- **Later on 23 Nov:** the asks taken out (the four people in Decisions and asks, now Decisions; the one-page paragraph; Way forward's Questions by person, old Exhibits 8.15 to 8.18); cost savings alone stated in the one-page summary and Savings at a glance; MIT deferral and IT added as candidates in Exhibit 6.40.
- Left out on purpose, as in 4.1: the 2027 budget test, working capital, add-backs by vendor and the covenant schedule (Comvest edition only).

What is where
- 01 Overview
- 02 Diagnosis, 03 Market, 04 Stores, 05 Revenue
- 06 Savings: about $7.8M a year at the base case, and the ten quick hits
- 07 Overhead
- 08 Way forward
- 09 Appendix
- 10 Assumptions, 11 FAQ, 12 About CreditSwan

No figure, source or assumption was changed. Every figure in the one-page summary already appears elsewhere in this edition.
