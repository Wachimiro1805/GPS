import { getConnection, sql, queries } from '../database/databaseindex.js'

import path from 'path';
const __dirname = path.resolve();

export const registrarLogin = async (req,res) => {
    const { Nusuario, usuario, password } = req.body;

    if(Nusuario == '' || usuario == '' || password == '' ){ 
        return res.status(400).json({msg : 'Campo o campos incorrectos'})
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
            res.send('Usuario creado')
        }
        else{
            res.send('Usuario no insertado')
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}