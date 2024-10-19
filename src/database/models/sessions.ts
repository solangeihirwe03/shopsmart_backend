import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/db.config";

export interface SessionAttributes{
    id: string;
    userId:string;
    device: string;
    token: string;
    otp: string;
    createdAt: Date;
    updatedAt: Date;
}

class Sessions extends Model<SessionAttributes> implements SessionAttributes{
    declare id: string;
    declare userId: string;
    declare device: string;
    declare token: string;
    declare otp: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Sessions.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: "users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
        device:{
            type: DataTypes.STRING(128),
            allowNull: true
        },
        token:{
            type: DataTypes.STRING(280),
            allowNull: true
        },
        otp:{
            type: DataTypes.STRING(128),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE(),
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE(),
            allowNull: true
        }
    },
    {
        sequelize: sequelizeConnection,
        tableName: "sessions",
        timestamps: true,
        modelName: "Sessions"
    }
)

export default Sessions