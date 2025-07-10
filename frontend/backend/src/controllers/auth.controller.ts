import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { Role } from '../entities/Role';

export async function register(req: Request, res: Response) {
  const { username, password, role } = req.body;
  const repo = getRepository(User);
  const roleRepo = getRepository(Role);
  const hash = await bcrypt.hash(password, 10);
  const user = repo.create({ username, passwordHash: hash });
  const roleEntity = await roleRepo.findOne({ name: role });
  user.roles = roleEntity ? [roleEntity] : [];
  await repo.save(user);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const repo = getRepository(User);
  const user = await repo.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign(
    { id: user.id, roles: user.roles.map(r => r.name) },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );
  res.json({ token });
}
