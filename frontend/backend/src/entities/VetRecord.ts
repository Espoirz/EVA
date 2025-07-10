import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn
} from 'typeorm';
import { Animal } from './Animal';

@Entity()
export class VetRecord {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Animal, (animal: Animal) => animal.id)
  animal!: Animal;

  @Column()
  description!: string;

  @CreateDateColumn()
  date!: Date;
}
