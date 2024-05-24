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

    <title>Leer Usuario</title>
</head>
    <body>
        <div align="center">
            <div align="left" class="thin-page">
                    <br>
                    <a href="../login/home.php">Volver al panel de administración</a>
                    <h1>Leer Usuario</h1>
                    <form action="" method="get" id="obtener_usuario">

                        <label for="id">ID de Usuario:</label>
                        <input type="number" id="id" name="id" required><br>
                    </form>

                    <!--
                        
                    El método getClienteId() se encarga de mostrar los clientes a través del id que le
                    pasa en el formulario de arriba 

                    -->

                    <button class="button" onclick="getClienteId()">Buscar</button><br><br> 
                        
                    <div id="usuarios" class="lista">

                    </div>
            </div>
            <script src="../js/main.js"></script>
            <script src="../js/obtenerUsuario.js"></script>
        </div>
    
    </body>
</html>

<?php
}
else {
    header("Location: ../login/index.php");
}
?>
