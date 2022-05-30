import Router from 'express';
import multer from 'multer'
import { consultarLogin } from '../modelos/login.model.js';

const router = Router();
const upload = multer()

//router.post('/login',consultarLogin);
router.post('/login' , upload.none() , consultarLogin )

export default router; 