import { getConnection, sql, queries } from '../database/databaseindex.js'

export const putDenunciantes = async (req, res) => {
    const { nombreDenunciante, contacto, sexo, edad, rol} = req.body;
    if(nombreDenunciante == null || contacto == null || sexo == null
        || edad == null || rol == null){
            return res.status(400).json({msg : 'Uno o más campos vacíos'})
    }
    try {
        const pool = await getConnection()
    
        await pool.request()
            .input('nombreDenunciante', sql.VarChar, nombreDenunciante)
            .input('contacto',sql.VarChar,contacto)
            .input('sexo',sql.Char,sexo)
            .input('edad',sql.TinyInt,edad)
            .input('rol',sql.VarChar,rol)
            .query(queries.registerNewDenunciante);
    
        res.json({nombreDenunciante, contacto, sexo, edad, rol});
    
    } catch(error){
        res.status(500);
        res.send(error.message);
    }   
}

export const getDenuncianteEspecifico = async (req,res)=>{
    const { nombreDenunciante, contacto, sexo, edad, rol } = req.params; 

    try {
        const pool = await getConnection();

        const result = await pool.request()
            .input('nombreDenunciante',nombreDenunciante)
            .input('contacto',contacto)
            .input('sexo',sexo)
            .input('edad',edad)
            .input('rol',rol)
            .query(queries.getDenuncianteEspecifico);

        res.send(result.recordset);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getDenunciantesH = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenuncianteH);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getDenunciantesM = async (req,res)=>{
    try{
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getDenuncianteM);

        res.send(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}