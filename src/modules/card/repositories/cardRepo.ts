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

  public async findCardTotalSection(id: string) {
    console.log(">>>", id);
    const listCard = await this.find({
      where: { section: id },
      select: ["id", "title"],
      relations: ["itensLink"],
    });

    return listCard;
  }
}

export { CardRepo };
