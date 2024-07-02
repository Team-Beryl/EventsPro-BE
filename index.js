import express, { Router } from "express";
import eventRouter from "./routes/event_route.js";

const app = express()



app.use(express.json())

app.use = (eventRouter)



const port = process.env.PORT || 6432;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});