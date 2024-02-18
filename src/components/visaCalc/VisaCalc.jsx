import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const VisaCalc = () => {
  const { t } = useTranslation();
  const [age, setAge] = useState("");
  const [visaResult, setVisaResult] = useState(0);
  return (
    <section className="visual-calc mt-[112px]">
      <div className="container">
        <div className="box flex justify-between">
          <div className="left flex flex-col w-2/5">
            <h1 className="text-30 font-semibold">{t("visaCalc.title")}</h1>
            <h2 className="text-[48px] font-extrabold">{t("visaCalc.text")}</h2>
          </div>
          <div className="right w-2/5 flex flex-col gap-5">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="visaCalc-input"
              placeholder={t("visaCalc.age")}
            />
            <select
              name="VisaCalcGender"
              id="VisaCalcGender"
              className="visaCalc-input"
            >
              {i18next
                .t("visaCalc.gender", { returnObjects: true })
                .map((item) => (
                  <option value={item?.name} key={item?.id}>
                    {item?.name}{" "}
                  </option>
                ))}
            </select>
            <select
              name="VisaCalcScholarship"
              id="VisaCalcScholarship"
              className="visaCalc-input"
            >
              {i18next
                .t("visaCalc.scholarship", { returnObjects: true })
                .map((item) => (
                  <option value={item?.name} key={item?.id}>
                    {item?.name}{" "}
                  </option>
                ))}
            </select>
            <select
              name="VisaCalcCourse"
              id="VisaCalcCourse"
              className="visaCalc-input"
            >
              {i18next
                .t("visaCalc.course", { returnObjects: true })
                .map((item) => (
                  <option value={item?.name} key={item?.id}>
                    {item?.name}{" "}
                  </option>
                ))}
            </select>
            <select
              name="VisaCalcLocation"
              id="VisaCalcLocation"
              className="visaCalc-input"
            >
              {i18next
                .t("visaCalc.location", { returnObjects: true })
                .map((item) => (
                  <option value={item?.name} key={item?.id}>
                    {item?.name}{" "}
                  </option>
                ))}
            </select>
            <div className="flex justify-between items-center">
              <p className="text-xl text-[#2D2C2C] ml-[30px]">
                {t("visaCalc.takingVisa")}
              </p>
              <input
                className="visaCalc-input"
                type="text"
                name="VisaResult"
                id="VisaResult"
                value={`${visaResult}%`}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaCalc;
