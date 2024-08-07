import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator"
import MongoStore from "connect-mongo"
import recipeRouter from "./routes/recipe_routes.js";
import categoryRouter from "./routes/category_routes.js";
import userRouter from "./routes/user.js";
import session from "express-session";





// connect to database
await mongoose.connect(process.env.MONGO_URL);

// create session store


// Create Express App
const app = express();

// 3 lines of code to install swagger for documentation...becareful with the tags/look for the common values in the path
expressOasGenerator.handleResponses(app, {
    alwaysServerDocs: true,
    tags: ['categories', , 'recipes'],
    mongooseModels: mongoose.modelNames(),
}
);

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //   cookie: { secure: true }
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}));

// Use Router
app.use(recipeRouter);
app.use(categoryRouter);
app.use(userRouter);

// 2 lines of code
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('api-docs/'));
app.use(express.static('uploads'));



// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


