/*
Despues de rellenar el formulario de login y darle a submit
se inicia un evento de escucha a través del id que tiene el formulario
*/

let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    login();
});




        