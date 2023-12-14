/* 
*== Arrays ==

*Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.

* Los arrays se utilizan para almacenar y organizar datos de manera más eficiente
*/

//EJEMPLOS


//*Crear un Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

//*Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "arroz", "jugo", "chanwich"];
console.log(comida);

//Array mixto
const mixto = [
    "Pluma",
    88,
    true,
    false,
    { nombre: "Liz"},
    "Hola"
];
console.log(mixto);

//*Array vacío
const listaSuper = [];
console.log(listaSuper);
// * agregar elementos a mi array vacío

listaSuper[0] = "Queso";
listaSuper[1] = "Huevo";
listaSuper[2] = "Galletas"
listaSuper[3] = "Leche"
listaSuper[4] = "Pan tostado"
listaSuper[5] = "mermelada"
console.log(listaSuper);



//*Otra manera de crear Arrays
const frutas =  new Array("Mandarinas","Fresas", "Naranjas", "Peras","Uvas", "Guayabas", "Manzanas");

// Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array

console.log(frutas);


//Longitud de un Array
console.log(frutas.length);


//*Acceder a los elementos del Array, acorde a su índice
console.log(frutas[3]); //Peras
console.log(frutas[0]); //Mandarinas
console.log(frutas[7]); //Undefined


//Modificar un elemento del array por el índice
const cremeria = ["Jamón", "Queso panela", "Salchicha", "Queso cotija", "Queso Oaxaca", "Yogurt"];
console.log(cremeria);
cremeria[4] = "Quesillo";
cremeria[5] = "Danonino del grande";
console.log(cremeria);


//*Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");

//* Estados: Estado de México, Guadalajara, Yucatán,  Sonora, Oaxaca, CDMX


//*Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayudas, Tacos

const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];

 const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayudas", "Tortas de chilaquil"];

 const menu = [estados, platillos];

 console.log(menu [0][2]);
 console.log(menu [1][2])

 //En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

 console.log(`En ${menu[0][0]} se come ${menu[1][0]}`);
 console.log(`En ${menu[0][3]} se comen ${menu[1][3]}`);


 //Metodos de Arrays
 /*Metodo de cola (queue). Los métodos de la cola implican agregar elementos al final del array y eliminar elemento al inicio de array. Sigue el principio de FIFO (First-in-first-out) lo que significa que el primer elemento añadido es el primer elemento eliminado.
 *
 *
 * push
 * *shift
 * unshift
 


 * Médodo de pila (stack). Emplica agregar elementos al final de array y  eliminar elementos del final de array. Sigue el principio LIFO ( Last-in-first-out) que significa que el último elemento añanido es el primero en ser eliminado
 * 
 * 
 * push
 * pop
  
 */

 console.log("Métodos de Arrays");
 const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
 console.log(ch35);
 //*pop() Eliminar el ultimo elemento del array
 let popch35 = ch35.pop();
 console.log(popch35); //devuelve el dato eliminado
 console.log(ch35);//elimina el dato de la lista

 //*push () Agregar al final del array
 let pushch35 = ch35.push("Mony");
 console.log(ch35);

 //*shift() quitar primero de array
 let siftch35 = ch35.shift();
 console.log(ch35);

 //*unshift agregar al principio del array
 let unshift = ch35.unshift("Dany");
 console.log(ch35);

 //*Reverse () cambia el sentido del ordenamiento del Array
 let reversech35 = ch35.reverse();
 console.log(ch35);





//-------------------------------------------------------------------------------------------------------------------
//INVESTIGACIÓN : 

// *.sort(): Ordena los elementos del array bajo un criterio de ordenación alfabética.

console.log("Método sort")

 const names = ["Liliana", "Estrella", "Lizbeth", "Alejandra", "Constanza", "Rebecca", "Mafer", "Regina"];
 let sortNames = names.sort();
 console.log(sortNames);
 


/* .forEach() ---> (por cada uno): 

*El método forEach() en JavaScript --se utiliza para iterar sobre elementos de un array. Te permite ejecutar una función proporcionada una vez por cada elemento del array.--- 

*El método forEach() es útil cuando quieres realizar una operación en cada elemento de un array sin necesidad de crear un nuevo array, ya que no retorna ningún valor.

*/

console.log("Método forEach")


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(element) {
    console.log(element);
});



/*A la función callback se le pueden pasar varios parámetros opcionales:

Si se le pasa un primer parámetro, este será el elemento del array.
Si se le pasa un segundo parámetro, este será la posición en el array.
Si se le pasa un tercer parámetro, este será el array en cuestión.
Veamos un ejemplo:*/

