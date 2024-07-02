import { Router } from "express";
import { addEvent, deleteEvent, updateEvent } from "../controller/event_controller.js";
import { localUploads } from "../middleware/upload.js";

const eventRouter = Router();

eventRouter.post('/events', localUploads.single('image'), addEvent);

eventRouter.patch('/events/id:', updateEvent);

eventRouter.delete('/events/id:', deleteEvent);



export default eventRouter;