document.querySelector('#boton-enviar').addEventListener('click',insertarDenuncia)

function insertarDenunciante() {
    const nombre = document.querySelector('#nombreDenunciante');
    const contacto = document.querySelector('#contacto');
    const sexo = document.querySelector('#sexoDenunciante');
    const edad = document.querySelector('#edadDenunciante');
    const rol = document.querySelector('#rolDenunciante');

    let datos = {
        "nombre":nombre.value,
        "contacto":contacto.value,
        "sexo":sexo.value,
        "edad":edad.value,
        "rol":rol.value
    }
    
    let url = "http://localhost:3000/denunciante/";

    const xhttp = new XMLHttpRequest();
    xhttp.open('post',url,true);

    xhttp.setRequestHeader('Content-type','application/json');
    
    xhttp.send(JSON.stringify(datos));
}

function recuperarIdDenunciante() {
    var id = 0;

    const nombre = document.querySelector('#nombreDenunciante');
    const contacto = document.querySelector('#contacto');
    const sexo = document.querySelector('#sexoDenunciante');
    const edad = document.querySelector('#edadDenunciante');
    const rol = document.querySelector('#rolDenunciante');

    "http://localhost:3000/denunciante/"+nombre.value+"&"+contacto.value+"&"+sexo.value+"&"+edad.value+"&"+rol.value;

    const xhttp = new XMLHttpRequest();
    xhttp.open('get',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            for(let item of datos){
                id = item.idAbusador;
            }
        }
    }

    xhttp.send();
    return id;
}

function insertarAbusador() {
    const nombres = document.querySelector('#nombresAbusador');
    const apePat = document.querySelector('#ap');
    const apeMat = document.querySelector('#am');
    const sexo = document.querySelector('#sexoAbusador');
    const rol = document.querySelector('#rolAbusador');

    let url = "http://localhost:3000/abusador/";

    let datos = {
        "nombres":nombres.value,
        "apePat":apePat.value,
        "apeMat":apeMat.value,
        "sexo":sexo.value,
        "rol":rol.value
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open('post',url,true);

    xhttp.send(JSON.stringify(datos));
}

function recuperarIdAbusador(){
    var id = 0;

    const nombres = document.querySelector('#nombresAbusador');
    const apePat = document.querySelector('#ap');
    const apeMat = document.querySelector('#am');
    const sexo = document.querySelector('#sexoAbusador');
    const rol = document.querySelector('#rol-acosador');

    let url = "http://localhost:3000/abusador/"+nombres.value+"&"+apePat.value+"&"+apeMat.value+"&"+sexo.value+"&"+rol.value;

    const xhttp = new XMLHttpRequest();

    xhttp.open('get',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            for(let item of datos){
                id = item.idAbusador;
            }
        }
    }

    xhttp.send();

    return id;
}

function insertarDenuncia(){
    const hechos = document.querySelector('#descripcion-abuso');
    const fechaDenuncia = new Date(Date.now());
    //const estadoDenuncia;
    insertarDenunciante();
    const idDenunciante = recuperarIdDenunciante();
    insertarAbusador();
    const idAbusador = recuperarIdAbusador();
    const idEscuela = document.querySelector('#escuela');
    const ACCIONTOMADA = document.querySelector('#acciones-tomadas');
    const SERVICIOADD = document.querySelector('#servicio-externo')
    const INFOTIPOSVIOLENCIA = document.querySelector('#informacion-violencia').value;
    const MECANISMOSDENUNCIAS = document.querySelector('#mecanismos-violencia').value;
    const TEMPORALIDAD = document.querySelector('#temporalidad');
    const ZONA = document.querySelector('#zona-incidente');
    const NIVELGRAVEDAD = document.querySelector('#gravedad-asunto');
    const TIPOVIOLENCIA = document.querySelector('#tipo-violencia');
    const SUCEDIOALGO = document.querySelector('#sucedió-algo');

    let datos = {
        "hechos":hechos.value,
        "fechaDenuncia":fechaDenuncia.toDateString(),
        "idDenunciante":idDenunciante.value,
        "idAbusador":idAbusador.value,
        "idEscuela":idEscuela.value,
        "ACCIONTOMADA":ACCIONTOMADA.value,
        "SERVICIOADD":SERVICIOADD.value,
        "INFOTIPOSVIOLENCIA":INFOTIPOSVIOLENCIA.value,
        "MECANISMOSDENUNCIAS":MECANISMOSDENUNCIAS.value,
        "TEMPORALIDAD":TEMPORALIDAD.value,
        "ZONA":ZONA.value,
        "NIVELGRAVEDAD":NIVELGRAVEDAD.value,
        "TIPOVIOLENCIA":TIPOVIOLENCIA.value,
        "SUCEDIOALGO":SUCEDIOALGO.value
    }

    console.log(datos);

    let url = "http://localhost:3000//denuncias"

    const xhttp = XMLHttpRequest();

    xhttp.open('post',url,true);

    xhttp.send(JSON.stringify(datos));

    alert("Denuncia insertada");
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

