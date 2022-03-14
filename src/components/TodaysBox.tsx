import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Recipe from "../models/Recipe";
import { getRandomRecipe, getRecipesByTerm } from "../services/SpoonService";
import RecipeCard from "./RecipeCard";
import "./TodaysBox.css";

const TodaysBox = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  useEffect(() => {
    if (searchTerm) {
      getRecipesByTerm(searchTerm).then((response) => {
        setRecipes(response.results);
      });
    } else {
      getRandomRecipe().then((response) => {
        setRecipes(response.recipes);
      });
    }
  }, [searchTerm]);

  return (
    <div className="TodaysBox">
      <h2 className={`${searchTerm ? "hide" : ""} `}>TODAY'S RECIPEASE</h2>
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipeCard={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default TodaysBox;
