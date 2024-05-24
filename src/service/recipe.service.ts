import { recipe } from "../server";

const createRecipeIntoDb = async (payload: any) => {
  console.log(payload);
  const result = await recipe.insertOne(payload);
  return result;
};
export const recipeServices = {
  createRecipeIntoDb,
};
