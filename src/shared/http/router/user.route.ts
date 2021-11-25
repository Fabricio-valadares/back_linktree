import { Router } from "express";
import { UserController } from "../../../modules/user/controller/createController";
import { SessionLoginController } from "../../../modules/accounts/controller/sessionLoginController";
import { ListOneUserController } from "../../../modules/user/controller/listOneUserController";
import { ListOneDataController } from "../../../modules/user/controller/listOneDataControlle";

import { VerifyToken } from "../middleware/verifyToken";

const userRoute = Router();

const userController = new UserController();
const sessionLoginController = new SessionLoginController();
const listOneUserController = new ListOneUserController();
const listOneDataController = new ListOneDataController();

userRoute.post("/register", userController.execute);
userRoute.post("/login", sessionLoginController.execute);
userRoute.get("/listOne/:id", VerifyToken, listOneUserController.execute);
userRoute.get("/listdata/:urlpiece", listOneDataController.execute);

export { userRoute };
