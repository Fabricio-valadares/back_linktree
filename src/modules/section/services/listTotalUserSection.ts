import { getCustomRepository } from "typeorm";
import { SectionRepo } from "../repositories/sectionRepo";
import { IReturnSectionListTotalUser } from "../dtos";
import { AppError } from "../../../shared/error";

class SectionListTotalUserService {
  public async sectionListTotalUserService(id: string) {
    const sectionRepo = getCustomRepository(SectionRepo);

    const section = await sectionRepo.findTotalUserSection(id);

    return section;
  }
}

export { SectionListTotalUserService };
