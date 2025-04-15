import { AuditableEntity } from "src/auditable/auditable.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Hospitalisations extends AuditableEntity {

    @Column()
    namePatient: string;

    @Column()
    chambre: string;
  
    @Column()
    date: Date;

    @Column()
    duree: number;

    @Column()
    medecinResponsableName: string;

    @Column()
    typeSoins: string;

    @Column()
    notesMedicales: string;
    
    @Column({ default: false })
    isActive: boolean;
}