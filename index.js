import express, { Router } from "express";
import eventRouter from "./routes/event_route.js";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";


const app = express()



app.use(express.json())
app.use(express.static('uploads'))
dbConnection();


// Routes
app.use(eventRouter)




const port = process.env.PORT || 6432;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});