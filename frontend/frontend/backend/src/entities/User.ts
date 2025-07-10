import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable
} from 'typeorm';
import { Role } from './Role';
import { Club } from './Club';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  passwordHash!: string;

  @ManyToMany(() => Role, { eager: true })
  @JoinTable()
  roles!: Role[];

  @ManyToMany(() => Club, club => club.members)
  clubs!: Club[];
}
