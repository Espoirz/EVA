import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { listAnimals, createAnimal } from '../controllers/animal.controller';

const router = Router();
router.use(authenticate);
router.get('/', listAnimals);
router.post('/', authorize(['BREEDER','CHAMPION']), createAnimal);
export default router;
