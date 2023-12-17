/*
Operador

Es un signo que especpifica qué debe efectuar una determinada operación
*/

/*Operadores aritmeticos (+,-,*,/, %,++,--)
 *Operadores de asignación (=)
 *Operadores lógicos (&&,||, !)
 *Operadores de comparaión (==, ===, !=, >, <, >=, <=)
 *Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
 */

/*Operadores aritméticos:

(+): Suma, se utiliza para sumar dos numeros
(-): Resta, se utiliza para restar un número de otros
(*), multiplicación, se utiliza para multiplicar dos numeros
(/): División, se utiliza para dividir un número entre otro
(%): residuo, nos sirve para comprobar si un número es par o impar, es decir, nos da el resto en una división p.e 10 % 3 =1
(++): incremento, aumenta de uno en uno la cantidad o número
(--): decremento, disminuye de uno en uno la cantidad o el número 
*/

let numero1 = 10;
let numero2 = 8;

//Suma
suma = numero1 + numero2;
console.log(suma);

//Resta
resta =numero1 - numero2;
console.log(resta);

//Multiplicación
multitplicacion = numero1 * numero2;
console.log(multitplicacion);

//División
division = numero1 / numero2;
console.log(division);

//Residuo
residuo = numero1 % numero2
console.log(residuo);

//incremento
incremento = numero1;
incremento ++;
console.log(incremento);

//Decremento
decremento = numero2;
decremento --;
console.log(decremento);

//Ejemplo aplicable

let precioReal = 1000
let porcentajeDescuento = 20

let cantidadDescuento = (precioReal * porcentajeDescuento)/100
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio real: $" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento: $" + precioConDescuento);

//Podemos utilizar este ejemplo en los cupones de descuento en nuestra ecommerce

/*Operadores de asignación
 (=) : Este operador no compara, lo que hace es asignar*/

//  let frutas = manzanas;

 /*Operadores de comparación

 (==) : Igualdad, compara si nuestros valores son iguales*/

 let numero3 = 10;
 let texto = "10";

 console.log(numero3 == texto);
 /* (===): Igualdad escricta, compara si los valores son iguales y el tipo de dato*/

 let numero4 = 10;
 let texto1 = "10";

 console.log(numero4 === texto);

 /* (!=): Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

 let precioCaja = "1499";
 let precioMax = 1500;

 if (precioCaja != precioMax){
    console.log("El precio del producto no es igual al precio máximo")
 }else{
    console.log("El precio del producto es igual al precio máximo permitido")
 }


 //Con conversion a number
 let numero5 = 10;
 let numero6 = "10";
  if (numero5 != Number(numero6)){
    console.log("son diferentes");

  } else {
    console.log("Los valores son iguales");
  }



 /*(!==) Desigualdad estricta  este operador verifica si dos valores no son iguales, pero a diferencia de (!==) en este caso ambos valores deben tener el mismo tipo y valor*/

 let numero7 = 41;
 let numero8 = "50"

 if(numero7 !== numero8){
    console.log("Los valores son diferentes");
 }else{
    console.log("Los valores son iguales");
 }
 
 
/* En igualdad: ==, y desigualdad: !=
En igualdad estricta: ===, y desigualdad estricta: !==  */

// (>): Mayor que, básicamente nos indica si un valor es mayor que otro.

let puntuacionFinal = 58;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);

//(<): Menor que, nos indica si un valor es menor que otro

let anios = 20
let edadLimite = 30;

console.log(anios < edadLimite);


//(>=): Mayor o igual que, nos dice si un valor es mayor o igual a otro

let edad  = 18;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(<=): Menor o igual que, nos indica si un valor es menor o igual a otro. 

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);


// EJERCICIOS

/*Ejercicio 1:
 Un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro*/

//Solicitar un número al usuario

