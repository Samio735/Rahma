import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./footer";
import Navbar from "./navbar";
import Section1 from "./section1";

function MainPage() {
  return (
    <div className="text-white-text text-right lg:text-4xl lg:leading-relaxed relative">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <div className="bg-dark-green absolute bottom-0 w-screen h-[100vh] z-[-100]"></div>
    </div>
  );
}

export default MainPage;
