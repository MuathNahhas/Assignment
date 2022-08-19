const express = require("express");
const userRouter = express.Router();
const {
  getUserById,
  DeleteUserById,
  updateUser,
} = require("./user.Controller");
const { login } = require("../auth/login.controller");
const { createUser } = require("../auth/register.controller");
const { authentication } = require("../middlewares/authentication");
userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.get("/", authentication, getUserById);
userRouter.delete("/", authentication, DeleteUserById);
userRouter.put("/", authentication, updateUser);
module.exports = userRouter;
