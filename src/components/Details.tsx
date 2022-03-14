import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import SingleRecipeResponse from "../models/SingleRecipeResponse";
import SingleRecipe from "../models/SingleRecipeResponse";
import { getRecipeById } from "../services/SpoonService";
import "./Details.css";
import RecipeCard from "./RecipeCard";

const Details = () => {
  const [recipe, setRecipe] = useState<SingleRecipeResponse | undefined>();
  const id: string | undefined = useParams().id;
  const { isFav, removeFavorite, addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    getRecipeById(id!).then((response) => {
      setRecipe(response);
      console.log(response);
    });
  }, [id]);
  return (
    <div className="Details">
      <div>
        <img src={recipe?.image} alt={recipe?.title} />
      </div>
      <div>
        <p>{recipe?.title}</p>
        {isFav(recipe?.id!) ? (
          <i
            className="fa-solid fa-heart"
            onClick={() => removeFavorite(recipe?.id!)}
          ></i>
        ) : (
          <i
            className="fa-regular fa-heart"
            onClick={() => addFavorite(recipe!)}
          ></i>
        )}
        <p>{recipe?.cuisines}</p>
        <p>{recipe?.dishTypes}</p>
        <p>{recipe?.diets}</p>
        <p>{recipe?.readyInMinutes}</p>
        <p>{recipe?.servings}</p>
        <ul>
          {recipe?.extendedIngredients.map((ingredient) => (
            <li>{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          {recipe?.analyzedInstructions.map((item) =>
            item.steps.map((step) => <li>{step.step}</li>)
          )}
        </p>
      </div>
    </div>
  );
};

export default Details;
