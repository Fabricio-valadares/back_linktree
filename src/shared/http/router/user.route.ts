import { Router } from "express";
import { UserController } from "../../../modules/user/controller/createController";
import { SessionLoginController } from "../../../modules/accounts/controller/sessionLoginController";
import { ListOneUserController } from "../../../modules/user/controller/listOneUserService";

import { VerifyToken } from "../middleware/verifyToken";

const userRoute = Router();

const userController = new UserController();
const sessionLoginController = new SessionLoginController();
const listOneUserController = new ListOneUserController();

userRoute.post("/register", userController.execute);
userRoute.post("/login", sessionLoginController.execute);
userRoute.get("/listOne/:id", VerifyToken, listOneUserController.execute);

export { userRoute };
