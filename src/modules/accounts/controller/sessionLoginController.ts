import { Request, Response } from "express";
import { SessionLoginServices } from "../services/sessionLoginService";
import { IDataSessionLogin } from "../dtos";

class SessionLoginController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const sessionLoginServices = new SessionLoginServices();

    const token = await sessionLoginServices.verifyDataUser({
      email,
      password,
    });

    return response.status(201).json(token);
  }
}

export { SessionLoginController };
