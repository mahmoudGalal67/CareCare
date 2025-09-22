"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const brands = [
  "logo-1.png",
  "logo-2.png",
  "logo-3.png",
  "logo-4.png",
  "logo-5.png",
];

function Brands() {
  return (
    <div className="brands">
      <div className="wrapper py-[50px] px-[60px] border-[3px] border-white my-[30px] bg-brand rounded-[20px]">
        <h3 className="text-[34px] text-white font-bold text-center mb-[28px]">
          {" "}
          معتمد من
        </h3>
        <Swiper
          spaceBetween={50}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 }, // mobile
            640: { slidesPerView: 2, spaceBetween: 15 }, // sm
            768: { slidesPerView: 4, spaceBetween: 20 }, // md
            1024: { slidesPerView: 5, spaceBetween: 20 }, // lg
          }}
        >
          {brands.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="md:w-[200px] w-[120px] h-[100px] flex items-center justify-center">
                <img
                  src={`/brands/${item}`}
                  alt="brand image"
                  className="max-w-1/2"
                />
              </div>
            </SwiperSlide>
          ))}
          {brands.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-[200px] h-[100px] flex items-center justify-center">
                <img
                  src={`/brands/${item}`}
                  alt="brand image"
                  className="max-w-1/2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" bg-main border-[3px] border-[#FFFFFFB8] rounded-[8px] text-center mx-[8] my-[12px]">
        <h1> ظلل سيارتك ولا تعاني بحرارة الشمس</h1>
      </div>
    </div>
  );
}

export default Brands;
