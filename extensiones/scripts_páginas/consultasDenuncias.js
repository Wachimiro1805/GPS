traerDatos();
traerDH(); traerDM();
traerAH(); traerAM();
traerDenunciasEnMS(); traerDenunciasEnS();
traerDenunciasP(); traerDenunciasF(); traerDenunciasPV(); traerDenunciasS();
document.querySelector('#municipio').addEventListener('change',filtrar);

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
    const insti = document.querySelector('#filInstitucion').value;
    const nivel = document.querySelector('#filNivel').value;

    if(municipio != "" && insti != "" && nivel != "" ){
        
    }else if(municipio != "" && insti != "" ){

    }else if(municipio != "" && nivel != "" ){

    }else if(insti != "" && nivel != ""){

    }else if (municipio != ""){
        filtarPorMunicipio(municipio);
    }else if (insti != ""){

    }else if (nivel != ""){
        
    }
}

function filtarPorMunicipio(valormuni){ 

    console.log(valormuni);
    let url = "http://localhost:3000/denunciaspm/"+valormuni;

    console.log(url);

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