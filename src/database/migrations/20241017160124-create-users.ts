import { QueryInterface, DataTypes } from "sequelize";

export default{
  up: async(queryInterface: QueryInterface)=>{
    await queryInterface.createTable("users", {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      firstName:{
        type: DataTypes.STRING(128),
        allowNull: true
      },
      lastName: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      email:{
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      password:{
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      phone:{
        type: new DataTypes.STRING(50),
        allowNull: true
      },
      profilePicture:{
        type: DataTypes.STRING(128),
        allowNull: true
      },
      gender:{
        type: DataTypes.ENUM("male", "female"),
        allowNull: true
      },
      birthDate:{
        type: DataTypes.DATE(),
        allowNull: true
      },
      currency:{
        type: DataTypes.STRING(128),
        allowNull: true
      },
      role:{
        type: DataTypes.STRING(128),
        allowNull: true
      },
      isVerified:{
        type: DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: false
      },
      createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt:{
        allowNull:false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  },
  down:async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("users");
  }
}