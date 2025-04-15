import { AuditableEntity } from "src/auditable/auditable.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Examens extends AuditableEntity {

    @Column()
    namePatient: string;

    @Column()
    typeExamen: string;
  
    @Column()
    date: Date;

    @Column()
    medecinPrescripteur: string;

    @Column()
    notes: string;
    
    @Column({ default: false })
    isActive: boolean;
}