import express from "express";
import cors from 'cors';
import eventRouter from "./routes/event_route.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";
import categoryRouter from "./routes/category_route.js";
import expressOasGenerator from "express-oas-generator";





const app = express()
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'events'],
    mongooseModels: mongoose.modelNames(),
});


app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
dbConnection();


// Routes
app.use(eventRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));





const port = process.env.PORT || 6432;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});