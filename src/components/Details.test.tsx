import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Recipe from "../models/Recipe";
import RecipeCard from "./RecipeCard";

const dummyRecipe: Recipe = {
  id: "123",
  image: "bird",
  title: "hippo",
};

test("renders recipe title", () => {
  render(
    <BrowserRouter>
      <RecipeCard singleRecipeCard={dummyRecipe} />
    </BrowserRouter>
  );
  const titleEl = screen.getByText("hippo");
  expect(titleEl).toBeInTheDocument();
});
