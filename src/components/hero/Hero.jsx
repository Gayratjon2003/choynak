import React from "react";
import heroImg from "../../assets/img/hero1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
            navigation={true}
            modules={[Pagination]}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="cover flex justify-between items-center">
                <div className="left w-1/2 flex flex-col items-start text-left">
                  <h1 className="text-[96px]">
                    Самые крутые студенты только для вас!
                  </h1>
                  <p className="text-[40px] leading-[55px]">
                    Спешите оставить заявку!
                  </p>
                  <button className="bg-green rounded-xl nav-login-btn text-xl text-white py-4 px-5 ">
                    Оставить заявку
                  </button>
                </div>
                <div className="right w-1/2">
                  <img src={heroImg} alt="Error" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cover flex justify-between items-center">
                <div className="left w-1/2">
                  <h1 className="text-[96px]">
                    222Самые крутые студенты только для вас!
                  </h1>
                  <p className="text-[40px] leading-[55px]">
                    Спешите оставить заявку!
                  </p>
                  <button className="bg-green rounded-xl nav-login-btn text-xl text-white py-4 px-5 ">
                    Оставить заявку
                  </button>
                </div>
                <div className="right w-1/2">
                  <img src={heroImg} alt="Error" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cover flex justify-between items-center">
                <div className="left w-1/2">
                  <h1 className="text-[96px]">
                    33Самые крутые студенты только для вас!
                  </h1>
                  <p className="text-[40px] leading-[55px]">
                    Спешите оставить заявку!
                  </p>
                  <button className="bg-green rounded-xl nav-login-btn text-xl text-white py-4 px-5 ">
                    Оставить заявку
                  </button>
                </div>
                <div className="right w-1/2">
                  <img src={heroImg} alt="Error" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
