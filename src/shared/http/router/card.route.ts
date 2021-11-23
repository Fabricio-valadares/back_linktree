import { Router } from "express";
import { CardController } from "../../../modules/card/controller/cardControlle";
import { ListTotalCardSectionController } from "../../../modules/card/controller/listTotalCardSectionControlle";
import { DeleteController } from "../../../modules/card/controller/deleteCardControlle";

import { VerifyToken } from "../middleware/verifyToken";

const cardRoute = Router();

const cardController = new CardController();
const listTotalCardSectionController = new ListTotalCardSectionController();
const deleteController = new DeleteController();

cardRoute.post("/card/create/:sectionId", VerifyToken, cardController.execute);
cardRoute.get(
  "/card/list/:sectionId",
  VerifyToken,
  listTotalCardSectionController.execute
);
cardRoute.delete(
  "/card/deletecard/:idCard",
  VerifyToken,
  deleteController.execute
);

export { cardRoute };
