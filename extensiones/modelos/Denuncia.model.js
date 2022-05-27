import { getConnection, sql, queries } from '../database/databaseindex.js'

export const getDenuncias = async (req,res) => {
try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getDenunciasWithPublicInfo);
    console.log(result);

    res.json(result.recordset);
} catch (error){
    res.status(500);
    res.send(error.message)
}
};

export const putDenuncias = async(req,res) => {
    const { hechos, fechaDenuncia, idDenunciante, 
        idAbusador, idEscuela, ACCIONTOMADA, SERVICIOADD, 
        INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS, TEMPORALIDAD,
        ZONA, NIVELGRAVEDAD, TIPOVIOLENCIA, SUCEDIOALGO } = req.body;
    
    if(hechos == null || fechaDenuncia == null ||
        idDenunciante == null || idAbusador == null ||
        idEscuela == null || ACCIONTOMADA == null || SERVICIOADD == null ||
        INFOTIPOSVIOLENCIA == null || MECANISMOSDENUNCIAS == null ||
        TEMPORALIDAD == null || ZONA == null || NIVELGRAVEDAD == null ||
        TIPOVIOLENCIA == null || SUCEDIOALGO == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }
    try {
        const pool = await getConnection()
    
        await pool.request()
            .input("hechos", sql.Text,hechos)
            .input("fechaDenuncia", sql.Date, fechaDenuncia)
            .input("idDenunciante",sql.Int,idDenunciante)
            .input("idAbusador",sql.Int,idAbusador)
            .input("idEscuela",sql.Int,idEscuela)
            .input('ACCIONTOMADA',sql.Text,ACCIONTOMADA)
            .input('SERVICIOADD',sql.VarChar,SERVICIOADD)
            .input('INFOTIPOSVIOLENCIA',sql.Char,INFOTIPOSVIOLENCIA)
            .input('MECANISMOSDENUNCIAS',sql.Char,MECANISMOSDENUNCIAS)
            .input('TEMPORALIDAD',sql.Char,TEMPORALIDAD)
            .input('ZONA',sql.VarChar,ZONA)
            .input('NIVELGRAVEDAD',sql.VarChar,NIVELGRAVEDAD)
            .input('TIPOVIOLENCIA',sql.VarChar,TIPOVIOLENCIA)
            .input('SUCEDIOALGO',sql.VarChar,SUCEDIOALGO)
            .query(queries.registerNewDenuncia);
    
        res.json({hechos, fechaDenuncia, idDenunciante, 
        idAbusador, idEscuela, ACCIONTOMADA, SERVICIOADD, 
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
    const { hechos, fechaDenuncia, idDenunciante, 
        idAbusador, idEscuela, ACCIONTOMADA, SERVICIOADD, 
        INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS, TEMPORALIDAD,
        ZONA, NIVELGRAVEDAD, TIPOVIOLENCIA, SUCEDIOALGO } = req.body;
    const {idDenuncia} = req.params;

    if(hechos == null || fechaDenuncia == null || 
        idDenunciante == null || idAbusador == null || 
        idEscuela == null || ACCIONTOMADA == null || SERVICIOADD == null ||
        INFOTIPOSVIOLENCIA == null || MECANISMOSDENUNCIAS == null ||
        TEMPORALIDAD == null || ZONA == null || NIVELGRAVEDAD == null ||
        TIPOVIOLENCIA == null || SUCEDIOALGO == null){
        return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }

    const pool = await getConnection();
    const result = await pool.request()
        .input("hechos", sql.text,hechos)
        .input("fechaDenuncia", sql.date, fechaDenuncia)
        .input("idDenunciante",sql.Int,idDenunciante)
        .input("idAbusador",sql.Int,idAbusador)
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
        .input('SUCEDIOALGO',sql.VarChar,SUCEDIOALGO)
        .query(queries.updateDenuncia);
    res.json(result.recordset)
}

export const getDenunciaP = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaP);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getDenunciaS = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaS);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getDenunciaF = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaF);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getDenunciaPV = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaPV);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
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

export const getDenunciasVP = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaP)

        res.send(result.recordset);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getDenunciasVS = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaS)

        res.send(result.recordset);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getDenunciasVF = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaF)

        res.send(result.recordset);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getDenunciasVPV = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenunciaPV)

        res.send(result.recordset);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}