import Router from 'express';
import { registrarLogin } from '../modelos/registroLogin.model.js';

const router = Router();

router.post('/registroLogin',registrarLogin);

export default router;  