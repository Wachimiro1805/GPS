import { getConnection, sql, queries } from '../database/databaseindex.js'

import path from 'path';
const __dirname = path.resolve();

export const registrarLogin = async (req,res) => {
    const { Nusuario, usuario, password } = req.body;

    if(Nusuario == null || usuario == null || password == null || Nusuario == '' || usuario == '' || password == ''){        
        res.json({msg : 'Datos faltantes',error:true});
        return
    }
    console.log('N. usuario: '+Nusuario)
    console.log('usuario: '+usuario)
    console.log('contraseña: '+password)
    try {

        const pool = await getConnection();

        let results = await pool.request()
            .input('Nusuario',sql.VarChar,Nusuario)
            .input('usuario',sql.VarChar,usuario)
            .input('password',sql.VarChar,password)
            .query(queries.registerNewAdministrador)
        console.log(results)
        if(results.rowsAffected[0] != 0){
            console.log('Usuario creado')
            res.json({msg : 'Usuario creado',error:false});
            return
        }
        else{
            res.json({msg : 'Usuario no insertado',error:true});
            return
        }

    } catch (error) { 
        res.json({msg : 'Este usuario ya existe',error:true});
    }
}