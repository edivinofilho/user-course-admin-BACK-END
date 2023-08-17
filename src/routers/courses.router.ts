import { Router } from "express";
import { coursesControllers, userCoursesControllers } from "../controllers";
import { validateBodyMiddleware, validateToken, validateUserPermission } from "../middlewares";
import { courseCreate } from "../schemas";

const coursesRouter: Router = Router();

coursesRouter.post("", validateBodyMiddleware(courseCreate), validateToken,  validateUserPermission, coursesControllers.create);
coursesRouter.get("", coursesControllers.read);

coursesRouter.post("/:courseId/users/:userId", validateToken, validateUserPermission, userCoursesControllers.signIn);
coursesRouter.delete("/:courseId/users/:userId", validateToken, validateUserPermission, userCoursesControllers.inactivateUser);
coursesRouter.get("/:id/users", validateToken, validateUserPermission, userCoursesControllers.read);

export default coursesRouter;