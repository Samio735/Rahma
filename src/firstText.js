import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

const FirstText = () => {
  return (
    <div className="text-right lg:leading-relaxed max-w-xs lg:max-w-[600px] lg:m-[80px] lg:text-3xl    z-10 ">
      <h1 className="text-4xl lg:text-8xl font-bold mb-3">Rahma - رحمة</h1>
      <h2 className="mb-7  ">
        جسر يجمع بين الذباحين والأسر في عيد الأضحى. إبحث عن ذباح محترف وقريب
        منك، واحجز خدمته الآن
      </h2>
      {/* div with a button and a link  stacked on top of each other and centerd horizontally*/}
      <div className="flex flex-col justify-center items-center lg:mt-[50px]  ">
        <Link to="/List">
          <button className="bg-main-yellow mb-2 text-green-400 font-bold py-2 px-4 rounded-full lg:px-10 lg:py-5">
            ابحث عن ذباح
          </button>
        </Link>
        <Link to="/register">
          <p className="text-white lg:text-2xl  mx-2 underline ">
            هل أنت ذباح؟ إعرض خدمتك
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FirstText;
