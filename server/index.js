import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";    



const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // CORS middleware to allow requests from the client
connectDB();

app.use(express.json()); 
app.use(cookieParser());
app.use(morgan("dev")); 

// api.use("/patient" , )

app.get("/", (req , res) => {
    res.json({message: "server connected"});
});


const port = process.env.PORT || 5000

app.listen(port , () =>{
    console.log("server started at ", port);
})




