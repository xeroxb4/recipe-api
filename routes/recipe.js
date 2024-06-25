import {Router} from "express"

// Create router
const recipeRouter = Router();

// Define routers
recipeRouter.get('/recipes', (req, res) =>{
    res.json('All recipes');
});

recipeRouter.post('/recipes', (req, res) =>{
    res.json('recipe added');
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

// Export router
export default recipeRouter;