import { Router } from "express";
import { ItensLinkController } from "../../../modules/itensCard/controller/itensLinkController";

import { VerifyToken } from "../middleware/verifyToken";

const itensLinkRoute = Router();

const itensLinkController = new ItensLinkController();

itensLinkRoute.post(
  "/itens/create/:cardId",
  VerifyToken,
  itensLinkController.execute
);

export { itensLinkRoute };
