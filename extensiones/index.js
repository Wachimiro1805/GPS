var express = require('express');
var app = express();
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

mssql.connect(config,err=>{
  if(err){
    throw err;
  }
  console.log("Conexión Exitosa!");

  new mssql.query('Select * from ESCUELAS where idMunicipio = 17;', (err,results)=>{
    var resultado = results.recordset;
    console.dir(resultado);
    for(let item of resultado){
      console.log("El dato consta de la institución "+ item.nombre +" y su código común de trabajo es: "+item.CCT);
    }
  })
});

mssql.on('error', err =>{
  console.log("Sql database connection error ",err);
})