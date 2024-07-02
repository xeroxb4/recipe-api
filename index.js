import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe_routes.js";
import categoryRouter from "./routes/category_routes.js";



// connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();
expressOasGenerator.handleResponses(app,{
    alwaysServerDocs: true,
    tags:['categories', , 'recipe'],
    mongooseModels: mongoose.modelNames(),
}
);

// Apply middlewares
app.use(express.json());
app.use(express.static('uploads'));

// Use Router
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req,res)=> res.redirect('api-docs/'));
app.use(express.static('uploads'));



// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


