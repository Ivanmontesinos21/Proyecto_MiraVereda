/*
drop table Pelicula;
drop table Corto;
drop table Capitulo;
drop table Serie;
drop table Alquila;
drop table Linea_Factura;
drop table Factura;
drop table Tarjeta;
drop table Cliente;
drop table Actuacion_ContenAudiovi;
drop table Actor;
drop table Contenido_AudioVisual;
drop table Tarifa;
drop sequence tarifa_sequence;
drop sequence ca_sequence;
drop sequence serie_sequence;
drop sequence cliente_sequence;
drop sequence factura_sequence;
drop sequence linea_factura_sequence;
drop sequence tarjeta_sequence;
*/

create sequence tarifa_sequence;

Create table Tarifa (
	id_tarifa integer primary key,
	increment_tarifa integer not null,
	changedTs timestamp
);

Create table Actor (
	dni varchar2(9) primary key,
	nombre varchar2(30) not null,
	apellidos varchar2(30) not null,
	changedTs timestamp
);

create sequence ca_sequence;

create table Contenido_AudioVisual (
	id_ca integer primary key,
	genero varchar2(30) not null,
	fecha_estreno DATE not null,
	duracion integer not null,
	titulo varchar2(30) not null,
	precio integer not null,
	descripcion varchar2(300) not null,
	valoracion_media number(2,1),
	nombre_director varchar2(30) not null,
	version_idioma varchar2(8) not null,
	id_Tarifa integer,
	imagen_url varchar2(500),
	changedTs timestamp,
	constraint id_tarifa_fk foreign key (id_Tarifa) references Tarifa(id_tarifa) on delete cascade
);

Create table Actuacion_ContenAudiovi(
	dni_actor varchar2(9),
	id_conteAudiovi integer,
	changedTs timestamp,
	constraint dni_actor_fk foreign key(dni_actor) references Actor(dni),
	constraint id_conteAudiovi_fk foreign key(id_conteAudiovi) references Contenido_AudioVisual(id_ca) on delete cascade,
	primary key(dni_actor,id_conteAudiovi)
);

Create table Pelicula (
	id_contenidoAudiovisual integer,
	disponible_hasta date not null,
	changedTs timestamp,
	constraint id_contenidoAudiovisual_fk_pelicula foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca) on delete cascade,
	primary key(id_contenidoAudiovisual)
);

create sequence serie_sequence;

Create table Serie (
	codigo integer,
	titulo varchar2(30) not null,
	changedTs timestamp,
	primary key (codigo)
);

Create table Capitulo (
	id_contenidoAudiovisual integer,
	disponible_desde date not null,
	codigo_Serie integer not null,
	temporada integer not null,
	changedTs timestamp,
	constraint id_contenidoAudiovisual_fk_capitulo foreign key (id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca) on delete cascade,
	constraint codigo_serie_fk foreign KEY (codigo_Serie) references Serie(codigo),
	primary key (id_contenidoAudiovisual)
);

Create table Corto (
	id_contenidoAudiovisual integer,
	changedTs timestamp,
	constraint id_contenidoAudiovisual_fk_corto foreign key (id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca) on delete cascade,
	primary key (id_contenidoAudiovisual)
);

create sequence cliente_sequence;

Create table Cliente (
	id_cliente integer primary key,
	nombre varchar2(30) not null,
	apellidos varchar2(30) not null,
	contrasenya varchar2(30) not null,
	email varchar2(50),
	domicilio varchar2(50),
	codigo_postal varchar2(7),
	fecha_nacimiento DATE not null,
	changedTs timestamp
);

Create table Alquila (
	id_conteAudiovi integer,
	id_cliente integer,
	cobrado number(1) not null,
	disponible_hasta date,
	valoracion number(2,1),
	changedTs timestamp,
	en_carrito number(1),
	constraint id_conteAudiovi_fk_alquila foreign key(id_conteAudiovi) references Contenido_AudioVisual(id_ca) on delete cascade,
	constraint id_cliente_fk_alquila foreign key(id_cliente) references Cliente(id_cliente) on delete cascade,
	primary key(id_cliente,id_conteAudiovi)
);

create sequence factura_sequence;

Create table Factura (
	numero_factura integer primary key,
	importe_base integer not null,
	importe_con_iva integer not null,
	fecha date not null,
	id_cliente integer,
	changedTs timestamp,
	constraint id_cliente_factura foreign key (id_cliente) references Cliente(id_cliente)on delete cascade
);

create sequence linea_factura_sequence;

Create table Linea_Factura (
	numero_factura integer,
	id_contenidoAudioVisual integer,
	num_linea integer,
	changedTs timestamp,
	constraint numero_factura_fk foreign key (numero_factura) references Factura(numero_factura) on delete cascade,
	constraint id_contenidoAudioVisual_fk_linea_factura foreign key (id_contenidoAudioVisual) references Contenido_AudioVisual(id_ca) on delete cascade,
	primary key(numero_factura, num_linea)
);

create sequence tarjeta_sequence;

create table Tarjeta (
	id_tarjeta integer primary key,
	num_tarjeta varchar2(16) not null,
	fecha_caducidad date not null,
	CVV varchar2(3) not null,
	titular varchar2(30) not null,
	id_cliente integer not null,
	changedTs timestamp,
	constraint id_cliente_fk_tarjeta foreign key (id_cliente) references Cliente(id_cliente) on delete cascade
);

CREATE OR REPLACE TRIGGER tarifa_changedts
BEFORE UPDATE ON tarifa
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER actor_changedts
BEFORE UPDATE ON actor
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER ca_changedts
BEFORE UPDATE ON contenido_audiovisual
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER pelicula_changedts
BEFORE UPDATE ON pelicula
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER serie_changedts
BEFORE UPDATE ON serie
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER capitulo_changedts
BEFORE UPDATE ON capitulo
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER corto_changedts
BEFORE UPDATE ON corto
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER cliente_changedts
BEFORE UPDATE ON cliente
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER alquila_changedts
BEFORE UPDATE ON alquila
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER factura_changedts
BEFORE UPDATE ON factura
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER linea_factura_changedts
BEFORE UPDATE ON linea_factura
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE TRIGGER tarjeta_changedts
BEFORE UPDATE ON tarjeta
FOR EACH ROW
BEGIN
	:NEW.changedTs := SYSTIMESTAMP;
END;

CREATE OR REPLACE PACKAGE CONSTANTES
IS 
   IVA CONSTANT NUMBER := 0.21;
END;
