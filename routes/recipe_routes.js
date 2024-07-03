import {Router} from "express"
import { localupload, remoteUpload } from "../middlewares/uploads.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe_controllers.js";

// Create router
const recipeRouter = Router();

// Define routers
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', remoteUpload.single('image'), postRecipe); 

recipeRouter.patch('/recipes/:id', patchRecipe); 

recipeRouter.delete('/recipes/:id', deleteRecipe); 

recipeRouter.get('/recipes/:id', getRecipe); 

// Export router
export default recipeRouter;