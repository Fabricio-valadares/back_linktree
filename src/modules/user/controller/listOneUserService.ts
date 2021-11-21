import { Request, Response } from "express";
import { ListOneUserService } from "../services/listOneUserService";

class ListOneUserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const userService = new ListOneUserService();

    const user = await userService.listOneUser(id);

    return response.status(200).json(user);
  }
}

export { ListOneUserController };
