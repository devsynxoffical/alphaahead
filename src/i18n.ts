import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import ur from './locales/ur/translation.json';
import ar from './locales/ar/translation.json'; 

i18n
  .use(LanguageDetector)      
  .use(initReactI18next)      
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      ur: { translation: ur },
      ar: { translation: ar }
    },
    fallbackLng: 'en',
    // Resources are bundled, so initialise synchronously: the first render (hydration of the
    // prerendered HTML) must already have translated text.
    initAsync: false,
    supportedLngs: ['en', 'es', 'fr', 'ur','ar'],
    interpolation: { escapeValue: false }
  });

export default i18n;
