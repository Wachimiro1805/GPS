import Router from 'express';
import { getAbusadorEspecifico, putAbusador } from '../modelos/Abusador.model.js';

const router = Router();

router.post('/abusador',putAbusador);

router.get('/abusador/:nombres&:apellidoPat&:apellidoMat&:sexo&:rol',getAbusadorEspecifico)

export default router;