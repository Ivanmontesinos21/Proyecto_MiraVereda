/*
Despues de rellenar el formulario de pelicula y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/

let modificarPelicula=document.getElementById("modificar_pelicula");

/*
Recoge el parametro que se le pasa por la url
*/
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if(id != null) {
    document.getElementById("id").value=id;
    getPeliculaIdUpdate(id);
      expandir_formulario();
}

modificarPelicula.addEventListener("submit", event => {
    event.preventDefault();
    updatePelicula();
  
});