import { Router } from "express";
import { UserController } from "../../../modules/user/controller/createController";
import { SessionLoginController } from "../../../modules/accounts/controller/sessionLoginController";

const userRoute = Router();

const userController = new UserController();
const sessionLoginController = new SessionLoginController();

userRoute.post("/register", userController.execute);
userRoute.post("/login", sessionLoginController.execute);

export { userRoute };
