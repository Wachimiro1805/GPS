import { getConnection, sql, queries } from '../database/databaseindex.js'

export const putAbusador = async (req,res) => {
    const { nombres, apellidoPat, apellidoMat, sexo, idRol } = req.body;

    if(nombres == null || apellidoPat == null || apellidoMat == null || sexo == null || idRol == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'});
    }
    try {
        const pool = getConnection();

        await pool.request()
            .input('nombres',sql.VarChar,nombres)
            .input('apellidoPat',sql.VarChar,apellidoPat)
            .input('apellidoMat',sql.VarChar,apellidoMat)
            .input('sexo',sql.Char,sexo)
            .input('idRol',sql.SmallInt,idRol)
            .query(queries.registerAbusador)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}