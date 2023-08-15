import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { AppError } from "../errors";
import { QueryResult } from "pg";

const emailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const queryResult: QueryResult = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [req.body.email]);

    console.log(req.body.admin)
    if(queryResult.rowCount > 0){
        throw new AppError("Email already registered", 409)
    }   

    
    return next();
};

export { emailExistsMiddleware };