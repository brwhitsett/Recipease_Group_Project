// SingleRecipe for Details Page

interface ExtendedIngredients {
  id: string;
  original: string;
}

export default interface SingleRecipeResponse {
  id: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  extendedIngredients: ExtendedIngredients[];
  instructions: string;
  cuisines: string;
  dishTypes: string;
  diets: string;
}
