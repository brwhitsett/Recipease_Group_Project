import { createContext } from "react";
import Recipe from "../models/Recipe";

interface FavoritesContextModel {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: number) => void;
  isFav: (id: number) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
