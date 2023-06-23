import EmptyListText from "./EmptyListText";
import WhiteNavBar from "./WhiteNavBar";
import Footer from "./footer";

function List() {
  return (
    <div className="text-dark-green bg-white-text z-[-5] relative">
      <div className="behind absolute top-0 w-screen h-[250px] bg-white-text -z-10"></div>

      <WhiteNavBar />
      <EmptyListText />
    </div>
  );
}

export default List;
