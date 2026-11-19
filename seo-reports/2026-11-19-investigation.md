# Investigation: why alphaaheadllc.com is not performing (19 Nov 2026)

Method: first-party data only (Google Search Console via OpenSEO, URL Inspection API, the live
codebase), plus live Google SERP checks. No GA4 data exists (see finding 2).

## 1. Baseline

| Window | Clicks | Impressions | Note |
|---|---|---|---|
| Last 28 days (2026-10-20..11-16) | 2 | 10 | all from 16 Nov onward |
| Previous 28 days (09-22..10-19) | 0 | 0 | |
| Last 3 months (08-18..11-17) | 3 | 17 | all from 16 Nov onward |
| Previous 3 months (05-18..08-17) | 0 | 0 | |
| Reference: 2025-10-14..2026-01-12 | 68 | 735 | before the gap |

- Search visibility was zero from 2026-01-13 to 2026-11-15 (10 months), even for the brand name.
- Every query ever recorded is a brand query ("alpha ahead", "alpha ahead llc", "ahead llc"). Non-brand demand captured: **none, ever**.
- Index status today: 19 URLs confirmed indexed (all service pages, hub, Dubai pages, /blog, Zingo case study).
  Not yet confirmed: /about, 6 blog posts, 2 case studies, Tampa page, /clients, /projects, /careers.
- Leads: **unknown and unknowable**, because the contact form never sent anything (finding 1).

## 2. Findings, ranked by business impact

### F1. Every website enquiry has been lost (critical, conversion)
Evidence: `src/pages/ContactUs.tsx` `handleFormSubmit` only shows a thank-you message; no email/API call.
Inputs have no `name`/state, and the step-1 "Next" button skips validation, then unmounts step-1 fields.
The careers form (`src/pages/Careers.tsx`) does the same. Visitors who submitted believed they had contacted you.

### F2. No measurement at all (critical, decision-making)
Evidence: no GA4/GTM/pixel in `public/index.html` or `src/`; no GA4 property for alphaaheadllc.com in the
connected Google accounts (7 other sites have one). Organic sessions, conversions and lead sources cannot be measured.

### F3. The brand has no off-site footprint (high, rankings + AI visibility)
Evidence: a Google search for "alphaaheadllc.com" returns zero third-party mentions; "Alpha Ahead LLC" virtual assistant
returns a different company (Alpha Assistant, which has Clutch/GoodFirms/BBB profiles). Competitors ranking for
our targets (MyOutDesk, Stealth Agents, Call Savvys) have directory profiles, reviews and many backlinks.
Without third-party signals, a new site rarely ranks for commercial terms, and AI engines have nothing to cite.

### F4. Keyword targeting was too ambitious for a zero-authority domain (high, rankings)
Evidence: SERPs for "real estate cold calling services", "remote transaction coordinator for realtors",
"virtual assistant company Pakistan for US real estate" are dominated by Fiverr/Upwork listings (from ~$8/h),
programmatic content sites (callin.io), job boards and established agencies (MyOutDesk, Stealth Agents).
The 17 Nov plan picked "low competition" terms from SERP impressions without volume or authority data; for this
domain they are realistic only after authority is built. Honest assessment: correct topics, unrealistic timeline.

### F5. Content is generic and unproven (medium, rankings + conversion)
Evidence: duplication is low (service pages share 8-20% of 5-word phrases; max pair overlap 7%), so this is not a
duplicate-content problem. The problem is that the legacy service copy makes claims with no proof
("Expert Team with Proven Track Record", "years of experience") and the site has no prices, testimonials, named
results, onboarding timeline or reviews, which are exactly what the ranking competitors show.

### F6. Positioning is diluted (medium)
13 services: 7 staffing/real-estate services + 6 generic digital-agency services (SEO, web, digital marketing,
graphic design, video, IT support) that compete with tens of thousands of agencies. No impressions data yet to
judge them; **do not delete indexed pages without data**. Re-evaluate at 90 days: pages with 0 impressions then
become candidates for consolidation into /services.

### F7. The 10-month visibility gap (cause not provable from the API)
Evidence: GSC data stops 2026-01-12 and resumes 2026-11-16. Google had recorded spam URLs (/items/*.html) and
WordPress demo pages (/hello-world/, /sample-page/) on this domain, typical of a compromised or replaced install.
Owner check needed in the Search Console UI: **Security issues** and **Manual actions** (not exposed by the API).

### What was NOT the problem
- Duplicate content (measured above).
- Crawlability/indexing of the new pages: 19 indexed within ~36 h of sitemap submission.
- Core Web Vitals after 18 Nov fixes (mobile LCP ~0.55 s on service pages, CLS 0).

## 3. Opportunities ranked by business impact

| # | Opportunity | Impact | Effort | Owner |
|---|---|---|---|---|
| 1 | Make the contact form deliver leads (email + server log) with source attribution | Every future lead | Low | Us, now |
| 2 | Measurement: GA4 + lead/call/WhatsApp/email events | Ability to prove growth | Low | Owner creates GA4 property; code ready |
| 3 | Off-site entity: Google Business Profiles (St. Petersburg, Dubai), Clutch, GoodFirms, LinkedIn page, links from own sites (zingoassist.us, alphamediassist.com, learnwithalpha.com) | Rankings + AI citations | Medium | Owner (accounts) |
| 4 | Proof on money pages: real testimonials, pricing ranges, onboarding timeline, named results | Conversion + rankings | Medium | Owner supplies facts, we publish |
| 5 | Re-target near-term keywords to brand + long-tail + local, measured monthly in GSC | Rankings | Low | Us, monthly |
| 6 | Consolidate zero-impression generic service pages after 90 days | Focus | Low | Us, Feb 2027 |
