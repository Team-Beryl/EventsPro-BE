import express from "express";

const app = express()

const port = process.env.PORT || 6432;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});