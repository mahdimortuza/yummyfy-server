import express from "express";
import { recipeControllers } from "../controller/recipe.controller";

const router = express.Router();

router.post("/create-recipe", recipeControllers.createRecipe);
router.get("/", recipeControllers.getAllRecipe);
router.get("/:id", recipeControllers.getSingleRecipe);
router.patch("/:id", recipeControllers.updateSingleRecipe);

export const recipeRouters = router;
