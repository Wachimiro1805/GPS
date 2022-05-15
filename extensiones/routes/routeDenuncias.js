const mssql = require('mssql');

module.exports = (req, res) => {
    req.locals.db.query('Select * from ESCUELAS where idMunicipio = 17;', function(err,recordset){
        if(err){
            console.error(err);
            res.status(500).send('SERVER ERROR')
            return
        }

        res.status(200).json({message: 'success'})
    })
}