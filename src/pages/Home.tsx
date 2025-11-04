import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
    <Header />

    </>
  );
}
