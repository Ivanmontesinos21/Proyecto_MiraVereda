
const ipUrl = "http://172.30.198.207:8080";
/*
Método get que se encarga de mostrar una pelicula por su id
y si no tiene id llama a getPeliculas()
*/

function getPeliculaId(){
    let inputId=document.getElementById("id_ca");
    if(inputId.value.length == 0) {
        getPeliculas();
        return;
    }
    let pelicula;
    fetch(ipUrl+`/api/pelicula/${inputId.value}`)
        .then(res => {
            if(res.ok) {
                res.json().then(data=>{
                    pelicula=data; 
                
                let contenedor=document.getElementById("peliculas");
                contenedor.innerHTML="";
    
                        
                let peliculaElem = renderPelicula(pelicula,pelicula.actores);
            
                    contenedor.appendChild(peliculaElem);
    
                });
            }else {
                res.text().then(err => alert(err));
            }
    })
}

/*
Método get que se encarga de mostrar todas las peliculas
*/

function getPeliculas(){
    fetch(ipUrl+`/api/pelicula/`)
    .then(res=>res.json())
    .then(peliculas=>{

    let contenedor=document.getElementById("peliculas");
    contenedor.innerHTML="";
 
    peliculas.forEach(pelicula=>{
    
        let peliculaElem = renderPelicula(pelicula,pelicula.actores);

        contenedor.appendChild(peliculaElem);
        
    })

    })
}

/*
Método que se encarga de mostrar la información de la pelicula
en etiquetas de html
*/


