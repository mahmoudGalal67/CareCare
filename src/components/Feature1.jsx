import Image from "next/image";
import React from "react";

function Feature1() {
  return (
    <div className="feature">
      <div className="wrapper overflow-hidden relative flex lg:flex-row flex-col-reverse items-center gap-8 p-[32px] border-[3px] border-white my-[30px] rounded-[20px] ">
        <div className="right lg:flex-1 text-white relative z-[10]">
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
        <div className="left lg:flex-1 relative lg:h-[330px] h-[200px] w-full z-[10]">
          <Image
            src="/feature1.webp"
            className="rounded-[12px]"
            alt="feature car"
            fill
          />
        </div>
        <div className="tint-overlay"></div>
      </div>
    </div>
  );
}

export default Feature1;
