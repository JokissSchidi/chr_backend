import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paiements{
    @PrimaryGeneratedColumn()
    id: number;

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