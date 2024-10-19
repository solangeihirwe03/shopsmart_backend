import Users from "../../../database/models/users";
import Sessions from "../../../database/models/sessions";

const createUser = async(body:any)=>{
    return await Users.create({...body, role: 'buyer'})
}

const createSession= async(body:any)=>{
    return await Sessions.create(body)
}

const findUserAttributes = async(key: string, value: string)=>{
    return await Users.findOne({where: {[key]: value}})
}

export default{
    createUser,
    createSession,
    findUserAttributes
}