import { getCustomRepository } from "typeorm";
import { CardRepo } from "../repositories/cardRepo";
import { ICreateCard, IReturnCardCreate } from "../dtos";

class ListTotalCardSectionService {
  public async listTotalCardSection(id: string) {
    const cardRepo = getCustomRepository(CardRepo);

    const newCard = await cardRepo.findCardTotalSection(id);

    return newCard;
  }
}

export { ListTotalCardSectionService };
