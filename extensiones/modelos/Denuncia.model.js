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
    const { hechos, fechaDenuncia, estadoDenuncia, idDenunciante, 
        idAbusador, id, idEscuela, ACCIONTOMADA, SERVICIOADD, 
        INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS, TEMPORALIDAD,
        ZONA, NIVELGRAVEDAD, TIPOVIOLENCIA } = req.body;
    
    if(hechos == null || fechaDenuncia == null || estadoDenuncia == null ||
        idDenunciante == null || idAbusador == null || id ==null ||
        idEscuela == null || ACCIONTOMADA == null || SERVICIOADD == null ||
        INFOTIPOSVIOLENCIA == null || MECANISMOSDENUNCIAS == null ||
        TEMPORALIDAD == null || ZONA == null || NIVELGRAVEDAD == null ||
        TIPOVIOLENCIA == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }
    try {
        const pool = await getConnection()
    
        await pool.request()
            .input("hechos", sql.text,hechos)
            .input("fechaDenuncia", sql.date, fechaDenuncia)
            .input("estadoDenuncia",sql.VarChar,estadoDenuncia)
            .input("idDenunciante",sql.Int,idDenunciante)
            .input("idAbusador",sql.Int,idAbusador)
            .input("id",sql.TinyInt,id)
            .input("idEscuela",sql.Int,idEscuela)
            .input('ACCIONTOMADA',sql.Text,ACCIONTOMADA)
            .input('SERVICIOADD',sql.VarChar,SERVICIOADD)
            .input('INFOTIPOSVIOLENCIA',sql.Char,INFOTIPOSVIOLENCIA)
            .input('MECANISMOSDENUNCIAS',sql.Char,MECANISMOSDENUNCIAS)
            .input('TEMPORALIDAD',sql.Char,TEMPORALIDAD)
            .input('ZONA',sql.VarChar,ZONA)
            .input('NIVELGRAVEDAD',sql.VarChar,NIVELGRAVEDAD)
            .input('TIPOVIOLENCIA',sql.VarChar,TIPOVIOLENCIA)
            .query(queries.registerNewDenuncia);
    
        res.json({hechos, fechaDenuncia, estadoDenuncia, idDenunciante, 
        idAbusador, id, idEscuela, ACCIONTOMADA, SERVICIOADD, 
        INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS, TEMPORALIDAD,
        ZONA, NIVELGRAVEDAD, TIPOVIOLENCIA});
    
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
    const { hechos, fechaDenuncia, estadoDenuncia, idDenunciante, 
        idAbusador, id, idEscuela, ACCIONTOMADA, SERVICIOADD, 
        INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS, TEMPORALIDAD,
        ZONA, NIVELGRAVEDAD, TIPOVIOLENCIA } = req.body;
    const {idDenuncia} = req.params;

    if(hechos == null || fechaDenuncia == null || estadoDenuncia == null ||
        idDenunciante == null || idAbusador == null || id ==null ||
        idEscuela == null || ACCIONTOMADA == null || SERVICIOADD == null ||
        INFOTIPOSVIOLENCIA == null || MECANISMOSDENUNCIAS == null ||
        TEMPORALIDAD == null || ZONA == null || NIVELGRAVEDAD == null ||
        TIPOVIOLENCIA == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }

    const pool = await getConnection();
    const result = await pool.request()
        .input("hechos", sql.text,hechos)
        .input("fechaDenuncia", sql.date, fechaDenuncia)
        .input("estadoDenuncia",sql.VarChar,estadoDenuncia)
        .input("idDenunciante",sql.Int,idDenunciante)
        .input("idAbusador",sql.Int,idAbusador)
        .input("id",sql.TinyInt,id)
        .input("idEscuela",sql.Int,idEscuela)
        .input('ACCIONTOMADA',sql.Text,ACCIONTOMADA)
        .input('SERVICIOADD',sql.VarChar,SERVICIOADD)
        .input('INFOTIPOSVIOLENCIA',sql.Char,INFOTIPOSVIOLENCIA)
        .input('MECANISMOSDENUNCIAS',sql.Char,MECANISMOSDENUNCIAS)
        .input('TEMPORALIDAD',sql.Char,TEMPORALIDAD)
        .input('ZONA',sql.VarChar,ZONA)
        .input('NIVELGRAVEDAD',sql.VarChar,NIVELGRAVEDAD)
        .input('TIPOVIOLENCIA',sql.VarChar,TIPOVIOLENCIA)
        .input('idDenuncia',sql.Int,idDenuncia)
        .query(queries.updateDenuncia);
    res.json(result.recordset)
}