import {Router} from 'express';
import { postSection, getSection, getAllSections } from '../controllers/sectionController';

const router = Router();

router.post('/sections', postSection);
router.get('/sections/:id', getSection);
router.get('/sections', getAllSections);

export default router;