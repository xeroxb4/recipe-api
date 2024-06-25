import express from "express";
import recipeRouter from "./routes/recipe.js";

// Create Express App
const app = express();

// Define routes
app.get('/', (req, res)=>{
    res.json('Welcome Home');
});

app.post('/login', (req, res)=>{
    res.json('Login Sucessful');
});

app.patch('/changepassword', (req, res)=>{
    res.json('Password changed');
});

app.patch('/updateuser/dob', (req, res)=>{
    res.json('user dob updated');
});

app.use(recipeRouter)


// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000')
});