function renderPelicula(pelicula) {
    let peliculaElem = document.createElement("div");
        peliculaElem.className = "card-panel fill-horizontal";

        let titulo = document.createElement("h3");
        titulo.innerText = pelicula.titulo;
        peliculaElem.appendChild(titulo);

        let id = document.createElement("p");
        id.innerText = "ID: "+pelicula.id;
        peliculaElem.appendChild(id);

        let tipo = document.createElement("p");
        tipo.innerText = "Tipo: " + pelicula.tipo;
        peliculaElem.appendChild(tipo);

        let descripcion = document.createElement("p");
        let descripcion2 = document.createElement("span");
        descripcion2.innerText = "Descripción: ";
        descripcion.appendChild(descripcion2);
        let descripcion3 = document.createElement("code");
        descripcion3.innerText = pelicula.descripcion;
        descripcion.appendChild(descripcion3);
        peliculaElem.appendChild(descripcion);

        let genero = document.createElement("p");
        genero.innerText = "Genero: "+pelicula.genero;
        peliculaElem.appendChild(genero);

        let duracion = document.createElement("p");
        duracion.innerText = "Duración: " +  segToDuracion(pelicula.duracion);
        peliculaElem.appendChild(duracion);

        let fechaEstreno = document.createElement("p");
        fechaEstreno.innerText ="Fecha estreno: " +  intToDate(pelicula.fechaEstreno).toLocaleDateString();
        peliculaElem.appendChild(fechaEstreno);

        let nombreDirector = document.createElement("p");
        nombreDirector.innerText ="Nombre director: " +  pelicula.nombreDirector;
        peliculaElem.appendChild(nombreDirector);

        let valoracionMedia = document.createElement("p");
        valoracionMedia.innerText ="Valoración media: " +  pelicula.valoracionMedia;
        peliculaElem.appendChild(valoracionMedia);

        let idTarifa = document.createElement("p");
        idTarifa.innerText ="ID tarifa: " +  pelicula.idTarifa;
        peliculaElem.appendChild(idTarifa);

        let imagen_url = document.createElement("p");
        imagen_url.innerText ="Imagen: " +  pelicula.imagenUrl;
        peliculaElem.appendChild(imagen_url);

        let precio = document.createElement("p");
        precio.innerText ="Precio: " +  pelicula.precio/100+"€";
        peliculaElem.appendChild(precio);

        let precioConTarifa = document.createElement("p");
        precioConTarifa.innerText ="Precio con tarifa: " +  pelicula.precioConTarifa/100+"€";
        peliculaElem.appendChild(precioConTarifa);

        let versionIdioma = document.createElement("p");
        versionIdioma.innerText ="Versión idioma: " +  pelicula.versionIdioma;
        peliculaElem.appendChild(versionIdioma);
            /*

            Al ser un array de actores debemos hacer una funcion lambda para imprimir
            todos los id de actores y separarlos por comas

            */
        if(pelicula.actores && pelicula.actores.length > 0) {
            let idActor = document.createElement("p");

        
            idActor.innerText ="Actores: " +  pelicula.actores.map(actor => "(" + actor.dni + ") " + actor.nombre + " " + actor.apellidos).join(", ");
            peliculaElem.appendChild(idActor);
        }

            /*

            Dependiendo del tipo de contenido audiovisual muestra una información u otra

            */
            if(pelicula.tipo=="pelicula"){

                let disponibleHasta = document.createElement("p");
                disponibleHasta.innerText ="Disponible Hasta: " +  intToDate(pelicula.disponibleHasta).toLocaleDateString();
                peliculaElem.appendChild(disponibleHasta);

            }else if(pelicula.tipo=="capitulo"){

                let disponibleDesde = document.createElement("p");
                disponibleDesde.innerText ="Disponible Desde: " +  intToDate(pelicula.disponibleDesde).toLocaleDateString();
                peliculaElem.appendChild(disponibleDesde);

                let idSerie = document.createElement("p");
                idSerie.innerText ="ID de la serie: " +  pelicula.idSerie;
                peliculaElem.appendChild(idSerie);

                let serie = document.createElement("p");
                serie.innerText ="Nombre de la serie: " +  pelicula.serie;
                peliculaElem.appendChild(serie);

                let temporada = document.createElement("p");
                temporada.innerText ="Número de la temporada: " +  pelicula.temporada;
                peliculaElem.appendChild(temporada);

            }

        let botonEditar = document.createElement("a");

        botonEditar.className = "button";
        botonEditar.innerText = "Editar";
        botonEditar.href = "../CrudPeliFormu/ActualizarPelicula.php?id=" + pelicula.id;
        peliculaElem.appendChild(botonEditar);

        let botonEliminar = document.createElement("button");

        botonEliminar.className = "button";
        botonEliminar.innerText = "Eliminar";

        botonEliminar.onclick = function() {
            deletePelicula(pelicula.id);


        };
        peliculaElem.appendChild(botonEliminar);

        return peliculaElem;
}


/*
Método get que se encarga de mostrar un cliente por su id
y si no tiene id llama a getPeliculas()
*/

