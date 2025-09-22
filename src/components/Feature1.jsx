import Image from "next/image";
import React from "react";

function Feature1() {
  return (
    <div className="feature relative overflow-hidden">
      <div className="wrapper  flex items-center gap-8 p-[32px] border-[3px] border-white my-[30px] bg-[#191919] rounded-[20px] ">
        <div className="right flex-1 text-white relative z-[10]">
          <h3 className="text-[25px] font-bold mb-[30px] leading-[1.5]">
            {" "}
            تظليل عازل حراري لحماية ثلاثية
          </h3>
          <ul className="info flex flex-col gap-8 font-bold">
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              تقليل حرارة الشمس بمعدل TSER 75%
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              99% عزل للأشعة الفوق بنفسجية
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              حماية بدرجة 97% من الأشعة تحت الحمراء
            </li>
          </ul>
        </div>
        <div className="left flex-1 relative h-[330px] z-[10]">
          <Image
            src="/feature1.webp"
            className="rounded-[12px]"
            alt="feature car"
            fill
          />
        </div>
      </div>
      <div className="tint-overlay"></div>
    </div>
  );
}

export default Feature1;
