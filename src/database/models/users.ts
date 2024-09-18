import { required } from "joi";
import mongoose from "mongoose";

const schema = mongoose.Schema

const addressSchema = new schema(
    {
        street: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        }
    })

const userSchema = new schema(
    {
        username: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profilePicture:{
            type: String,
            required: false
        },
        address: addressSchema,
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
    }
)

const user = mongoose.model('users', userSchema)

export default user