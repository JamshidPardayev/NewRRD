import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[450px] max-md:h-[400px] max-sm:h-[350px] my-1">
      <Swiper
        effect="coverflow"  
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // orqa soya olib tashlandi
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {[
          "nature-1.jpg",
          "nature-2.jpg",
          "nature-3.jpg",
          "nature-4.jpg",
          "nature-5.jpg",
          "nature-6.jpg",
          "nature-7.jpg",
          "nature-8.jpg",
        ].map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center gap-x-10">
            <div className="w-full h-[450px] max-md:h-[400px] max-sm:h-[350px] mx-auto bg-white rounded-xl overflow-hidden">
              <img
                src={`https://swiperjs.com/demos/images/${img}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
