import app from './app.js';
app.listen(app.get('port'));

//import './database/conexion.js'

console.log("Server on port",app.get('port'))
