"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
function Hero() {
  return (
    <div>
      {" "}
      <Swiper slidesPerView={1} modules={[Navigation]} navigation>
        <SwiperSlide>
          <div className="w-full aspect-[2.28] relative">
            <a
              href="https://wa.me/966543272134?text=هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
              target="_blank"
              rel="noopener noreferrer"
              title="هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
            >
              <Image src={"/header1.webp"} alt="hero image" fill />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full aspect-[2.28] relative">
            <a
              href="https://wa.me/966543272134?text=هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
              target="_blank"
              rel="noopener noreferrer"
              title="هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
            >
              <Image src={"/header2.webp"} alt="hero image" fill />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full aspect-[2.28] relative">
            <a
              href="https://wa.me/966543272134?text=هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
              target="_blank"
              rel="noopener noreferrer"
              title="هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
            >
              <Image src={"/header3.webp"} alt="hero image" fill />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
