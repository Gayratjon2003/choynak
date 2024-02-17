import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <section className="benefits">
      <div className="container">
        <div className="box">
          <h1 className="text-center text-[96px] pt-[94px] pb-[72px]">{t("benefits.title")} </h1>
          <div className="flex items-center justify-around">
            {i18next.t("benefits.data", { returnObjects: true }).map((item) => (
              <div className="flex flex-col items-center" key={item.id}>
                <img
                  src={item?.img}
                  alt=""
                  className="w-[120px] h-[120px] object-cover mb-2"
                />
                <h1 className="text-[56px]">{item?.num}+</h1>
                <p className="text-2xl w-3/4 text-center">{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
