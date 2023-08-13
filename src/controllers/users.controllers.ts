import { Request, Response } from "express";
import { usersServices } from "../services";
import { tUser } from "../interfaces";

const  create = async (req: Request, res: Response): Promise<Response | void> => {
    const user: tUser = await usersServices.create(req.body);
    return res.status(201).json(user);
}; 

export default { create };