export const queries = {
    getAllDenuncias: "select * from DENUNCIAS;",
    getDenunciasBySchool: "select * from DENUNCIAS where idEscuela = @idEscuela",
    registerNewDenuncia: "INSERT INTO DENUNCIAS values (@hechos, @fechaDenuncia, @idDenunciante, @idAbusador, @idEscuela, @ACCIONTOMADA, @SERVICIOADD, @INFOTIPOSVIOLENCIA, @MECANISMOSDENUNCIAS, @TEMPORALIDAD, @ZONA, @NIVELGRAVEDAD, @TIPOVIOLENCIA, @SUCEDIOALGO)",
    deleteDenuncia: "Delete from DENUNCIAS where idDenuncia = @idDenuncia",
    updateDenucnia: "Update Denuncias set hechos = @hechos, fechaDenuncia = @fechaDenuncia, idDenunciante = @idDenunciante, idAbusador = @idAbusador, idEscuela = @idEscuela, ACCIONTOMADA = @ACCIONTOMADA, SERVICIOADD = @SERVICIOADD, INFOTIPOSVIOLENCIA = @INFOTIPOSVIOLENCIA, MECANISMOSDENUNCIAS = @MECANISMOSDENUNCIAS, TEMPORALIDAD = @TEMPORALIDAD, ZONA = @ZONA, NIVELGRAVEDAD = @NIVELGRAVEDAD, TIPOVIOLENCIA = @TIPOVIOLENCIA, SUCEDIOALGO = @SUCEDIOALGO where idDenuncia = @idDenuncia",
    getEscuelas: "select * from ESCUELAS;",
    getEscuelasByState: "Select * from ESCUELAS Where idMunicipio = @idMunicipio",
    getEscuelasByLevel: "select * from ESCUELAS where NIVELESCUELA = @NIVELESCUELA",
    getEscuelasByLevelAndState : "Select * from ESCUELAS where idMunicipio = @idMunicipio and NIVELESCUELA = @NIVELESCUELA",
    registerNewDenunciante: "Insert into DENUNCIANTES values (@nombreDenunciante, @contacto, @sexo, @edad, @rol)",
    getDenuncianteEspecifico: "select * from  Denunciante where nombreDenunciante = @nombreDenunciante and contacto = @contacto and sexo = @sexo and edad = @edad and rol = @rol",
    registerAbusador: "Insert into ABUSADOR values (@nombres, @apellidoPat, @apellidoMat, @sexo, @rol",
    getAbusadorEspecifico: "select * from  ABUSADOR where nombres = @nombres and apellidoPat = @apellidoPat and apellidoMat = @apellidoMat and sexo = @sexo and rol = @rol",
    getMunicipios: "select * from MUNICIPIOS"
}