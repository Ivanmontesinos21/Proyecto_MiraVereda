

Create table Tarifa(
id_tarifa varchar2(30) primary key,
increment_tarifa number not null,
changedTs timestamp

);

Create table Actor(
dni varchar2(9) primary key,
nombre varchar2(30) not null,
apellidos varchar2(30) not null,
changedTs timestamp
);
create sequence ca_sequence;

create table Contenido_AudioVisual(
id_ca integer primary key,
genero varchar2(30) not null,
fecha_estreno DATE not null,
duracion integer not null,
titulo varchar2(20) not null,
precio integer not null,
descripcion varchar2(150) not null,
valoracion_media number(2,1),
nombre_director varchar2(30) not null,
version_idioma varchar2(30)not null,
id_Tarifa varchar2(30),
changedTs timestamp,
constraint id_tarifa_fk foreign key (id_Tarifa) references Tarifa(id_tarifa)

);


Create table Actuacion_ContenAudiovi(
dni_actor varchar2(9),
id_conteAudiovi integer,
constraint dni_actor_fk foreign key(dni_actor) references Actor(dni),
constraint id_conteAudiovi_fk foreign key(id_conteAudiovi) references Contenido_AudioVisual(id_ca),
primary key(dni_actor,id_conteAudiovi),
changedTs timestamp
);



Create table Cliente(
id_cliente varchar2(30) primary key,
nombre varchar2(50) not null,
apellidos varchar2(50) not null,
contraseña varchar2(30) not null,
email varchar2(30),
domicilio varchar2(50),
codigo_postal varchar2(7),
fecha_nacimiento DATE not null,
id_contenidoAudiovi integer,
changedTs timestamp
);

Create table Alquila(
id_conteAudiovi integer,
id_cliente varchar2(30),
constraint id_conteAudiovi_fk_alquila foreign key(id_conteAudiovi) references Contenido_AudioVisual(id_ca),
constraint id_cliente_fk_alquila foreign key(id_cliente) references Cliente(id_cliente),
primary key(id_cliente,id_conteAudiovi),
cobrado varchar2(20) not null,
facturado varchar2(20) not null,
valoracion number(2,1),
changedTs timestamp

);
create sequence factura_sequence;
Create table Factura(
numero_factura integer  primary key,
importe_base integer not null,
importe_con_iva integer not null,
fecha date not null,
id_cliente varchar2(30),
constraint id_cliente_factura foreign key (id_cliente) references Cliente(id_cliente),
changedTs timestamp
);

create sequence linia_factura_sequencia;
Create table Linia_Factura(
numero_factura integer,
id_contenidoAudioVisual int,
num_linea varchar2(30),
 constraint numero_factura_fk foreign key(numero_factura) references Factura(numero_factura),
primary key(numero_factura,num_linea),
constraint id_contenidoAudioVisual_fk_linea_factura foreign key(id_contenidoAudioVisual) references Contenido_AudioVisual(id_ca),
changedTs timestamp
);

Create table Pelicula(
disponible_hasta date not null,
id_contenidoAudiovisual integer,
genero varchar2(30),
fecha_estreno DATE,
duracion integer,
titulo varchar2(20),
precio integer,
descripcion varchar2(150),
valoracion_media number(2,1),
nombre_director varchar2(30),
version_idioma varchar2(30),
id_tarifa varchar(30),
constraint id_tarifa_fk_pelicula foreign key (id_tarifa) references Tarifa(id_tarifa),
constraint id_contenidoAudiovisual_fk_pelicula foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca),
primary key(id_contenidoAudiovisual),
changedTs timestamp
);

Create table Corto(
id_contenidoAudiovisual integer,
genero varchar2(30),
fecha_estreno DATE,
duracion integer,
titulo varchar2(20),
precio integer,
descripcion varchar2(150),
valoracion_media number(2,1),
nombre_director varchar2(30),
version_idioma varchar2(30),
id_tarifa varchar2(30),
 constraint id_tarifa_fk_corto foreign key (id_tarifa) references Tarifa(id_tarifa),
constraint id_contenidoAudiovisual_fk_corto foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca),
primary key(id_contenidoAudiovisual),
changedTs timestamp
);
create sequence serie_sequence;

Create table Serie(
id_contenidoAudiovisual integer,
titulo varchar2(30) not null,
codigo integer ,
 constraint id_contenidoAudiovisual_fk_serie foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca),
primary key(codigo),
changedTs timestamp
);
create sequence capitulo_sequence; 
Create table Capitulo(
disponible_desde date not null,
codigo_Serie integer not null,
temporada varchar2(10) not null,
id_contenidoAudiovisual integer,
genero varchar2(30),
fecha_estreno DATE,
duracion integer,
titulo varchar2(20),
precio integer,
descripcion varchar2(150),
valoracion_media number(2,1),
nombre_director varchar2(30),
version_idioma varchar2(30),
id_tarifa varchar2(30),
 constraint id_tarifa_fk_capitulo foreign key (id_tarifa) references Tarifa(id_tarifa),
constraint id_contenidoAudiovisual_fk_capitulo foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id_ca),
constraint codigo_serie_fk foreign key(codigo_Serie) references Serie(codigo),
primary key(id_contenidoAudiovisual),
changedTs timestamp
);

create table Tarjeta(
id_tarjeta varchar2(9) primary key,
num_tarjeta varchar2(16) not null,
fecha_caducidad date not null,
CVV varchar2(3) not null,
titular varchar2(20) not null,
id_cliente varchar2(30) not null,
constraint id_cliente_fk_tarjeta foreign key (id_cliente) references Cliente(id_cliente),
changedTs timestamp
);

create table pertenece_tarjeta(
id_cliente varchar2(30),
id_tarjeta varchar2(9),
constraint id_cliente_fk_pertenece_tarjeta foreign key (id_cliente) references Cliente(id_cliente),
constraint id_tarjeta_fk foreign key (id_tarjeta) references Tarjeta (id_tarjeta),
primary key(id_cliente,id_tarjeta),
changedTs timestamp
);