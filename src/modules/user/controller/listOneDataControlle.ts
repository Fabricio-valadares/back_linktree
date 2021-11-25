import { Request, Response } from "express";
import { ListOneDataPageService } from "../services/listOneDataPageService";

class ListOneDataController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { urlpiece } = request.params;

    const userService = new ListOneDataPageService();

    const userDataPage = await userService.listDataPage(urlpiece);

    return response.status(200).json(userDataPage);
  }
}

export { ListOneDataController };
