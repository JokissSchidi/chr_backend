import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consultations{
    @PrimaryGeneratedColumn()
    id: number;

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