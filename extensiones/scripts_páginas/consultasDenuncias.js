traerDatos();

function traerDatos(){
    let url = "http://localhost:3000/denuncias"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            console.log(datos);

            let cont = document.querySelector('#names');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <tr>
                    <td>${item.idAbusador}</td>
                    <td>${item.hechos}</td>
                    <td>${item.TIPOVIOLENCIA}</td>
                    <td>${item.idEscuela}</td>
                    <td>${item.idEscuela}</td>
                    <td>${item.idEscuela}</td>
                </tr>
                `
            }
        }
    }
    xhttp.send();
}