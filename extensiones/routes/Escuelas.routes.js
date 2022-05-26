import { Router } from "express";

import { getEscuelas, getEscuelasByLevel, getEscuelasByLevelAndState, getEscuelasByState } from "../modelos/Escuela.model.js";

const router = Router();

router.get('/escuelas',getEscuelas);

router.get('/escuelasPM/:idMunicipio',getEscuelasByState);

router.get('/escuelasPN/:NIVELESCUELA',getEscuelasByLevel);

router.get('/escuelas/:idMunicipio&:NIVELESCUELA',getEscuelasByLevelAndState);

export default router;