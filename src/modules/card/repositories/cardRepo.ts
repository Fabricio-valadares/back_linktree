import { EntityRepository, Repository } from "typeorm";
import { CardEntitie } from "../typeorm/entities/cardEntitie";
import { ICreateCard } from "../dtos";

@EntityRepository(CardEntitie)
class CardRepo extends Repository<CardEntitie> {
  public async createCard({
    title,
    section,
  }: ICreateCard): Promise<CardEntitie> {
    const newCard = this.create({ title, section });

    await this.save(newCard);

    return newCard;
  }

  public async findByOneCard(id: string) {
    const card = await this.findOne(id);

    return card;
  }

  public async findCardTotalSection(id: string) {
    const listCard = await this.find({
      where: { section: id },
      select: ["id", "title"],
      relations: ["itensLink"],
    });

    return listCard;
  }

  public async deleteCard(id: string): Promise<boolean> {
    const confirmationDelete = await this.delete(id);

    if (confirmationDelete.affected !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

export { CardRepo };
