import { Request, Response } from "express";
import { SectionService } from "../services/createSectionService";

class SectionController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title } = request.body;
    const { id } = request.user;

    const sectionService = new SectionService();

    const newUser = await sectionService.createSectionService({
      title,
      user: id,
    });

    return response.status(201).json(newUser);
  }
}

export { SectionController };
