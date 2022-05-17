recuperarEscuelas();

function recuperarEscuelas(){
    let url = "http://localhost:3000/escuelas"
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);

            console.log(datos);

            let schools = document.querySelector('#schools');

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