import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospitalisations{
    @PrimaryGeneratedColumn()
    id: number;

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