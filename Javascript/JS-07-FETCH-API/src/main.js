//Programación Sincrónica
/*function two(){
    console.log("dos");
}

function one(){
    console.log("uno");
    two();
    console.log("tres");
}
one();
console.log("***********************")*/

//Estoy mandando a llamar una función inicial, en este caso two, vive, pero la mando a llamar en mi función one. le estoy diciendo a mi codigo que la ejecute de manera sincronica y en un hilo

//Programación asíncrona
/*setTimeout que recibe una función anónima y que establece un tiempo(en milisegundos 1000ms = 1s) de ejecución para cumplir con la condición asíncrona  */


/*const twoAsync = () =>{
    setTimeout( () =>{ //función de manera anónima
        console.log("dos Async"); //se esta ejecutando 5 segundos después, es decir, se está ejecutando de manera asíncrona
    }, 5000);
}

const oneAsync =() =>{
    setTimeout(function (){  //otra manera de mandar a llamar una función anónima
        console.log("uno Async");
    }, 2000)
    twoAsync();
    console.log("tres Async");
}

oneAsync();*/

//Método GET

/**
 * Trabajando con promesas mediante Fetch API
 */
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    //Si se cumple la promesa, vamos a traer los datos de la API  y se convertirán en tipo JSON para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //puedo manipular mi API como yo quiera. Este me muestra  en consola todos los usuarios de la API
        console.log(data[0]) //me trae en consola solo el indice 0
        console.log(data[0].name)//me trae el name del indice 0 
    })
    .catch(error => console.error("¡Ups!, algo salió mal", error));   //mensaje de error      

// > -Usando fetch para mostrar en navegador 

const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//variable para guardar la infromación que se va a traer desde la API, debe ser de tipo null
let post = null;

//Consumiendo API con Fetch ("promesas")
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6") //me trae la información del usuario 6, esto con la diagonal y el 6
        .then(response => response.json())
        .then(response => {
            post = response; //guardo los datos de response en la variable tipo null para que modifique el dato
            //Mandamos a llamar la variable desde la función( perooo esa no ha hemos hecho, hay que hacerla)
            mostrarDatos(post);
        })
        .catch(error => console.error("Problemas!", error));
})

//función que me permita manipular la variable de tipo null
//Quiero traer name, username, email, phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos 
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //ponerlos en el html
    name.innerHTML = post.name;     //post porque ahi vive la información
    userName.innerHTML = post.username;  // username debe de hacer match con la API
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}


// > -Usando fetch para mostrar en navegador (MOSTRAR PRODUCTOS)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response

            //Función para definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("Cuidado!", error))
});

//Función para crear, agregar y mostra elementos desde el DOM

const mostrarProductos = (productos) => {
    //mando a llamar a las llaves de title, price, description, category, image desde la API
    productos.map((productos) => { //El metodo map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach().


        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripcion = document.createElement("p");
        const categoria = document.createElement("p");
        const separador = document.createElement("hr");

        //Enviar a HTML con innerHTML
        imagen.src = productos.image; //agrego de mi variable productos la imagen
        imagen.width = 200;
        titulo.innerHTML = productos.title;
        precio.innerHTML = productos.price;
        descripcion.innerHTML = productos.description;
        categoria.innerHTML = productos.category;

        //Mostrar en el navegador al agregarlos a su padre
        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })

}
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map


//-----------------------------------------------------------------------------------*/

//Método POST utilizando fetch
//el método post me permite crear un recurso 

//tenemos que establecer el método, el cuerpo, las claves nuevas, valores, headers

fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo POST
    method: "POST",
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente(userId, title, body)
    body: JSON.stringify({                                                              //books
        userId: 1986,                                                                   //userId
        title: "sueñan los androides con ovejas eléctricas",                            //book
        body: "Author: Phillipe L. Dick"                                                //author.value
    }),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
})//en estas llaves vive todo el cuerpo de mi respuesta  //Aquí termina el fetch
//Inicio de promesa
.then(response => response.json())
.then(response => {
    console.log(response)
})

//---------------------------------------------------------------------------------------------------------------------------
 /**Programación asíncrona (promise) */
 //Función flecha de tipo async-await


 //indico que es una función asincrona con la palabra reservada async, antes de los parámetros
 const getUser = async() =>{  
    //Para que se cumpla la promesa no utilizamos then, sino que utilizamos try. Para errores se sigue usando catch
    try{
        //Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa que qrecibe un setTimeout
       await new Promise(resolve => setTimeout(resolve, 3000)); //para ejecutar tres segundos después

        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();   //vamos a guardar lo que esta en response, per en formato json
        console.log(data);
    }
    catch(error){
        console.error("Error inexplicable")
    }
 }

 //Invocar función, por favor que no se nos olvide
 getUser();

 //-------------------------------------------------------------------------------------------------------------------

 /* localStorage*/
 //Nos permite crear, modificar, eliminar, guardar objetos de javascript de manera local (en el equipo)

 //crear un ibjeto de JS con sus llaves y valores
 const user = [
 {
    id: 1,
    nombre: "Alejandra",
    apellido: "Flores",
    email: "lizbethale251098@gmail.com",
    posicion: "alumna",
    empresa: "Generation"

 },
 
 {
    id: 2,
    nombre: "Lizbeth",
    apellido: "Cerón",
    email: "lizbethale2510@gmail.com",
    posicion: "alumna",
    empresa: "Generation"
 }
]

 //convertir el objeto creado a notación JSON y almacenarlo en el local storage
 localStorage.setItem("usuario", JSON.stringify(user));

 //Traer el objeto desde el localStorage
 const users = JSON.parse(localStorage.getItem("usuario"));
 console.log(users);
 console.log(`${users [1].nombre} con posicion ${users[1].posicion}, trabaja en ${users [1].empresa}`); //ouput: lizbetj con posicion alumna, trabaja en Generation

 //sesionStorage ---> solo mientras la sesion este abierta va a vivir
 //con localStorage para poder registrar información a partir de un formulario, cuando quieras iniciar sesión jalarlo del localStorage y poder hacerlo 