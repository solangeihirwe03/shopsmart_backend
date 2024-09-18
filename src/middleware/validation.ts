import { NextFunction, Request, Response } from "express";
import userRepo from "../modules/users/repository/userRepo";
import httpStatus from "http-status";


const isUserExist = async(req:Request, res:Response, next: NextFunction)=>{
    try{
        const {email} = req.body

        const user = await userRepo.getOneUser(email)

        const allUsers = await userRepo.getAllUsers()

        if(allUsers.length === 0){
            return res.status(httpStatus.NOT_FOUND).json({
                status: httpStatus.NOT_FOUND,
                error: "no user found"
            })
        }

        if(user){
            return res.status(httpStatus.CONFLICT).json({
                status: httpStatus.CONFLICT,
                error: "user already exist, login to continue"
            })
        }

        return next()
    }catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export{
    isUserExist
}