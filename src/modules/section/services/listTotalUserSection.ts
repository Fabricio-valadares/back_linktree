import { getCustomRepository } from "typeorm";
import { SectionRepo } from "../repositories/sectionRepo";

class SectionListTotalUserService {
  public async sectionListTotalUserService(id: string) {
    const sectionRepo = getCustomRepository(SectionRepo);

    const section = await sectionRepo.findTotalUserSection(id);

    return section;
  }
}

export { SectionListTotalUserService };
