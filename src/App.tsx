import { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { initI18n, supportedLngs, fallbackLng, type Lng } from "./i18n";

export default function App() {
  const { lng } = useParams();
  const normalized = (lng || "").toLowerCase();
  const lang = (supportedLngs as readonly string[]).includes(normalized)
    ? (normalized as Lng)
    : fallbackLng;

  // Ensure i18n is initialized before any child calls useTranslation()
  useMemo(() => initI18n(lang), [lang]);

  return (
    <>
      <Outlet />
    </>
  );
}
