/*
Despues de rellenar el formulario de pelicula y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/
let obtenerUsuario=document.getElementById("obtener_pelicula");

obtenerUsuario.addEventListener("submit", event => {
    event.preventDefault();
  
    getPeliculas();
});




