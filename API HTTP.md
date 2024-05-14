## CRUD Peliculas
- GET y DELETE /pelicula/{id}
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
- POST y PUT /pelicula/
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
        "precio": "number", // Precio total en centimos
        "versionIdioma": "string", // "V.E." (versión española) o "V.O.S.E." (versión original subtitulada al español)
        "idActores": [ "number", ... ], // Array de ids de actores
        "disponibleHasta": "number", // Timestamp, solo disponible en peliculas
        "disponibleDesde": "number", // Timestamp, solo disponible en capitulos
        "serie": "string", // Nombre de la serie, solo disponible en capitulos
        "temporada": "number", // Solo disponible en capitulos
    }
    ```
