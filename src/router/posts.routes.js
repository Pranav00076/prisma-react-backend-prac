import express from "express";
import {list, getOne, create, update, remove} from "../controller/posts.controller.js"

const routerPost = express.Router();

routerPost.get("/", list)

routerPost.get("/:id", getOne)

routerPost.post('/', create)

routerPost.put("/:id", update)

routerPost.delete("/:id", remove)

export default routerPost