function getClienteId(){
    let inputId=document.getElementById("id");
    if(inputId.value.length == 0) {
        getClientes();
        return;
    }

    let cliente;

    fetch(ipUrl+`/api/usuario/${inputId.value}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data=>{
                        cliente=data; 
                      
                       let contenedor=document.getElementById("usuarios");
                       contenedor.innerHTML="";
           
                       let clienteElem = renderCliente(cliente);
                   
                           contenedor.appendChild(clienteElem);
           
                      });
                }
                else {
                    res.text().then(err => alert(err));
                }
            })
}

/*
Método get que se encarga de mostrar todos los usuarios
*/

function getClientes(){
    fetch(ipUrl+`/api/usuario/`)
    .then(res=>res.json())
    .then(clientes=>{

    let contenedor=document.getElementById("usuarios");
    contenedor.innerHTML="";
 
    clientes.forEach(cliente=>{
    
        let clienteElem = renderCliente(cliente);

        contenedor.appendChild(clienteElem);
        
    })

    })
}
/*
Método que se encarga de mostrar la información del cliente
en etiquetas de html
*/
function renderCliente(cliente) {
        let clienteElem = document.createElement("div");
        clienteElem.className = "card-panel fill-horizontal";

        let nombre = document.createElement("h3");
        nombre.innerText = cliente.nombre + " " + cliente.apellidos;
        clienteElem.appendChild(nombre);

        let id = document.createElement("p");
        id.innerText = "ID: "+cliente.id;
        clienteElem.appendChild(id);

        let email = document.createElement("p");
        email.innerText = "Email: " + cliente.email;
        clienteElem.appendChild(email);

        let fechaNacimiento = document.createElement("p");
        fechaNacimiento.innerText = "Fecha de Nacimiento: "+ intToDate(cliente.fechaNacimiento).toLocaleDateString();
        clienteElem.appendChild(fechaNacimiento);

        let domicilio = document.createElement("p");
        domicilio.innerText = "Domicilio: " +  (cliente.domicilio || "Vacío");
        clienteElem.appendChild(domicilio);

        let codigoPostal = document.createElement("p");
        codigoPostal.innerText ="Código Postal: " +  (cliente.codigoPostal || "Vacío");
        clienteElem.appendChild(codigoPostal);

        let botonEditar = document.createElement("a");
        botonEditar.className = "button";
        botonEditar.innerText = "Editar";
        botonEditar.href = "Actualizar_Usuario.php?id=" + cliente.id;
        clienteElem.appendChild(botonEditar);

        let botonEliminar = document.createElement("button");
        botonEliminar.className = "button";
        botonEliminar.innerText = "Eliminar";
        botonEliminar.onclick = function() {
            deleteCliente(cliente.id);
        };
        clienteElem.appendChild(botonEliminar);

        return clienteElem;
}


/*
Rellena los campos,a través de su id, cuando se qeuiera modificar un cliente
*/
function getClienteIdUpdate(id){
let cliente;
fetch(ipUrl+`/api/usuario/${id}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data=>{
                        cliente=data; 
                   
                        document.getElementById("nombre").value=cliente.nombre;
                        document.getElementById("apellidos").value=cliente.apellidos;
                        document.getElementById("email").value=cliente.email;
                        document.getElementById("fechaNacimiento").valueAsDate=intToDate(cliente.fechaNacimiento);
                        document.getElementById("domicilio").value=cliente.domicilio;
                        document.getElementById("codigoPostal").value=cliente.codigoPostal;

                    
           
                      });
                }
                else {
                    res.text().then(err => alert(err));
                }
            })
}
    
/*
Rellena los campos,a través de su id, cuando se qeuiera modificar una pelicula
*/

function getPeliculaIdUpdate(id){
    let pelicula;
    fetch(ipUrl+`/api/pelicula/${id}`)
                .then(res => {
                    if(res.ok) {
                        res.json().then(data=>{
                            pelicula=data; 
                            document.getElementById("tipo").value=pelicula.tipo;

                            document.getElementById("id").value=pelicula.id;
                            document.getElementById("titulo").value=pelicula.titulo;
                            document.getElementById("descripcion").value=pelicula.descripcion;
                            document.getElementById("genero").value=pelicula.genero;
                            document.getElementById("duracion").value=pelicula.duracion / 60;
                            document.getElementById("fecha_estreno").valueAsDate=intToDate(pelicula.fechaEstreno);
                            document.getElementById("nombre_director").value=pelicula.nombreDirector;
                            document.getElementById("id_actores").value=pelicula.actores.map(actor=>actor.dni).join(", ");  
                            document.getElementById("id_tarifa").value=pelicula.idTarifa;
                            document.getElementById("precio").value=pelicula.precio;
                        //Con version_Idioma no funcionab bien lo de rellenar el campo 
                            document.getElementById("version_Idioma").value;
                            document.getElementById("imagen_url").value=pelicula.imagenUrl;
                            document.getElementById("disponibleHasta").valueAsDate=intToDate(pelicula.disponibleHasta);
                            document.getElementById("disponibleDesde").valueAsDate=intToDate(pelicula.disponibleDesde);
                            document.getElementById("idSerie").value=pelicula.idSerie;
                            document.getElementById("temporada").value=pelicula.temporada;
          
                          });
                    }
                    else {
                        res.text().then(err => alert(err));
                    }
                }) 
                    console.log(pelicula);
    }

