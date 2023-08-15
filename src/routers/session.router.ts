
import { Router } from "express";
import { sessionControllers, usersControllers } from "../controllers";
import { validateBodyMiddleware, emailExistsMiddleware } from "../middlewares";
import { sessionLogin } from "../schemas";

const sessionRouter: Router = Router();

sessionRouter.post("", validateBodyMiddleware(sessionLogin), sessionControllers.create);

export default sessionRouter;