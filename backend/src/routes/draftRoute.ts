import { Router } from 'express'
import { getDraft, postDraft } from '../controllers/draftController';

const router = Router();

router.get('/draft/:id', getDraft);
router.post('/draft', postDraft);

export default router;