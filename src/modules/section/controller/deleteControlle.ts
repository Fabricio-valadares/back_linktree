import { Request, Response } from "express";
import { DeleteSection } from "../services/deleteSectionService";

class DeleteController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { idSessao } = request.params;

    const sectionService = new DeleteSection();

    const deleteUser = await sectionService.deleteSection(idSessao);

    return response.status(204).json(deleteUser);
  }
}

export { DeleteController };
