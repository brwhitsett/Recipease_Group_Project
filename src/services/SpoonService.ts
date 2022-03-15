// TO DO: Add endpoints for Meal Type & Diet Filters
//TODO: CHANGE THE GETRANDOMRECIPE() TO THE ID-ENDPOINT AND RANDOMIZE THE ID.

import axios from "axios";
import QueryStringParams from "../models/QueryStringParamas";
import RecipeResponse from "../models/RecipeResponse";
import SearchResponse from "../models/SearchResponse";
import SingleRecipeResponse from "../models/SingleRecipeResponse";

const key: string = process.env.REACT_APP_SPOONACULAR_KEY || "";

export const getRandomRecipe = (): Promise<RecipeResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: { apiKey: key },
    })
    .then((response) => {
      return response.data;
    });
};

export const getRecipesByTerm = (
  params: QueryStringParams
): Promise<SearchResponse> => {
  params.apiKey = key;
  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: params,
    })
    .then((response) => {
      return response.data;
    });
};

export const getRecipeById = (id: string): Promise<SingleRecipeResponse> => {
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
