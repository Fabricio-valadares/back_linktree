import { Request, Response } from "express";
import { UpdateCardService } from "../services/updateCradService";

class UpdateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title } = request.body;
    const { idCard } = request.params;

    const cardService = new UpdateCardService();

    const updateCard = await cardService.updateSessao({ id: idCard, title });

    return response.status(200).json(updateCard);
  }
}

export { UpdateController };
