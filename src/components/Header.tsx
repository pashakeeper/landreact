import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link, useLocation } from "react-router-dom";
import { initI18n, supportedLngs, fallbackLng, type Lng } from "../i18n";
import { IMAGES } from "../assets/images";

function useUrlLanguage(): Lng {
  const { lng } = useParams();
  const normalized = (lng || "").toLowerCase();
  return (supportedLngs as readonly string[]).includes(normalized)
    ? (normalized as Lng)
    : fallbackLng;
}
export default function Header() {
  const lng = useUrlLanguage();
  const i18n = useMemo(() => initI18n(lng), [lng]); 
  
  useEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  }, [lng, i18n]);

  const { t } = useTranslation();
  const location = useLocation();
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <Link to={"/"}>
                <img src={IMAGES.logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <nav className="d-flex flex-wrap">
              <div className="lang">
                <Link to={`/en${location.pathname.replace(/^\/(en|de)/, "")}`}>
                  EN
                </Link>
                <span> | </span>
                <Link to={`/de${location.pathname.replace(/^\/(en|de)/, "")}`}>
                  DE
                </Link>
              </div>
              <ul className="nav main_menu">
                <li>
                    <a href="/">{t("header.menu_1")}</a>
                </li>
                <li>
                    <a href="">{t("header.menu_2")}</a>
                </li>
                <li>
                    <a href="">{t("header.menu_3")}</a>
                </li>
                <li>
                    <a href="">{t("header.menu_4")}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
