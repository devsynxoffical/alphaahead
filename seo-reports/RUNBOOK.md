# 12-hour SEO monitoring & improvement runbook

Each run (every 12 hours) follows these steps. Data sources are first-party only:
Google Search Console via OpenSEO (project `56f978bb-6481-43ca-9a31-45af3ca171a4`, property `https://alphaaheadllc.com/`, no credits used)
and the live site. Never invent metrics, rankings, indexing or AI-citation results.

## 0. Strategy (DEVSYNX SEO plan, 20 Nov 2026)
- **Lanes:** Alpha Ahead targets general business outsourcing for US + UAE (virtual assistants, appointment setting,
  bookkeeping VA, executive/personal VA, B2B cold calling, lead generation, CRM management, digital) and Dubai real estate.
  **US real estate keywords belong to Zingo Assist** (real estate VA, transaction coordinator, real estate ISA,
  real estate cold calling, listing coordinator): never create or re-target Alpha Ahead pages for them.
  Former US real estate URLs 301 to https://zingoassist.us/ (`public/.htaccess`).
- **Keyword map:** `seo-reports/keyword-map-2026-11-20.csv` (target page per keyword, P1 = KD ≤ 20 first).
  In each run, check GSC for these keywords and their target pages; report P1 movement explicitly.
- **Content plan (1-2 posts/week, only as real questions/demand allow):** all 5 posts from the 20 Nov plan are published
  (appointment setter vs SDR, onboard a VA in 7 days, VA cost 2026, hiring a VA in Dubai, bookkeeping VA checklist).
  Next topics only from GSC queries or the keyword map, never duplicating a service page's keyword.
- **90-day targets (from plan; track, never fake):** ranking keywords 25 / 70 / 150, clean referring domains 8 / 18 / 30,
  organic visits/month 30 / 150 / 400, leads/month 1 / 4 / 10 at day 30 / 60 / 90 (from 20 Nov 2026).
- **Owner-only actions:** disavow junk backlinks (Semrush export → GSC disavow tool), Clutch/GoodFirms/Trustpilot/Upwork
  profiles, UAE directories, Dubai GBP (only if staff work at the Dubai office), exact Zingo URLs for the redirects,
  real pricing (pages are quote-only until then).

## 0b. Plan v2 (DEVSYNX detailed plan, 23 Nov 2026): rules and schedule
- Style: no em dashes anywhere; American English; titles <= 60 chars, descriptions <= 155; one H1; FAQ schema = visible FAQs.
- **7-day rule:** a page edited in the last 7 days gets only title/meta/FAQ changes; schedule the rest.
- Indexing: IndexNow (deploy step) and Bing only; do **not** use the Google Indexing API.
- Lanes: Alpha Ahead = general business VAs (US small business + executives), bookkeeping VA, executive/personal VA,
  offshore VA (Pakistan), B2B cold calling, CRM management, Dubai/UAE VAs. Real estate + property management = Zingo Assist;
  medical = Alpha Medi Assist. Appointment setting stays on Alpha Ahead (owner decision 23 Nov).
- Done 23 Nov: C25-C30 (other-services merge, PM guide to Zingo, titles/FAQs, cold calling legality guide, em dashes, disavow tool).
- **30 Nov (week 2):** homepage H1 "Virtual Assistants for Busy Founders, Executives and Small Teams" + sections (what assistants do,
  how hiring works in 4 steps, time zones, security/NDAs, sister brands; pricing and results only from the owner);
  bookkeeping page H1 "Bookkeeping Virtual Assistants Who Know QuickBooks and Xero" + VA vs CPA + security (read-only, 2FA) sections;
  /cold-calling full B2B rewrite (who it is for, scripts and lists, calls/reporting, compliance, FAQ; no real estate);
  /property-management rewrite as "Virtual Assistant for Operations Teams" (title/H1/body/FAQs).
- **14 Dec (weeks 4-5):** executive VA H1 "Executive Virtual Assistant for Founders and Executives" + body; personal VA body with limits;
  Pakistan page sections (why Pakistan, roles, hiring process, contracts and payments).
- **21 Dec (week 6):** check UAE volume for "virtual assistant dubai"; Arabic and AED pricing only if the owner confirms them.
- **From 4 Jan (weeks 7-12), one post per week:** bookkeeping VA vs accountant; 30 tasks to delegate to an executive assistant;
  how to hire a VA from Pakistan safely; B2B cold calling scripts that book meetings; how to give a VA secure access to your tools.
- Owner: disavow upload (run scripts/build-disavow.py on the Semrush export), own phone number (separate from Zingo) then
  update Organization schema, office address + GBP, Clutch/GoodFirms/Upwork/Crunchbase/LinkedIn, Dubai Chamber, real rates (USD/AED),
  2-3 client results with permission.
- 90-day goals (from 23 Nov): monthly impressions 1,000+, 100+ search terms with impressions, 3+ P1 keywords in the top 20.

## 0c. Structure plan v3 (DEVSYNX, 24 Nov 2026): owner decisions and schedule (overrides 0b where different)
- Page map: `seo-reports/page-map-2026-11-24.csv`.
- Owner decisions 24 Nov: KEEP /appointment-setting (indexed, pos 5.8); /property-management 301 to Zingo (done, C31);
  /other-services noindex (done, C32); industries confirmed: insurance agents, startups, coaches, lawyers, accountants.
  NOT confirmed: Amazon, ecommerce (do not build those pages).
- /home already 301s to / (.htaccess); real estate URLs 301 to zingoassist.us homepage until the owner confirms the exact Zingo URLs
  (/blog/transaction-coordinator-vs-virtual-assistant and /wholesale-real-estate-cold-calling could not be verified on 24 Nov).
