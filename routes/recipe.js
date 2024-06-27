import {Router} from "express"

import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";

// Create router
const recipeRouter = Router();

// Define routers
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe); 

recipeRouter.patch('/recipes/:id', patchRecipe); 

recipeRouter.delete('/recipes/:id', deleteRecipe); 

recipeRouter.get('/recipes/:id', getRecipe); 

// Export router
export default recipeRouter;