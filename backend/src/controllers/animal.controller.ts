import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Animal } from '../entities/Animal';

export async function listAnimals(req: Request, res: Response) {
  const repo = getRepository(Animal);
  const list = await repo.find({ relations: ['owner', 'genetics'] });
  res.json(list);
}

export async function createAnimal(req: Request, res: Response) {
  const dto = req.body;
  const repo = getRepository(Animal);
  const animal = repo.create(dto);
  await repo.save(animal);
  res.status(201).json(animal);
}
