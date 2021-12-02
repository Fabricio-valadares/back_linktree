import { getCustomRepository } from "typeorm";
import { ItensLinkRepo } from "../repositories/itensLinkRepo";
import { ICreateItensLink, IReturnItensLinkCreate } from "../dtos";

class ItensLinkService {
  public async createItensLinkService({
    link,
    card,
    title,
  }: ICreateItensLink): Promise<IReturnItensLinkCreate> {
    const itensLinkRepo = getCustomRepository(ItensLinkRepo);

    const newItenLink = await itensLinkRepo.createItensLink({
      link,
      card,
      title,
    });

    return {
      id: newItenLink.id,
      link: newItenLink.link,
      title: newItenLink.title,
    };
  }
}

export { ItensLinkService };
