CREATE OR REPLACE FUNCTION get_peliculas (after_id INTEGER) RETURN SYS_REFCURSOR
IS
BEGIN 
	DECLARE 
		peliculas_cursor SYS_REFCURSOR;
	BEGIN 
		OPEN peliculas_cursor FOR SELECT
				ca.ID_CA,
				CASE
					WHEN p.ID_CONTENIDOAUDIOVISUAL IS NOT NULL THEN 'pelicula'
					WHEN c.ID_CONTENIDOAUDIOVISUAL IS NOT NULL THEN 'capitulo'
					ELSE 'corto'
				END AS TIPO,
				ca.GENERO,
				ca.FECHA_ESTRENO,
				ca.DURACION,
				ca.TITULO,
				ca.PRECIO,
				GREATEST(0, (ca.PRECIO + (SELECT t.INCREMENT_TARIFA FROM TARIFA t WHERE t.ID_TARIFA = ca.ID_TARIFA))) AS PRECIO_CON_TARIFA,
				ca.DESCRIPCION,
				ca.VALORACION_MEDIA,
				ca.NOMBRE_DIRECTOR,
				ca.VERSION_IDIOMA,
				ca.ID_TARIFA,
				ca.IMAGEN_URL,
				p.DISPONIBLE_HASTA,
				c.DISPONIBLE_DESDE,
				c.CODIGO_SERIE,
				(SELECT TITULO FROM SERIE WHERE CODIGO = c.CODIGO_SERIE) AS SERIE,
				c.TEMPORADA
			FROM CONTENIDO_AUDIOVISUAL ca
				LEFT JOIN PELICULA p
				ON ca.ID_CA = p.ID_CONTENIDOAUDIOVISUAL
				LEFT JOIN CAPITULO c
				ON ca.ID_CA = c.ID_CONTENIDOAUDIOVISUAL
			WHERE ca.ID_CA > NVL(after_id, -1)
			FETCH FIRST 20 ROWS ONLY;
		RETURN peliculas_cursor;
	END;
END;
