import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column({ nullable: true })
  mimetype: string;

  @Column({ nullable: true })
  size: number;

  @CreateDateColumn()
  uploadedAt: Date;
}