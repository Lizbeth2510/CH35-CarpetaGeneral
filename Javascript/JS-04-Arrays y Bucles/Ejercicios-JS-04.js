/*
*EJERCICIOS:




*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/
console.log("Ejercicio de temperatura");
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

function celsiusToFahrenheit(numero){
    return numero * (9/5) +32
}

//para probar que funciones
//  let resultFahrenheit = celsiusToFahrenheit(25);
// console.log(resultFahrenheit);


//para el bucle
for (let index = 0; index<=6; index++){
    console.log(celsiusToFahrenheit(temperaturasCelsius[index]))
};



/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

console.log("Ejercicio de suma");
let suma = 0;
for (let i =1; i<=10; i++){
    suma += i;
}
console.log(suma);



/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/
//  console.log("Ejercicio de numeros primos");


// //*Un número primo siempre debe ser mayor o igual a 1 por eso:

// function siEsPrimo (numero){
//     if (numero <= 1){       //un múmero primo siempre debe ser >=1
//         return false;
//     }
//     for(let index = 2; index <= numero / 2; index++){ //Vamos a verificar si el num. es divisible por algún otro num. desde el 2 hasta su mitad
//         if(numero % index == 0){
//             return false;     //Si el residuo es cero, es divisible por otro numero y no es primo
//         }
//     }
//             return true;  //Si el residuo es diferente de ccero, no hay más divisores y es primo 
// }

// //*Para obtener el numero del usuario 

// let numeroUsuario = prompt("Introduce un número para saber si es primo o no lo es");

// //*Para verificar que el numero del usuario es primo
// if(siEsPrimo(numeroUsuario)){
//     console.log(numeroUsuario + " es un múmero primo");
// } else{
//     console.log(numeroUsuario + " no es un primo");
// }


/*
*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).*/

function numFibonacci(n){
    let terminosComienzo = [0, 1];

    for (let index = 2; index < n; index++) {
        let terminoFinal = terminosComienzo[index - 1] + terminosComienzo[index - 2];
        terminosComienzo.push(terminoFinal);
    }

    return terminosComienzo;
}

let primerosDiez = numFibonacci(10);
console.log("Los primeros 10 términos de la secuencia de Fibonacci son:");
console.log(primerosDiez);




//Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos
