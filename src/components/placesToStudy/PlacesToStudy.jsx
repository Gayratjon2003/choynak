import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/img/left-arrow.png";
import { Card } from "../index";
import flagEn from "../../assets/img/flag-en.png";
import img from "../../assets/img/placesToStudy.png";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const PlacesToStudy = () => {
  const { t } = useTranslation();
  return (
    <section className="placesToStudy">
      <div className="container">
        <div className="box">
          <div className="top flex justify-between items-center font-bold text-4xl mb-5">
            <h1>{t("placesToStudy.title")} </h1>
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
              spaceBetween={30}
              initialSlide={1}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="placesToStudy"
            >
              <SwiperSlide>
                <Card
                  width={674}
                  height={450}
                  id={""}
                  title=""
                  location=""
                  flag={""}
                  img={img}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  width={674}
                  height={450}
                  id={""}
                  title=""
                  location=""
                  flag={""}
                  img={img}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  width={674}
                  height={450}
                  id={""}
                  title=""
                  location=""
                  flag={""}
                  img={img}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesToStudy;