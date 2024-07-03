import { Router } from "express";
import { addCategory, getCategory, getACategory, deleteCategory } from "../controller/category_controlller.js";
import { remoteUpload } from "../middleware/upload.js";
import 'dotenv/config';
// import { localUploads } from "../middleware/upload.js";

const categoryRouter = Router();

categoryRouter.post('/categories', remoteUpload.single('flier'), addCategory);

categoryRouter.get('/categories', getCategory);

categoryRouter.get('/categories/:id', getACategory);

categoryRouter.delete('/categories/:id', deleteCategory);


export default categoryRouter;