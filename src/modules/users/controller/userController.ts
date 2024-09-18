import { hash } from "bcrypt";
import userRepo from "../repository/userRepo";
import { Request, Response } from "express";
import { hashPassword } from "../../../helpers";
import httpStatus from "http-status";

const registerUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const hashedPassword = await hashPassword(password)

        const user = await userRepo.createUser({
            email: email,
            password: hashedPassword
        })

        return res.status(httpStatus.CREATED).json({
            status: httpStatus.CREATED,
            data: {
                user
            }
        })
    } catch (error: any) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default{
    registerUser
}