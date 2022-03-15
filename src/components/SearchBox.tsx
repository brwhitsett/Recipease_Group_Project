//SearchBar, DishType, Diet will be here.
// Should we make the form filters optional for it to work correctly?

import searchIcon from "../assets/icons/search.svg";
import "./SearchBox.css";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import QueryStringParams from "../models/QueryStringParamas";
// import searchBoximg from "../assets/foodimages/searchBoxFoodImg.jpg";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [type, setMeal] = useState("");
  const [diet, setDiet] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const params: QueryStringParams = {};
    if (query) {
      params.query = query;
    }
    if (type) {
      params.type = type;
    }
    if (diet) {
      params.diet = diet;
    }
    navigate(`/recipes/complexSearch?${new URLSearchParams({ ...params })}`);
    setQuery("");
    setMeal("");
    setDiet("");

    // navigate(
    //   `/recipes/complexSearch?${new URLSearchParams({
    //     ...(query ? { query } : {}),
    //     ...(type ? { type } : {}),
    //     ...(diet ? { diet } : {}),
    //   })}`
    // );
  };

  return (
    <form className="SearchBox" onSubmit={submitHandler}>
      <div className="searchBar-icon">
        <img
          src={searchIcon}
          alt="search icon"
          onClick={submitHandler}
          className="searchIcon"
        />
        <input
          className="SearchBar"
          placeholder="search recipease"
          name="SearchBar"
          value={query}
          id="SearchBar"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>

      <div className="drop-down-container">
        <select
          className="meal-type"
          name="meals"
          onChange={(e) => setMeal(e.target.value)}
          value={type}
        >
          <option value="" disabled selected hidden>
            meal type
          </option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="appetizers">Appetizers</option>
          <option value="sides">Side Dishes</option>
          <option value="dessert">Desserts</option>
        </select>
        <select
          className="diet"
          name="diet"
          id="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        >
          <option value="" disabled selected hidden>
            diet
          </option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="glutenFree">Gluten Free</option>
          <option value="paleo">Paleo</option>
          <option value="keto">Keto</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBox;
