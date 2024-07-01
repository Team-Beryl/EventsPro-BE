

// Function to add a new event to the database
export const addEvent = async (req, res, next) => {
    try {
        console.log("request", req.body);
        const newEvent = await EventModel.create(req.body);
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

