import { QueryInterface, DataTypes } from "sequelize";

export default{
  up: async(queryInterface: QueryInterface)=>{
    await queryInterface.createTable("users", {
      id:{
        type: new DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      firstName:{
        type: new DataTypes.STRING(128),
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
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      gender:{
        type: new DataTypes.ENUM("male", "female"),
        allowNull: true
      },
      birthDate:{
        type: new DataTypes.DATE(),
        allowNull: true
      },
      currency:{
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      role:{
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      isVerified:{
        type: new DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: false
      },
      createdAt:{
        allowNull:false,
        type: new DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt:{
        allowNull:false,
        type: new DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  },
  down:async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("users");
  }
}