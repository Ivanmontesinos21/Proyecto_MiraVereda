<?php
session_start(); //indicamos que vamos a usar sesiones

if($_SESSION['logged']) {
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <title>Panel de administración</title>
    </head>
    <body>
        <div align="center">
            <div align="left" class="thin-page-600px">

                <h1>Panel de administración</h1>

                <a href="../CrudUserFormu/ObtenerUsuarios.php"  class="button">Administrar usuarios</a><br><br>
                <a href="../CrudUserFormu/Crear_usuarios.php"  class="button">Crear usuario</a><br><br>
                <a href="../CrudPeliFormu/ObtenerPelicula.php"  class="button">Gestionar películas</a><br><br>
                <a href="../CrudPeliFormu/Crear_pelicula.php"  class="button">Crear película</a><br><br>

            </div>
        </div>

        <script src="../js/main.js"></script>
        <script src="../js/login.js"></script>

    </body>
</html>

<?php
}
else {
    header("Location: index.php");
}
?>