import express from "express";
import {list, getOne, create, update, remove} from "../controller/users.controller.js"

const router = express.Router();

router.get("/", list)

router.get("/:id", getOne)

router.post("/", create)

router.put("/:id", update)

router.delete("/:id", remove)

export default router