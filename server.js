import express from "express";
import mongoose from "mongoose";

import DogsRouter from ".controllers/dogs.js";

import { configDotenv } from "dotenv";
import ejs from "ejs";
configDotenv();

const PORT = process.env.PORT || "3000"
const app = express();

//Middleware
app.use(express.json());
app.set("view engine", "ejs");

//mongoose schema

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  needsABrush: Boolean,
});

//routes 
app.use(express.urlencoded({ extended: false }));
app.use("/", dogsRouter);

app.listen(PORT, () => {
    console.log(`There are Good Dogs on port: ${PORT}`)
});