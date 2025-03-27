import { Router } from "express";
import Dog from "../models/dogs.js";

const dogsRouter = Router();

dogsRouter.get("/", (req, res) => {
    res.render("index");
});

//get create form 
dogsRouter.get("/dogs/new", (req, res) => {
    res.render("dogs/new");
});

//get the edit form
dogsRouter.get("/dogs/:id/edit", async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);

    res.render("dogs/edit", { dog });
});

dogsRouter.get("/dogs/:id", async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);

    res.render("dogs/show", { dog });
});

// get all dogs 
dogsRouter.get("/dogs", async (req, res) => {
    const dogs = await Dog.find({});
    res.render("dogs/index", { dogs });
});

//create a dog
dogsRouter.post("/dogs", async (req, res) => {
    let { name, needsABrush } = req.body;

    if (needsABrush) {
        needsABrush = true;
    } else {
        needsABrush = false; 
    }

    const dog = await Dog.create({ name, needsABrush });

    res.redirect("/dogs");
});

dogsRouter.put("/dogs/:id", async (req, res) => {
    const { id } = req.params; 
    const updateData = {
        name: req.body.name,
        needsABrush: req.body.needsABrush,
    };

    if (updateData.needsABrush) {
        updateData.needsABrush = true;
    } else {
        updateData.needsABrush = false;
    }

    await Dog.findByIdAndUpdate (id, updateData, {
        returnDocument: "after",
    });
    res.redirect(`/dogs/${id}`);
});

dogsRouter.delete("/dogs/:id", async (req, res) => {
    const { id } = req.params; 
    await Dog.findByIdAndDelete(id);

    res.redirect("/dogs");
});

export default dogsRouter;