import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";


const app = express();
connectDB();

app.get("/", (req , res) => {
    res.json({message: "server connected"});
});


const port = process.env.PORT || 5000

app.listen(port , () =>{
    console.log("server started at ", port);
})