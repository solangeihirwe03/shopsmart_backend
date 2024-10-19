import { Model, DataTypes, Optional } from "sequelize";
import sequelizeConnection from "../config/db.config";
import { hashPassword } from "../../helpers/index";

export interface userAttributes {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    phone?: number;
    profilePicture?: string;
    gender?: string;
    birthDate?: Date;
    currency?: string;
    role?: string;
    isVerified?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface UserCreationAttributes extends Optional<userAttributes, "id"> { }

class Users extends Model<userAttributes, UserCreationAttributes> implements userAttributes {
    declare id: string;
    declare firstName?: string;
    declare lastName?: string;
    declare email: string;
    declare password: string;
    declare phone?: number;
    declare profilePicture?: string;
    declare gender?: string;
    declare birthDate?: Date;
    declare currency?: string;
    declare role?: string;
    declare isVerified?: boolean;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

Users.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        profilePicture: {
            type: DataTypes.STRING(128),
            allowNull: true,
            defaultValue: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
        },
        gender: {
            type: DataTypes.ENUM("male", "female"),
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        currency: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING(128),
            allowNull: true,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        createdAt: {
            field: "createdAt",
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            field: "updatedAt",
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },{
        sequelize: sequelizeConnection,
        tableName: "users",
        timestamps: true,
        modelName: "Users",
        hooks:{
            beforeCreate: async(user)=>{
                if(user.password){
                    user.password= await hashPassword(user.password);
                }
            },
            beforeUpdate: async(user)=>{
                if(user.changed("password")){
                    user.password = await hashPassword(user.password)
                }
            }
        }
    }
)

export default Users
