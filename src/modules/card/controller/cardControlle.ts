import { Request, Response } from "express";
import { CardService } from "../services/createCardServices";

class CardController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title } = request.body;
    const { sectionId } = request.params;

    const cardService = new CardService();

    const newCard = await cardService.createCardService({
      title,
      section: sectionId,
    });

    return response.status(201).json(newCard);
  }
}

export { CardController };
