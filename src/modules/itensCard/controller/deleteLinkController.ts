import { Request, Response } from "express";
import { DeleteLinkService } from "../services/deleteLinkCardService";

class DeleteLinkController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { idLink } = request.params;

    const itensLinkService = new DeleteLinkService();

    const deleteItensLink = await itensLinkService.deleteLinkService(idLink);

    return response.status(204).json(deleteItensLink);
  }
}

export { DeleteLinkController };
