//SearchBar, DishType, Diet will be here.

import Diet from "./Diet";
import DishType from "./DishType";
import SearchBar from "./SearchBar";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <form className="SearchBox">
      <SearchBar />
      <DishType />
      <Diet />
      <button>search Icon?</button>
    </form>
  );
};

export default SearchBox;
