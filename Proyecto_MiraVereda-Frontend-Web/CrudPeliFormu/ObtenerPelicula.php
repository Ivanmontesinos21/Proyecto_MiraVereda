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

    <title>Leer Película</title>
</head>
    <body>
        <div align="center">
            <div align="left" class="thin-page">
                <br>
                <a href="../login/home.php">Volver al panel de administración</a>
                    
                <h1>Leer Película</h1>     
                <form action="" method="get" id="obtener_pelicula">

                    <label for="id_ca">ID de Película:</label>
                    <input type="number" id="id_ca" name="id_ca" required><br>
                    
                </form>

                <!--

                El método getPeliculaId() se encarga de mostrar las peliculas a través del id que le
                pasa en el formulario de arriba

                -->

                <button class="button" onclick="getPeliculaId()">Buscar</button> 
                <br><br>

                <div id="peliculas" class="lista">

                </div>
            </div>

            <script src="../js/main.js"></script>
            <script src="../js/obtenerPelicula.js"></script>

        </div>
    </body>
</html>

<?php
}
else {
    header("Location: ../login/index.php");
}
?>