import Users from "../models/usersData";
import express from "express";

const app = express();
app.use(express.json());

//   create new user
exports.createUser = async (req, res, next) => {
  const newUser = Users.create({
    name: "paul",
    email: "paulnyamawi18@gmail.com",
    password: "paul1234",
    confirmPassword: "paul1234",
  });
  if (!newUser) {
    console.log("No user Available");
  }
  res.status(201).json({
    status: sucess,
    data: {
      newUser,
    },
  });
};
