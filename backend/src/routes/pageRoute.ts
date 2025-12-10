import { Router } from 'express';
import { getPage } from '../controllers/pageController.js';

const router = Router();


router.get('/sites/:site_id/pages/:page_id', getPage);

export default router;



