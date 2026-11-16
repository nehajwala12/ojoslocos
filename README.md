# Ojos Locos: growing sales and EBITDA (CreditSwan, V1.9)

DRAFT - PENDING FULL DATA ACCESS. Prepared for Comvest.

A static site. One page, no build step.

    index.html    the packet (fourteen tabs, all charts, simulators and styles inline)
    vercel.json   clean URLs, plus headers that tell search engines not to index the page
    robots.txt    disallows all crawlers

## Deploy to Vercel

From this folder, with the Vercel CLI:

    npx vercel          # preview deployment
    npx vercel --prod   # production deployment

To replace the earlier deployment, answer "yes" when the CLI asks to link to an existing
project and pick the Ojos Locos project. Or push this folder to a Git repository and
import it in Vercel. Framework preset: Other. Build command: none. Output directory:
leave empty (the root).

## Before sharing the link

The packet is marked confidential. A Vercel URL can be opened by anyone who has it
unless Deployment Protection is switched on for the project in Vercel
(Project Settings, Deployment Protection). The noindex headers keep the page out of
search results; they do not restrict access.

## What is where

Tab 01, Overview, is the whole packet in brief: a board of six findings that each open
their detail, then one short section per part of the packet, the asks, and supporting
evidence.
Tabs 02 to 10 hold the commercial and operating plan: Diagnosis, Market (with outside
signals and a simulator), Stores, Levers (with three scenario simulators),
Revenue (where the sales gap sits by day, by drink and by event, three moves sized on a
planning case, the open revenue questions, and a simulator),
Path to $13M (the cost review: seven levers, insurance, store labor, purchasing and
promotions, timing, and two simulators), Overhead & cash (overhead, the sponsor fee, the
2027 cash forecast and a runway simulator), Way forward and Next steps.
Debt and financing considerations are in one section of tab 11, Appendix
(section C, "Financing considerations", which also holds a leverage simulator).
Tab 12 lists assumptions and links to every public source used.
Tab 13 is the FAQ, and tab 14, About CreditSwan, closes the packet.

## Changes since V1.2 (this file is not deployed)

V1.9 (16 Nov 2026)
- Built on V1.8 with a revenue read of the documents already in hand: the site-level model
  by store and period, the twelve weekly sales reports (Sunday against Monday to Saturday)
  and the company's event calendar. No new documents and no system access.
- New tab 06, Revenue (Exhibits 6.01 to 6.26, Simulator 6.A; 14 charts, 12 tables):
  Sundays are level with last year and the other six days are about 8% below; liquor per
  check is down about 14% against about 6% for beer; cover-charge income is down by more
  than four fifths and did not end (about $187K in periods 8 and 9, at 30 stores);
  discounts did not hold guests; the newest stores have lost about half their opening
  sales. Three moves are sized on a planning case of a quarter of each gap: about $3.8M of
  sales and about $2.6M of EBITDA a year, on top of the cost path and not counted in it.
  The tab also lists fifteen revenue questions the documents cannot yet answer.
- Later tabs move up one: Path to $13M is 07, Overhead & cash 08, Way forward 09,
  Next steps 10, Appendix 11, Assumptions 12, FAQ 13, About CreditSwan 14. Their exhibits,
  simulators and every cross-reference are renumbered (checked by script: 256 exhibits and
  simulators, 357 references, none unresolved).
- Overview: a Revenue tile replaces The prize tile on the board; new Revenue section
  (Exhibits 1.29 to 1.31); a revenue ask; the revenue planning case joins the assumptions.
- Corrections. Cover charges: the wording that they "ended" in January 2026 now says most
  did (Overview, Diagnosis, Market); Exhibit 2.06 is retitled. Its data already showed
  the income in periods 8 and 9. Sales by line: the Diagnosis now gives the change at the
  same 32 stores as well as for all stores (liquor -23%, beer -16%, food -2%).
- Guest counts. The site-level model holds no guest count by store for periods 2, 3 and 6
  of 2026 and repeats the 2025 figure in its consolidated sheet. Those points are removed
  from Exhibits 2.01 and 2.02 and the Guests tile, a caution is added in the Diagnosis,
  and A-03 says so. The ten-period averages elsewhere are unchanged and are within about a
  point of the seven-period figures; restating them is open.
- Next steps gains eight revenue asks (Exhibit 10.06). Assumptions A-42 to A-48 added,
  A-03 and A-15 updated. The FAQ gains five answers.
- Not changed: every figure, chart and simulator in the other tabs apart from the items
  above.

V1.8 (16 Nov 2026)
- Built on V1.7 and reworded for Comvest as the reader. The masthead no longer says
  "Intelligence packet"; reported speech about Comvest ("Comvest says", "Comvest believes")
  is replaced by "Comvest's read, from our call"; "the lender" is Comvest; "the files" are
  the documents Comvest shared; the Appendix section is "Financing considerations". No
  figure was changed by the rewording.
- Labelled DRAFT - PENDING FULL DATA ACCESS: in the masthead, in a band under it on every
  tab, in every section label, in the footer, in the page title and on every printed page.
- Outside signals added to tab 03, Market, all from public sources to 16 November:
  immigration enforcement and the election (section C, Exhibit 3.21), rival moves
  (new section, Exhibit 3.22), guest reviews (new section, Exhibit 3.23), and four new
  tables in Supporting evidence (Exhibits 3.24 to 3.27). Exhibits 3.03, 3.13 to 3.17 are
  brought up to date (Chili's latest quarter, Twin Peaks out of Chapter 11, the UFC date
  in Dallas). The Overview carries the summary (Exhibit 1.28).
