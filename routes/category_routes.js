import { Router } from "express";
import multer from "multer";
import { getCategories, postCategory } from "../controllers/category_controllers.js";
import { localupload } from "../middlewares/uploads.js";


// create middleware
const upload = multer({dest: 'uploads'});


// create router
const categoryRouter = Router();

//  define route
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localupload.single('image'), postCategory);

// export router
export default categoryRouter;