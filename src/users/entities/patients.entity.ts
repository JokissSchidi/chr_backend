import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patients{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
  
    @Column()
    sexe: string;

    @Column()
    dateOfBirthday: Date;

    @Column()
    phone: string;

    @Column()
    profession: string;

    @Column()
    adresse: string;

    @Column()
    emergencyContactName: string;

    @Column()
    emergencyContactPhone: string;

    @Column()
    medicalHistory: string;
    
    @Column({ default: true })
    isActive: boolean;
}