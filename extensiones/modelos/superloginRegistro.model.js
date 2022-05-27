import { getConnection, sql, queries } from '../database/databaseindex.js'

import path from 'path';
const __dirname = path.resolve();

export const consultarLogin = async (req,res) => {
    const { usuario, password } = req.body;

    if(usuario == null || password == null){ 
        return res.status(400).json({msg : 'Usuario y/o contraseña incorrectos'});
    }
    
    console.log('usuario: '+usuario)
    console.log('contraseña: '+password)
    try {

        const pool = await getConnection();

        /*
        connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, results, fields)=> {
			if( results.length == 0 || !(await bcrypt.compare(pass, results[0].pass)) ) {    
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "USUARIO y/o PASSWORD incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
        */
        let results = await pool.request()
            .input('usuario',sql.VarChar,usuario)
            .input('password',sql.VarChar,password)
            .query(queries.getLogin)
        console.log(results)
        if(results.rowsAffected[0] != 0){
            console.log('Acceso correcto')
            res.sendFile('html/Registro.html', { root: __dirname });
        }
        else{
            res.send('Datos incorrectos')
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
