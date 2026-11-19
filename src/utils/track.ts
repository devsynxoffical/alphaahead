/**
 * Conversion tracking. Sends GA4 events when a GA4 measurement ID is configured
 * (REACT_APP_GA4_ID at build time); otherwise events are only pushed to window.dataLayer.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA4_ID = process.env.REACT_APP_GA4_ID || '';

export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    if (window.gtag) window.gtag('event', event, params);
    else window.dataLayer.push({ event, ...params });
  } catch {
    /* never break the page for analytics */
  }
}

/** Load GA4 (only when an ID is configured and never during prerendering). */
export function initAnalytics() {
  if (!GA4_ID || typeof window === 'undefined' || navigator.webdriver) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(s);
}

/** Track clicks on phone, email and WhatsApp links anywhere on the site. */
export function initClickTracking() {
  document.addEventListener(
    'click',
    e => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const page = window.location.pathname;
      if (href.startsWith('tel:')) track('click_call', { page, link: href });
      else if (href.startsWith('mailto:')) track('click_email', { page, link: href });
      else if (/wa\.me|whatsapp/i.test(href)) track('click_whatsapp', { page, link: href });
    },
    { capture: true }
  );
}
