//   navbar component that has 3 headings and logo all centered in the middle of the page

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-[5vw] flex-row-reverse justify-center p-2 bg-light-green z-3  lg:text-xl z-[40] ">
      <div className="absolute top-0 bg-light-green w-screen h-[250px] z-[-50]"></div>
      <div className="absolute w-full bg-light-green h-20 -z-50"></div>
      <Link to="/">
        <h1 className="text-lg lg:text-4xl">رحمة</h1>
      </Link>
      <Link to="/register">
        <h1 className="font-normal lg:mt-2">سجل كذباح</h1>
      </Link>
      <Link to="/List">
        <h1 className="font-normal lg:mt-2">قائمة الذباحين</h1>
      </Link>
      {/* onclick on h1 scroll to footer */}
    </div>
  );
};

export default Navbar;
