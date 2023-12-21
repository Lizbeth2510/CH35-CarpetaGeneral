/*
Manipulacion del DOM.
-Leer y traer nodos del árbol del DOM.
    document.getElementByID (trae elementos por id)
    document.getElementsByClassName (trae elementos por clase)
    document.getElementsByTagName (trae elementos por Etiqueta)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerHTML); //Traer un string (texto que vive en mi id)

// document.getElementsByClassName
const titulos = document.getElementsByClassName ("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la clase
console.log(typeof titulos); //muestra que es un objeto porque es una coleccionde arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);


/*Métodos para llamar elementos mediante selectores de CSS

SE usa para procesos más especificos y la sintaxis querySelector

-document.querySelector("selector); //#, ., <>
-document.querySelectorAll(). Selecciona los elementos que se especifiquen.
Siempre van a traer con el selector indicado
*/

//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title"); //solo devuelve el primer elemento de esa clase
console.log(queryClass);

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS

titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento 
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de manipulación del DOM. CH35";
titulo2.style.color = "#F23D3D";

/*
Métodos para crear y agregar en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo".   
    -Crear nodos
        *document.createElement("elemento") --> Crea elementos a partir de etiquetas
        *document.crateTextNode ("text") ---> crea texto dentro de las etiquetas.
*/

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado.
        *parentElement.appendChild(const);
        *parentElement.append(const);
        *parentElement.insertBefore(constant);
        *parentElement.insertAdjacentElement(const);
        Utilizaremos mayormente appedChild
*/

//objeto en el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//Crear el texto que vivira en el nodo 1 
const textNodo1 = document.createTextNode ("Imagen agregada desde el DOM");
//Inserto el texto en el NODO 1
nodo1.appendChild(textNodo1);
//Insertar NODO 1 en el elemento padre 
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#EBBE05";

//Agregando imagen
//interto el imgNodo en el elemento pare para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src ="./src/Assets/cat.jpg";
imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "300";

/**
 Otra forma de leer y modificar nodos
 document.innnerHTML (leer)
 node.innerHTML (escribir sobre el nodo)
 */

 const elementoOuter = titulo2.outerHTML;
 console.log(elementoOuter);

 titulo2.innerHTML = "Manipulación del DOM. CH35";


