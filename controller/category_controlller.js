import {CategoryModel} from "../models/category_model.js"


// Function to post a new category to the database
export const addCategory = async (req, res, next) => {
    try {
        const newCategory = await CategoryModel.create({
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
    const allCategories = await CategoryModel.find();
        res.status(201).send(allCategories)
    } catch (error) {
        
    }
}



//Function to display a single category by id
export const getACategory = async (req, res, next) => {
    try {
       const getOneCategory = await CategoryModel.findById(req.params.id)
       res.json(getOneCategory)
    } catch (error) {
       next(error);
    }
 }

 //Function to delete a category in the database

export const deleteCategory = async (req, res, next) => {
    try {
        const deletedCategory = await CategoryModel.findByIdAndDelete(req.params.id);
        res.status(201).send("A category has been deleted successfully ");
    } catch (error) {
        next(error)
    }
}
