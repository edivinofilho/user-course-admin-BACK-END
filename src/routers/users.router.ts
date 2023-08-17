import { Router } from "express";
import { usersControllers } from "../controllers";
import { emailExistsMiddleware, validateBodyMiddleware, validateToken, validateUserPermission } from "../middlewares";
import { userCreate } from "../schemas";

const usersRouter: Router = Router();

usersRouter.post("", validateBodyMiddleware(userCreate), emailExistsMiddleware, usersControllers.create);
usersRouter.get("", validateToken, validateUserPermission, usersControllers.read);

usersRouter.get("/:id", );
usersRouter.get("/:id/courses", validateToken, validateUserPermission,usersControllers.readUserCourses);

export default usersRouter;