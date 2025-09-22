"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const counters = [
  {
    title: "سنوات خبرتنا",
    number: 16,
  },
  {
    title: "عملائنا",
    number: 1250,
  },
  {
    title: "سيارات تم خدمتها",
    number: 2500,
  },
];

function Counter() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.5, // start when 50% visible
  });
  return (
    <div ref={ref} className="counter">
      <div className="wrapper flex justify-between gap-5 flex-wrap">
        {counters.map((item, i) => (
          <div
            key={i}
            className="item p-[30px] min-w-[280px] bg-white flex-1 rounded-[15px] flex flex-col items-center justify-center gap-3
            transform transition duration-500 ease-in-out hover:-translate-y-5
            "
          >
            {inView && (
              <CountUp
                start={0}
                end={item.number}
                duration={1.75}
                suffix=" +"
                className="text-[38px] font-bold text-[#022f6c]"
              />
            )}

            <p className="text-[20px] text-[#333] font-semibold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B966549956052&amp;text=%D8%B9%D8%B1%D9%88%D8%B6%20%D8%AC%D9%88%D9%86%D8%B3%D9%88%D9%86%20%D9%84%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A&amp;type=phone_number&amp;app_absent=0"
        className="btn-box bg-[#25d366] w-[270px] h-[60px]  flex justify-center items-center gap-[12px] text-white font-bold text-[18px] rounded-[30px] my-8 mx-auto"
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
        <span>لحق عروض اليوم الوطني</span>
      </a>
      <div className=" bg-main border-[3px] border-[#FFFFFFB8] rounded-[8px] text-center mx-[8]">
        <h1>حافظ على مظهر سيارتك جديد</h1>
      </div>
    </div>
  );
}

export default Counter;
