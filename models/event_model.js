import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: String, required: true },
    StartAt: { type: String, required: true },
    EndAt: { type: String, required: true },
    location: { type: String, required: true },
    flier: { type: String }
}, {
    timestamps: true
})


eventSchema.plugin(toJSON);

export const EventModel = model('Event', eventSchema);