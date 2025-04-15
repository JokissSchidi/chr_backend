import { AuditableEntity } from "src/auditable/auditable.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Consultations extends AuditableEntity {

    @Column()
    firstName: string;

    @Column()
    Diagnostic: string;
  
    @Column()
    medecinName: string;

    @Column()
    medicamentsPrescrits: string;

    @Column()
    date: Date;

    @Column()
    examensDemandes: string;

    @Column()
    motifConsultation: string;

    @Column()
    recommandations: string;

    @Column()
    symptomes: string;
}