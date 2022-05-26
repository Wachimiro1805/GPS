document.querySelector('#boton-enviar').addEventListener('click',funcionallamar)
document.querySelector('#pruebaInsercionDenunciante').addEventListener('click',insertarDenunciante);
document.querySelector('#pruebaRecuperadoIdDenunciante').addEventListener('click',recuperarIdDenunciante);
document.querySelector('#pruebaInsercionAbusador').addEventListener('click',insertarAbusador);
document.querySelector('#pruebaRecuperadoIdAbusador').addEventListener('click',recuperarIdAbusador);

var idDenuncianteRecuperado;
var idAbusadorRecuperado;
var checador = false;

function insertarDenunciante() {
    const nombreDenunciante = document.querySelector('#nombreDenunciante');
    const contacto = document.querySelector('#contacto');
    const sexo = document.querySelector('#sexoDenunciante');
    const edad = document.querySelector('#edadDenunciante');
    const rol = document.querySelector('#rolDenunciante');

    let datos = {
        nombreDenunciante:nombreDenunciante.value,
        contacto:contacto.value,
        sexo:sexo.value,
        edad:edad.value,
        rol:rol.value
    }
    
    let url = "http://localhost:3000/denunciante/";

    const xhttp = new XMLHttpRequest();
    xhttp.open('post',url,true);

    xhttp.setRequestHeader('Content-type','application/json');
    
    xhttp.send(JSON.stringify(datos));

    console.log(datos);
}

function setidAbusadorRecuperado(valor) {
    idAbusadorRecuperado = valor;
}

function setidDenuncianteRecuperado(valor){
    idDenuncianteRecuperado = valor;
}

function recuperarIdDenunciante() {


    const nombreDenunciante = document.querySelector('#nombreDenunciante');
    const contacto = document.querySelector('#contacto');
    const sexo = document.querySelector('#sexoDenunciante');
    const edad = document.querySelector('#edadDenunciante');
    const rol = document.querySelector('#rolDenunciante');

    let url = "http://localhost:3000/denunciante/"+nombreDenunciante.value+"&"+contacto.value+"&"+sexo.value+"&"+edad.value+"&"+rol.value;

    const xhttp = new XMLHttpRequest();
    xhttp.open('get',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            
            for(let item of datos){
                setidDenuncianteRecuperado(item.idDenunciante);
            }
        }
    }

    xhttp.send();
}

function insertarAbusador() {
    const nombres = document.querySelector('#nombresAbusador');
    const apellidoPat = document.querySelector('#ap');
    const apellidoMat = document.querySelector('#am');
    const sexo = document.querySelector('#sexoAbusador');
    const rol = document.querySelector('#rolAbusador');

    let url = "http://localhost:3000/abusador/";

    let datos = {
        nombres:nombres.value,
        apellidoPat:apellidoPat.value,
        apellidoMat:apellidoMat.value,
        sexo:sexo.value,
        rol:rol.value
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open('post',url,true);

    xhttp.setRequestHeader('Content-type','application/json');
    
    xhttp.send(JSON.stringify(datos));

    console.log(datos);
}

function recuperarIdAbusador(){

    const nombres = document.querySelector('#nombresAbusador');
    const apellidoPat = document.querySelector('#ap');
    const apellidoMat = document.querySelector('#am');
    const sexo = document.querySelector('#sexoAbusador');
    const rol = document.querySelector('#rol-abusador');

    let url = "http://localhost:3000/abusador/"+nombres.value+"&"+apellidoPat.value+"&"+apellidoMat.value+"&"+sexo.value+"&"+rol.value;

    const xhttp = new XMLHttpRequest();

    xhttp.open('get',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            
            for(let item of datos){
                setidAbusadorRecuperado(item.idAbusador);
            }

        }
    }

    xhttp.send();
}

function funcionallamar(){
    if(checador){
        actualizaridDenuncianteYAbusador();
        verificarDatos();
        console.log("Denunciante: "+idDenuncianteRecuperado+" y Abusador: "+idAbusadorRecuperado);
        checador = false;
    } else {
        checador = true;
        
        actualizaridDenuncianteYAbusador();
    }
}

function actualizaridDenuncianteYAbusador(){
    recuperarIdDenunciante();
    recuperarIdAbusador();
}

