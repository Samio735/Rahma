import React from "react";
import { Link } from "react-router-dom";

const SecondText = () => {
  return (
    <div className="text-right lg:leading-relaxed max-w-xs lg:max-w-[600px]  lg:text-3xl z-10 me-[50vw] mt-[10vw] ">
      <h1 className="text-4xl lg:text-8xl font-bold mb-3">
        هل أنت ذباح محترف ؟
      </h1>
      <h2 className="mb-7  ">
        ستتمكن من الوصول إلى عدد كبير من الأسر الباحثة عن ذباح ماهر في ولايتك.
        سجل الآن وكن جزءًا من رحمة
      </h2>
      {/* div with a button and a link  stacked on top of each other and centerd horizontally*/}
      {/* link to register */}
      <Link to="/register">
        <button className="bg-main-yellow mb-2 text-green-400 text-white-text font-bold py-2 px-4 rounded-full lg:px-10 lg:py-5">
          سجل نفسك الأن
        </button>
      </Link>
    </div>
  );
};

export default SecondText;
