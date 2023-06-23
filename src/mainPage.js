import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./footer";
import Navbar from "./navbar";
import Section1 from "./section1";

function MainPage() {
  return (
    <div className="text-white-text text-right lg:text-4xl lg:leading-relaxed">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default MainPage;
