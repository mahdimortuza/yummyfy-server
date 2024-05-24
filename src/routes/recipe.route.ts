import express from "express";
import { recipeControllers } from "../controller/recipe.controller";

const router = express.Router();

router.post("/create-recipe", recipeControllers.createRecipe);

export const recipeRouters = router;
