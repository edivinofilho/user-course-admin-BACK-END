import { Request, Response } from "express";
import { usersServices } from "../services";
import { tUser, userReturn } from "../interfaces";

const  create = async (req: Request, res: Response): Promise<Response | void> => {
    const user: tUser = await usersServices.create(req.body);
    return res.status(201).json(user);
}; 

const read = async(req: Request, res: Response): Promise<Response | void> => {
    const users: Array<userReturn> = await usersServices.read();
    return res.status(200).json(users);
}

export default { create, read };