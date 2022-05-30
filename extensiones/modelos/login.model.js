import { getConnection, sql, queries } from '../database/databaseindex.js'

import path from 'path';
const __dirname = path.resolve();

export const consultarLogin = async (req,res) => {
    const { usuario, password } = req.body;
    console.log(req.body)
    if(usuario == null || password == null || usuario == '' || password == ''){ 
    //res.json({msg : 'Usuario y/o contraseña incorrectos',error:true});
    //swal("Oops!", "Something went wrong on the page!", "error");
    res.json({msg : 'Usuario y/o contraseña incorrectos',error:true});
        return
        
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
            //res.send('Acceso exitoso')
            console.log(results.recordset[0].tipoU)
            res.json({msg : results.recordset[0].tipoU, error:false});
            return
            
        }
        else{
            //res.send('Datos incorrectos')
            res.json({msg : 'Usuario incorrecto',error:true});
            return
        }

    } catch (error) {
        //res.status(500);
        //res.send(error.message);
        res.json({msg : error.message, error:true});
    }
}
