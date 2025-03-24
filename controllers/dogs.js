import { Router } from "express";
import Dog from "../views/models/dogs.js";

const dogsRouter = Router();

dogsRouter.get("/", (req, res) => {
    res.render("index");
});

dogsRouter.get("/dogs", async (req, res) => {
    const fruits = await Dog.find({});
});

dogsRouter.get("/dogs/new", (req, res) => {
    res.render("dogs/new")
});

dogsRouter.post("/dogs",async (req, res) => {
    let { name, description, image, needsABrush } = req.body;

    const dog = await Dog.create({ name, description, image, needsABrush });

    res.redirect("/dogs")
});

export default dogsRouter;