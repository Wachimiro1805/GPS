import Router from 'express';
import multer from 'multer'
import { registrarLogin } from '../modelos/registroLogin.model.js';

const router = Router();
const upload = multer()


router.post('/registroLogin',upload.none(),registrarLogin);

export default router;  