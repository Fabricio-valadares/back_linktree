import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/error";
import { ItensLinkRepo } from "../repositories/itensLinkRepo";

class DeleteLinkService {
  public async deleteLinkService(id: string): Promise<any> {
    const itensLinkRepo = getCustomRepository(ItensLinkRepo);

    const deleteBooleanLink = await itensLinkRepo.deleteItensLinkCard(id);

    if (!deleteBooleanLink) {
      throw new AppError("It is not possible to delete card", 400);
    }
  }
}

export { DeleteLinkService };
