import express from "express";
import userRoute from "./router/users.routes.js";
import routerPost from "./router/posts.routes.js"
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

app.use("/users",userRoute)
app.use("/user", userRoute)
app.use('/posts', routerPost)
app.use('/post', routerPost)


app.listen(8080, () => {
    console.log("Server at 8080")
})