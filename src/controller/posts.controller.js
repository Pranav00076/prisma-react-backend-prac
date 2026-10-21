import prisma from "../database/prisma.js"

async function getAllPost() {
    const posts = await prisma.post.findMany();
    return posts
}

async function getPost(id) {
    const post = await prisma.post.findFirst({
        where : {id : Number(id)}
    })

    return post
}


async function createPost(title, content, published, authorId) {
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            published : published,
            authorId : authorId
        }
    });
    return post
}

async function putPost(id,title, content, published, authorId) {
    const changesInPost = await prisma.post.update({
        where : { id : Number(id) },
        data : {
            title: title,
            content: content,
            published : published,
            authorId : authorId
        }
    })
    return changesInPost
}

async function deletePost(id) {
    try{
        const deletedPost = await prisma.post.delete({
            where : {id : Number(id)}
        })
    } catch (err) {

    }
}


export {getAllPost, createPost, getPost, putPost, deletePost}