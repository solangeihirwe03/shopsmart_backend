import { userAttributes } from "../../../database/models/users";
import authRepository from "../repository/authRepository";
import { Request, Response } from "express";
import { generateToken } from "../../../helpers/index";
import { sendEmail } from "../../../services/sendEmail";
import httpStatus from "http-status";

const registerUser = async(req:Request, res:Response)=>{
    try{
        const register: userAttributes = await authRepository.createUser(req.body)

        const token = generateToken(register.id)
        const session = {
            userId: register.id,
            device: req.headers["user-agent"],
            token: token,
            otp: null
        }

        await authRepository.createSession(session)
        await sendEmail(register.email, "Email Verification", `${process.env.SERVER_URL_DEV}/api/auth/verify-email/${token}`)
        res.status(httpStatus.CREATED).json({
            status: httpStatus.CREATED,
            message: "Account created Successfully",
            data:{
                user: register
            }
        })
    }
    catch(error: any){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export default {
    registerUser
}