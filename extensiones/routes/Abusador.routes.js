import Router from 'express';
import { getAbusadorEspecifico, getAbusadorH, getAbusadorM, putAbusador } from '../modelos/Abusador.model.js';

const router = Router();

router.post('/abusador',putAbusador);

router.get('/abusador/:nombres&:apellidoPat&:apellidoMat&:sexo&:rol',getAbusadorEspecifico)

router.get('/abusadorH',getAbusadorH);
router.get('/abusadorM',getAbusadorM);

export default router;