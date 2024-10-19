import Joi from "joi";
import { Request, Response, NextFunction, RequestHandler } from "express";
import httpStatus from "http-status";
import { userAttributes } from "../database/models/users";
import authRepository from "../modules/auth/repository/authRepository";

const validation = (schema: Joi.ObjectSchema | Joi.ArraySchema): RequestHandler =>{
    return async(req: Request, res:Response, next:NextFunction): Promise<void> =>{
        try{
            const {error} = schema.validate(req.body, {abortEarly: false})

            if(error){
                const errorMessage = error.details
                .map((detail)=> detail.message.replace(/"/, ""))
                .join(", ");

                res.status(httpStatus.BAD_REQUEST).json({
                    status: httpStatus.BAD_REQUEST,
                    error: errorMessage
                });
                return;
            }
            next();
        }catch(error: any){
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                error: error.message
            })
        }
    }
}

const isUserExist = async(req:Request, res:Response, next:NextFunction)=>{
    try{
        let userExist: userAttributes | null = null;

        if(req.body.email){
            userExist = await authRepository.findUserAttributes("email", req.body.email)
            if(userExist){
                if(!userExist.isVerified){
                    return res.status(httpStatus.CONFLICT).json({
                        status: httpStatus.CONFLICT,
                        error: "Account already exist"
                    })
                }
                return res.status(httpStatus.CONFLICT).json({
                    status: httpStatus.CONFLICT,
                    message: "Account already exists. Please verify your account"
                })
            }
        }
        if(req.params.id){
            userExist = await authRepository.findUserAttributes("id", req.params.id);
            if(userExist){
                return next();
            }
            return res.status(httpStatus.NOT_FOUND).json({
               status: httpStatus.NOT_FOUND,
               message: "User not found" 
            })
        }
        return next();
    } catch(error: any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            error: error.message
        })
    }
}

export {
    validation,
    isUserExist
}