import Image from "next/image";
import React from "react";

function Feature2() {
  return (
    <div className="feature">
      <div className="wrapper overflow-hidden relative flex lg:flex-row flex-col-reverse items-center gap-8 p-[32px] border-[3px] border-border my-[30px] bg-[#191919] rounded-[20px] ">
        <div className="right lg:flex-1 text-white relative z-[10]">
          <h3 className="text-[25px] font-bold mb-[30px] leading-[1.5]">
            {" "}
            لا تترك سيارتك عرضة للخدوش واحميها من{" "}
          </h3>
          <ul className="info flex flex-col gap-8 font-bold">
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              الحصى والرمل المتطاير
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              الخدوش البسيطة
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[28px] h-[28px] rounded-full flex justify-center  items-center bg-white text-[#0d47a1]">
                {" "}
                ✓
              </span>
              فضلات الطيور
            </li>
          </ul>
        </div>
        <div className="left lg:flex-1 relative lg:h-[330px] h-[200px] w-full z-[10]">
          <a
            href="https://wa.me/966543272134?text=هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
            target="_blank"
            rel="noopener noreferrer"
            title="هلا ومرحبا احتاج تفاصيل عن عروض اليوم الوطني ✨"
          >
            <Image
              src="/feature2.webp"
              className="rounded-[12px]"
              alt="feature car"
              fill
            />
          </a>
        </div>
        <div className="shine-overlay"></div>
      </div>
      <div className=" bg-main border-[3px] border-border rounded-[8px] text-center mx-[8]">
        <h1> احجز الآن</h1>
      </div>
    </div>
  );
}

export default Feature2;
