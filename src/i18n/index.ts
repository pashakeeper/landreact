import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

export const supportedLngs = ["en", "de"] as const;
export type Lng = typeof supportedLngs[number];
export const fallbackLng: Lng = "de";

// Язык берём строго из URL (роутер передаст, см. router/index.tsx)
export function initI18n(initialLng: Lng) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        de: { translation: de }
      },
      lng: initialLng,
      fallbackLng,
      supportedLngs: Array.from(supportedLngs),
      interpolation: { escapeValue: false }
    });
  return i18n;
}
