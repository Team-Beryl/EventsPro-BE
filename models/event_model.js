import { Schema, model, Types  } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: { type: String, required: true },
    category: {type: String, enum: ["Music", "Tech", "Wedding", "Conference"]},
    date: { type: Date, required: true },
    description:{type:String},
    price:{type:String},
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, required: true },
    flier: { type: String }
}, {
    timestamps: true
})


eventSchema.plugin(toJSON);

export const EventModel = model('Event', eventSchema);