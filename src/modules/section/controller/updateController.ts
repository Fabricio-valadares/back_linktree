import { Request, Response } from "express";
import { UpdateSessaoService } from "../services/updateSectionService";

class UpdateControlle {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title } = request.body;
    const { idSessao } = request.params;

    const sessaoService = new UpdateSessaoService();

    const newSessao = await sessaoService.updateSessao({ id: idSessao, title });

    return response.status(200).json(newSessao);
  }
}

export { UpdateControlle };
