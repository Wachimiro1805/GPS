import Router from 'express';
import { putDenunciantes } from '../modelos/Denunciante.model.js';

const router = Router();

router.post('/denunciante',putDenunciantes);

export default router;