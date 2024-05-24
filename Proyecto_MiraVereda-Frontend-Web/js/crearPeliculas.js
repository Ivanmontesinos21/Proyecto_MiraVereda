/*
Despues de rellenar el formulario de pelicula y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/

let crearPelicula=document.getElementById("crear_pelicula");

crearPelicula.addEventListener("submit", event => {
    event.preventDefault();
    addPelicula();
});