import express from "express";
import usersRouter from "./../routes/usersRouter";

const app = express();
app.use("/users", usersRouter);
