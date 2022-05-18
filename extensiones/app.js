import express from 'express';
import cors from 'cors';
import config from './config.js';

import denunciaRuta from './routes/Denuncias.routes.js'
import escuelaRuta from './routes/Escuelas.routes.js';
import denuncianteRuta from './routes/Denunciante.routes.js'
import abusadorRuta from './routes/Abusador.routes.js'

const app = express();

app.set('port', config.port);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(denunciaRuta);
app.use(escuelaRuta);
app.use(denuncianteRuta);
app.use(abusadorRuta);

export default app;