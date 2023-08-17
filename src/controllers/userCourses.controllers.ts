import { Request, Response } from "express";
import userCourseServices from "../services/userCourse.services";
import {
  UserCourseInfoArray,
  UserCourseInfoResult,
  UserCourseRegister,
} from "../interfaces/userCourses.interfaces";

const signIn = async (req: Request, res: Response): Promise<any> => {
  const courseId: string = req.params.courseId;
  const userId: string = req.params.userId;

  const payload: UserCourseRegister = {
    courseId: Number(courseId),
    userId: Number(userId),
    active: true,
  };

  const register: UserCourseRegister = await userCourseServices.signIn(payload);

  return res
    .status(201)
    .json({ message: "User successfully vinculed to course" });
};

const inactivateUser = async (req: Request, res: Response): Promise<any> => {
  const courseId: string = req.params.courseId;
  const userId: string = req.params.userId;

  const payload: UserCourseRegister = {
    courseId: Number(courseId),
    userId: Number(userId),
    active: false,
  };

  const deleteUser: UserCourseRegister = await userCourseServices.signIn(
    payload
  );

  return res.status(204).json();
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const courseId = Number(req.params.id);

  const userCourses = await userCourseServices.read(courseId);

  return res.status(200).json(userCourses);
};

export default { signIn, inactivateUser, read };
