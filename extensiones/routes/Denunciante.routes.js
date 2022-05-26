import Router from 'express';
import { getDenuncianteEspecifico, putDenunciantes } from '../modelos/Denunciante.model.js';

const router = Router();

router.post('/denunciante',putDenunciantes);

router.get('/denunciante/:nombreDenunciante&:contacto&:sexo&:edad&:rol',getDenuncianteEspecifico)

export default router;