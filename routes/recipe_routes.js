import {Router} from "express"
import { localupload, remoteUpload } from "../middlewares/upload.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe_controllers.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create router
const recipeRouter = Router();

// apply middleware
// recipeRouter.use(checkUserSession)

// Define routers
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUpload.single('image'), postRecipe); 

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe); 

recipeRouter.delete('/recipes/:id', checkUserSession, deleteRecipe); 

recipeRouter.get('/recipes/:id', getRecipe); 

// Export router
export default recipeRouter;