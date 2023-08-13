import { Router } from "express";
import { coursesControllers } from "../controllers";
import { validateBodyMiddleware } from "../middlewares";

const coursesRouter: Router = Router();

coursesRouter.post("", validateBodyMiddleware, coursesControllers.create)

export default coursesRouter;