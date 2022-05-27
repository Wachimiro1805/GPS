traerDatos();
traerDH();
traerDM();

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
                console.log(item.cant);

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
                console.log(item.cant);

                cont.innerHTML = item.cant;
            }
        }
    }
    xhttp.send();
}