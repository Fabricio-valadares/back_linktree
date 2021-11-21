import { Router } from "express";
import { CardController } from "../../../modules/card/controller/cardControlle";
import { ListTotalCardSectionController } from "../../../modules/card/controller/listTotalCardSectionControlle";

import { VerifyToken } from "../middleware/verifyToken";

const cardRoute = Router();

const cardController = new CardController();
const listTotalCardSectionController = new ListTotalCardSectionController();

cardRoute.post("/card/create/:sectionId", VerifyToken, cardController.execute);
cardRoute.get(
  "/card/list/:sectionId",
  VerifyToken,
  listTotalCardSectionController.execute
);

export { cardRoute };
