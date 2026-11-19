# SEO & growth change log (before / after)

Every change: why, which URL, how it is validated, the before state, and the measured after state.
"After" is filled in only from real data (Search Console, lead log, GA4 once configured).

| ID | Date | Change | URL(s) | Reason (evidence) | Validation | Before | After |
|---|---|---|---|---|---|---|---|
| C1 | 2026-11-19 | Contact form now delivers leads: posts to `/api/lead.php`, which stores every lead (protected `/leads/` log) and emails info@alphaaheadllc.com; step-1 is validated and its data no longer discarded; honeypot + rate limit | /contact | F1: form discarded every submission (no network call; unnamed fields; step-1 unmounted) | Browser test: empty Next blocked, both steps' data stored, `generate_lead` fired. Live: deploy checks `/api/lead.php?health=1` (ok + storage writable) and `/leads/` = 403. Owner: confirm a real test email arrives | 0 leads captured (all lost) | Pending: count leads/week in `/leads/leads-YYYY-MM.jsonl` |
| C2 | 2026-11-19 | Careers application form delivers applications (same endpoint, `type=job_application`); non-functional CV upload replaced with clear "email your CV" instruction | /careers | F1: applications discarded; file field could never be delivered | Browser test: application stored with position, `job_application` event fired | 0 applications captured | Pending |
| C3 | 2026-11-19 | Lead source attribution: first landing page, referrer and UTM tags attached to every lead | all pages → /contact | F2: no way to know which pages/channels produce leads | Browser test: lead landed from `/blog/transaction-coordinator-cost` with referrer google.com + utm stored | No attribution | Pending: share of leads with google referrer / organic landing pages |
| C4 | 2026-11-19 | Conversion events ready for GA4: `generate_lead`, `job_application`, `click_call`, `click_email`, `click_whatsapp`; GA4 loads when `REACT_APP_GA4_ID` is set | sitewide | F2: no analytics at all, no GA4 property exists | dataLayer shows events in browser test; GA4 DebugView once the owner creates the property | No measurement | Pending GA4 property ID |

## Earlier work (for context, not re-done)
- 17-18 Nov: prerendering, metadata, schema, sitemap, redirects, 410s, hydration (mobile LCP 6.7 s → 0.55 s), new content pages.
- Result so far: 19 URLs indexed within ~36 h of sitemap submission; 3 clicks / 17 impressions (brand only) since 16 Nov.
