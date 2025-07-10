import { ConnectionOptions } from 'typeorm';
import { User } from './entities/User';
import { Role } from './entities/Role';
import { Animal } from './entities/Animal';
import { VetRecord } from './entities/VetRecord';
import { BreedingLog } from './entities/BreedingLog';
import { GeneticProfile } from './entities/GeneticProfile';
import { Club } from './entities/Club';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'eva_db',
  entities: [User, Role, Animal, VetRecord, BreedingLog, GeneticProfile, Club],
  synchronize: true
};

export default config;
