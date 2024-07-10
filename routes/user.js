import { Router } from "express";
import { register } from "../controllers/userauth.js";

// create router
const userRouter = Router();


// define the router
userRouter.post('/register', register);


export default userRouter;