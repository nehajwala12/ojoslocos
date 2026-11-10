# Ojos Locos: growing sales and EBITDA (CreditSwan, V1.5)

A static site. One page, no build step.

    index.html    the packet (eleven tabs, all charts, simulators and styles inline)
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
evidence. It carries 16 charts.
Tabs 02 to 07 hold the commercial and operating plan: Diagnosis, Market, Stores,
Levers (with three scenario simulators), Way forward and Next steps.
Debt and lender considerations are in one section of tab 08, Appendix
(section C, "Lender considerations", which also holds a leverage simulator).
Tab 09 lists assumptions and links to every public source used in the Market tab.
Tab 10 is the FAQ, and tab 11, About CreditSwan, closes the packet.

## Changes since V1.2 (this file is not deployed)

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
