import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { SectionEntitie } from "../../../section/typeorm/entities/sectionEntitie";

@Entity("tableUser")
class UserEntitie {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  urlPiece: string;

  @Column()
  password: string;

  @OneToMany(() => SectionEntitie, (section) => section.user)
  section: SectionEntitie[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserEntitie };
