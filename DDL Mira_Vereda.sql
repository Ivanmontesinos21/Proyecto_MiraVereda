drop database if exists miraVereda;
create database miraVereda;
use miraVereda;

Create table Tarifa(
id varchar(30) primary key,
increment int not null
);

Create table Actor(
dni varchar(9) primary key,
nombre varchar(30) not null,
apellidos varchar(30) not null
);

Create table Contenido_AudioVisual(
id int auto_increment primary key,
genero varchar(30),
fecha_estreno DATE,
duracion varchar(20),
titulo varchar(20),
precio double,
descripcion varchar(150),
valoracion_media double,
nombre_director varchar(30),
version_idioma varchar(30),
id_tarifa_fk varchar(30),
foreign key (id_tarifa_fk) references Tarifa(id)
);

Create table Actuacion_ContenAudiovi(
dni_actor varchar(9),
id_conteAudiovi int auto_increment,
foreign key(dni_actor) references Actor(dni),
foreign key(id_conteAudiovi) references Contenido_AudioVisual(id),
primary key(dni_actor,id_conteAudiovi)
);

Create table Cliente(
id_cliente varchar(30) primary key,
nombre varchar(50),
apellidos varchar(50),
contraseña varchar(30),
domicilio varchar(50),
email varchar(30),
codigo_postal varchar(7),
fecha_nacimiento DATE,
id_contenidoAudiovi int,
foreign key (id_contenidoAudiovi) references Contenido_AudioVisual(id)
);

Create table Alquila(
id_conteAudiovi int auto_increment,
id_cliente varchar(30),
foreign key(id_conteAudiovi) references Contenido_AudioVisual(id),
foreign key(id_cliente) references Cliente(id_cliente),
primary key(id_cliente,id_conteAudiovi),
cobrado varchar(20) not null,
facturado varchar(20) not null,
valoracion double

);

Create table Factura(
numero_factura int auto_increment primary key,
importe_base double not null,
importe_con_iva double not null,
fecha date not null,
id_cliente varchar(30),
foreign key (id_cliente) references Cliente(id_cliente)
);

Create table Linia_Factura(
numero_factura int auto_increment,
id_contenidoAudioVisual int,
num_linea varchar(30),
foreign key(numero_factura) references Factura(numero_factura),
primary key(numero_factura,num_linea),
foreign key(id_contenidoAudioVisual) references Contenido_AudioVisual(id)
);

Create table Pelicula(
disponible_hasta date not null,
id_contenidoAudiovisual int auto_increment,
genero varchar(30),
fecha_estreno DATE,
duracion varchar(20),
titulo varchar(20),
precio double,
descripcion varchar(150),
valoracion_media double,
nombre_director varchar(30),
version_idioma varchar(30),
id_tarifa varchar(30),
foreign key (id_tarifa) references Tarifa(id),
foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id),
primary key(id_contenidoAudiovisual)
);

Create table Corto(
id_contenidoAudiovisual int auto_increment,
genero varchar(30),
fecha_estreno DATE,
duracion varchar(20),
titulo varchar(20),
precio double,
descripcion varchar(150),
valoracion_media double,
nombre_director varchar(30),
version_idioma varchar(30),
id_tarifa varchar(30),
foreign key (id_tarifa) references Tarifa(id),
foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id),
primary key(id_contenidoAudiovisual)
);

Create table Serie(
id_contenidoAudiovisual int auto_increment,
titulo varchar(30) not null,
foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id),
primary key(id_contenidoAudiovisual),
unique key(titulo)
);

Create table Capitulo(
disponible_desde date not null,
titulo_Serie varchar(30)  not null,
temporada varchar(10) not null,
id_contenidoAudiovisual int auto_increment,
genero varchar(30),
fecha_estreno DATE,
duracion varchar(20),
titulo varchar(20),
precio double,
descripcion varchar(150),
valoracion_media double,
nombre_director varchar(30),
version_idioma varchar(30),
id_tarifa varchar(30),
foreign key (id_tarifa) references Tarifa(id),
foreign key(id_contenidoAudiovisual) references Contenido_AudioVisual(id),
foreign key(titulo_Serie) references Serie(titulo),
primary key(id_contenidoAudiovisual)
);

create table Tarjeta(
num_tarjeta varchar(9) primary key,
fecha_caducidad date not null,
CVV varchar(3),
titular varchar(20),
id_cliente varchar(30),
foreign key (id_cliente) references Cliente(id_cliente)
);

create table pertenece_tarjeta(
id_cliente varchar(30),
num_tarjeta varchar(9),
foreign key (id_cliente) references Cliente(id_cliente),
foreign key (num_tarjeta) references Tarjeta (num_tarjeta),
primary key(id_cliente,num_tarjeta)
);