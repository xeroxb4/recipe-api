import { Router } from "express";
import { login, logout, profile, register } from "../controllers/userauth.js";
import { checkUserSession } from "../middlewares/auth.js";

// create router
const userRouter = Router();


// define the router
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', checkUserSession, logout);
userRouter.get('/profile', checkUserSession, profile)

export default userRouter;