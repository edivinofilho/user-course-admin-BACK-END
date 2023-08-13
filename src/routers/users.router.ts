import { Router } from "express";
import { usersControllers } from "../controllers";
import { validateBodyMiddleware } from "../middlewares";
import { userCreate } from "../schemas";

const usersRouter: Router = Router();

usersRouter.post("", validateBodyMiddleware(userCreate), usersControllers.create);

export default usersRouter;