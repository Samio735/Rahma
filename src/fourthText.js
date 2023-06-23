import React from "react";
import { Link } from "react-router-dom";

const FourthText = () => {
  return (
    <div className="text-right lg:leading-relaxed max-w-xs lg:max-w-[600px] lg:m-[80px] lg:text-3xl mt-[70px] lg:mt-[180px]  z-10 ">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">
        إبحث عن ذباح محترف قريب منك
      </h1>
      <h2 className="mb-7  ">
        توفر رحمة قاعدة بيانات شاملة للذباحين في جميع أنحاء البلاد. يمكنك البحث
        عن ذباحين متوفرين في ولايتك بسهولة، ومعرفة تفاصيل الاتصال بهم. اختر
        الذباح المفضل لديك واحجز موعدك الآن لتجربة ذبح أضحيتك بأمان وراحة.
      </h2>
      {/* div with a button and a link  stacked on top of each other and centerd horizontally*/}
      <Link to="/List">
        <button className="bg-main-yellow mb-2 text-green-400 font-bold py-2 px-4 rounded-full lg:px-10 lg:py-5">
          تصفح قائمة الذباحين
        </button>
      </Link>
    </div>
  );
};
export default FourthText;
