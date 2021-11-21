import { getCustomRepository } from "typeorm";
import { UserRepo } from "../repositories/userRepo";
import { IReturnUserCreate } from "../dtos";
import { AppError } from "../../../shared/error";

class ListOneUserService {
  public async listOneUser(id: string): Promise<IReturnUserCreate> {
    const userRepo = getCustomRepository(UserRepo);

    const user = await userRepo.findById(id);

    if (!user) {
      throw new AppError("User already exists", 400);
    }

    return user;
  }
}

export { ListOneUserService };
