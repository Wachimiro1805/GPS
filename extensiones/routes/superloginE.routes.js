import Router from 'express';
import { consultarLogin } from '../modelos/superloginEstadistica.model.js';

const router = Router();

router.post('/login',consultarLogin);

export default router; 