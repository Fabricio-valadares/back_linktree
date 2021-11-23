import { SectionRepo } from "../repositories/sectionRepo";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../../shared/error";
import { IDataUpdate } from "../dtos";

class UpdateSessaoService {
  public async updateSessao({ id, title }: IDataUpdate) {
    const sessaoRepo = getCustomRepository(SectionRepo);

    const sessao = await sessaoRepo.findByOneSection(id);

    if (!sessao) {
      throw new AppError("Sessao not exists", 400);
    }

    sessao.title = title !== undefined ? title : sessao.title;

    await sessaoRepo.save(sessao);

    return {
      id: sessao.id,
      title: sessao.title,
    };
  }
}

export { UpdateSessaoService };
