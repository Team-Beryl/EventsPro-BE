import {EventModel} from "../models/event_model.js"

// Function to post a new event to the database
export const addEvent = async (req, res, next) => {
    try {
        const newEvent = await EventModel.create({
            ...req.body,
            flier: req.file.filename
        });
        res.status(200).send(newEvent)
    } catch (error) {
        next(error);
    }
}

//Function to update an event
export const updateEvent = async (req, res, next) => {
try {
    const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send(updatedEvent);
} catch (error) {
    next(error);
}
}

//Function to delete an event
export const deleteEvent = async(req, res, next)=>{
    try {
       const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
       res.status(201).send("An event has been deleted successfully ");
    } catch (error) {
        next(error)
    }
}

//Function to display all events
export const getEvent = async (req, res, next)=>{
    try {
      const dateQuery = req.query.date  
      if(dateQuery){
        const addData = await EventModel.find({date: dateQuery});
        res.status(201).send(addData)
      }else{
        const addData = await EventModel.find();
        res.status(200).send(addData)
      }
    } catch (error) {
        
    }
}


