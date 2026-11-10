# Ojos Locos: growing sales and EBITDA (CreditSwan, V1.2)

A static site. One page, no build step.

    index.html    the packet (eleven tabs, all charts, simulators and styles inline)
    vercel.json   clean URLs, plus headers that tell search engines not to index the page
    robots.txt    disallows all crawlers

## Deploy to Vercel

From this folder, with the Vercel CLI:

    npx vercel          # preview deployment
    npx vercel --prod   # production deployment

Or push this folder to a Git repository and import it in Vercel.
Framework preset: Other. Build command: none. Output directory: leave empty (the root).

## Before sharing the link

The packet is marked confidential. A Vercel URL can be opened by anyone who has it
unless Deployment Protection is switched on for the project in Vercel
(Project Settings, Deployment Protection). The noindex headers keep the page out of
search results; they do not restrict access.

## What is where

Tabs 01 and 03 to 08 hold the commercial and operating plan:
Overview, Diagnosis, Market, Stores, Levers (with three scenario simulators),
Way forward and Next steps.
Debt and lender considerations are in one section of tab 09, Appendix
(section C, "Lender considerations", which also holds a leverage simulator).
Tab 10 lists assumptions and links to every public source used in the Market tab.
