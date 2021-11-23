import { Router } from "express";
import { SectionController } from "../../../modules/section/controller/createController";
import { SectionListTotalUser } from "../../../modules/section/controller/listTotalUserController";
import { DeleteController } from "../../../modules/section/controller/deleteControlle";
import { UpdateControlle } from "../../../modules/section/controller/updateController";

import { VerifyToken } from "../middleware/verifyToken";

const sectionRoute = Router();

const sectionController = new SectionController();
const sectionListTotalUser = new SectionListTotalUser();
const deleteController = new DeleteController();
const updateControlle = new UpdateControlle();

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

sectionRoute.put(
  "/section/update/:idSessao",
  VerifyToken,
  updateControlle.execute
);

export { sectionRoute };
