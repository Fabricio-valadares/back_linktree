import { Router } from "express";
import { ItensLinkController } from "../../../modules/itensCard/controller/itensLinkController";
import { DeleteLinkController } from "../../../modules/itensCard/controller/deleteLinkController";
import { UpdateLinkController } from "../../../modules/itensCard/controller/updateLinkController";

import { VerifyToken } from "../middleware/verifyToken";

const itensLinkRoute = Router();

const itensLinkController = new ItensLinkController();
const deleteLinkController = new DeleteLinkController();
const updateLinkController = new UpdateLinkController();

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

itensLinkRoute.put(
  "/itens/updatelink/:idLink",
  VerifyToken,
  updateLinkController.execute
);

export { itensLinkRoute };
