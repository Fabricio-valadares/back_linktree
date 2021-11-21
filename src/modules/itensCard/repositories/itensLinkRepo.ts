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
}

export { ItensLinkRepo };
