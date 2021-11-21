import { Router } from "express";
import { CardController } from "../../../modules/card/controller/cardControlle";

import { VerifyToken } from "../middleware/verifyToken";

const cardRoute = Router();

const cardController = new CardController();

cardRoute.post("/card/create/:sectionId", VerifyToken, cardController.execute);

export { cardRoute };
