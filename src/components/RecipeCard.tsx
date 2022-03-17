//image, title, heart icon.

import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Recipe from "../models/Recipe";
import "./RecipeCard.css";
import logoIconBlack from "../assets/logos/logo-icon-black.png";

interface Props {
  singleRecipeCard: Recipe;
}

const RecipeCard = ({ singleRecipeCard }: Props) => {
  const { isFav, removeFavorite, addFavorite } = useContext(FavoritesContext);

  return (
    <li className="RecipeCard">
      <Link to={`/recipes/${encodeURIComponent(singleRecipeCard.id)}/details`}>
        {singleRecipeCard.image ? (
          <img src={singleRecipeCard.image!} alt={singleRecipeCard.title} />
        ) : (
          <img src={logoIconBlack} alt="logo icon black" />
        )}
      </Link>
      {isFav(singleRecipeCard.id) ? (
        <i
          className="fa-solid fa-heart"
          onClick={() => removeFavorite(singleRecipeCard.id)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart"
          onClick={() => addFavorite(singleRecipeCard)}
        ></i>
      )}
      <p>{singleRecipeCard.title}</p>
    </li>
  );
};

export default RecipeCard;
