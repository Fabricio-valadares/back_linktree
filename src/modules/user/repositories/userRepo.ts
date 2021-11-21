import { EntityRepository, Repository } from "typeorm";
import { UserEntitie } from "../typeorm/entities/userEntitie";
import { ICreateUser } from "../dtos";

@EntityRepository(UserEntitie)
class UserRepo extends Repository<UserEntitie> {
  public async createUser({
    name,
    email,
    urlPiece,
    password,
  }: ICreateUser): Promise<UserEntitie> {
    const newUser = this.create({ name, email, urlPiece, password });

    await this.save(newUser);

    return newUser;
  }

  public async findByEmail(email: string): Promise<UserEntitie | undefined> {
    const user = await this.findOne({ where: { email } });

    return user;
  }

  public async findByUrlPiece(
    urlPiece: string
  ): Promise<UserEntitie | undefined> {
    const user = await this.findOne({ where: { urlPiece } });

    return user;
  }

  public async findById(id: string): Promise<UserEntitie | undefined> {
    const user = await this.findOne(id);

    return user;
  }
}

export { UserRepo };
