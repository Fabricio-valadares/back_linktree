import { EntityRepository, Repository } from "typeorm";
import { SectionEntitie } from "../../section/typeorm/entities/sectionEntitie";
import { ICreateSection } from "../dtos";

@EntityRepository(SectionEntitie)
class SectionRepo extends Repository<SectionEntitie> {
  public async createSection({
    title,
    user,
  }: ICreateSection): Promise<SectionEntitie> {
    const newSection = this.create({ title, user });

    await this.save(newSection);

    return newSection;
  }

  public async findTotalUserSection(id: string) {
    const section = await this.find({
      where: { user: id },
      select: ["id", "title"],
      relations: ["card", "card.itensLink"],
    });

    return section;
  }

  public async findByOneSection(id: string) {
    const section = await this.findOne(id);

    return section;
  }

  public async deleteSection(id: string): Promise<boolean> {
    const confirmationDelete = await this.delete(id);

    if (confirmationDelete.affected !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

export { SectionRepo };
