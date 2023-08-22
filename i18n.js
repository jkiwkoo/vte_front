import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import English from '@/lang/English';
import Korean from '@/lang/Korean';
import Chinese from '@/lang/Chinese';

const resources = {
  en: { translation: English },
  ko: { translation: Korean },
  cn: { translation: Chinese },
};

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'ko',
    fallbackLng: {
      en: ['en'],
      ko: ['ko'],
      cn: ['cn'],
      default: ['ko'],
    },
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;