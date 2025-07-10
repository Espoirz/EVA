import { Router } from 'express';
import { authenticate } from '../middleware/auth.middleware';
import { listClubs, joinClub } from '../controllers/club.controller';

const router = Router();
router.get('/', authenticate, listClubs);
router.post('/:clubId/join', authenticate, joinClub);
export default router;
