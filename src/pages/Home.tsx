import { useState,} from "react";
import {useTranslation} from "react-i18next";
import Header from "../components/Header";
import {IMAGES} from "../assets/images";


export default function Home() {
    const {t} = useTranslation();
    const [active, setActive] = useState<number>(-1);
    const IMGS = [IMAGES.brain_1, IMAGES.brain_2, IMAGES.brain_3, IMAGES.brain_4];
    const visible = active < 0 ? 0 : active + 1;
    return (
        <>
            <Header/>
            <section className="section_01" id="section_01">
                <div className="container-fluid">
                    <div className="video_box">
                        <video src={IMAGES.video} autoPlay muted loop></video>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <h1>
                                {t("hero.title_1")}
                                <span className="dot">.</span> <br/>
                                <span className="avatars_row">
                                      <img src={IMAGES.avatar1} alt="Avatar 1"/>
                                      <img src={IMAGES.avatar2} alt="Avatar 2"/>
                                      <img src={IMAGES.avatar3} alt="Avatar 3"/>
                                      <i></i>
                                    </span>{" "}
                                {t("hero.title_2")}{" "}
                                <span className="colored">{t("hero.title_3")}</span>
                                <span className="btn_img"><img src={IMAGES.buttonImg} alt="button img"/></span>
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
                                    <i>
                                    <img src={IMAGES.dot} alt=""/>
                                  </i>
                                </span>
                            </a>
                            <div className="controls_box">
                                <div className="play_pause">
                                    <img src={IMAGES.play} alt="Play"/>
                                </div>
                                <div className="sound">
                                    <img src={IMAGES.sound} alt="Sound"/>
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
                        <img src={IMAGES.icon_main} alt=""/>
                    </div>
                </div>
                <div className="container section_02_container">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="#" className="sec_btn">
                                <i className="start"></i>
                                {t("btn.sec_btn_1")} <span>VS</span> {t("btn.sec_btn_1_1")}{" "}
                                <i></i>
                            </a>
                            <h2 className="text-center">
                                <span>{t("section_2.title_first_word")}</span>
                                {t("section_2.title")}
                            </h2>
                            <p className="desc">{t("section_2.desc")}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="section_2__box">
                                <div className="badge_secondary">
                                    {t("section_2.card_1.badge")}
                                </div>
                                <h3>{t("section_2.card_1.title")}</h3>
                                <p>{t("section_2.card_1.description")}</p>
                                <div className="list_title">
                                    {t("section_2.card_1.list_title")}
                                </div>
                                <ul>
                                    <li>{t("section_2.card_1.list.item_1")}</li>
                                    <li>{t("section_2.card_1.list.item_2")}</li>
                                    <li>{t("section_2.card_1.list.item_3")}</li>
                                    <li>{t("section_2.card_1.list.item_4")}</li>
                                </ul>
                                <div className="label_box">
                                    <div className="custom_label">
                                        <div className="label_dot">
                                            <img src={IMAGES.label_dot} alt="Label dot"/>
                                        </div>
                                        {t("section_2.card_1.label")}
                                    </div>
                                    <div className="text">{t("section_2.card_1.text")}</div>
                                    <div className="card_card">
                                        <img src={IMAGES.percent_icon} alt="Card Icon"/>
                                        <div className="card_title">
                                            {t("section_2.card_1.card_1_card.title")}
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="card_percent">
                                                {t("section_2.card_1.card_1_card.percent")}
                                                <span>%</span>
                                            </div>
                                            <div className="card_percent_text">
                                                {t("section_2.card_1.card_1_card.percent_text")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="section_2__box">
                                <div className="badge_secondary">
                                    {t("section_2.card_2.badge")}
                                </div>
                                <h3>{t("section_2.card_2.title")}</h3>
                                <p>{t("section_2.card_2.description")}</p>
                                <div className="list_title">
                                    {t("section_2.card_2.list_title")}
                                </div>
                                <ul>
                                    <li>{t("section_2.card_2.list.item_1")}</li>
                                    <li>{t("section_2.card_2.list.item_2")}</li>
                                    <li>{t("section_2.card_2.list.item_3")}</li>
                                    <li>{t("section_2.card_2.list.item_4")}</li>
                                </ul>
                                <div className="label_box">
                                    <div className="custom_label">
                                        <div className="label_dot">
                                            <img src={IMAGES.label_dot} alt="Label dot"/>
                                        </div>
                                        {t("section_2.card_2.label")}
                                    </div>
                                    <div className="text">{t("section_2.card_2.text")}</div>
                                    <div className="card_card">
                                        <div className="card_title">
                                            {t("section_2.card_2.card_1_card.title")}
                                        </div>
                                        <div className="card_description">
                                            {t("section_2.card_2.card_1_card.description")}%
                                        </div>
                                        <a href="#" className="main_btn">
                                              <span>
                                                {t("section_2.card_2.card_1_card.btn_text")}
                                                  <i>
                                                  <img src={IMAGES.dot} alt=""/>
                                                </i>
                                              </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_03" id="section_03">
                <div className="line"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex flex-wrap">
                            <h2>
                                {t("section_3.title_1")}{" "}
                                <span>{t("section_3.title_first_word")}</span>{" "}
                                {t("section_3.title_2")}
                            </h2>
                            <a href="#" className="sec_btn_small">
                                {" "}
                                <i className="start"></i>
                                {t("section_3.btn_text")} <i></i>
                            </a>
                            <div className="desc">{t("section_3.description")}</div>
                        </div>
                        <div className="col-lg-12">
                            <div className="section_03_box__container">
                                <div className="section_03_box">
                                    <div className="section_03_box__image">
                                        <img src={IMAGES.user_icon} alt="User Icon"/>
                                    </div>
                                    <div className="badge_secondary">
                                        {t("section_3.section_3__box.box_1.badge")}
                                    </div>
                                    <h3>{t("section_3.section_3__box.box_1.title")}</h3>
                                    <p>{t("section_3.section_3__box.box_1.description")}</p>
                                </div>
                                <div className="section_03_box">
                                    <div className="section_03_box__image">
                                        <img src={IMAGES.star_icon} alt="Star Icon"/>
                                    </div>
                                    <h3>{t("section_3.section_3__box.box_2.title")}</h3>
                                    <div className="section_03_box__title_bg">
                                        <img src={IMAGES.text_bg} alt="Tex bg"/>
                                    </div>
                                    <div className="user_image_box">
                                        <img src={IMAGES.user_box} alt="User Image"/>
                                    </div>
                                    <div className="section_03_box__description_box">
                                        <p>{t("section_3.section_3__box.box_2.description")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-12">
                            <div className="table_wrap">
                                <table className="table_custom">
                                    <thead>
                                    <tr>
                                        <th>{t("section_3.section_3__table.thead.th_1")}</th>
                                        <th>{t("section_3.section_3__table.thead.th_2")}</th>
                                        <th>{t("section_3.section_3__table.thead.th_3")}</th>
                                        <th>{t("section_3.section_3__table.thead.th_4")}</th>
                                        <th>{t("section_3.section_3__table.thead.th_5")}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{t("section_3.section_3__table.tbody.item_1")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_2")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_3")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_4")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_5")}</td>
                                    </tr>
                                    <tr>
                                        <td>{t("section_3.section_3__table.tbody.item_6")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_7")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_8")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_9")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_10")}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={IMAGES.table_icon} alt="Table Icon"/>
                                            {t("section_3.section_3__table.tbody.item_11")}
                                        </td>
                                        <td>
                                            <div className="avatars_row">
                                                <a href="#" className="plus">
                                                    <img src={IMAGES.plus} alt="Plus"/>
                                                </a>
                                                <img
                                                    src={IMAGES.table_avatar1}
                                                    alt="Table Avatar 1"
                                                />
                                                <img
                                                    src={IMAGES.table_avatar2}
                                                    alt="Table Avatar 2"
                                                />
                                                <img
                                                    src={IMAGES.table_avatar3}
                                                    alt="Table Avatar 3"
                                                />
                                                <img
                                                    src={IMAGES.table_avatar4}
                                                    alt="Table Avatar 4"
                                                />
                                            </div>
                                        </td>
                                        <td>{t("section_3.section_3__table.tbody.item_12")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_13")}</td>
                                        <td>{t("section_3.section_3__table.tbody.item_14")}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="section_3__note_1">
                                <div className="d-flex flex-wrap">
                                    <h3>{t("section_3.section_3__note_1.title")}</h3>
                                    <div className="badge_secondary">
                                        {t("section_3.section_3__note_1.badge")}
                                    </div>
                                </div>
                                <p>{t("section_3.section_3__note_1.description")}</p>
                                <div className="section_3__note_1__box">
                                    <div className="pre_title">
                                        {t("section_3.section_3__note_2.badge")}
                                    </div>
                                    <h3>{t("section_3.section_3__note_2.title")}</h3>
                                    <p>{t("section_3.section_3__note_2.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_04" id="section_04">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="#" className="sec_btn">
                                <i className="start"></i>
                                {t("section_04.btn_1")} <span>{t("section_04.separator")}</span>{" "}
                                {t("section_04.btn_2")} <i></i>
                            </a>
                            <h2>{t("section_04.title")}</h2>
                            <div className="description">
                                <p>{t("section_04.description_1")}</p>
                                <p>{t("section_04.description_2")}</p>
                            </div>
                            {/* TAbs */}
                            <div className="tabs_list nav">
                                {[
                                    {label: "ChatGPT", icon: IMAGES.gpt},
                                    {label: "Copilot", icon: IMAGES.copilot},
                                    {label: "AICONIQ", icon: IMAGES.table_icon, wrap: true},
                                ].map((tab, i) => (
                                    <button
                                        key={tab.label}
                                        type="button"
                                        className={`tab ${active === i ? "active" : ""}`}
                                        onClick={() => setActive(i)}
                                    >
                                        {tab.wrap ? (
                                            <span className="aiconiq_img_box"><img src={tab.icon} alt=""/></span>
                                        ) : (
                                            <img src={tab.icon} alt={tab.label}/>
                                        )}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="brain_stack">
                                {IMGS.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt=""
                                        className={`layer ${visible === i ? "is-visible" : ""}`}
                                        decoding="async"
                                    />
                                ))}
                            </div>
                            <a href="#" className="main_btn"><span>{t("btn.btn_1")}<i><img src={IMAGES.dot} alt="Btn dot"/></i></span></a>
                            <div className="cta_text">{t("section_04.cta_text")}<img src={IMAGES.cta_arrow} alt="Cta Arrow"/></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_05" id="section_05">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <a href="#" className="sec_btn">
                                <i className="start"></i>
                                {t("section_05.btn_text")} <i></i>
                            </a>
                            <h2>{t("section_05.title")}{" "}<span>{t("section_05.title_first_word")}</span></h2>
                        </div>
                    </div>
                    <div className="row animate_row">
                        <div className="col-lg-6 p-0">
                            <div className="section_03_box__image">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 animate_box">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
