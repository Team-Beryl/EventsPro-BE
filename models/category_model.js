import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    name: { type: String, required: true },
    flier: { type: String }
}, {
    timestamps: true
})

categorySchema.plugin(toJSON);

export const CategoryModel = model('Category', categorySchema);