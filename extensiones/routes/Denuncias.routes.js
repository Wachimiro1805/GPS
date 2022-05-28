import {Router} from 'express';

import {getDenuncias, putDenuncias, getDenunciasBySchool, deleteDenuncia, updateDenuncia, getEscuelasMS, getEscuelaS, getDenunciasVS, getDenunciasVF, getDenunciasVP, getDenunciasVPV, getDenunciasporMunicipio, getDenunciasporInsti, getDenunciasPorNivel, getDenunciasporInstiNiv, getDenunciasporMuniInsti, getDenunciasporMuniNiv, getDenunciasporMuniInstiNiv} from '../modelos/Denuncia.model.js';
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
router.get('/denunciaspi/:escuela',getDenunciasporInsti);
router.get('/denunciaspn/:nivel',getDenunciasPorNivel);
router.get('/denunciaspin/:escuela&:nivel',getDenunciasporInstiNiv);
router.get('/denunciaspmn/:municipio&:nivel',getDenunciasporMuniNiv);
router.get('/denunciaspmi/:municipio&:escuela',getDenunciasporMuniInsti);
router.get('/denunciaspmin/:municipio&:escuela&:nivel',getDenunciasporMuniInstiNiv)

export default router;