//Este método borra el cliente a tarvés del id
function deleteCliente(id){
   

let cliente;
fetch(ipUrl+`/api/usuario/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
})
.then(response => {
    return response.json( )
})
.then(data => {
    console.log(data);
    location.reload();
 });


 }

//Este método borra el cliente a tarvés del id
function deletePelicula(id){
   

    let pelicula;
    fetch(ipUrl+`/api/pelicula/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    })
    .then(response => {
        return response.json( )
    })
    .then(data => {
        console.log(data);
        location.reload();
     });
    
    
     }

//Este método anyade el cliente a tarvés del id
function addCliente(){
  
  let  cliente={
        nombre:document.getElementById("nombre").value,
        apellidos:document.getElementById("apellidos").value,
        email:document.getElementById("email").value,
        fechaNacimiento:dateToInt(document.getElementById("fechaNacimiento").value),
        contrasenya:document.getElementById("contrasenya").value,
        domicilio:document.getElementById("domicilio").value,
        codigoPostal:document.getElementById("codigoPostal").value
    };

    fetch(ipUrl+`/api/usuario/`,{ method: "POST",
            body: JSON.stringify(cliente),

            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              },})
    .then(res => {
        if(res.ok) {
            alert("El usuario ha sido creado con éxito");
            location.href = "ObtenerUsuarios.php";
        }
        else
            res.json().then(json => alert(json.message));
    })

        
    
}

    
//Este método anyade la pelicula a tarvés del id

function addPelicula(){
        let actoresString = document.getElementById("id_actores").value;

        let  pelicula={
            tipo:document.getElementById("tipo").value,
            titulo:document.getElementById("titulo").value,
            descripcion:document.getElementById("descripcion").value,
            genero:document.getElementById("genero").value,
            duracion:Number(document.getElementById("duracion").value * 60),
            fechaEstreno:dateToInt(document.getElementById("fecha_estreno").value),
            nombreDirector:document.getElementById("nombre_director").value,
            idTarifa:Number(document.getElementById("id_tarifa").value),
            precio:Number(document.getElementById("precio").value),
            versionIdioma:document.getElementById("version_Idioma").value,
            imagenUrl:document.getElementById("imagen_url").value,
            //Hacer split para que me pase id de actores separados por coma
            idActores:actoresString.length == 0 ? [] : actoresString.split(",").map(actor => Number(actor.trim())),
            disponibleHasta:dateToInt(document.getElementById("disponibleHasta").value),
            disponibleDesde:dateToInt(document.getElementById("disponibleDesde").value),
            idSerie:Number(document.getElementById("idSerie").value),
            temporada:Number(document.getElementById("temporada").value)
      };
  
      fetch(ipUrl+`/api/pelicula/`,{ method: "POST",
              body: JSON.stringify(pelicula),
  
              headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                },})
      .then(res => {
        if(res.ok) {
            alert("La película se ha creado con éxito");
            location.href = "ObtenerPelicula.php";
        }
        else
            res.json().then(json => alert(json.message));
    })
          
      
  }

//Este método actualiza el cliente a tarvés del id
function updateCliente(){

    const newUser={
        id:document.getElementById("id").value,          
        nombre:document.getElementById("nombre").value,          
        apellidos:document.getElementById("apellidos").value,
        email:document.getElementById("email").value,
        fechaNacimiento:dateToInt(document.getElementById("fechaNacimiento").value),
        contrasenya:document.getElementById("contrasenya").value,
        domicilio:document.getElementById("domicilio").value,
        codigoPostal:document.getElementById("codigoPostal").value
            };
            const options={
                method: "PUT",
                body: JSON.stringify(newUser),
                headers: {   'Content-type': 'application/json; charset=UTF-8'}
            }
  
  
        fetch(ipUrl+`/api/usuario/`,options)
        .then(res => {
            if(res.ok) {
                alert("El usuario ha sido modificado con éxito");
                location.href = "ObtenerUsuarios.php";
            }
            else
                res.json().then(json => alert(json.message));
        })
  
          
  }
  
