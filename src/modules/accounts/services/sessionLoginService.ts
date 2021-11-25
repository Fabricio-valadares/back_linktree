import { getCustomRepository } from "typeorm";
import { UserRepo } from "../../user/repositories/userRepo";
import { IReturnToken, IDataSessionLogin } from "../dtos";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import getenv from "getenv";
import { AppError } from "../../../shared/error";

class SessionLoginServices {
  public async verifyDataUser({
    email,
    password,
  }: IDataSessionLogin): Promise<IReturnToken> {
    const userRepo = getCustomRepository(UserRepo);

    const user = await userRepo.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password not exists", 400);
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new AppError("Email or password not exists", 400);
    }

    const token = sign(
      { urlpiece: user.urlPiece },
      getenv("SECRET_KEY_TOKEN"),
      {
        subject: user.id,
        expiresIn: getenv("EXPIRES_TOKEN"),
      }
    );

    return {
      token: token,
    };
  }
}

export { SessionLoginServices };
