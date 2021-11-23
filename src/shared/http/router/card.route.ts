import { Router } from "express";
import { CardController } from "../../../modules/card/controller/cardControlle";
import { ListTotalCardSectionController } from "../../../modules/card/controller/listTotalCardSectionControlle";
import { DeleteController } from "../../../modules/card/controller/deleteCardControlle";
import { UpdateController } from "../../../modules/card/controller/updateCardControlle";

import { VerifyToken } from "../middleware/verifyToken";

const cardRoute = Router();

const cardController = new CardController();
const listTotalCardSectionController = new ListTotalCardSectionController();
const deleteController = new DeleteController();
const updateController = new UpdateController();

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
cardRoute.put(
  "/card/updatecard/:idCard",
  VerifyToken,
  updateController.execute
);

export { cardRoute };
