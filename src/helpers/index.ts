import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const hashPassword = (password: string)=>{
    return bcrypt.hashSync(password, 10)
}

// const generateToken = (id: string)=>{
//     return jwt.sign({id}, process.env.JWT_SECRET)
// }

export {
    hashPassword
}