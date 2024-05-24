import { Request, Response } from "express";
import { recipeServices } from "../service/recipe.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const createRecipe = catchAsync(async (req: Request, res: Response) => {
  const result = recipeServices.createRecipeIntoDb(req.body);
  sendResponse(res, {
    statusCode: 201,
    message: "Recipe is created successfully",
    data: result,
  });
});

export const recipeControllers = {
  createRecipe,
};
