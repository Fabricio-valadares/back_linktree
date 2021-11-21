import { Request, Response } from "express";
import { ListTotalCardSectionService } from "../services/listTotalCardSection";

class ListTotalCardSectionController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { sectionId: id } = request.params;

    const cardService = new ListTotalCardSectionService();

    const list = await cardService.listTotalCardSection(id);

    return response.status(201).json(list);
  }
}

export { ListTotalCardSectionController };
