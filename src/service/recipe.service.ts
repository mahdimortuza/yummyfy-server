import { ObjectId } from "mongodb";
import { recipe } from "../server";

const createRecipeIntoDb = async (payload: any) => {
  const result = await recipe.insertOne(payload);
  return result;
};

const getAllRecipesFromDb = async () => {
  const result = await recipe.find({}).toArray();
  return result;
};

const getSingleRecipeFromDb = async (recipeId: string) => {
  const result = await recipe.findOne({ _id: new ObjectId(recipeId) });
  return result;
};

const updateSingleRecipeFromDb = async (recipeId: string, payload: any) => {
  const result = await recipe.updateOne(
    { _id: new ObjectId(recipeId) },
    { $set: payload },
    { new: true }
  );
  return result;
};

const deleteRecipeFromDb = async (recipeId: string) => {
  const result = await recipe.deleteOne({ _id: new ObjectId(recipeId) });
  return result;
};

export const recipeServices = {
  createRecipeIntoDb,
  getAllRecipesFromDb,
  getSingleRecipeFromDb,
  updateSingleRecipeFromDb,
  deleteRecipeFromDb,
};
