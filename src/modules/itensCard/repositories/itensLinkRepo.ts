import { EntityRepository, Repository } from "typeorm";
import { ItensLinkEntitie } from "../typeorm/entities/itensLinkEntitie";
import { ICreateItensLink } from "../dtos";

@EntityRepository(ItensLinkEntitie)
class ItensLinkRepo extends Repository<ItensLinkEntitie> {
  public async createItensLink({
    link,
    card,
  }: ICreateItensLink): Promise<ItensLinkEntitie> {
    const newItensLink = this.create({ link, card });

    await this.save(newItensLink);

    return newItensLink;
  }

  public async findByOneLink(id: string) {
    const link = await this.findOne(id);

    return link;
  }

  public async deleteItensLinkCard(id: string): Promise<boolean> {
    const confirmationDelete = await this.delete(id);

    if (confirmationDelete.affected !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

export { ItensLinkRepo };
