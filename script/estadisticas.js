/* Esta función recolectará la entrada del usuario
y tomando en cuenta dicha entrada mostrará u ocultará información 
de una fila en particular */
function filtro() {
    // Accede al texto de entrada y a varios elementos del DOM
    let valor = document.getElementById("searchInput").value.toUpperCase();
    let nombres = document.getElementById("names");
    let filas = nombres.getElementsByTagName("tr");
  
    // Iteramos el arreglo de filas
    for(let i = 0; i < filas.length; i++){
      // Por cada fila se obtiene la referencia a la columna lenguaje
      let columnaLenguaje = filas[i].getElementsByTagName("td")[2];
      // Se extrae el texto de la columna lenguaje
      let lenguaje = columnaLenguaje.textContent;
      // Se muestra u oculta la fila si la entrada de texto
      // coincide con el texto de la columna lenguaje
      filas[i].style.display = lenguaje.toUpperCase().indexOf(valor) > -1 ? "" : "none";
    }
  }
  
  // Se agrega un escuchador de eventos a la entrada de texto
  // para activar la función de filtrado cada vez que el usuario
  // ingresa texto en la entrada
//  document.getElementById("searchInput").addEventListener("keyup", filtro);