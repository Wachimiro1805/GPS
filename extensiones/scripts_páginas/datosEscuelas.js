document.querySelector('#municipio').addEventListener('change',escogerSolicitudEscuelas);
document.querySelector('#nivel').addEventListener('change',escogerSolicitudEscuelas);

recuperarEscuelas();

function recuperarEscuelas(){
    let url = "http://localhost:3000/escuelas"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            let schools = document.querySelector('#escuela');

            schools.innerHTML = '<option value="">Seleccione una Institución</option>';
            for(let item of datos){
                schools.innerHTML += `
                <option value="${item.idEscuela}"">${item.Nombre}</option>
                `
            }
        }
    }
    xhttp.send();
}

function escogerSolicitudEscuelas(){
   var nivel = document.querySelector('#nivel');
   var municipio = document.querySelector('#municipio');

   if(nivel.value != "" && municipio.value != ""){
    recuperarEscuelasPorNivelYMunicipio(municipio.value, nivel.value)
   } else if (nivel.value != ""){
       recuperarEscuelasPorNivel(nivel.value)
   } else if (municipio.value != ""){
       recuperarEscuelasDeUnMunicipio(municipio.value);
   } else {
       recuperarEscuelas();
   }
}

function recuperarEscuelasDeUnMunicipio(valor){

    let url = "http://localhost:3000/escuelasPM/"+valor;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let schools = document.querySelector('#escuela');

            schools.innerHTML = '<option value="">Seleccione una Institución</option>';
            for(let item of datos){
                schools.innerHTML += `
                <option value="${item.idEscuela}">${item.Nombre}</option>
                `
            }
        }
    }
    xhttp.send();
}

function recuperarEscuelasPorNivel(valor){

 
    let url = "http://localhost:3000/escuelasPN/"+valor;
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let schools = document.querySelector('#escuela');

            schools.innerHTML = '<option value="">Seleccione una Institución</option>';
            for(let item of datos){
                schools.innerHTML += `
                <option value="${item.idEscuela}">${item.Nombre}</option>
                `
            }
        }
    }
    xhttp.send();
}

function recuperarEscuelasPorNivelYMunicipio(valor1, valor2){

    let url = "http://localhost:3000/escuelas/"+valor1+"&"+valor2;
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let schools = document.querySelector('#escuela');

            schools.innerHTML = '<option value="">Seleccione una Institución</option>';
            for(let item of datos){
                schools.innerHTML += `
                <option value="${item.idEscuela}">${item.Nombre}</option>
                `
            }
        }
    }
    xhttp.send();
}