import { Request, Response } from "express";
import { DeleteService } from "../services/deleteCardService";

class DeleteController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { idCard } = request.params;

    const cardService = new DeleteService();

    const deleteCard = await cardService.deleteService(idCard);

    return response.status(204).json(deleteCard);
  }
}

export { DeleteController };
