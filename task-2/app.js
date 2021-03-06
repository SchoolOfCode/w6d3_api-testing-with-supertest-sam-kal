import express from "express";
import logger from "morgan";
import usersRouter from "./routes/users.js";
import request from "supertest";

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/users", usersRouter);

export default app;
