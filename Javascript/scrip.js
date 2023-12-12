



//Comentarios de una sola línea

/*Comentarios
 multilinea*/


 //alert("Hola mundo");

//  console.log("Este es mi mensaje para mi consola");

// var nombre = prompt ("Ingresa tu nombre");
// alert("Hola, " + nombre + " Bienvenido a la CH35");

// var numero1 = parseInt (prompt("Ingresa el primer número:" ));
// var numero2 = parseInt (prompt("Ingresa el segundo número:"));

// console.log ("Suma:" + (numero1 + numero2));
// console.log ("Resta:" + (numero1 - numero2));
// console.log ("Multiplicación:" + (numero1 * numero2));38

// console.log ("División:" + (numero1 / numero2));1

// var edad = prompt("Ingresa tu edad:");

// if (edad >= 18) {
//     alert("Bienvenido a Somos Poker. ¡Disfruta de la página aun eres joven!");
// } else {
//     alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Aun eres un bebé.");
// }

// var edad = parseInt (prompt("¿Cuántas primaveras?"));
// if (edad>=50){
//   alert("Lo siento! Estas por caducar"); 
// }
  
// else if (edad>=35){
//     alert("Ya casi eres un anciano");
// }
  
// else if (edad>=18){
// alert("Ya dejaste de ser un bebé");
// }
// else {
// alert("sorry! todavía necesitas cuidado de mamá"); 
// }





//TIPOS DE DATOS Y VARIABLES

/*scope es el alcance de nuestras variables
var, let, const: La diferencia es el alcance
    var: tiene un alcance global
    let: tiene un alcance local
    const: se mantiene sin ningún cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/


// Todas nuestras variables deben de ser declaradas con nombres especificos y claros, sin espacioss, no deben iniciar con numeros

//  let nombre = "Daniel";
//  let invitadosExtras = 2;
//  let esMayorEdad = true;
//  let edad = 24;
//  let invitadoEspecial = null;
//  let horaDeSalida = undefined;

// console.log(nombre); //lo imprime en la ocnsola
 //document.write(nombre) //lo imprime en el documento



/*Encasillamiento o tipado
-Nos es util para el mantenimiento del código ya que lo hace más legible y fácil de entender 
-Nos ayuda a la prevención de errores para redecir la probabilidad de los mismos.
-Mejora wl rendimiento de nuestro programa*/

// let numero = 15;
// let texto = "Hola!";

//con encasillamiento

// let numeroEncasillamiento = Number = 15;
// let textoEncasillamienot = String = "Hola!"




/*typeof parabra reservada para saber qué tipo de dato tenemos 

console.log(typeof (nombre));



//Conversión de string a number

let funcionNumber = console.log (typeof Number (nombre)); 
metodoParseInt = console.log(typeof parseInt (nombre));
metodoPaseFoat = console.log(typeof parseFloat (nombre));

Ejemplo:
/*var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));

typeof solo devuelve el tipo de variable que estas utilizando

console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));

Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string

console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));*/


/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio*/




/*Conversión de number a string
console.log(typeof String (edad));
console.log(typeof edad.toString());*/


/*Conversion de un Boolean a number

let numero = Number(esMayorEdad);

console.log(typeof(numero));*/



/*Conversion de un boolean a string

let texto = String(esMayorEdad);

console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); */



/*Conversion de un true a un false
let negación = !esMayorEdad;

console.log(negación);*/


//Concatenar es basicamente unir strings
// let saludo = "Hola humaniess! <br>";
// let frase = "El futuro es hoy";


// texto = saludo + frase

// document.write(texto);
// console.log(texto);




/*console.log() ----> 
-Nos permite visualizae en consola lo que nosotros queramos ver 
-Nos permite vializar en consola del navegador el código de JS

console.warn(); muestra un mensaje de advertencia 
cpnsole.error(); Muestra un mensaje de error 
console.table();*/

let firstName;
firstName = 'Daniel'
let lastName = 'Maldonado';
console.log(firstName + lastName);

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);


/*ECMAScript 6 (ES6) Interpolacion de cadenas
> -backticks (AltGr +})
> -Para variables las invocamos ${variable}
> - Texto para string*/

let age = 37;
console.log(`Mi nombre es ${firstName},
    mi apellido es ${lastName}
    y tengo ${age}años`);

    //console.warn()
    console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);
    //console.error()
    console.error(`Satus 404: Failed`);


    /*Array. 
    - Se traduce como matriz o arreglo. Esun tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
    - Los arrays se pueden manipular mediante métodos especificos.
    - Los elementos de una array se contabilizan como índices, por los cual, el primer elemento del array posee el indice 0. 
    - Un array posee una n cantidad de elementos
    -Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vivie un elemento con un tipo de dato*/

    let arreglo1 = []; //Array vacio
    console.log(`Array vacío ${arreglo1}`);
    //Los elelentos de una array se separan medinate comas 
    let cars = ["Volkswagen", "BMW", "Mazda", "kia" ]; //Array de String
    console.log(cars);
    //Longitud e índice son diferentes. La longitud (length) es el múmero de elementos y el índice corresponde a cada elemento a partir del 0.

    console.log(typeof(cars));//Ouput: objects

    //Array de Numbers
    let salariesMx = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
    console.log(salariesMx.length);//Ouput: 12
    console.log(salariesMx);

    /*
    Objetos. Los objetos son tipos de datos en JS con una estructura definida que nos permite almacenar información mediainte llaves (claves) y valores.
    Su sintaxis es la siguiente: 
    const object {
    clave1: valor1 (dato),
    clave2: valor2
    }
    Los objetos pueden almacenar diferentes tipos de valores
    */
   const employee = {
    firstName:  "Lizbeth",
    lastName: "Cerón",
    age: 25,
    country: "México"
   }
   console.log(employee);

   //Mostrando mi array como table
   console.table(cars);
   //Mostrando mi objeto como tabla
   console.table(employee);
    
    