import {EventModel} from "../models/event_model.js"

// Function to post a new category to the database
export const addCategory = async (req, res, next) => {
    try {
        const newCategory = await EventModel.create({
            ...req.body,
            flier: req.file.filename
        });
        res.status(200).send(newCategory)
    } catch (error) {
        next(error);
    }
}



//Function to display all categories
export const getCategory = async (req, res, next)=>{
    try {
    es = await EventModel.find();
        res.status(201).send(allCategories)
    } catch (error) {
        
    }
}
