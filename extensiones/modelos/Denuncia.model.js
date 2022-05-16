import { getConnection, sql, queries } from '../database/databaseindex.js'

export const getDenuncias = async (req,res) => {
try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllDenuncias);
    console.log(result);

    res.json(result.recordset);
} catch (error){
    res.status(500);
    res.send(error.message)
}
};

export const putDenuncias = async(req,res) => {
    const { hechos, fechaDenuncia, estadoDenuncia, idDenunciante, idTipoViolencia, idAbusador, idGravedad, id, idEscuela} = req.body;
    
    if(hechos == null || fechaDenuncia == null || estadoDenuncia == null
        || idDenunciante == null || idTipoViolencia == null || idAbusador == null
        || idGravedad == null || id == null || idEscuela == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }
    try {
        const pool = await getConnection()
    
        await pool.request()
            .input("hechos", sql.text,hechos)
            .input("fechaDenuncia", sql.date, fechaDenuncia)
            .input("estadoDenuncia",sql.VarChar,estadoDenuncia)
            .input("idDenunciante",sql.Int,idDenunciante)
            .input("idTipoViolencia",sql.SmallInt,idTipoViolencia)
            .input("idAbusador",sql.Int,idAbusador)
            .input("idGravedad",sql.TinyInt,idGravedad)
            .input("id",sql.TinyInt,id)
            .input("idEscuela",sql.Int,idEscuela)
            .query(queries.registerNewDenuncia);
    
        res.json({hechos, fechaDenuncia, estadoDenuncia, idDenunciante, idTipoViolencia, idTipoViolencia, idAbusador, idGravedad, id, idEscuela});
    
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const getDenunciasBySchool = async (req, res) => {
    const {idEscuela} = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("idEscuela",idEscuela)
        .query(queries.getDenunciasBySchool);

    res.send(result.recordset)
};

export const deleteDenuncia = async (req,res) => {
    const { idDenuncia } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("idDenuncia",idDenuncia)
        .query(queries.deleteDenuncia);

    res.send(result.recordset);
}

export const updateDenuncia = async (req, res) => {
    const { hechos, fechaDenuncia, estadoDenuncia, idDenunciante, idTipoViolencia, idAbusador, idGravedad, id, idEscuela} = req.body;
    const {idDenuncia} = req.params;

    if(hechos == null || fechaDenuncia == null || estadoDenuncia == null
        || idDenunciante == null || idTipoViolencia == null || idAbusador == null
        || idGravedad == null || id == null || idEscuela == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }

    const pool = await getConnection();
    const result = await pool.request()
        .input("hechos", sql.text,hechos)
        .input("fechaDenuncia", sql.date, fechaDenuncia)
        .input("estadoDenuncia",sql.VarChar,estadoDenuncia)
        .input("idDenunciante",sql.Int,idDenunciante)
        .input("idTipoViolencia",sql.SmallInt,idTipoViolencia)
        .input("idAbusador",sql.Int,idAbusador)
        .input("idGravedad",sql.TinyInt,idGravedad)
        .input("id",sql.TinyInt,id)
        .input("idEscuela",sql.Int,idEscuela)
        .input('idDenuncia',sql.Int,idDenuncia)
        .query(queries.updateDenuncia);
    res.json(result.recordset)
}