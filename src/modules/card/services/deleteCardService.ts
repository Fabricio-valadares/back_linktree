import { getCustomRepository } from "typeorm";
import { CardRepo } from "../repositories/cardRepo";
import { AppError } from "../../../shared/error";

class DeleteService {
  public async deleteService(id: string): Promise<any> {
    const cardRepo = getCustomRepository(CardRepo);

    const deleteBooleanCard = await cardRepo.deleteCard(id);

    if (!deleteBooleanCard) {
      throw new AppError("It is not possible to delete card", 400);
    }
  }
}

export { DeleteService };
