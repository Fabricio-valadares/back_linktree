import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { SectionEntitie } from "../../../section/typeorm/entities/sectionEntitie";

@Entity("tableCard")
class CardEntitie {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => SectionEntitie, (section) => section.card, {
    onDelete: "CASCADE",
  })
  section: SectionEntitie;

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

export { CardEntitie };
