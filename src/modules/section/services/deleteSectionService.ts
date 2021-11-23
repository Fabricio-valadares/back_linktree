import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/error";
import { SectionRepo } from "../repositories/sectionRepo";

class DeleteSection {
  public async deleteSection(id: string): Promise<any> {
    const sectionRepo = getCustomRepository(SectionRepo);

    const deleteBooleanSection = await sectionRepo.deleteSection(id);

    if (!deleteBooleanSection) {
      throw new AppError("It is not possible to delete session", 400);
    }
  }
}

export { DeleteSection };
