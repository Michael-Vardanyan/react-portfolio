import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from './languages/de.json';
import en from './languages/en.json';

i18n.use(initReactI18next).init({
    resources: {
        de: {
            translation: de,
        },
        en: {
            translation: en,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
