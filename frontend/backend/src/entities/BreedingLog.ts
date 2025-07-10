import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn
} from 'typeorm';
import { Animal } from './Animal';

@Entity()
export class BreedingLog {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Animal)
  sire!: Animal;

  @ManyToOne(() => Animal)
  dam!: Animal;

  @Column()
  resultFoalId!: string;

  @CreateDateColumn()
  date!: Date;
}
