import { Request, Response } from "express";
import { UserService } from "../services/createUserService";

class UserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, urlPiece, password } = request.body;

    const userService = new UserService();

    const newUser = await userService.createUserService({
      name,
      email,
      urlPiece,
      password,
    });

    return response.status(201).json(newUser);
  }
}

export { UserController };
