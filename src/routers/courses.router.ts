import { Router } from "express";
import { coursesControllers } from "../controllers";
import { validateBodyMiddleware, validateToken, validateUserPermission } from "../middlewares";
import { courseCreate } from "../schemas";

const coursesRouter: Router = Router();

coursesRouter.post("", validateBodyMiddleware(courseCreate), validateToken,  validateUserPermission, coursesControllers.create);
coursesRouter.get("", coursesControllers.read)

export default coursesRouter;