//Este método actualiza la pelicula a tarvés del id
  function updatePelicula(){
    let actoresString = document.getElementById("id_actores").value;

    const newPelicula={

        id:document.getElementById("id").value,          
        titulo:document.getElementById("titulo").value,
        descripcion:document.getElementById("descripcion").value,
        genero:document.getElementById("genero").value,
        duracion:document.getElementById("duracion").value * 60,
        fechaEstreno:dateToInt(document.getElementById("fecha_estreno").value),
        nombreDirector:document.getElementById("nombre_director").value,
        idTarifa:document.getElementById("id_tarifa").value,          
        precio:document.getElementById("precio").value,          
        versionIdioma:document.getElementById("version_Idioma").value,
        imagenUrl:document.getElementById("imagen_url").value,
        idActores:actoresString.length == 0 ? [] : actoresString.split(",").map(actor => Number(actor.trim())),
        disponibleHasta:dateToInt(document.getElementById("disponibleHasta").value),
        disponibleDesde:dateToInt(document.getElementById("disponibleDesde").value),
        idSerie:document.getElementById("idSerie").value,
        temporada:document.getElementById("temporada").value

   
            };
            const options={
                method: "PUT",
                body: JSON.stringify(newPelicula),
                headers: {   'Content-type': 'application/json; charset=UTF-8'}
            }
  
  
        fetch(ipUrl+`/api/pelicula/`,options)
        .then(res => {
            if(res.ok) {
                alert("La película se ha modificado con éxito");
                location.href = "ObtenerPelicula.php";
            }
            else
                res.json().then(json => alert(json.message));
        })
  
          
  }

  //Oculta partes del formulario según el tipo de contenido visual
function expandir_formulario(){
    let tipo = document.getElementById("tipo");

    document.getElementById("parte_pelicula").style.display = "none";
    document.getElementById("parte_capitulo").style.display = "none";

    if (tipo.value=="pelicula"){
       document.getElementById("parte_pelicula").style.display = "block";
    }else if(tipo.value=="capitulo"){
        document.getElementById("parte_capitulo").style.display = "block";
    }

    }

//Guarda los datos del usuario registrado
function setCredentials(email, password) {
    setCookie("email", email, 14);
    setCookie("password", password, 14);
}

function getEmail() {
    return getCookie("email");
}

function getPassword() {
    return getCookie("password");
}

function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("contrasenya");
    setCredentials(email.value, password.value);
}

//Crea las cookies
function setCookie(name, value, days) {
    let expires = "";
    if(days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + btoa(value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) == 0)
            return atob(c.substring(nameEQ.length, c.length));
    }
    return null;
}


function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//Para volver un int(Formato unix timeStamp) a date
function intToDate(int) {
    return new Date(int * 1000);
}

//Para volver un date a int
function dateToInt(date) {
    return new Date(date).getTime() / 1000;
}

//Pasa de segundo a un string que representa una duracion
function segToDuracion(seconds, max = -1) {
	let times = [
		[31536000, "año"],
		[86400, "día"],
		[3600, "hora"],
		[60, "minuto"],
		[1, "segundo"]
	];
	let text = [];
	for(let i=0; i<times.length; i++){
		let interval = seconds / times[i][0];
		let time = Math.floor(interval);
		if(interval >= 1) {
			text.push(time + " " + times[i][1] + (time == 1 ? "" : "s"));
		}
		seconds -= time * times[i][0];
		if(text.length == max)
			break;
	}
	return text.length == 0 ? "0 segundos" : text.join(" ");
}