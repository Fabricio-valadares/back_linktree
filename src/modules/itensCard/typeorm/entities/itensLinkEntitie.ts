import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { CardEntitie } from "../../../card/typeorm/entities/cardEntitie";

@Entity("tableItensLink")
class ItensLinkEntitie {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @ManyToOne(() => CardEntitie, (card) => card.itensLink, {
    onDelete: "CASCADE",
  })
  card: CardEntitie;

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

export { ItensLinkEntitie };
