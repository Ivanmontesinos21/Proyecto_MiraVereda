<?php
session_start(); 
if($_SESSION['logged']) {
?>
<!DOCTYPE html>

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/main.css">

    <title>Actualizar Película</title>
</head>
<body>
        <div align="center">
            <div align="left" class="thin-page-600px">
                    
                    <h1>Actualizar Película</h1>

                <form action="" method="put" id="modificar_pelicula">

            
                    <input type="text" id="tipo" name="tipo" hidden><br>


                        <label for="id">ID de película:</label>
                        <input type="number" id="id" name="id" required><br>
                    
                        <label for="titulo">Título:</label>
                        <input type="text" id="titulo" name="titulo" required><br>
                        
                        <label for="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" rows="4" required></textarea><br>
                            
                        <label for="genero">Genero:</label>
                        <input type="text" id="genero" name="genero" required><br>
                        
                        <label for="duracion">Duración (en minutos):</label>
                        <input type="number" id="duracion" name="duracion" required><br>
                        
                        <label for="fecha_estreno">Fecha estreno:</label>
                        <input type="date" id="fecha_estreno" name="fecha_estreno" required><br><br>
                        
                        <label for="nombre_director">Nombre director</label>
                        <input type="text" id="nombre_director" name="nombre_director" required><br>
                    
                        <label for="id_tarifa">ID tarifa: </label>
                        <input type="text" id="id_tarifa" name="id_tarifa"><br>
                        
                        <label for="precio">Precio (en céntimos):</label>
                        <input type="number" id="precio" name="precio" required><br>
                        
                        <label for="version_Idioma">Version idioma:</label>
                        <select name="version_Idioma" id="version_Idioma">

                            <option value="V.E">Versión española</option>

                            <option value="V.O.S.E">
                                Versión española original subtitulada
                            </option>
                        </select>
                                        
                            <label for="id_actores">ID actores: </label>
                            <input type="text" id="id_actores" name="id_actores"><br>

                            <label for="imagen_url">URL de la imagen:</label>
                            <input type="text" id="imagen_url" name="imagen_url"><br>
                            
                        <div id="parte_pelicula">

                            <label for="disponibleHasta">Disponible hasta:</label>
                            <input type="date" id="disponibleHasta" name="disponibleHasta">
                            
                        </div> 

                        <div id="parte_capitulo" style="display:none">

                            <label for="disponibleDesde">Disponible desde:</label>
                            <input type="date" id="disponibleDesde" name="disponibleDesde"><br>
                            
                            <label for="idSerie">ID de la serie:</label>
                            <input type="number" id="idSerie" name="idSerie"><br>

                            <label for="temporada">Temporada:</label>
                            <input type="number" id="temporada" name="temporada">


                        </div>
                
                    <input type="submit" class="button accent" value="Actualizar Película">
                    <br><br>
                </form> 
        </div>
    </div>


    <script src="../js/main.js"></script>
    <script src="../js/modificarPelicula.js"></script>

    </body>
</html>

<?php
}
else {
    header("Location: ../login/index.php");
}
?>