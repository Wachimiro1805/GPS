traerDatos();
traerDH(); traerDM();
traerAH(); traerAM();
traerDenunciasEnMS(); traerDenunciasEnS();
traerDenunciasP(); traerDenunciasF(); traerDenunciasPV(); traerDenunciasS();
// Adiciones de los addevent
document.querySelector('#municipio').addEventListener('change',filtrar);
document.querySelector('#nivel').addEventListener('change',filtrar);
document.querySelector('#escuela').addEventListener('change',filtrar);

function traerDatos(){
    let url = "http://localhost:3000/denuncias"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send();
}

function traerDH(){
    let url = "http://localhost:3000/denuncianteH"

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let cont = document.querySelector('#DH');

            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);

                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}

function traerDM(){
    let url = "http://localhost:3000/denuncianteM"

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            let cont = document.querySelector('#DM');

            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);

                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}

function traerAH(){
let url = "http://localhost:3000/abusadorH"

const xhttp = new XMLHttpRequest();

xhttp.open('GET',url,true);

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);

        let cont = document.querySelector('#AH');

        cont.innerHTML = '';
        for(let item of datos){
            //console.log(item.cant);

            cont.innerHTML = item.cant;
        }
    }
}
xhttp.send();
}

function traerAM(){
    let url = "http://localhost:3000/abusadorM"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#AM');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}

function traerDenunciasEnMS() {
    let url = "http://localhost:3000/escuelasMS"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#NMS');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}
function traerDenunciasEnS() {
    let url = "http://localhost:3000/escuelasS"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#NS');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}

function traerDenunciasP(){
    let url = "http://localhost:3000/denunciasP"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#TVP');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}
function traerDenunciasS(){
    let url = "http://localhost:3000/denunciasS"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#TVS');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}
function traerDenunciasF(){
    let url = "http://localhost:3000/denunciasF"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#TVF');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}
function traerDenunciasPV(){
    let url = "http://localhost:3000/denunciasVPV"

    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET',url,true);
    
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
    
            let cont = document.querySelector('#TVV');
    
            cont.innerHTML = '';
            for(let item of datos){
                //console.log(item.cant);
    
                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}

function filtrar() {
    const municipio = document.querySelector('#municipio').value;
    const insti = document.querySelector('#escuela').value;
    const nivel = document.querySelector('#nivel').value;

    if(municipio != "" && insti != "" && nivel != "" ){
        filtrarPorMuniInstiNiv(municipio,insti,nivel);
    }else if(municipio != "" && insti != "" ){
        filtrarPorMuniInsti(municipio,insti);
    }else if(municipio != "" && nivel != "" ){
        filtrarPorMuniNiv(municipio,nivel);
    }else if(insti != "" && nivel != ""){
        filtrarPorInstiNiv(insti,nivel);
    }else if (municipio != ""){
        filtarPorMunicipio(municipio);
    }else if (insti != ""){
        filtrarPorInsti(insti);
    }else if (nivel != ""){
        filtrarPorNivel(nivel);
    } else {
        traerDatos();
    }
}

function filtarPorMunicipio(valormuni){ 
    
    let url = "http://localhost:3000/denunciaspm/"+valormuni;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send();
}

function filtrarPorInsti(valorinsti){
    let url = "http://localhost:3000/denunciaspi/"+valorinsti;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send();
}

function filtrarPorNivel(valornivel){
    let url = "http://localhost:3000/denunciaspn/"+valornivel;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send(); 
}

function filtrarPorInstiNiv(valorinsti,valornivel){
    let url = "http://localhost:3000/denunciaspin/"+valorinsti+"&"+valornivel;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send(); 
}

function filtrarPorMuniNiv(valormuni,valornivel){
    let url = "http://localhost:3000/denunciaspmn/"+valormuni+"&"+valornivel;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send(); 
}

function filtrarPorMuniInsti(valormuni,valorinsti){
    let url = "http://localhost:3000/denunciaspmi/"+valormuni+"&"+valorinsti

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send(); 
}

function filtrarPorMuniInstiNiv(valormuni,valorinsti,valornivel){
    let url = "http://localhost:3000/denunciaspmin/"+valormuni+"&"+valorinsti+"&"+valornivel;

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.nombreAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.tipoV}</td>
                    <td>${item.municipio}</td>
                    <td>${item.insti}</td>
                    <td>${item.ns}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send(); 
}