import bcrypt from "bcrypt";
import { UserModel } from "../models/user_models.js";



// create user register
export const register = async (req, res, next) => {

   try {
     // hash user password
     const hashedPassword = bcrypt.hashSync (req.body.password, 10);
     // create a new user
     const registeredUser = await UserModel.create({
         ...req.body,
         password: hashedPassword
     });
 
     // return response
     res.status(201).json('User registered successfully');
   } catch (error) {
     next (error);
   }

}



// create user login
const login = async () => {}


// create user logout
const logout = async () => {}



// create profile
const profile = async () => {}