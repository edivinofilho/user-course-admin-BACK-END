import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import "dotenv/config";

import format, { string } from "pg-format";
import { tUser } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";
import { userResultSchema } from "../schemas/user.schemas";

const create = async (payload: tUser): Promise<any> => {
    const { email, password } = payload;
    
    const queryResult = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [email]);
    const user: tUser = queryResult.rows[0];

    if(!user) {
        throw new AppError("Wrong email/password", 401);
    }

    const  passwordIsValid: boolean = await compare(password, user.password);


    if(!passwordIsValid){
        throw new AppError("Wrong email/password", 401);
    }

    const token = sign({
        id: user.id, email: user.email, admin: user.admin    
    }, String(process.env.SECRET_KEY!), {
        expiresIn: process.env.EXPIRES_IN,
        subject: String(user.id)
    });

    console.log(user);
    console.log(token);

    
    return token;
};

export default { create };