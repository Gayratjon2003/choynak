import React from "react";
import heroImg from "../../assets/img/hero1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import i18next from "i18next";
// Import Swiper styles
import "swiper/css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-box ml-[180px] mr-[117px] mt-[130px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="hero-swiper"
          >
            {i18next
                .t("heroData.cards", { returnObjects: true })
                .map((item) => (
                  <SwiperSlide key={item.id}>
              <div className="cover flex justify-between items-center">
                <div className="left w-1/2 flex flex-col items-start text-left">
                  <h1 className="text-[96px]">
                    {item.title}
                  </h1>
                  <p className="text-[40px] leading-[55px]">
                    {item.text}
                  </p>
                  <button className="bg-green rounded-xl nav-login-btn text-xl text-white py-4 px-5 ">
                    {item.btn}
                  </button>
                </div>
                <div className="right w-1/2">
                  <img src={process.env.PUBLIC_URL + item.img} alt="Error" className="min-h-[739px]" />
                </div>
              </div>
            </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
