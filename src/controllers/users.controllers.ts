import { Request, Response } from "express";
import { usersServices } from "../services";
import { User, UserReturn } from "../interfaces";

const create = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const user: User = await usersServices.create(req.body);

  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response | void> => {
  const users: Array<UserReturn> = await usersServices.read();

  return res.status(200).json(users);
};

const readUserCourses = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);

  const userCourses = await usersServices.readUserCourses(userId);

  return res.status(200).json(userCourses);
};

export default { create, read, readUserCourses };
