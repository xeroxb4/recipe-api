import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category_controllers.js";

// create router
const categoryRouter = Router();

//  define route
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);

// export router
export default categoryRouter;