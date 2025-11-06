import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { IMAGES } from "../assets/images";
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="section_01" id="section_01">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <h1>{t("hero.title_1")}<span className="dot">.</span> <br />
                <span className="avatars_row">
                  <img src={IMAGES.avatar1} alt="Avatar 1" />
                  <img src={IMAGES.avatar2} alt="Avatar 2" />
                  <img src={IMAGES.avatar3} alt="Avatar 3" />
                  <i></i>
                </span> {t("hero.title_2")} <span className="colored">{t("hero.title_3")}</span>
                <span className="btn"><img src={IMAGES.arrowRight} alt="arrow right" /></span>
              </h1>
            </div>
            <div className="col-lg-3">
              <p className="description">{t("hero.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
