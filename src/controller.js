import prisma from "./prisma.js";

async function getAll() {
    const users = await prisma.user.findMany();
    return users
}

async function createUser(name, email) {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    });
    return user
}
async function putUser(id,name,email) {
    const changesInUser = await prisma.user.update({
        where : { id : Number(id) },
        data : {
            name: name,
            email: email
        }
    })
    return changesInUser
}

async function deleteUser(id) {
    try{
        const deleteduser = await prisma.user.delete({
            where : {id : Number(id)}
        })
    } catch (err) {

    }
}

export {getAll, createUser, putUser, deleteUser};