- Location pages (UAE hub, Abu Dhabi, outsourcing Dubai, lead generation Dubai, Florida, locations hub): DO NOT publish until the owner
  confirms the office (staffed, real address), clients in that area, and facts are verified from official sources.
- Industry page template: in short, tasks, tools (only ones the owner confirms), compliance/licensing limits (e.g. unlicensed VA cannot
  quote or bind insurance), pricing (owner), results (owner), FAQ; links to /virtual-assistant, /bookkeeping-virtual-assistant or
  /cold-calling, 2 other industries, and /blog/virtual-assistant-cost.
- Schedule: 30 Nov week 2 (retarget /virtual-assistant to "virtual assistant for small business", /business-assistant to executive VA,
  plus v2 homepage/bookkeeping/cold calling items); 24 Nov (owner asked not to wait): all 5 industry pages + /industries hub LIVE (C34-C35);
  7 Dec personal VA + Pakistan page sections; 4 Jan data entry VA page, location pages if confirmed, blog support posts.

## 0d. Weekly content run (owner approved 25 Nov 2026: 1 new page or post per week)
Every Thursday the weekly scheduled task publishes ONE new page or post:
1. Pick the best unused topic: first any real GSC query (non-brand, 2+ impressions) with no dedicated page; else the next item
   in the queue below. Never duplicate an existing page's primary keyword; never target Zingo (real estate) or Alpha Medi Assist
   (medical) lanes; location pages only after the owner confirms the office/clients.
2. Sourced facts only (official sources for laws, wages, rules); no invented prices, results, tools or testimonials.
3. Link it from 1-2 related indexed pages and link out to 1-2 service pages. No em dashes. Build + audit (title <= 60,
   description <= 155, one H1, no raw markdown, no mobile overflow). Log a C-row, commit + push as devsynx, confirm deploy green.
4. Mark the topic done in the queue and report to the owner.

Queue (update as items ship):
- [skipped 25 Nov] Virtual assistant per hour rate: better served by /blog/virtual-assistant-cost (would cannibalize); revisit its title if impressions grow
- [x] 25 Nov: /blog/insurance-virtual-assistant-tasks (C37)
- [x] 26 Nov: /blog/executive-assistant-tasks (C38)
- [ ] Bookkeeping virtual assistant vs accountant: who does what (post)
- [ ] How to hire a virtual assistant from Pakistan safely (post)
- [x] 27 Nov: /blog/b2b-cold-calling-scripts (C46)
- [ ] How to give a VA secure access to your tools (post)
- [ ] Virtual assistant cost in Dubai (post, sourced; supports /virtual-assistant-dubai)
- [x] 27 Nov: /data-entry-virtual-assistant (C44)
- [ ] Startup VA tasks for founders (post, supports /virtual-assistant-for-startups)

## 0e. Owner facts (27 Nov 2026)
The owner has no access to management facts (pricing, contracts, vetting, backup cover, founding year, team size) and only has website + Search Console access. Skip every item that needs those facts; never ask again unless the owner offers them. Owner actions are limited to Search Console (request indexing, live URL test, manual actions) and Bing Webmaster Tools.

## 1. Collect
- Index status for all sitemap URLs is printed by the "Submit sitemap to Google Search Console" step of each deploy run (service account, Search Console API).
- GSC performance, last 7 and last 28 days: totals by `date`, top `query`, top `page`, `query`+`page` (cannibalization), `country`, `device`.
- Striking-distance queries: position 4–20 with impressions (minImpressions 10 while data is small).
- High-impression / low-CTR queries (CTR well below position norm).
- URL Inspection (max 10 URLs per run, rotate through the sitemap): index status, last crawl, Google-selected canonical.
- Live health: latest "Deploy to iHosting (FTP)" GitHub Actions run is green (it checks routes, redirects, 410s, crawler access, images).

## 2. Compare
- Load the previous `seo-reports/snapshots/*.json` and compute deltas: clicks, impressions, CTR, avg position per page and per query.
- Flag: newly indexed pages, pages that dropped out, queries gaining/losing ≥3 positions, new queries, cannibalization (≥2 URLs for one query).

## 3. Improve (only when the data justifies it; max 3 focused changes per run)
- Low CTR at a good position → rewrite that page's title/description (src/seo/pageMeta.ts or the article's metaTitle/metaDescription).
- Query at position 4–20 → strengthen the ranking page: add a section/FAQ answering that exact query, add internal links from related pages.
- Cannibalization → differentiate titles/H1s and point internal links to the intended page.
- Not indexed after 14+ days → add internal links to it from strong pages; list it for manual "Request indexing".
- New content only where a real query shows demand and no page covers it. No thin or duplicate pages.
- Keep facts to what is on the site; no invented stats, prices, testimonials or claims.

## 4. Ship
- `npm run build` + `npm run prerender` must pass; run `python3 scripts/audit-seo.py build` (one H1, unique titles/descriptions, no duplicates).
- Commit and push to `main` as **devsynx** (see CLAUDE.md, no AI attribution lines). The deploy workflow verifies the live site; confirm it is green.

## 5. Report
- Save `seo-reports/snapshots/<YYYY-MM-DD>-<am|pm>.json` (raw numbers) and `seo-reports/<YYYY-MM-DD>-<am|pm>.md`
  (summary, deltas, what changed, what needs the owner). Report-only commits don't trigger a deploy.
- Post a short summary to the owner: key numbers vs last run, changes shipped, manual actions needed.
