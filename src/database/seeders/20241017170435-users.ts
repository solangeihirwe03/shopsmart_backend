import { QueryInterface } from "sequelize";
import { hashPassword } from "src/helpers";
import {
  userOneId,
  userTwoId,
  userThreeId,
  userFourId,
  userFiveId,
  userSixId
} from "../../types/uuid"

const userOne = {
  id: userOneId,
  firstName: "buyer",
  lastName: "buyer",
  email: "buyer@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "USD",
  role: "buyer",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const userTwo = {
  id: userOneId,
  firstName: "buyer1",
  lastName: "buyer1",
  email: "buyer1@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "FRW  ",
  role: "buyer",
  isVerified: false,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const userThree = {
  id: userOneId,
  firstName: "admin",
  lastName: "admin",
  email: "admin@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "USD",
  role: "admin",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const userFour = {
  id: userOneId,
  firstName: "seller",
  lastName: "seller",
  email: "seller@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "USD",
  role: "seller",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const userFive = {
  id: userOneId,
  firstName: "seller1",
  lastName: "seller1",
  email: "seller1@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "EUR",
  role: "seller",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const userSix = {
  id: userOneId,
  firstName: "buyer2",
  lastName: "buyer2",
  email: "buyer2@gmail.com",
  password: hashPassword("Password@123"),
  phone: +250787113258,
  profilePicture: "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg",
  gender: "male",
  birthDate: "2-2-2001",
  currency: "USD",
  role: "buyer",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const up = (queryInterface: QueryInterface)=>{
  queryInterface.bulkInsert("users",[
    userOne,
    userTwo,
    userThree,
    userFour,
    userFive,
    userSix
  ])
}

export const down = async(queryInterface:QueryInterface)=>{
  await queryInterface.bulkDelete("users", {})
}