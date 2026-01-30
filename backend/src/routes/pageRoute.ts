import { Router } from 'express';
import { getPage } from '../controllers/pageController';

const router = Router();

router.get('/pages/:id', getPage);

export default router;