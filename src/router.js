import express from "express";
import {getAll, createUser, putUser, deleteUser} from "./controller.js"

const router = express.Router();

router.get("/", async (req,res) => {
    let users = await getAll()
    res.json(users)
})

router.post("/", async (req,res) => {
    const {name, email} = req.body;

    let user = await createUser(name, email);

    res.status(201).json(user)
})

router.put("/:id", async (req,res) => {
    const id = req.params.id;

    const {name, email} = req.body;

    let changesInUser = await putUser(id, name, email)

    res.status(203).json(changesInUser)
})

router.delete("/:id", async (req,res) => {
    const id = req.params.id;

    let data = await deleteUser(id)

    res.status(204).send()
})

export default router