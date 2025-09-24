import Image from "next/image";
import React from "react";

const features = [
  {
    title: "تركيب احترافي واهتمام بأدق التفاصيل",
    desc: "نحرص على العناية بكل التفاصيل لتركيب دقيق، احترافي بدون أي أخطاء تذكر لمنتج يدوم لسنوات وسنوات.",
    img: "img1.webp",
    logo: "feature1.webp",
  },
  {
    title: "أحدث التقنيات والخامات العالمية",
    desc: "نستخدم منتجات أمريكية عالية الجودة، معتمدة من أقوى الجهات المختصة تضمن استمرار الحماية والعزل الحراري مع ضمانات عالمية.",
    img: "img2.webp",
    logo: "feature2.webp",
  },
  {
    title: "خدمة عملاء ومتابعة مستمرة",
    desc: "رضا العملاء هو أولويتنا، لذا نقدم خدمة عملاء على أعلى مستوى ومتابعة مستمرة مع العملاء للتأكد من توفير تجربة مريحة وسهلة.",
    img: "img3.webp",
    logo: "feature3.webp",
  },
  {
    title: "أجود أنواع العزل الحراري الفاخر",
    desc: "استمتع بعزل حراري يصل حتى 75% بسمك 2.0 مل لمتانة ملحوظة حيث يستمر بدون أي تشققات أو تغيير لون.",
    img: "img4.webp",
    logo: "feature4.webp",
  },
];

function WhyToChoose() {
  return (
    <div className="whyChoose">
      <div className=" bg-main border-[3px] border-border rounded-[8px] text-center mx-[8] my-[5]">
        <h1>خدمات CARZILL لحماية السيارات</h1>
      </div>
      <p className="text-[18px] font-bold leading-[40px] text-white text-justify mt-5">
        الوكيل المعتمد لشركة CARZILL الأمريكية في المملكة العربية السعودية
        المتخصصة في منتجات حماية وتظليل السيارات بخبرة لأكثر من 16 عام وضمان يصل
        حتى 10 سنوات. نقدم باستمرار أعلى مستويات الجودة والدقة في تنفيذ خدماتنا
        بالتركيز علي أدق التفاصيل.
      </p>
      <div className="wrapper grid lg:grid-cols-2 grid-cols-1 gap-5  my-12">
        {features.map((item, i) => (
          <div
            className="card relative"
            key={i}
            style={{ backgroundImage: `url(/features/${item.img})` }}
          >
            <div className="card-wrapper  z-[100] min-h-[360px] rounded-[20px] flex flex-col items-center justify-center text-white md:p-12 p-5">
              <Image
                src={`/features/${item.logo}`}
                alt=""
                width={60}
                height={60}
                className="mb-3"
              />
              <span className="text-[24px] font-bold mb-[12px] text-center">
                {item.title}
              </span>
              <p className="text-[19px] text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="action-box style3">
        <div className="flex justify-center items-center gap-[25px] flex-wrap my-[30px]">
          <a
            href="tel:0549956052"
            className="btn-box bg-main md:w-[180px] w-[140px] h-[60px] flex justify-center items-center md:gap-[12px] gap-[8px] text-white font-bold lg:text-[18px] text-[15px]  rounded-[30px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={30}
              height={30}
              fill="white"
            >
              <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
            </svg>
            <span>اتصل بنا</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B966549956052&amp;text=%D8%B9%D8%B1%D9%88%D8%B6%20%D8%AC%D9%88%D9%86%D8%B3%D9%88%D9%86%20%D9%84%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A&amp;type=phone_number&amp;app_absent=0"
            className="btn-box bg-[#25d366] md:w-[180px] w-[140px] h-[60px] flex justify-center items-center md:gap-[12px] gap-[8px] text-white font-bold lg:text-[18px] text-[15px] rounded-[30px]"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={30}
              height={30}
              fill="white"
            >
              <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
            </svg>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyToChoose;
