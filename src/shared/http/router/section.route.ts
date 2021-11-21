import { Router } from "express";
import { SectionController } from "../../../modules/section/controller/createController";
import { SectionListTotalUser } from "../../../modules/section/controller/listTotalUserController";

import { VerifyToken } from "../middleware/verifyToken";

const sectionRoute = Router();

const sectionController = new SectionController();
const sectionListTotalUser = new SectionListTotalUser();

sectionRoute.post("/section/create", VerifyToken, sectionController.execute);
sectionRoute.get(
  "/section/listsectionuser",
  VerifyToken,
  sectionListTotalUser.execute
);

export { sectionRoute };
