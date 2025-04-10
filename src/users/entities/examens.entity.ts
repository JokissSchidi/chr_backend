import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Examens{
    @PrimaryGeneratedColumn()
    id: number;

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