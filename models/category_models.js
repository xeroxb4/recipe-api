import { Schema, model } from "mongoose";
//new package mongoose-to-json to replace the normalize mongoose
import { toJSON } from "@reis/mongoose-to-json";
// import normalize from "normalize-mongoose"

const categorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    
},{
    timestamps: true
});

categorySchema.plugin(toJSON);

export const CategoryModel = model('Category', categorySchema);