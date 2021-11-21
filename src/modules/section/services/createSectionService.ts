import { getCustomRepository } from "typeorm";
import { SectionRepo } from "../repositories/sectionRepo";
import { ICreateSection, IReturnSectionCreate } from "../dtos";

class SectionService {
  public async createSectionService({
    title,
    user,
  }: ICreateSection): Promise<IReturnSectionCreate> {
    const sectionRepo = getCustomRepository(SectionRepo);

    const newSection = await sectionRepo.createSection({
      title,
      user,
    });

    return {
      id: newSection.id,
      title: newSection.title,
    };
  }
}

export { SectionService };
