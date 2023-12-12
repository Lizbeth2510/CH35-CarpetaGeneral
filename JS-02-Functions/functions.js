/*
Funciones. Son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias
Algunas funciones reciben parámetros y otras reciben parámetos
Nota: Las funciones "normales" se llaman funciones por declaración
*/

//Función que permita saludad 
function saludar() {
    console.log("Hola desde una función")
}
//Ejecutar la función con el nombre de la función y los parametros 
saludar();

//Hosting. Caracteristica dr una funcion que nos permite invocarla desde antes de su inicializacion, es decir, se puede invocar antes del bloque de código o despues.}
//Se invoca en la linea 11 y 18
function saludar(){
    console.log("Hola invocando la función con hoisting")
}
saludar();

//Funciones que retornan algo.Para que una funcion retorne algo (un String, una operación, una variable, etc.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return
function greeting(){
    return "Hola desde una función que retorna";
}
console.log(greeting());

//Funcion que retorna y recibe parámetros
function sumar(x,y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Calcula er el cuadrado de un numero
function calcCuadrado(numero){
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow Function). Es una manera de declarar una función por declaración, sintetizando código y haciéndolo más legible.
//Función flecha para calcular el cubo de un número 
const calcCubo = (number) =>{
    return number * number * number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anónimas. Son un tipo de funciones que se declaran sin nombre de funcion y se alojan  en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos
//Las funciones anónimas no permiten el hoisting (no se puede invocar antes de inicializarlas)
const mensaje = function (){
    return "Este es un mensaje desde una función anónima"
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la funcion A pueda ejecutar esa función de forma genérica desde su código
const functionB = function (){
    console.log("Ejecutando función B");
}
//Función A que mandará a llamar a la función B
const functionA = function (callback){
    callback();
}
functionA(functionB);
//async away