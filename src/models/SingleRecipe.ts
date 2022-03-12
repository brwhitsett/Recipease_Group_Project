// SingleRecipe for Details Page

interface ExtendedIngredients {
  id: number;
  original: string;
}

export default interface SingleRecipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  extendedIngredients: ExtendedIngredients;
  instructions: string;
}
