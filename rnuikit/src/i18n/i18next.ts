import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';

// import { getLocales } from 'react-native-localize';
import {en} from './localize';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en', // getLocales()[0].languageCode,
  fallbackLng: 'en',
  debug: true, // based on env
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en
    }
  },
  react: {
    useSuspense: false /* in case you have any suspense related errors */
    /*
    Mark this false if you don't want to use suspense else
    you will end up getting a no fallback ui error for sure
    */
  }
});

const translate = (key: string): string => {
  return i18next.t(key);
};

export {i18next, translate};
