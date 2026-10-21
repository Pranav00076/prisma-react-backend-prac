import {getAll, createUser, putUser, deleteUser, getUser} from "../services/users.service.js"

const list = async (req,res) => {
    let users = await getAll()
    res.json(users)
}

const getOne = async (req,res) => {
    let id = Number(req.params.id)
    let users = await getUser(id)
    res.json(users)
}

const create = async (req,res) => {
    const {name, email} = req.body;

    let user = await createUser(name, email);

    res.status(201).json(user)
}

const update = async (req,res) => {
    const id = req.params.id;

    const {name, email} = req.body;

    let changesInUser = await putUser(id, name, email)

    res.status(203).json(changesInUser)
}

const remove = async (req,res) => {
    const id = req.params.id;

    let data = await deleteUser(id)

    res.status(204).send()
}

export {list, getOne, create, update, remove}

