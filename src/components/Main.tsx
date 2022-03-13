import "./Main.css";
import SearchBox from "./SearchBox";
import SubscribeBox from "./SubscribeBox";
import TodaysBox from "./TodaysBox";

const Main = () => {
  return (
    <main className="Main">
      <SearchBox />
      <TodaysBox />
      <SubscribeBox />
    </main>
  );
};

export default Main;
