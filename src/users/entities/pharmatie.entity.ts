import { AuditableEntity } from 'src/auditable/auditable.entity';
import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Photo extends AuditableEntity {

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