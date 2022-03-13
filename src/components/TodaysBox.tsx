import { useState } from "react";
import Recipe from "../models/Recipe";
import RecipeCard from "./RecipeCard";
import "./TodaysBox.css";

const TodaysBox = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  return (
    <div className="TodaysBox">
      <h2>TODAY'S RECIPEASE</h2>
      <RecipeCard singleRecipeCard={recipe!} />
      <RecipeCard singleRecipeCard={recipe!} />
      <RecipeCard singleRecipeCard={recipe!} />
      <RecipeCard singleRecipeCard={recipe!} />
    </div>
  );
};

export default TodaysBox;
