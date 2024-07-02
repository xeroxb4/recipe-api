import { RecipeModel } from "../models/recipe_models.js";



// Get All Recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get query
        const {limit, skip, search} = req.query;
        // Get all recipes from database
        const allRecipes = await RecipeModel
        .find({name: search})
        .limit(limit)
        .skip(skip);
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
        // Update Recipe by Id
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body,{new:true});;

            // Return response
            res.json(updateRecipe);
        } catch (error) {
            next(error)
    } 
    
}

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