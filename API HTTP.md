## CRUD Peliculas
- GET y DELETE /api/pelicula/{id}
  - Output:
    ```js
    {
        "id": "number",
        "tipo": "string", // "pelicula", "capitulo" o "corto"
        "titulo": "string",
        "descripcion": "string",
        "genero": "string",
        "duracion": "number", // Duración total en segundos
        "fechaEstreno": "number", // Timestamp
        "nombreDirector": "string",
        "valoracionMedia": "number", // Número entre 1 y 5
        "idTarifa": "number",
        "precio": "number", // Precio total en centimos
        "versionIdioma": "string", // "V.E." (versión española) o "V.O.S.E." (versión original subtitulada al español)
        "actores": [
            {
                "id": "number",
                "nombre": "string",
                "apellidos": "string"
            },
            ...
        ],
        "disponibleHasta": "number", // Timestamp, solo disponible en peliculas
        "disponibleDesde": "number", // Timestamp, solo disponible en capitulos
        "serie": "string", // Nombre de la serie, solo disponible en capitulos
        "temporada": "number", // Solo disponible en capitulos
    }
    ```
- POST y PUT /api/pelicula/
  - Input:
    ```js
    {
        "id": "number", // Opcional en POST
        "tipo": "string", // "pelicula", "capitulo" o "corto"
        "titulo": "string",
        "descripcion": "string",
        "genero": "string",
        "duracion": "number", // Duración total en segundos
        "fechaEstreno": "number", // Timestamp
        "nombreDirector": "string",
        "idTarifa": "number",
        "precio": "number", // Precio total en centimos
        "versionIdioma": "string", // "V.E." (versión española) o "V.O.S.E." (versión original subtitulada al español)
        "idActores": [ "number", ... ], // Array de ids de actores
        "disponibleHasta": "number", // Timestamp, solo disponible en peliculas
        "disponibleDesde": "number", // Timestamp, solo disponible en capitulos
        "serie": "string", // Nombre de la serie, solo disponible en capitulos
        "temporada": "number", // Solo disponible en capitulos
    }
    ```
## CRUD Usuarios
- GET y DELETE /api/usuario/{id}
  - Output:
    ```js
    {
        "id": "number",
        "nombre": "string",
        "apellidos": "string",
        "email": "string",
        "fechaNacimiento": "number", // Timestamp
        "domicilio": "string",
        "codigoPostal": "number",
    }
    ```
- POST y PUT /api/usuario/
  - Input:
    ```js
    {
        "id": "number", // Opcional en POST
        "nombre": "string",
        "apellidos": "string",
        "email": "string",
        "fechaNacimiento": "number", // Timestamp
        "contrasenya": "string",
        "numTarjeta": "number"
        "domicilio": "string",
        "codigoPostal": "number",
    }
    ```
## Endpoints POST
### Inicio de sesión
- POST /api/login/
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string"
    }
    ```
  - Output:
    `Lo mismo que GET /api/ususario/{id} devolvería con la id del usuario logueado`
  - Output en caso de error:
    `Mensaje de error`
### Ver carrito
- POST /api/carrito/todo
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string"
    }
    ```
  - Output:
    `Array de películas`
### Añadir al carrito
- POST /api/carrito/
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string",
        "idPelicula": "number"
    }
    ```
  - Output:
    `Total de la factura`
### Votar una pelicula
- POST /api/votar/
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string",
        "idPelicula": "number",
        "votacion": "number" // Número entre 1 y 5
    }
    ```
### Realizar pago
- POST /api/pagar/
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string"
    }
    ```
## Endpoints DELETE
### Quitar del carrito
- DELETE /api/carrito/
  - Input:
    ```js
    {
        "email": "string",
        "contrasenya": "string",
        "idPelicula": "number"
    }
    ```
  - Output:
    `Total de la factura`
