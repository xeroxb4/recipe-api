import { Router } from "express";
import multer from "multer";
import { getCategories, postCategory } from "../controllers/category_controllers.js";
import { localupload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


// create middleware
const upload = multer({dest: 'uploads'});


// create router
const categoryRouter = Router();

//  define route
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', checkUserSession, remoteUpload.single('image'), postCategory);

// export router
export default categoryRouter;