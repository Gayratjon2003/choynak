import React from "react";
import logo from "../../assets/img/logo.png";
import upArrow from "../../assets/img/up-arrow.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-[#418172]">
      <div className="footer-container ml-[180px] mr-[406px] pb-[120px]">
        <div className="box flex justify-between pt-[106px] font-normal text-white gap-x-[25px]">
          <div className="logo w-1/5">
            <Link to={routes.HOME}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="left w-[35%]">
            <p className="text-4xl">{t("footer.location")}</p>
          </div>
          <div className="center w-1/3">
            <ul>
              <li className="text-[35px]"> {t("footer.studyAbroad.title")} </li>
              {i18next
                .t("footer.studyAbroad.data", { returnObjects: true })
                .map((item) => (
                  <li key={item.id} className="text-30">
                    <Link to={item?.link}>{item?.text}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="right w-1/4">
            <ul>
              <li className="text-[35px]">{t("footer.support.title")}</li>
              <li className="text-30">
                <Link to={t("footer.support.conditions.link")}>
                  {t("footer.support.conditions.title")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom ml-[255px] mr-[60px] text-white mt-[73px]">
          <div className="child flex flex-col mb-8">
            <div>
              <a
                href="tel:+998916111444"
                target="_blank"
                className="text-[64px]"
              >
                (91) 611 14 44
              </a>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="mailto:hello@choynak.org"
                target="_blank"
                className="text-30"
              >
                hello@choynak.org
              </a>
              <p className="text-30">
                © {new Date().getFullYear()} {t("footer.allRightReserved")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#">
      <div className="fixed bottom-3 right-3">
        <div className="w-[70px] h-[70px] bg-white flex items-center justify-center rounded-full">
          <img src={upArrow} alt="Error" />
        </div>
      </div>
      </a>
    </footer>
  );
};

export default Footer;
