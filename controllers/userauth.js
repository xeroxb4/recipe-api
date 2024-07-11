import bcrypt from "bcrypt";
import { UserModel } from "../models/user_models.js";



// works but commented out because i was to use the next code for the register and login straight

// // create user register
// export const register = async (req, res, next) => {

//   try {
//     // hash user password
//     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
//     // create a new user
//     const registeredUser = await UserModel.create({
//       ...req.body,
//       password: hashedPassword
//     });

//     // return response
//     res.status(201).json('User registered successfully');
//   } catch (error) {
//     next(error);
//   }

// }


// create user register
export const register = async (req, res, next) => {

  try {
    // hash user password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    // create a new user
    const registeredUser = await UserModel.create({
      ...req.body,
      password: hashedPassword
    });
    
    // generate a session
    req.session.user = { id: user.id }

    // return response
    res.status(201).json('User registered successfully');
  } catch (error) {
    next(error);
  }

}




// below login code works but commeted out in order to make the $or from the next active login code for email, phone and username

// // create user login
// export const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     // find a user using their unique identifier
//     const user = await UserModel.findOne({
//       email: email,
//       // password: password
//     });
//     if (!user) {
//       return res.status(401).json('No user found');
//     } else { }
//     // then verify their password
//     const correctPassword = bcrypt.compareSync(password, user.password);
  
//     if (!correctPassword) {
//       res.status(401).json('Invalid credential');
  
//     } else {
//       // generate a session
//       req.session.user = { id: user.id }
//     }
  
//     // return response
//     res.status(200).json('login successful');
//   } catch (error) {
//     next (error)
//   }
// }



// create user login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // find a user using their unique identifier
    const user = await UserModel.findOne({
      $or: [
        {email:email},
        {username:username},
        {phone:phone}
      ]
    });
    if (!user) {
      return res.status(401).json('No user found');
    } else { }
    // then verify their password
    const correctPassword = bcrypt.compareSync(password, user.password);
  
    if (!correctPassword) {
      res.status(401).json('Invalid credential');
  
    } else {
      // generate a session
      req.session.user = { id: user.id }
    }
  
    // return response
    res.status(200).json('login successful');
  } catch (error) {
    next (error)
  }
}




// create user logout
export const logout = async (req, res, next) => {
 try {
   // destroy user session
   await req.sessiion.destroy();
   // retuen response
   req.status(200).json('you have successfully logged out')
 } catch (error) {
   next (error)
 }
}



// create profile
export const profile = async (req, res, next) => {
  try {
    // find a user by id
    const user = await UserModel
    .findById(req.session.user.id)
    .select({password: false});

    // return response
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
}

