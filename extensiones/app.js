import express from 'express';
import cors from 'cors';
import config from './config.js';

import loginRuta from './routes/login.routes.js'
import RegistrologinRuta from './routes/registroLogin.routes.js'

import denunciaRuta from './routes/Denuncias.routes.js'
import escuelaRuta from './routes/Escuelas.routes.js';
import denuncianteRuta from './routes/Denunciante.routes.js'
import abusadorRuta from './routes/Abusador.routes.js'
import municipiosRuta from './routes/Municipios.routes.js'

const app = express();

app.set('port', config.port);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(denunciaRuta);
app.use(escuelaRuta);
app.use(denuncianteRuta);
app.use(abusadorRuta);
app.use(municipiosRuta);
app.use(loginRuta);
app.use(RegistrologinRuta);

export default app;