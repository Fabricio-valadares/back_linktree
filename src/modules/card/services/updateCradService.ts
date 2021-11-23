import { CardRepo } from "../repositories/cardRepo";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/error";
import { IDataUpdate } from "../dtos";

class UpdateCardService {
  public async updateSessao({ id, title }: IDataUpdate) {
    const cardRepo = getCustomRepository(CardRepo);

    const card = await cardRepo.findByOneCard(id);

    if (!card) {
      throw new AppError("Card not exists", 400);
    }

    card.title = title !== undefined ? title : card.title;

    await cardRepo.save(card);

    return {
      id: card.id,
      title: card.title,
    };
  }
}

export { UpdateCardService };
