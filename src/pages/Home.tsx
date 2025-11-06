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
          <div className="row align-items-center">
            <div className="col-lg-9">
              <h1>
                {t("hero.title_1")}
                <span className="dot">.</span> <br />
                <span className="avatars_row">
                  <img src={IMAGES.avatar1} alt="Avatar 1" />
                  <img src={IMAGES.avatar2} alt="Avatar 2" />
                  <img src={IMAGES.avatar3} alt="Avatar 3" />
                  <i></i>
                </span>{" "}
                {t("hero.title_2")}{" "}
                <span className="colored">{t("hero.title_3")}</span>
                <span className="btn_img">
                  <img src={IMAGES.buttonImg} alt="button img" />
                </span>
              </h1>
            </div>
            <div className="col-lg-3">
              <p className="description">{t("hero.description")}</p>
            </div>
            <div className="line"></div>
            <div className="col-lg-4 d-flex">
              <a href="#" className="main_btn">
                <span>
                  {t("btn.btn_1")}
                  <i><img src={IMAGES.dot} alt="" /></i>
                </span>
              </a>
              <div className="controls_box">
                <div className="play_pause">
                  <img src={IMAGES.play} alt="Play" />
                </div>
                <div className="sound">
                  <img src={IMAGES.sound} alt="Sound" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 data_box">
              <div className="data_item">
                <div className="data_quant">
                  {t("description_with_data.data_1_quant")}
                </div>
                <div className="data_desc">
                  {t("description_with_data.desc_1")}
                </div>
              </div>
              <div className="data_item">
                <div className="data_quant">
                  {t("description_with_data.data_2_quant")}
                </div>
                <div className="data_desc">
                  {t("description_with_data.desc_2")}
                </div>
              </div>
              <div className="data_item">
                <div className="data_quant">
                  {t("description_with_data.data_3_quant")}
                </div>
                <div className="data_desc">
                  {t("description_with_data.desc_3")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_02" id="section_02">
        <div className="container-fluid grid_bg">
          <div className="icon_box">
            <img src={IMAGES.icon_main} alt="" />
          </div>
        </div>
        <div className="container section_02_container">
          <div className="row">
            <div className="col-lg-12">
              <a href="#" className="sec_btn">{t("btn.sec_btn_1")} <span>VS</span> {t("btn.sec_btn_1_1")}</a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