- Two simulators added, both built with the brand's csSim: Simulator 3.A (what the gap to
  the Texas market is worth, and what further pressure on the guest would cost) and
  Simulator 6.B (insurance cost by rate and by sales). The packet now has eight.
- Assumptions A-38 to A-41 added; 23 public sources added with links; four FAQ answers
  added and the simulator and immigration answers updated.
- Not changed: tab order and numbering, every V1.7 exhibit number and cross-reference.

V1.7 (16 Nov 2026)
- Built on V1.6 with a line-by-line read of store and head-office cost in the site-level
  model (every store, January 2024 to period 10 of 2026), re-read against management's
  cost savings slides, the board deck extract, the cash forecast thread and Comvest's
  period 10 review. Comvest's own marks, ratings, internal plans and covenant proposals
  are still not used.
- New tab 06, Path to $13M (Exhibits 6.01 to 6.29, Simulator 6.A): seven cost levers on
  management's 2027 plan ($6.5M to a run-rate of about $13.5M, about $12.3M inside fiscal
  2027), insurance ($9.2M a year, 5.8% of sales), store labor against a Texas line,
  store purchasing, promotions, the timing of each lever and the sales sensitivity.
- Later tabs move up one: Overhead & cash is 07 (renamed from Cost & cash), Way forward 08,
  Next steps 09, Appendix 10, Assumptions 11, FAQ 12, About CreditSwan 13. Their exhibits,
  simulators and cross-references are renumbered. A few references left one behind by the
  V1.6 renumbering (the illustrative-exhibit lists and four Overview labels) are corrected.
- Overview: new headline and summary line, a Costs tile in place of the Way forward tile,
  a new section for tab 06 (Exhibits 1.25 to 1.27; 1.25 is redrawn as the seven-lever
  bridge), and a cost ask.
- Overhead & cash: new headline; the path section and Exhibits 7.08 and 7.20 now show
  overhead as one of the levers; Simulator 7.A phases the cost levers in on the timing of
  Exhibit 6.11 and reports fiscal 2027 and year-end run-rate EBITDA separately.
- Treatment change: of management's further $0.95M of savings for 2027, only the $0.3M of
  new supplier contracts is added to the plan; the rest reads as the full-year effect of
  cuts already in the period 11 cost base (assumption A-35). Lease exits are counted at
  half of the seven stores' losses.
- Next steps gains eight cost asks (Exhibit 9.05). Assumptions A-31 to A-37 added, A-30
  updated. Five public sources added. The FAQ gains four answers and two are rewritten.

V1.6 (13 Nov 2026)
- Built on V1.5 with the second file set shared from OneDrive on 12 November: Comvest's
  period 10 review, twelve weekly sales reports to 8 November, the event calendar and
  22 lease documents for eleven stores (eleven of them scanned and read by text recognition).
  Comvest's own marks, ratings, internal plans and covenant proposals in the review are not used.
- New tab 06, Cost & cash: the pro forma bridge, management's 2027 plan, overhead by line and
  the cuts (Exhibits 6.01 to 6.20), the sponsor fee and board travel, the add-backs, the cash
  runway and Simulator 6.A. Later tabs move up one: Way forward is 07, Next steps 08,
  Appendix 09, Assumptions 10, FAQ 11, About CreditSwan 12, and their exhibits are renumbered.
- Diagnosis gains a Recent weeks section (Exhibits 2.21 to 2.26).
- Stores gains an Exit cost section from the leases (Exhibits 4.21 to 4.24).
- Overview: the Target tile is replaced by a Cash tile; new sections Recent weeks and
  Cost and cash, and a lease finding under Stores (Exhibits 1.21 to 1.25).
- Next steps gains seven asks from the new files (Exhibit 8.04). Assumptions A-24 to A-30
  added. Five FAQ answers added. The Appendix notes that the forbearance expired on 30 October.


V1.3 and V1.4 rewrote no analysis; every sentence, figure and chart added to the Overview
is taken from the section it summarizes.

V1.5
- Material from a separate Comvest engagement is removed everywhere: one Way forward
  exhibit (the labor-gap exhibit is now 6.22), the related rows in Exhibits 6.15, 7.02,
  7.03, 8.01 and 8.14, and the sentences and counts that referred to them. Section 07 now
  lists six asks and five open questions, and the Appendix four parties.
- The chief executive is named. Joe Hummel (since April 2026) and Clay Mingus (chief legal
  officer) appear in Exhibit 8.01, the Overview timeline (Exhibit 1.20) and the Overview
  sales section, with a new FAQ answer and the public source listed in tab 09.
- Two headlines keep their meaning with fairer wording: Exhibit 6.15 now says management's
  sales actions are still new, and Market section G says the benchmarks can start before
  access is granted.
- Stores section G now says the first remodel would be measured against comparable stores
  before the rest are funded, and Way forward section A says the scope would be agreed
  first with the chief executive.

V1.4
- Overview rebuilt as a TL;DR of the whole packet. A summary board of six tiles comes first,
  five with a chart and each a link to its detail. New Market and Asks sections cover
  Section 03 and the asks in Sections 05, 07 and 08. A second chart under The prize sizes
  each lever.
- Overview exhibits are renumbered in reading order (1.01 to 1.20). The FAQ references and
  the register's "Used in" column follow.

V1.3
- Menu: the contents rail replaces the horizontal tab strip and sub-tab bar.
- About CreditSwan moves from tab 02 to the last tab. Tabs, labels, exhibit and simulator
  numbers and every cross-reference are renumbered to match.
- Every CreditSwan logo opens creditswan.com in a new tab. The packet's own simulator
  styles moved to a cs-scn namespace. The footer no longer shows a version label.
