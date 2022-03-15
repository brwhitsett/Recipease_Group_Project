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
      <div className="recipe-img-p-container">
        <div className="recipe-image">
          <img src={recipe?.image} alt={recipe?.title} />
        </div>

        <div className="favorite-icon-container">
          <p className="details-title">{recipe?.title}</p>
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
        </div>
      </div>

      <div className="recipe-details-container">
        <div className="cuisine-and-dish">
          <p className="cuisine-text">{recipe?.cuisines}</p>
          <p className="dishType-text">{recipe?.dishTypes}</p>
        </div>
        <p className="diets">{recipe?.diets}</p>
        <p className="ready-in-minutes">{recipe?.readyInMinutes}</p>
        <p className="servings">{recipe?.servings}</p>
      </div>
      <ul>
        {recipe?.extendedIngredients.map((ingredient) => (
          <li>{ingredient.original}</li>
        ))}
      </ul>

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
