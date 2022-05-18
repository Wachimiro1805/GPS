import { getConnection, sql, queries } from '../database/databaseindex.js'

export const putDenunciantes = async (req, res) => {
    const { nombreDenunciante, contacto, sexo, edad, idRol} = req.body;
    if(nombreDenunciante == null || contacto == null || sexo == null
        || edad == null || idRol == null){
            return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }
    try {
        const pool = await getConnection()
    
        await pool.request()
            .input('nombreDenunciante', sql.VarChar, nombreDenunciante)
            .input('contacto',sql.VarChar,contacto)
            .input('sexo',sql.Char,sexo)
            .input('edad',sql.TinyInt,edad)
            .input('idRol',sql.SmallInt,idRol)
            .query(queries.registerNewDenunciante);
    
        res.json({nombreDenunciante, contacto, sexo, edad, idRol});
    
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
    
}