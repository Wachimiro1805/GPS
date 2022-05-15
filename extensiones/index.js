import app from './app.js';
app.listen(app.get('port'));

import './database/conexion.js'

console.log("Server on port",app.get('port'))
/*
const mssql = require("mssql");

var config = {
  "user":"admin_denuncias",
  "password":"gpsdenuncias",
  "server":"localhost",
  "database":"DENUNCIAS",
  "synchronize":true,
  "trustServerCertificate":true,
  "options":{
    "encrypt":true
  }
}

app.set('port',500)

let resultadoEscuelas;
let res;

mssql.connect(config,err=>{
  if(err){
    throw err;
  }
  console.log("Conexión Exitosa en el puerto "+ app.get('port') +"!");

  resultadoEscuelas = new mssql.query('Select * from ESCUELAS where idMunicipio = 17;', (err,results)=>{
    res = results.recordset;
    for(let item of res){
      //console.log("El dato consta de "+ item.nombre + "y su código común de trabajo es: " + item.CCT);
    }
  })
});

mssql.on('error', err =>{
  console.log("Sql database connection error ",err);
})

*/