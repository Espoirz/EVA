import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: string;
  roles?: string[];
}

export function authenticate(
  req: AuthRequest, res: Response, next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    req.userId = (payload as any).id;
    req.roles = (payload as any).roles;
    next();
  } catch {
    res.sendStatus(403);
  }
}

export function authorize(allowed: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.roles?.some(r => allowed.includes(r))) {
      return res.sendStatus(403);
    }
    next();
  };
}
