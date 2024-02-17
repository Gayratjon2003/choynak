import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import flagEn from "../../assets/img/flag-en.png";
import topUni1 from "../../assets/img/topUni1.png";
import topUni2 from "../../assets/img/topUni2.png";
import topUni3 from "../../assets/img/topUni3.png";
import { Card } from "../index";
const universitiesData = [
  {
    title: "Университет Ливерпуля",
    flag: flagEn,
    location: "Великобритания",
    img: topUni1,
  },
  {
    title: "Университет Стэнфорд",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni2,
  },
  {
    title: "Университет Вебстер",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni3,
  },
  {
    title: "Университет Ливерпуля 222",
    flag: flagEn,
    location: "Великобритания",
    img: topUni1,
  },
  {
    title: "Университет Стэнфорд 222",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni2,
  },
  {
    title: "Университет Вебстер 222",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni3,
  },
  {
    title: "Университет Ливерпуля 333",
    flag: flagEn,
    location: "Великобритания",
    img: topUni1,
  },
  {
    title: "Университет Стэнфорд 333",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni2,
  },
  {
    title: "Университет Вебстер 333",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni3,
  },
];
const extraData = [
  {
    title: "Университет Ливерпуля",
    flag: flagEn,
    location: "Великобритания",
    img: topUni1,
  },
  {
    title: "Университет Стэнфорд",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni2,
  },
  {
    title: "Университет Вебстер",
    flag: flagEn,
    location: "Соединенные Штаты Америки",
    img: topUni3,
  },
];
const Filter = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(universitiesData);
  const handleShowMore = () => {
    const newData = [...data, ...extraData];
    setData(newData);
  };
  return (
    <section className="filter mt-[60px]">
      <div className="container">
        <div className="box">
          <div className="filter-top flex items-center justify-between mb-[47px]">
            <h1 className="text-30">{t("filter.title")}</h1>
            <button className="py-2.5 px-[37px] text-[25px] bg-[#0B6651] rounded-[12px] text-white">
              {t("filter.apply")}
            </button>
          </div>
          <div className="filter-selects flex items-center gap-5 justify-between mb-[47px]">
            <div className="allCountry">
              <select
                name="allCountry"
                id="allCountry"
                className="min-w-[180px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.allCountry.title")}</option>
                {i18next
                  .t("filter.allCountry.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.val} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="direction">
              <select
                name="direction"
                id="direction"
                className="min-w-[180px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.direction.title")}</option>
                {i18next
                  .t("filter.direction.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.name} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="lang">
              <select
                name="lang"
                id="lang"
                className="min-w-[180px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.lang.title")}</option>
                {i18next
                  .t("filter.lang.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.name} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="programm">
              <select
                name="programm"
                id="programm"
                className="min-w-[220px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.programm.title")}</option>
                {i18next
                  .t("filter.programm.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.name} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="reqLang">
              <select
                name="reqLang"
                id="reqLang"
                className="min-w-[230px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.reqLang.title")}</option>
                {i18next
                  .t("filter.reqLang.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.name} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="startSemester">
              <select
                name="startSemester"
                id="startSemester"
                className="min-w-[260px] h-[50px] filter-select-border rounded-[12px] pt-[11px] pl-[19px] pb-[15px] pr-[11px]"
              >
                <option value="all">{t("filter.startSemester.title")}</option>
                {i18next
                  .t("filter.startSemester.data", { returnObjects: true })
                  .map((item) => (
                    <option value={item?.name} key={item?.id}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="cards flex items-center justify-between gap-[15px] flex-wrap mb-[47px]">
            {data?.map((item, id) => (
              <Card
              key={id}
                width={500}
                height={422}
                id={""}
                title={item?.title}
                location={item?.location}
                flag={item?.flagEn}
                img={item?.img}
              />
            ))}
          </div>
          <div className="show-more flex items-center justify-center">
            <button
              onClick={handleShowMore}
              className="bg-[#E1E3E3] text-black text-2xl px-[26px] py-2.5"
            >
              {t("showMore")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
