recuperarMunicipios();

function recuperarMunicipios(){
    let url = "http://localhost:3000/municipios"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            let muni = document.querySelector('#municipio');

            muni.innerHTML = '<option value="">Seleccione Un Municipio</option>';
            for(let item of datos){
                muni.innerHTML += `
                <option value="${item.idMunicipio}">${item.nombre}</option>
                `
            }
        }
    }
    xhttp.send();
}