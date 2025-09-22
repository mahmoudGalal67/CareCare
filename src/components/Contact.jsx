"use client";
import React from "react";

function ContactForm() {
  return (
    <div className="contact-form flex justify-center items-center py-22 my-8">
      <div className="relative bg-white/70 rounded-lg max-w-6xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Right side: text + background */}
        <div className="w-full md:w-1/2 relative flex flex-col  p-8  text-gray-800">
          <h2 className="text-2xl font-bold mb-4">التواصل معنا سهل!</h2>
          <p className="text-lg leading-relaxed">
            نوفر لك كل وسائل التواصل المعتادة، لتصل لنا بكل سهولة وبدون أي
            تعقيدات لطلب خدماتنا.
          </p>
        </div>
        {/* Left side: form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-right text-gray-900 mb-6">
            احجز الان
          </h2>
          <form className="flex flex-col gap-4" dir="rtl">
            {/* Row: name + phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-[#022f6c]"
              />
              <input
                type="text"
                placeholder="رقم الجوال"
                className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-[#022f6c]"
              />
            </div>

            {/* Select service */}
            <select className="px-4 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-[#022f6c]">
              <option disabled selected>
                اختر الخدمة
              </option>
              <option>خدمة 1</option>
              <option>خدمة 2</option>
            </select>

            {/* Select branch */}
            <select className="px-4 py-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-[#022f6c]">
              <option disabled selected>
                اختر الفرع
              </option>
              <option>الفرع 1</option>
              <option>الفرع 2</option>
            </select>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="اكتب رسالتك هنا..."
              className="px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#022f6c] bg-white"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#022f6c] text-white px-6 py-2 rounded hover:bg-[#011d46] transition w-fit self-center cursor-pointer"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
