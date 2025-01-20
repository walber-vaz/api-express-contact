import { Router } from 'express';

import ContactController from '../controllers/ContactController.js';
import CategoryController from '../controllers/CategoryController.js';

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.delete('/categories/:id', CategoryController.delete);

export default router;
