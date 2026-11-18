# 12-hour SEO monitoring & improvement runbook

Each run (every 12 hours) follows these steps. Data sources are first-party only:
Google Search Console via OpenSEO (project `56f978bb-6481-43ca-9a31-45af3ca171a4`, property `https://alphaaheadllc.com/`, no credits used)
and the live site. Never invent metrics, rankings, indexing or AI-citation results.

## 1. Collect
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
