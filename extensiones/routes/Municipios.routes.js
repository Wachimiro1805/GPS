import Router from 'express';
import { getMunicipios } from '../modelos/Municipios.model.js';

const router = Router();

router.get('/municipios',getMunicipios);

export default router;