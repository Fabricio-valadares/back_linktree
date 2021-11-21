import { getCustomRepository } from "typeorm";
import { CardRepo } from "../repositories/cardRepo";
import { ICreateCard, IReturnCardCreate } from "../dtos";

class CardService {
  public async createCardService({
    title,
    section,
  }: ICreateCard): Promise<IReturnCardCreate> {
    const cardRepo = getCustomRepository(CardRepo);

    const newCard = await cardRepo.createCard({
      title,
      section,
    });

    return {
      id: newCard.id,
      title: newCard.title,
    };
  }
}

export { CardService };
