const express = require("express")
const route = require("./../routes/usersRouter")

const app = express()

app.use("/users", route)