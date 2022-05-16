import { getConnection, queries } from '../database/databaseindex.js'

export const getEscuelas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getEscuelas);
    
        res.json(result.recordset);
    } catch (error){
        res.status(500);
        res.send(error.message)
    }
};

export const getEscuelasByState = async (req, res) => {
    const {idMunicipio} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("idMunicipio",idMunicipio)
        .query(queries.getEscuelasByState);

    res.send(result.recordset)
};