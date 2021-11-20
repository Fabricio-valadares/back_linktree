import { getCustomRepository } from "typeorm";
import { UserRepo } from "../repositories/userRepo";
import { ICreateUser, IReturnUserCreate } from "../dtos";
import { AppError } from "../../../shared/error";
import { hash } from "bcryptjs";

class UserService {
  public async createUserService({
    name,
    email,
    urlPiece,
    password,
  }: ICreateUser): Promise<IReturnUserCreate> {
    const userRepo = getCustomRepository(UserRepo);

    const userEmail = await userRepo.findByEmail(email);

    if (userEmail) {
      throw new AppError("Email already exists", 400);
    }

    const userUrlPiece = await userRepo.findByUrlPiece(urlPiece);

    if (userUrlPiece) {
      throw new AppError("UrlPiece already exists", 400);
    }

    const hashPassword = await hash(password, 8);

    const newUser = await userRepo.createUser({
      name,
      email,
      urlPiece,
      password: hashPassword,
    });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      urlPiece: newUser.urlPiece,
    };
  }
}

export { UserService };
