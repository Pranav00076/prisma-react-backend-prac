import {getAllPost, createPost, getPost, putPost, deletePost} from "../services/posts.service.js"

const list = async (req,res) => {
    try{
        let posts = getAllPost()
        res.json(posts)
    } catch (err) {
        console.log(err)
    }
}

const getOne = async (req,res) => {
    let id = Number(req.params.id)
    let users = await getPost(id)
    res.json(users)
}

const create = async (req,res) => {
    try{
        const {title, content, published, authorId} = req.body;

        let post = await createPost(title, content, published, authorId);

        res.status(201).json(post)
    } catch (err) {
        console.log(err)
    }
}

const update = async (req,res) => {
    const id = req.params.id;

    const {title, content, published, authorId} = req.body;

    let changesInPost = await putPost(id,title, content, published, authorId)

    res.status(203).json(changesInPost)
}

const remove = async (req,res) => {
    const id = req.params.id;

    let data = await deletePost(id)

    res.status(204).send()
}

export {list, getOne, create, update, remove}
