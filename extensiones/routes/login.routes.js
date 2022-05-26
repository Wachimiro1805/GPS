import Router from 'express';
import { consultarLogin } from '../modelos/login.model.js';

const router = Router();

router.post('/login',consultarLogin);

export default router; 