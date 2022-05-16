export const queries = {
    getAllDenuncias: "select * from DENUNCIAS;",
    getDenunciasBySchool: "select * from DENUNCIAS where idEscuela = @idEscuela",
    registerNewDenuncia: "INSERT INTO DENUNCIAS (@hechos,@fechaDenuncia,@estadoDenuncia,@idDenunciante,@idTipoViolencia,@idAbusador,@idGravedad,@id,@idEscuela)",
    deleteDenuncia: "Delete from DENUNCIAS where idDenuncia = @idDenuncia",
    updateDenucnia: "Update Denuncias set hechos = @hechos, fechaDenuncia = @fechaDenuncia, estadoDenuncia = @estadoDenuncia, idDenunciante = @idDenunciante, idTipoViolencia = @idTipoViolencia, idAbusador = @idAbusador, idGravedad = @idGravedad, id = @id, idEscuela = @idEscuela",
    getEscuelas: "select * from ESCUELAS;",
    getEscuelasByState: "Select * from ESCUELAS Where idMunicipio = @idMunicipio"
}