import Router from 'express';
import { consultarLogin } from '../modelos/superloginRegistro.model.js';

const router = Router();

router.post('/login',consultarLogin);

export default router; 