import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure there is a div with id="root" in the HTML.');
}

// Pages are prerendered to static HTML for SEO. Remove the prerendered per-page head tags;
// the <Seo> component re-renders them on the client, so they are not duplicated.
document.head.querySelectorAll('[data-seo]').forEach(el => el.remove());

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// Report web vitals
reportWebVitals();
