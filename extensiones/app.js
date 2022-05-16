import express from 'express';
import config from './config.js';

import denunciaRuta from './routes/Denuncias.routes.js'
import escuelaRuta from './routes/Escuelas.routes.js';

const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(denunciaRuta);
app.use(escuelaRuta);

export default app;