import { RecipeModel } from "../models/recipe_models.js";



// Get All Recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
};


//    Post All Recipes
export const postRecipe = async (req, res, next) => {
    try {
        // add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

// Patch recipe (personal tring)
export const patchRecipe = async (req, res,) =>{
    try{
        // Patch Recipe
        const patchRecipe = await RecipeModel.findByIdAndUpdate(req.params.id);
        // Return response
        res.json(patchedRecipe)
    } catch (error) {
        next(error)
    }
    
};

// Delete Recipe (personal trying)
export const deleteRecipe = async (req, res, next) =>{
    try{
        // Delete recipe
        const deletedRecipes = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedRecipes)
    } catch (error) {
        next(error);
    }
};

// Another get Recipe
export const getRecipe = (req, res) =>{
    res.json(`only recipe ending with ID of ${req.params.key} is showing`);
    
};