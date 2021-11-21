import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { SectionEntitie } from "../../../section/typeorm/entities/sectionEntitie";
import { ItensLinkEntitie } from "../../../itensCard/typeorm/entities/itensLinkEntitie";

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

  @OneToMany(() => ItensLinkEntitie, (itensLink) => itensLink.card)
  itensLink: ItensLinkEntitie[];

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
