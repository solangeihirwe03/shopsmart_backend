import { Router } from "express";
import {
    isUserExist,
    validation
} from "../middleware/validation";
import authContoller from "../modules/auth/controller/authContoller";
import { credentialSchema } from "../modules/auth/validations/authValidation";

const router = Router();

router.post("/register-user", validation(credentialSchema), isUserExist, authContoller.registerUser)

export default router