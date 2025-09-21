import Image from "next/image";
import React from "react";

const servicesItems = [
  {
    title: "نانو سيراميك",
    desc: "نانو سيراميك متطور للمعان فائق يدوم مع بريق جذاب ملفت للأنظار",
    img: "service1.webp",
  },
  {
    title: "تظليل عازل حراري",
    desc: "أحدث تقنيات تظليل السيارات بنسبة عزل حراري تصل حتى 85%",
    img: "service2.webp",
  },
  {
    title: "افلام حماية PPF",
    desc: "أفلام حماية PPF أمريكية بمعايير عالمية لجودة عالية مع ضمان 10 سنوات",
    img: "service3.webp",
  },
];

function Services() {
  return (
    <div className="services mt-2 w-full">
      <div className=" bg-main border-[3px] border-[#FFFFFFB8] rounded-[8px] text-center mx-[8]">
        <h1>خدمات جونسون لحماية السيارات</h1>
      </div>
      <div className="wrapper grid grid-cols-3 gap-8 mt-[28px]">
        {servicesItems.map((item, i) => (
          <div className="card rounded-[12px] overflow-hidden relative" key={i}>
            <div className="relative aspect-[1.27]">
              <Image src={`/${item.img}`} alt={item.title} fill />
            </div>
            <div className="details absolute bottom-[18px] right-[16px] text-white text-end font-bold">
              <h3 className="text-[22px]">{item.title}</h3>
              <p className="text-[14px]">{item.desc}</p>
            </div>
            <div className="hover_elm absolute top-0 -left-[100%] w-[100%] h-[100%] bg-[#07201bcc] transition-all duration-[.3]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
