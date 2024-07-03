import express, { Router } from "express";
import eventRouter from "./routes/event_route.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/category_route.js";
// import expressOasGenerator from "express-oas-generator";
import cors from 'cors';


const app = express()
// expressOasGenerator.handleRequests(app, {
//     alwaysServerDocs: true,
//     tags: ['categories', 'events'],
//     mongooseModels: mongoose.modelNames(),
// })


app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
dbConnection();


// Routes
app.use(eventRouter);
app.use(categoryRouter);




const port = process.env.PORT || 6432;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});