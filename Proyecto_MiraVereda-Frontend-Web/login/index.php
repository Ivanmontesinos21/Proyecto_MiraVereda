<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../css/main.css">
        <title>Admin login</title>
    </head>
    <body>
        <div align="center">
            <div align="left" class="thin-page-600px">
                <h1>Iniciar sesión</h1>
                <form id="login-form" method="post" action="login-check.php">
                    <label for="email" class="textbox-label">Email</label>
                    <input type="email" name="email" id="email" autocomplete="email" autofocus required>
                    <label for="contrasenya" class="textbox-label">Contraseña</label>
                    <input type="password" name="contrasenya" id="contrasenya" autocomplete="current-password" required>
                    <div align="right">
                        <input type="submit" class="button accent" value="Iniciar sesión">
                    </div>
                </form>
                    </div>
        </div>
        <script src="../js/main.js"></script>

    </body>
</html>

