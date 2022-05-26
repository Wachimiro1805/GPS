traerDatos();

function traerDatos(){
    let url = "http://localhost:3000/denuncias"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            console.log(datos);

            let cont = document.querySelector('#content');

            cont.innerHTML = '';
            for(let item of datos){
                cont.innerHTML += `
                <div class="contenedorDenuncia" id="contenedorDenuncia">
                <p>Escuela: ${item.idEscuela}</p>
                <p>${item.hechos}</p>
                </div>
                `
            }
        }
    }
    xhttp.send();
}