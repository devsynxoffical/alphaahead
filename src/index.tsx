import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { setHydrating } from './utils/hydration';
import { captureAttribution } from './utils/attribution';
import { initAnalytics, initClickTracking } from './utils/track';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in the HTML.');
}

// Pages are prerendered to static HTML for SEO. Remove the prerendered per-page head tags;
// the <Seo> component re-renders them on the client, so they are not duplicated.
document.head.querySelectorAll('[data-seo]').forEach(el => el.remove());
// Enables scroll-reveal animations (content stays visible if JS never runs).
document.documentElement.classList.add('aa-js');

const app = (
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  // Prerendered page: hydrate (reuse the existing DOM) instead of re-rendering it.
  // Keeps the first paint as the LCP and avoids a full repaint when JS loads.
  setHydrating(true);
  ReactDOM.hydrateRoot(rootElement, app, {
    // A mismatch (e.g. a non-English browser language) makes React fall back to a client render, which is fine.
    onRecoverableError: err => console.warn('[hydration] recovered with client render:', (err as Error)?.message),
  });
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

// Lead attribution + conversion tracking (no-ops during prerendering)
if (!navigator.webdriver) {
  captureAttribution();
  initClickTracking();
  initAnalytics();
}

// Report web vitals
reportWebVitals();
