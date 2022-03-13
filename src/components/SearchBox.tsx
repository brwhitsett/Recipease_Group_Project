//SearchBar, DishType, Diet will be here.

import Diet from "./Diet";
import DishType from "./DishType";
import SearchBar from "./SearchBar";
import searchIcon from "../assets/icons/search.svg";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <form className="SearchBox">
      <SearchBar />
      <DishType />
      <Diet />
      <img src={searchIcon} alt="search icon" />
    </form>
  );
};

export default SearchBox;
