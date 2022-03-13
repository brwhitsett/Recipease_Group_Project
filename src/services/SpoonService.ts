// TO DO: Add endpoints for Meal Type & Diet Filters

import axios from "axios";
import RecipeResponse from "../models/RecipeResponse";
import SingleRecipe from "../models/SingleRecipe";

const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getRandomRecipe = (): Promise<RecipeResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: { apiKey: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getRecipesByTerm = (term: string): Promise<RecipeResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: { apiKey: key, query: term },
    })
    .then((response) => {
      return response.data;
    });
};

export const getRecipeById = (id: number): Promise<SingleRecipe> => {
  return axios
    .get(
      `https://api.spoonacular.com/recipes/${encodeURIComponent(
        id
      )}/information`,
      { params: { apiKey: key } }
    )
    .then((response) => {
      return response.data;
    });
};