function verificarDatos(){
    
    const hechos = document.querySelector('#descripcion-abuso');
    const fechaDenuncia = new Date(Date.now());
    //console.log(fechaDenuncia);
    const cadenaFecha = "";//fechaDenuncia.getMonth()+"-"+fechaDenuncia.getDay()+"-"+fechaDenuncia.getFullYear();
    const idEscuela = document.querySelector('#escuela');
    const ACCIONTOMADA = document.querySelector('#acciones-tomadas');
    const SERVICIOADD = document.querySelector('#servicio-externo')
    const INFOTIPOSVIOLENCIA = document.querySelector('#informacion-violencia');
    const MECANISMOSDENUNCIAS = document.querySelector('#mecanismos-violencia');
    const TEMPORALIDAD = document.querySelector('#temporalidad');
    const ZONA = document.querySelector('#zona-incidente');
    const NIVELGRAVEDAD = document.querySelector('#gravedad-asunto');
    const TIPOVIOLENCIA = document.querySelector('#tipo-violencia');
    const SUCEDIOALGO = document.querySelector('#sucedió-algo');

    let datos = {
        hechos:hechos.value,
        fechaDenuncia:cadenaFecha,
        idDenunciante:idDenuncianteRecuperado,
        idAbusador:idAbusadorRecuperado,
        idEscuela:idEscuela.value,
        ACCIONTOMADA:ACCIONTOMADA.value,
        SERVICIOADD:SERVICIOADD.value,
        INFOTIPOSVIOLENCIA:INFOTIPOSVIOLENCIA.value,
        MECANISMOSDENUNCIAS:MECANISMOSDENUNCIAS.value,
        TEMPORALIDAD:TEMPORALIDAD.value,
        ZONA:ZONA.value,
        NIVELGRAVEDAD:NIVELGRAVEDAD.value,
        TIPOVIOLENCIA:TIPOVIOLENCIA.value,
        SUCEDIOALGO:SUCEDIOALGO.value
    }

    console.log(datos);
}

function insertarDenuncia(){
    try {
        const hechos = document.querySelector('#descripcion-abuso');
        const fechaDenuncia = new Date(Date.now());
        const cadenaFecha = fechaDenuncia.getMonth+"-"+fechaDenuncia.getDay+"-"+fechaDenuncia.getFullYear;
        //const estadoDenuncia;
        insertarDenunciante();
        const idDenunciante = recuperarIdDenunciante();
        insertarAbusador();
        const idAbusador = recuperarIdAbusador();
        const idEscuela = document.querySelector('#escuela');
        const ACCIONTOMADA = document.querySelector('#acciones-tomadas');
        const SERVICIOADD = document.querySelector('#servicio-externo')
        const INFOTIPOSVIOLENCIA = document.querySelector('#informacion-violencia');
        const MECANISMOSDENUNCIAS = document.querySelector('#mecanismos-violencia');
        const TEMPORALIDAD = document.querySelector('#temporalidad');
        const ZONA = document.querySelector('#zona-incidente');
        const NIVELGRAVEDAD = document.querySelector('#gravedad-asunto');
        const TIPOVIOLENCIA = document.querySelector('#tipo-violencia');
        const SUCEDIOALGO = document.querySelector('#sucedió-algo');

        let datos = {
            hechos:hechos.value,
            fechaDenuncia:cadenaFecha,
            idDenunciante:idDenunciante,
            idAbusador:idAbusador,
            idEscuela:idEscuela.value,
            ACCIONTOMADA:ACCIONTOMADA.value,
            SERVICIOADD:SERVICIOADD.value,
            INFOTIPOSVIOLENCIA:INFOTIPOSVIOLENCIA.value,
            MECANISMOSDENUNCIAS:MECANISMOSDENUNCIAS.value,
            TEMPORALIDAD:TEMPORALIDAD.value,
            ZONA:ZONA.value,
            NIVELGRAVEDAD:NIVELGRAVEDAD.value,
            TIPOVIOLENCIA:TIPOVIOLENCIA.value,
            SUCEDIOALGO:SUCEDIOALGO.value
        }
    
        console.log(datos);

        let url = "http://localhost:3000/denuncias"
    
        const xhttp = XMLHttpRequest();
        
        xhttp.open('post',url,true)
        xhttp.setRequestHeader('Content-Type','application/json');

        xhttp.send(JSON.stringify(datos));
    } catch (error){
        console.log(error);
    }

   
}

function regresarAOriginal() {
    const hechos = document.querySelector('#descripcion-abuso');
    const nombreDenunciante = document.querySelector('#nombreDenunciante');
    const contacto = document.querySelector('#contacto');
    const sexoDenunciante = document.querySelector('#sexoDenunciante');
    const edadDenunciante = document.querySelector('#edadDenunciante');
    const rolDenunciante = document.querySelector('#rolDenunciante');
    const nombresAbusador = document.querySelector('#nombresAbusador');
    const apePatAbusador = document.querySelector('#ap');
    const apeMatAbusador = document.querySelector('#am');
    const sexoAbusador = document.querySelector('#sexoAbusador');
    const rolAbusador = document.querySelector('#rol-acosador');
    const idEscuela = document.querySelector('#escuelas');
    const ACCIONTOMADA = document.querySelector('#acciones-tomadas');
    const SERVICIOADD = document.querySelector('#servicio-externo')
    const INFOTIPOSVIOLENCIA = document.querySelector('informacion-violencia').value;
    const MECANISMOSDENUNCIAS = document.querySelector('#mecanismos-violencia').value;
    const TEMPORALIDAD = document.querySelector('#');
    const ZONA = document.querySelector('#zona-incidente');
    const NIVELGRAVEDAD = document.querySelector('#gravedad-asunto');
    const TIPOVIOLENCIA = document.querySelector('#tipo-violencia');
    const SUCEDIOALGO = document.querySelector('#sucedió-algo');

    hechos.value = "";
    nombreDenunciante.value = "";
    contacto.value="";
    sexoDenunciante.value="";
    edadDenunciante.value="";
    
    nombresAbusador.value="";
    apePatAbusador.value="";
    apeMatAbusador.value="";
    sexoAbusador.value
}

