import { getConnection, queries } from '../database/databaseindex.js'

export const getMunicipios = async (req,res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getMunicipios);
    
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}