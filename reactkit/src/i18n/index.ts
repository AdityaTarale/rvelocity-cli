import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './localize/en.json';
// Import additional languages as needed

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      // Add more languages here
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
