import Router from 'express';
import { getDenuncianteEspecifico, getDenunciantesH, getDenunciantesM, putDenunciantes } from '../modelos/Denunciante.model.js';

const router = Router();

router.post('/denunciante',putDenunciantes);

router.get('/denunciante/:nombreDenunciante&:contacto&:sexo&:edad&:rol',getDenuncianteEspecifico)

router.get('/denuncianteH',getDenunciantesH);
router.get('/denuncianteM',getDenunciantesM);

export default router;