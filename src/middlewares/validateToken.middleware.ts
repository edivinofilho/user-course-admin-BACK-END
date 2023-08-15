import { verify } from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const validateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | undefined = req.headers.authorization;

    if(authorization === undefined){
        throw new AppError("Missing bearer token", 401)
    }

    const [_bearer, token] = authorization.split(" ");

    const decoded = verify(
        token, 
        String(process.env.SECRET_KEY!), 
        (error: any, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401);
        }

        res.locals = { ...res.locals, decoded}
    });


    return next();
};

export { validateToken };