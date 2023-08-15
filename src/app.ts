import "express-async-errors";
import express, { Application, json } from 'express'
import { handleErrors } from "./middlewares";
import { coursesRouter, sessionRouter, usersRouter } from "./routers";

const app: Application = express();
app.use(json());

app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/login", sessionRouter);

app.use(handleErrors);

export default app;
