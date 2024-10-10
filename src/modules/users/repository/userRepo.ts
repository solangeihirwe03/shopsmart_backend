import user from "../../../database/models/users";


const createUser = async (body: any)=>{
    return await user.create(body)
}

const getAllUsers = async()=>{
    return await user.find()
}

const getUserByEmail = async(email: string)=>{
    return await user.findOne({email})
}

export default {
    createUser,
    getAllUsers,
    getUserByEmail
}