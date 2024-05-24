<?php
session_start(); //indicamos que vamos a usar sesiones

/*
    Recogemos los parametros del formulario de index.phpp
*/
$email = $_POST['email'];
$contrasenya = $_POST['contrasenya'];
/*
    Los comparamos con los del admin y si son correctos permitimos
    que pueda acceder a las demas páginas
*/
if($email == "admin@admin.com" && $contrasenya == "admin") {
    $_SESSION['logged'] = true;
    header("Location: home.php");

/*
    Si no son correctos lo devolvemos a la primera página
*/
}else {
    header("Location: login-error.html");
}
die();

?>
