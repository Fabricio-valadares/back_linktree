import { Router } from "express";
import { UserController } from "../../../modules/user/controller/createController";

const userRoute = Router();

const userController = new UserController();

userRoute.post("/register", userController.execute);

export { userRoute };
