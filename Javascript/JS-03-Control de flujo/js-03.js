 console.log("Hola CH35")
 /*
 * Control de flujo y estructuras de contol:
 *
 *Las estructutas de control son un componente fundamenral  dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código podemos mencional las siguientes:
 *
 - Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
  - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
  - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
*/



/* 
 * Declaración de sentencia if-else:

 * Palabra reservada: if, para comenzar la declaración se coloca un parentesis () donde se debe colocar una expresion lógica (true| false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true),
 * * despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else. Para este ejemplo no es necesario colocar más expresiones dentro de un ()
 * Simplemente colocamos otras llaves{} para indicar  el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false)

  */

let n = 15;
if(n > 30){
    console.log(true);
} else{
console.log(false);
}



/*if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
 * */


//if anidados 
let edad = 66

if(edad < 18){
    console.log("Eres menor de edad, retirate"); 
} else if (edad >= 18 && edad < 65){
    console.log("Eres un un adulto joven, aún estás en edad ");
}else{
    console.log( "Eres un adulto mayor, cuida tu salud");
}
    

/*
*Sentencia Switch
*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación.
*Es bastante parecida a la de nuestra sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (participacion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso especifico, sera la secuencia que se va a ejecutar, dentro de la declaración. 

*Declaración:
/Se empieza por colocar la palabra reservada switch, seguido de esto, colocamos parentesis() donde se debe colocar el valor que va a indicar que sentencia/caso a ejecutar.
*Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
*Dentro de este bloque de código, falta colocar los casos para cada valor que se desee establecer según sea el valor indicado dentro del parentesis().
*Cada uno de estos casos se separa de la siguiente manera:

*case valor: instrucción a ejecutar si el valor empata con este caso.
*Después, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción 
*break.
*Cuando terminemos de establecer los casos que necesitemos declarar, dentro de nuestra sentencia, debemos colocar un valor por defecto. default.
** Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
* default : mensaje no disponible.

*/

let dia = "miércoles";
switch (dia){
    case "lunes" :
        console.log ("Odio los lunes att: Garfield");
        break;
    case "martes" :
        console.log ("quién avienta cohetes los martes?");
        break;
    case "miércoles" :
        console.log ("Toca presentar proyecto, chaless :(");
        break;
    case "jueves" :
        console.log ("Juevebebes casi viernes");
        break;
    case "viernes" :
        console.log ("Viernes, pero a qué costo");
        break;
    case "sábado" :
        console.log ("Sabadrink y taquitees!");
        break;
    case "domingo" :
        console.log ("Domingo de misa a las 8 am, con la gracia de Dios");
        break;
        default :
        console.log ("Día desconocido");
        break;
    }

    /*
    *Operador ternario:


    *Expresion condicional if-else más simple y legible
    *Principalmente se usa para simplificar condiciones de una sola expresión
    *También puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible.}
    *Su declaración es la siguiente-:

    *palabra reservada var, let o const:
    *Se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un parentesis () , despues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no)la expresión.
    *Para separar el resultado true de false debemos agregar un caracter de : , del lado izquierdo se coloca la sentencia a ejecutar.
    *Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
    */

    //Ejemplo de operador ternario
    let verificacion = n > 20 ? "Si es mayor" : "No es mayor"
    console.log( verificacion)

    /*Cuando usar if-else o cuando usar switch?


    *if-else : cuando necesitemos tomar decisiones bajo condiciones más flexibles.
    *switch : cuando tenemos un conjunto fijo de valores para comparar una expresión
    */ 




//EJERCICIOS

// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edaSuficiente = 18
if(edaSuficiente>=18){
    console.log("Tienes edad suficiente para votar");
} else{
console.log("Lo siento! aún eres pequeño");
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */


function divisible7y8(numero){
    if (numero % 7 == 0 && numero % 8 == 0){
        console.log("Verdadero");
    }else{
        console.log("Falso")
    }
}
divisible7y8(56);
divisible7y8(7);
divisible7y8(8);
divisible7y8(0);
divisible7y8(224);
divisible7y8(73);

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

//Función que evalua si nuesttro numero es divisible entre 4 o 9
function divisible4o9 (numero){
    if(numero % 4 ==0 || numero % 9 ==0){
        return true;
    }else {
        return false;
    }
} 


//Función que nos da el número aleatorio del 1 al 1000

function numAleatorio (min, max){
    return Math.floor(Math.random() * (1000 + 1));
}

let resulnumAleatorio = numAleatorio();
console.log("Número aleatorio generado:", resulnumAleatorio);


//Evaluación del numero aleatorio que se genero para saber si es divisible entre 4 o 9
if (divisible4o9(resulnumAleatorio)){
    console.log("Verdadero");

    }else {
        console.log("Falso")
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let peliculas = "drama";
switch (peliculas){
    case "accion" :
        console.log("Recomendación: Rápidos y furiosos")
        break;
    case "drama" :
        console.log("Recomendación: Barbie");
        break;
    case "comedia" : 
        console.log("Recomendación: Una película de huevos");
        break;
    case "romance" :
        console.log("Recomendación:cCorazones malheridos");
        break;
    case "suspenso" :
        console.log("Recomendación: Hambre");
        break;
    case "terror" :
        console.log("Recomendación: La monja 1");
        break;
        default :
        console.log("Género no recomendado");
        break;
}


/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function operacionCajero (opcion){
    if (opcion ==1){
        console.log("Retirando dinero");
    }else if (opcion ==2){
        console.log("Haciendo tranferencia");
    }else if (opcion ==3){
        console.log("En proceso de depósito");
    }else if (opcion ==4){
        console.log("Realizando tu pago de servicio");
    }else{
        console.log("Opción inválida");
    }
    }

operacionCajero(1)
operacionCajero(2)
operacionCajero(3)
operacionCajero(4)
operacionCajero(5)


/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

let divisaAConvertir = "euros";
let pesosMx = 100;   
switch (divisaAConvertir){
    case "dolares":
        console.log (pesosMx * 0.058 + " dolares");
        break;
    case "euros" :
        console.log (pesosMx * 0.054 + " euros");
        break;
    case "yenes" :
        console.log (pesosMx * 8.41 + " yenes japoneses");
        break;
    case "libra esterlina" :
        console.log (pesosMx * 0.046 + " libras esterlinas");
        break;
    case "franco suizo" :
        console.log (pesosMx * 0.051 + "francos suizos");
        break;
        default :
        console.log ("Sin datos de divisa");
        break;}