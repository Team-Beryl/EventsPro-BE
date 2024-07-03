import { Router } from "express";
import { addCategory, getCategory } from "../controller/category_controlller.js";
import { localUploads } from "../middleware/upload.js";

const categoryRouter = Router();

categoryRouter.post('/categories', addCategory);

categoryRouter.get('/categories', getCategory);

export default categoryRouter;