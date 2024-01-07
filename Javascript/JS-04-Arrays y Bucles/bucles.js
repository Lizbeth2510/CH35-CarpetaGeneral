console.log("Ahora estamos hablando de bucles");
/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*===Cliclo for===
Un cliclo for se repite hasta que la condición se evalue como false. Crea tres expresionales opcionales
*Su sintaxis  es la soguiente:
    *for (expresioninicial; espresioncondicional; expresionactualizacion){
            *Codigo a ejecutar en cada iteracion del bucle
    }

    1. Inicialización: se debe de inicializar con una variable que será evaluada en la expresión a comparar. 
    2.Condición: es una expresion que debe cumplir con la variable inicial (true), si no se cumple (false) el bucle termina.
    3. Pasos a realizar: son los intervalos que cambiaron la variable inical mientras ésta sea true.
*/

//EJEMPLOS:


 //  1. Crea un programa para saber cuántos boletos vendemos para una rifa 

for (let boleto = 1; boleto <=25; boleto++){
    console.log(`Boleto # ${boleto}`);
}

 //Este es un ciclo for que se va aumentando de 1 en 1, en este ejemplo los boletos vendidos es de menos o igual a 25. Si queremos que vaya de 5 en cinco agregamos este elemento ----> i+=5 en vez de i++

 
//   2. Programa vender bolos con una variable global 
let aguinaldo = 1;
for(aguinaldo; aguinaldo <=20; aguinaldo++){
console.log(`Vendi ${aguinaldo} aguinaldos`);
}

//En comparación con el el ejemplo anterior la variable aguinaldo esta fuera del ciclo for 



// 3. Cuenta regresiva
let cuentaregresiva = 3;
for(cuentaregresiva; cuentaregresiva >= 0; cuentaregresiva--){
    console.log(`Quedan ${cuentaregresiva} para terminar el año, khe moziooon!`);
}
//Nuestra cuenta regresiva también va de uno en uno 



/* 4. Recorrer arrays con el ciclo for 
*Debemos usar incides del arreglo para poder usar el bucle, en indices desdeel 0 hasta n y usaremos la propiedad length*/

const ch35 = ["Rodrigo", "Diego", "Ania", "Rey", "Arturo", "Eunice"];

for(let i = 0; i < ch35.length; i++){
console.log(ch35[i]);
}

/* 5. Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

 const fruits = ("Mandarinas","Fresas", "Naranjas", "Peras","Uvas", "Guayabas", "Manzanas");
 
 for (fruit of frutas) {
   console.log(fruit);
 }



// 6. Sumar numero de 1 al 20
let suma = 0;
for (let i =1; i<=20; i++){
    suma += i;
}
console.log(suma);


// 7. Tabla del 5
const tabla = 5;
for( let i = 1; i<= 10; i++){
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}

/* *Ciclo While
    *Recorrer un bloque de código siempre que una condición especifica sea verdadera.
   * Sirve para realizar una tarea repetitiva mientras una condición sea verdad
*/

let productos = 5;
while (productos > 0){
    console.log(productos + " productos vendidos");
    productos--;
}


//*imprimir numeros
let num1 =0;
 while(num1 < 10){
     console.log("El número es  " + num1); 
    num1 ++
 }