/*let solicitarNumero1 = prompt("Ingrese su primer número");

let solicitarNumero2 = prompt("Ingrese su segundo número");
if(solicitarNumero1 == solicitarNumero2){
    console.log("Sus numeros son iguales")
}else if (solicitarNumero1>solicitarNumero2){
    console.log("El primer numero es mayor que el segundo")
}else{
    console.log("El primer numero es menor que el segundo")
}*/

 /*Ejercicio 2:
  un programa que pida al usuarios dos palabras y determine si son iguales o no*/

 /* let solicitarPalabra1 = prompt("¿Cuál es la primera palabra que desea ingresar?")
   let solicitarPalabra2 = prompt("¿Cuál es la segunda palabra que desea ingresar?")

   if(solicitarNumero1 == solicitarNumero2){
    console.log("Las palabras son iguales");
   }else{
     console.log("Las palabras no son iguales")
  };*/

//-------------------------------------------------------------------------------

  /*Operadores lógicos

*(&&) AND: se utilizan cuando las dos condiciones deben cumplirse*/
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;
if(mayoriaDeEdad >= 18 && tieneIdentificacion){
    console.log("Puedes rentar el salón");
}else{
    console.log("No lo puedes renta");
}

// (||): OR, se utiliza cuando se debe cumplir una u otra condición 

let esPrime = false;
let descuento = true;

if(esPrime || descuento){
    console.log("Califica para descuento");
}else{
    console.log("No califica para descuento");
}


// (!): NOT, se utiliza para negar el valor de una condición

let esDiaLibre = false;

if(! esDiaLibre){
    console.log("Se trabaja");
}else{
    console.log("Te toca descansar");
}

//-------------------------------------------------------------------------------

  //*Operadores de cadena

  //toLowerCase: hace que nuestra cadena de texto (string) se vuelva minúscula

  let mensajeUsuario = "Bienvenideeee a la tierreee!"
  let cambioMinuscula = mensajeUsuario.toLowerCase();

  console.log(cambioMinuscula);


  //toUpperCase: hace que el cambio de nuestro string sea a mayúsculas:

  let mensajeUsuario1 = "No me grites!!! :( "
  let cambioMayuscula = mensajeUsuario1.toUpperCase();

  console.log(cambioMayuscula);

  //trim quila los espacios 
  
  let aviso = "           CH35 Rifa          ";
  let sinEspacios = aviso.trim();

  console.log(sinEspacios);  

 // toString: convierte un tipo de dato number a string

 let numero10 = 31;
 let cadenas = numero10.toString();
 
 console.log(cadenas);
 console.log(typeof(cadenas));
 
 //concat 

 let nombre = "Lizbeth";
 let apellido = "Cerón";
 let SegApellido = "Flores";
 
 let nombreCompleto = nombre.concat(" ", apellido, " ", SegApellido);
 console.log(nombreCompleto);

 //-------------------------------------------------------------------------------

  /*Expresiones 
  
*Expresion aritmetica :

    let operacion = 14 + 24 * 12; combina la suma con la multiplicación


  *Expresion de cadena: 

    let notificacion = "Casi," + "Anio nuevo"; Expresion concatenando
  
  
  *Expresión lógica:

    let esMayorDeEdad = (23 > 18) && (23 < 65); tienen operadores lógicos y de comparación

  *Expresión de asignación:

    let frasco = chocolates; asigna el valor a la variable


  */

 //-------------------------------------------------------------------------------

    /*Ejercicio: Hacer una función para hacer Hotcakes, utilizando operadores lógicos y de comparación para saber si tengo  cantidad necesaria y puedo hacerlos.

        Ingredientes para hacer Hotcakes (12 porciones):
        2 tazas (500gr) de Harina para Hot Cakes 
        1 1/2 (375gr) tazas de leche 
        2 huevos 
        2 cucharadas de mantequilla derretida  */


    // Cantidad que tengo de los ingredientes:
    let cantidadHuevos = 3;
    let cantidadHarina = 300;
    let cantidadLeche = 300;
    let cantidadMantequilla = 60;


    function verificarIngredientes(huevos, harina, leche, mantequilla) {
        if (huevos >= 2 && harina >= 500 && leche >= 375 && mantequilla >=2) {
            return "Tienes suficientes ingredientes para hacer hotcakes.";
        } else {
            return "No tienes la cantidad suficiente de ingredientes.";
        }
    }
    
    let resultado = verificarIngredientes(cantidadHuevos, cantidadHarina, cantidadLeche, cantidadMantequilla);
    console.log(resultado);