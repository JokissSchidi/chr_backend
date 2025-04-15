import { AuditableEntity } from "src/auditable/auditable.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Paiements extends AuditableEntity {

    @Column()
    name: string;
  
    @Column()
    type_prestation: string;

    @Column()
    price: number;

    @Column()
    mode_of_paye: string;

    @Column()
    information: string;
    
    @Column({ default: true })
    isActive: boolean;
}