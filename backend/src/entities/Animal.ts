import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn
} from 'typeorm';
import { User } from './User';
import { GeneticProfile } from './GeneticProfile';

export type LifecycleStage = 'Foal'|'Yearling'|'Adult'|'Senior';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  species!: 'horse'|'dog';

  @Column()
  breed!: string;

  @Column({ type: 'enum', enum: ['Foal','Yearling','Adult','Senior'] })
  stage!: LifecycleStage;

  @Column({ default: 0 })
  ageMonths!: number;

  @ManyToOne(() => User, user => user.id)
  owner!: User;

  @OneToOne(() => GeneticProfile, { cascade: true, eager: true })
  @JoinColumn()
  genetics!: GeneticProfile;
}
