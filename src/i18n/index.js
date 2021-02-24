import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { PT_BR } from '@constants/languages';
import resources from './translations';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb(PT_BR),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: PT_BR,
    debug: __DEV__,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
