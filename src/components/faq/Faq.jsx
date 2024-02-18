import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div className="faq mt-10">
      <div className="faq-child">
        <div className="container">
          <div className="box text-white pt-[101px] ml-[50%]">
            <div className="top mb-6">
              <h1 className="text-sm">{t("faq.title")}</h1>
              <h2 className="text-[38px] mt-1">{t("faq.ask")}</h2>
            </div>
            <div className="center w-3/4">
            {i18next.t("faq.data", { returnObjects: true }).map((item) => (
              <details key={item.id} className="mt-6">
                <summary className="text-[19px] flex items-center justify-between mb-4">
                  <span> {item?.id}. {item?.question} </span>{" "} <i className="bx bx-arrow-back summary-arrow text-xl"></i>
                </summary>

                <p className="text-sm mb-[25px]">{item?.answer}</p>
              </details>
            ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
