import { AuditableEntity } from "src/auditable/auditable.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Facturation extends AuditableEntity {

    @Column()
    namePatient: string;

    @Column()
    typeFacturation: string;
  
    @Column()
    date: Date;

    @Column()
    montant: number;

    @Column()
    details: string;
    
    @Column({ default: false })
    isActive: boolean;
}