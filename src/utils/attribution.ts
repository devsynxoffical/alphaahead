/**
 * First-touch attribution kept for the browser session, attached to every lead so we can tell
 * which leads came from Google organic, ads, referrals or direct, even without GA4.
 */
const KEY = 'aa_attribution';

export interface Attribution {
  landing: string;
  referrer: string;
  utm: Record<string, string>;
}

export function captureAttribution() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ['source', 'medium', 'campaign', 'term', 'content'].forEach(k => {
      const v = params.get(`utm_${k}`);
      if (v) utm[k] = v.slice(0, 120);
    });
    const data: Attribution = {
      landing: window.location.pathname,
      referrer: document.referrer.slice(0, 300),
      utm,
    };
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: attribution is best-effort */
  }
}

export function getAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { landing: '', referrer: '', utm: {} };
}