const letters = ["a", "b", "c", "d"];

letters.forEach((element) => console.log(element));
// Devuelve 'a' / 'b' / 'c' / 'd'

letters.forEach((element, index) => console.log(element, index));
// Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3

letters.forEach((element, index, array) => console.log(array[0]));
// Devuelve 'a' / 'a' / 'a' / 'a'


/* *slice():  
*En JavaScript --se utiliza para crear una copia superficial (shallow copy) de una porción de un array existente.-- No modifica el array original, sino que devuelve una porción de ese array basándose en los índices que especifiques. 

sintaxis:
        array.slice(inicio, fin);

inicio: Índice del array donde comienza la extracción. Si no se especifica, se toma desde el principio del array (índice 0). Si es negativo, indica un índice desde el final del array.

fin (opcional): Índice (no incluido) donde finaliza la extracción. Si no se especifica, se extraen todos los elementos desde inicio hasta el final del array. Si es negativo, indica un índice desde el final del array.

*/

let articulosMaquillaje = ["Esponja", "Brochas", "Enchinador", "Espejo", "Mascarillas", "Sombras", "Primer", "Corrector", "lipstick"];


//Crear una copia completa del array
let copia = articulosMaquillaje.slice();
console.log(copia);

//Extraer solo una porción del array
let porcion = articulosMaquillaje.slice(2, 6);
console.log(porcion);

//Extraer elementos desde un índice negativo 
let porcionNegativa = articulosMaquillaje.slice(-8, -4);
console.log(porcionNegativa);



/* splice(): 

 * Se utiliza para modificar un array eliminando, reemplazando o agregando elementos en posiciones específicas. 

 * Sintaxis:
           array.splice(startIndex, deleteCount, item1, item2, ...); 

startIndex: Es el índice en el que comienza la modificación del array.

deleteCount (opcional): Número entero que indica la cantidad de elementos a eliminar desde startIndex.

item1, item2, ... (opcional): Elementos que se agregarán al array, comenzando desde startIndex.
 */

//eliminar elementos del array
let tipoRopa = ["Pantalones", "Blusa", "Camisa", "Bufanda", "Guantes", "Gorros", "Faldas", "Vestidos", "Sacos", "Trajes", "Playeras"];
console.log(tipoRopa);

let elimTipoRopa = tipoRopa.splice(1,5);   //-----> Elimina 5 elementos a partir del indice 1
console.log(tipoRopa);


//Remplaza elementos de array
let edades = [15, 18, 23, 25, 18, 29, 30, 32, 33, 34];
console.log(edades);

edades.splice(2, 3, 24, "cuarenta", "treinta") //----> elimina 3 elementos a partir del índice 2 y remplazalos por 24, "cuarenta" y "treinta"
console.log(edades);


//Agrega elementos al array

let generosPeliculas = ["Terror", "Ciencia Ficción", "Romanticas", "Comedia"]
console.log(generosPeliculas);

generosPeliculas.splice(1, 0, "Acción", "Aventura", "Drama", "Fantasía"); //----> No elimines nungún elemento del array, pero apartir del índice 1 agrega "Acción", "Aventura", "Drama", "Fantasía"
console.log(generosPeliculas);






/*indexOf: 
*Se utiliza para buscar la primera aparición de un elemento dentro de un array y devuelve el índice de esa aparición. Si el elemento no se encuentra en el array, devuelve -1

*Sintaxis:
        array.indexOf(elementoBuscar [, índiceInicio]);

*elementoBuscar: El elemento que se desea buscar en el array.

*índiceInicio (opcional): El índice a partir del cual se comenzará a buscar el elemento. Si se omite, la búsqueda comenzará desde el inicio del array.*/

//Buscar un elemento en un array 

let secuencia10 = [10, 20, 30, 40, 50];
let indice = secuencia10.indexOf(30);

console.log(indice); // Resultado: 2 (el número 30 está en el índice 2 del array)


//Bucar un elemento a partir de de un ínidce específico

let array = [10, 20, 30, 40, 30, 50];
let indiceDesde = array.indexOf(30, 3); // Buscar el número 30 a partir del índice 3

console.log(indiceDesde); // Resultado: 4 (el número 30 está en el índice 4 del array, después del índice 3)










 /**
  *Investigar:


  *sort
  *forEach
  *slice
  *splice
  *indexOf
  */