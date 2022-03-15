import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QueryStringParams from "../models/QueryStringParamas";
import Recipe from "../models/Recipe";
import { getRandomRecipe, getRecipesByTerm } from "../services/SpoonService";
import RecipeCard from "./RecipeCard";
import "./TodaysBox.css";

const TodaysBox = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm: string | null = searchParams.get("query");
  const mealType: string | null = searchParams.get("type");
  const diet: string | null = searchParams.get("diet");

  useEffect(() => {
    if (searchTerm || mealType || diet) {
      const params: QueryStringParams = {
        ...(searchTerm ? { query: searchTerm! } : {}),
        ...(mealType ? { type: mealType! } : {}),
        ...(diet ? { diet: diet! } : {}),
      };
      // console.log(params);

      getRecipesByTerm(params).then((response) => {
        setRecipes(response.results);
      });
    } else {
      getRandomRecipe().then((response) => {
        setRecipes(response.recipes);
      });
    }
  }, [searchTerm, mealType, diet]);

  return (
    <div className="TodaysBox">
      <h2 className={`${searchTerm || mealType || diet ? "hide" : ""} `}>
        TODAY'S RECIPEASE
      </h2>
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} singleRecipeCard={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default TodaysBox;
