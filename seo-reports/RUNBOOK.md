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
