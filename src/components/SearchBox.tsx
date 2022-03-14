//SearchBar, DishType, Diet will be here.
// Should we make the form filters optional for it to work correctly?

import searchIcon from "../assets/icons/search.svg";
import "./SearchBox.css";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [type, setMeal] = useState("");
  const [diet, setDiet] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    navigate(
      `/recipes/complexSearch?${new URLSearchParams({ query, type, diet })}`
    );
  };

  return (
    <form className="SearchBox" onSubmit={submitHandler}>
      <input
        className="SearchBar"
        placeholder="search recipease"
        name="SearchBar"
        value={query}
        id="SearchBar"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="meal-type-container">
        <select
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
      </div>
      <div className="diet-container">
        <select
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
      <button>
        <img src={searchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBox;
