import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Facturation{
    @PrimaryGeneratedColumn()
    id: number;

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