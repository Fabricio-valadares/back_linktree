import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { UserEntitie } from "../../../user/typeorm/entities/userEntitie";

@Entity("tableSection")
class SectionEntitie {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => UserEntitie, (user) => user.section, {
    onDelete: "CASCADE",
  })
  user: UserEntitie;

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

export { SectionEntitie };
