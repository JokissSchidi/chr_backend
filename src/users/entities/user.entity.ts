import { AuditableEntity } from 'src/auditable/auditable.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User extends AuditableEntity {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
