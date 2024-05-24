/*
Despues de rellenar el formulario de usuario y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/

let crearUsuario=document.getElementById("crear_usuario");

crearUsuario.addEventListener("submit", event => {
    event.preventDefault();
    addCliente();
});