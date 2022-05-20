import { getConnection, sql, queries } from '../database/databaseindex.js'

export const putAbusador = async (req,res) => {
    const { nombres, apellidoPat, apellidoMat, sexo, rol } = req.body;

    if(nombres == null || apellidoPat == null || apellidoMat == null || sexo == null || rol == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'});
    }
    try {
        const pool = getConnection();

        await pool.request()
            .input('nombres',sql.VarChar,nombres)
            .input('apellidoPat',sql.VarChar,apellidoPat)
            .input('apellidoMat',sql.VarChar,apellidoMat)
            .input('sexo',sql.Char,sexo)
            .input('rol',sql.VarChar,rol)
            .query(queries.registerAbusador)
        
        res.json(nombres, apellidoPat, apellidoMat, sexo, rol)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getAbusadorEspecifico = async(req,res) => {
    try {
        const { nombres, apellidoPat, apellidoMat, sexo, rol } = req.params;
    
        const pool = await getConnection();
        const result = await pool.request()
            .input('nombres',nombres)
            .input('apellidoPat',apellidoPat)
            .input('apellidoMat',apellidoMat)
            .input('sexo',sexo)
            .input('rol',rol)
            .query(queries.getAbusadorEspecifico);
    
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}