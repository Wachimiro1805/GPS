import {Router} from 'express';

import {getDenuncias, putDenuncias, getDenunciasBySchool, deleteDenuncia, updateDenuncia, getEscuelasMS, getEscuelaS, getDenunciasVS, getDenunciasVF, getDenunciasVP, getDenunciasVPV, getDenunciasporMunicipio} from '../modelos/Denuncia.model.js';
const router = Router();

router.get('/denuncias',getDenuncias);

router.get('/denuncias/:idEscuela',getDenunciasBySchool);

router.post('/denuncias', putDenuncias);

router.delete('/denuncias/:id',deleteDenuncia);

router.put('/denuncias', updateDenuncia);

router.get('/escuelasMS',getEscuelasMS);
router.get('/escuelasS',getEscuelaS);

router.get('/denunciasP',getDenunciasVP);
router.get('/denunciasF',getDenunciasVF);
router.get('/denunciasS',getDenunciasVS);
router.get('/denunciasVPV',getDenunciasVPV);
router.get('/denunciaspm/:municipio',getDenunciasporMunicipio);

export default router;