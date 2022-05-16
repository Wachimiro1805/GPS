import { Router } from "express";

import { getEscuelas, getEscuelasByState } from "../modelos/Escuela.model.js";

const router = Router();

router.get('/escuelas',getEscuelas);

router.get('/escuelas/:idMunicipio',getEscuelasByState);

export default router;