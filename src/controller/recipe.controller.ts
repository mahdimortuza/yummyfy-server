import { Request, Response } from "express";
import { recipeServices } from "../service/recipe.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const createRecipe = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeServices.createRecipeIntoDb(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Recipe is created successfully.",
    data: result,
  });
});

const getAllRecipe = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeServices.getAllRecipesFromDb();
  sendResponse(res, {
    statusCode: 200,
    message: "Recipes are retrieved successfully.",
    data: result,
  });
});

const getSingleRecipe = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeServices.getSingleRecipeFromDb(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: "Recipes are retrieved successfully.",
    data: result,
  });
});

const updateSingleRecipe = catchAsync(async (req: Request, res: Response) => {
  const recipeId = req.params.id;
  const recipeData = req.body;
  const result = await recipeServices.updateSingleRecipeFromDb(
    recipeId,
    recipeData
  );
  sendResponse(res, {
    statusCode: 200,
    message: "Recipe updated successfully.",
    data: result,
  });
});

const deleteRecipe = catchAsync(async (req: Request, res: Response) => {
  const result = await recipeServices.deleteRecipeFromDb(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: "Recipe deleted successfully.",
    data: result,
  });
});

export const recipeControllers = {
  createRecipe,
  getAllRecipe,
  getSingleRecipe,
  updateSingleRecipe,
  deleteRecipe,
};
