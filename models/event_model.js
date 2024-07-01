import { Schema } from "mongoose";

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    flier: { type: String }
}, {
    timestamps: true
})

export const EventModel = model('Event', eventSchema);