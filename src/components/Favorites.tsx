import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorite">
      {favorites.map((favorite) => {
        return <RecipeCard singleRecipeCard={favorite} key={favorite.id} />;
      })}
    </div>
  );
};

export default Favorites;
