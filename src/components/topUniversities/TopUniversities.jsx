import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/img/left-icon-regular.png";
import { Card } from "../index";
import flagEn from "../../assets/img/flag-en.png";
import topUni1 from "../../assets/img/topUni1.png";
import topUni2 from "../../assets/img/topUni2.png";
import topUni3 from "../../assets/img/topUni3.png";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const topUniversities = [
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

const TopUniversities = () => {
  const { t } = useTranslation();
  return (
    <section className="topUniversities mt-[77px] mb-[144px]">
      <div className="container">
        <div className="box">
          <div className="top flex justify-between items-center font-bold text-4xl mb-5">
            <h1>{t("topUniversities.title")} </h1>
            <Link to={"/"} className="flex items-center justify-center">
              {" "}
              <span className="mr-[14px]">{t("viewAll")} </span>{" "}
              <img src={leftArrow} />{" "}
            </Link>
          </div>

          {/* Swiper */}

          <div className="mt-4">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={15}
              initialSlide={1}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="topUniversities"
            >
              {topUniversities?.map((item, id) => (
                <SwiperSlide key={id}>
                  <Card
                    width={509}
                    height={422}
                    id={""}
                    title={item?.title}
                    location={item?.location}
                    flag={item?.flagEn}
                    img={item?.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;
