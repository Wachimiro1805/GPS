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

export const getEscuelasByLevel = async (req, res) => {
    const {NIVELESCUELA} = req.params;
    const pool = await getConnection();
    const result = await pool.request()
        .input('NIVELESCUELA',NIVELESCUELA)
        .query(queries.getEscuelasByLevel);

    res.send(result.recordset);
}

export const getEscuelasByLevelAndState = async (req,res) => {
    const { idMunicipio, NIVELESCUELA } = req.params;

    console.log(idMunicipio);
    console.log(NIVELESCUELA);

    const pool = await getConnection();
    const result = await pool.request()
        .input('idMunicipio',idMunicipio)
        .input('NIVELESCUELA',NIVELESCUELA)
        .query(queries.getEscuelasByLevelAndState);

    res.send(result.recordset);
}

export const getEscuelasMS = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getEscuelasMS);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getEscuelaS = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getEscuelaS);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}