import db from "./db/conn.mjs"
import express from "express";
import cors from "cors";

import contestantsRouter from "./routes/contestants.js"
import performancesRouter from "./routes/performances.js"
import usersRouter from "./routes/users.js"
import dotenv from "dotenv"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());


app.use("/contestants", contestantsRouter);
app.use("/performances", performancesRouter);
app.use("/users", usersRouter);

app.get("/", (req, res)=> {
    res.send("Welcome to the Girls On Fire API!");
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}...`);
});