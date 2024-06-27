import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";


// connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App
const app = express();

// Apply middlewares
app.use(express.json());

app.use(recipeRouter)


// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000')
});


