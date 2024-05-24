/*
Despues de rellenar el formulario de usuario y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/

let modificarUsuario=document.getElementById("modificar_usuario");

/*
Recoge el parametro que se le pasa por la url
*/

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if(id != null) {
    document.getElementById("id").value=id;
    getClienteIdUpdate(id);
}

modificarUsuario.addEventListener("submit", event => {
    event.preventDefault();
    updateCliente();
});