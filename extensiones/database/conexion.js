import sql from 'mssql';

const configdb = {
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
//puerto tcp/ip por defecto de mssql = 1433
async function getConnection() {
    const pool = await sql.connect(configdb);

    const result = await pool.request().query('Select * from DENUNCIAS');

    console.log(result);
}


getConnection();