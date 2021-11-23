import { Router } from "express";
import { ItensLinkController } from "../../../modules/itensCard/controller/itensLinkController";
import { DeleteLinkController } from "../../../modules/itensCard/controller/deleteLinkController";

import { VerifyToken } from "../middleware/verifyToken";

const itensLinkRoute = Router();

const itensLinkController = new ItensLinkController();
const deleteLinkController = new DeleteLinkController();

itensLinkRoute.post(
  "/itens/create/:cardId",
  VerifyToken,
  itensLinkController.execute
);
itensLinkRoute.delete(
  "/itens/deletelink/:idLink",
  VerifyToken,
  deleteLinkController.execute
);

export { itensLinkRoute };
