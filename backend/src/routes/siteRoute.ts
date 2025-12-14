import { Router } from 'express'
import { getSite } from '../controllers/siteController';

const router = Router();

router.get('/sites/:site_id', getSite);

export default router;