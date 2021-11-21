import { Request, Response } from "express";
import { ItensLinkService } from "../services/createItensLinkService";

class ItensLinkController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { link } = request.body;
    const { cardId } = request.params;

    const itensLinkService = new ItensLinkService();

    const newItensLink = await itensLinkService.createItensLinkService({
      link,
      card: cardId,
    });

    return response.status(201).json(newItensLink);
  }
}

export { ItensLinkController };
