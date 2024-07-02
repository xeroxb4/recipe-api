import { CategoryModel } from "../models/category_models.js";

export const getCategories = async (req, res, next) =>{
    try{
        // Get all categories from database
        const allCategories = await CategoryModel.find();
        // Return response
        res.status(200).json(allCategories);
    } catch (error){
        next(error);
    }
}

export const postCategory = async (req, res, next) =>{
    try{
        // Add a category from database
        const NewCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(NewCategory);
    } catch (error){
        next(error);
    }
}