import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./assets/locales/ru/translation.json";
import en from "./assets/locales/en/translation.json";
const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
