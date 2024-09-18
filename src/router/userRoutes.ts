import userController from "../modules/users/controller/userController";
import { isUserExist } from "../middleware/validation";
import { Router } from "express";


const router = Router();

router.post( "/register-user", isUserExist, userController.registerUser)

export default router