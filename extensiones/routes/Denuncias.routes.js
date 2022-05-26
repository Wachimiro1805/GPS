import {Router} from 'express';

import {getDenuncias, putDenuncias, getDenunciasBySchool, deleteDenuncia, updateDenuncia} from '../modelos/Denuncia.model.js';
const router = Router();

router.get('/denuncias',getDenuncias);

router.get('/denuncias/:idEscuela',getDenunciasBySchool);

router.post('/denuncias', putDenuncias);

router.delete('/denuncias/:id',deleteDenuncia);

router.put('/denuncias', updateDenuncia);

export default router;