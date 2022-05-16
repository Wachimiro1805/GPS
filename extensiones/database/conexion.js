import sql from 'mssql';
import config from '../config.js'

const configdb = {
    "user":config.dbUser,
    "password":config.dbPassword,
    "server":"localhost",
    "database":"DENUNCIAS",
    "synchronize":true,
    "options":{
      "trustServerCertificate":true,
      "encrypt":true
    }
}
//puerto tcp/ip por defecto de mssql = 1433
export async function getConnection() {
  try {
    const pool = await sql.connect(configdb);
    return pool;
  } catch(error) {
    console.error(error);
  }  
  
}

export {sql};