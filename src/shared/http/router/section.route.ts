import { Router } from "express";
import { SectionController } from "../../../modules/section/controller/createController";
import { SectionListTotalUser } from "../../../modules/section/controller/listTotalUserController";
import { DeleteController } from "../../../modules/section/controller/deleteControlle";

import { VerifyToken } from "../middleware/verifyToken";

const sectionRoute = Router();

const sectionController = new SectionController();
const sectionListTotalUser = new SectionListTotalUser();
const deleteController = new DeleteController();

sectionRoute.post("/section/create", VerifyToken, sectionController.execute);
sectionRoute.get(
  "/section/listsectionuser",
  VerifyToken,
  sectionListTotalUser.execute
);
sectionRoute.delete(
  "/section/deletesessao/:idSessao",
  VerifyToken,
  deleteController.execute
);

export { sectionRoute };
