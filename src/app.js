import express from "express";
import router from "./router.js";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json())

app.use("/users",router)
app.use("/user", router)

app.listen(8080, () => {
    console.log("Server at 8080")
})