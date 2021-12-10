import { getCustomRepository } from "typeorm";
import { ItensLinkRepo } from "../repositories/itensLinkRepo";
import { IDataUpdate } from "../dtos";
import { AppError } from "../../../shared/error";

class UpdateLinkService {
  public async updateLinkService({ id, link, title }: IDataUpdate) {
    const itensLinkRepo = getCustomRepository(ItensLinkRepo);

    const linkResult = await itensLinkRepo.findByOneLink(id);

    if (!linkResult) {
      throw new AppError("Link not exists", 400);
    }

    linkResult.link = link !== undefined ? link : linkResult.link;
    linkResult.title = title !== undefined ? title : linkResult.title;

    await itensLinkRepo.save(linkResult);

    return {
      id: linkResult.id,
      link: linkResult.link,
      title: linkResult.title,
    };
  }
}

export { UpdateLinkService };
