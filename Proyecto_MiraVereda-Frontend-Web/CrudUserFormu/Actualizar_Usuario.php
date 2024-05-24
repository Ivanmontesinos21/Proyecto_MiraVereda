<?php
session_start(); //indicamos que vamos a usar sesiones
if($_SESSION['logged']) {
?>
<!DOCTYPE html>
<html lang="es">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <title>Actualizar Usuario</title>
</head>
    <body>
        <div align="center">
            <div align="left" class="thin-page-600px">
                    
                <h1>Actualizar Usuario</h1>
                <form action="" method="post" id="modificar_usuario">

                    <label for="id">ID de Usuario:</label>
                    <input type="number" id="id" name="id" required><br>

                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre"><br>

                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos"><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br>

                    <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                    <input type="date" id="fechaNacimiento" name="fechaNacimiento"><br>

                    <label for="contrasenya">Contraseña:</label>
                    <input type="password" id="contrasenya" name="contrasenya"><br>

                    <label for="domicilio">Domicilio:</label>
                    <input type="text" id="domicilio" name="domicilio"><br>

                    <label for="codigoPostal">Código Postal:</label>
                    <input type="text" id="codigoPostal" name="codigoPostal"><br>

                    <input type="submit" class="button accent"  value="Actualizar Usuario">
                    <br><br>
                </form>
            </div>
        </div>

        <script src="../js/main.js"></script>
        <script src="../js/modificarUsuario.js"></script>

    </body>
</html>

<?php
}
else {
    header("Location: ../login/index.php");
}
?>
