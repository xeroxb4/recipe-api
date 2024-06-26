import {Router} from "express"
import { RecipeModel } from "./models/recipe.js";

// Create router
const recipeRouter = Router();

// Define routers
recipeRouter.get('/recipes', (req, res) =>{
    res.json('All recipes');
});

recipeRouter.post('/recipes', async (req, res) =>{
    // add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json("Recipe added");
}); 

recipeRouter.patch('/recipes/:id', (req, res) =>{
    res.json(`recipe with ID ${req.params.id} updated`);
}); 

recipeRouter.delete('/recipes/:id', (req, res) =>{
    res.json(`recipe with ID ${req.params.id} has been deleted`);
}); 

recipeRouter.delete('/history/:id', (req, res) =>{
    res.json(`all history ID ${req.params.id} has been deleted`);
});

recipeRouter.patch('/changeclientname/:id', (req, res) =>{
    res.json(`all client names ending with ID of ${req.params.id} has been changed`);
});

recipeRouter.get('/recipes/:id', (req, res) =>{
    res.json(`only recipe ending with ID of ${req.params.id} is showing`);
    
});

recipeRouter.get('/recipes/:key', (req, res) =>{
    res.json(`only recipe ending with ID of ${req.params.key} is showing`);
    
});

// Export router
export default recipeRouter;