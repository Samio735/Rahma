import { Link } from "react-router-dom";

function WhiteNavBar() {
  return (
    <div className="flex gap-[5vw] flex-row-reverse justify-center p-2 bg-white-text  z-3  lg:text-xl z-100">
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
}

export default WhiteNavBar;
