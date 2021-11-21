import { Request, Response } from "express";
import { SectionListTotalUserService } from "../services/listTotalUserSection";

class SectionListTotalUser {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.user;

    const sectionListTotalUserService = new SectionListTotalUserService();

    const listSection =
      await sectionListTotalUserService.sectionListTotalUserService(id);

    return response.status(200).json(listSection);
  }
}

export { SectionListTotalUser };
