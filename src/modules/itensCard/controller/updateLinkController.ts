import { Request, Response } from "express";
import { UpdateLinkService } from "../services/updateItensLinkService";

class UpdateLinkController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { link, title } = request.body;
    const { idLink } = request.params;

    const itensLinkService = new UpdateLinkService();

    const updateItensLink = await itensLinkService.updateLinkService({
      id: idLink,
      link,
      title,
    });

    return response.status(200).json(updateItensLink);
  }
}

export { UpdateLinkController };
