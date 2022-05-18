import Router from 'express';
import { putAbusador } from '../modelos/Abusador.model.js';

const router = Router();

router.post('/abusador',putAbusador);

export default router;