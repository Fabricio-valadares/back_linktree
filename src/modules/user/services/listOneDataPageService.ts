import { getCustomRepository } from "typeorm";
import { UserRepo } from "../repositories/userRepo";
import { AppError } from "../../../shared/error";

class ListOneDataPageService {
  public async listDataPage(urlPiece: string): Promise<any> {
    const userRepo = getCustomRepository(UserRepo);

    const dataUserPage = await userRepo.findByUrlPiecePage(urlPiece);

    if (!dataUserPage) {
      throw new AppError("User already exists", 400);
    }

    return dataUserPage;
  }
}

export { ListOneDataPageService };
