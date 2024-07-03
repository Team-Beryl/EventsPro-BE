import { Router } from "express";
import { addEvent, deleteEvent, getEvent, updateEvent, getAnEvent } from "../controller/event_controller.js";
import { localUploads } from "../middleware/upload.js";

const eventRouter = Router();

eventRouter.post('/events', localUploads.single('flier'), addEvent);

eventRouter.patch('/events/:id', updateEvent);

eventRouter.delete('/events/:id', deleteEvent);

eventRouter.get('/events', getEvent);

eventRouter.get('/events/:id', getAnEvent);



export default eventRouter;