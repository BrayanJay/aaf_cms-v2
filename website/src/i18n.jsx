import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./contents/resources";

i18n.use(initReactI18next).init({
  resources, // Use only resources without branchesData
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
