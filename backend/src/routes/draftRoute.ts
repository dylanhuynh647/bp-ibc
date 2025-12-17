import { Router } from 'express'
import { getDraft } from '../controllers/draftController';

const router = Router();

router.get('/draft/:id', getDraft);

export default router;