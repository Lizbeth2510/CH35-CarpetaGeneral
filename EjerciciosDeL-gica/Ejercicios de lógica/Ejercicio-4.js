//Guarda el prompt en  una variable
let numero = prompt("Introduzca un número");

//ciclo while para introducir un numero válido
while (isNaN(numero)) {
    alert("Por favor, ingrese un número válido para la temperatura.");
    numero = prompt("Introduzca un número");
}

//convertir a number el numero introducido
numero = parseFloat(numero);

//inicalizando los dos primeros términos para poder inicializar el ciclo 

let fibonacci1=0;
let fibonacci2=1;

console.log(fibonacci1);
console.log(fibonacci2);

//ciclo for en donde i empieza en 2 porque ya hemos generado los dos primeros terminos
for(let i = 2; i < numero; i++){
    let numSiguiente = fibonacci1+fibonacci2;
    console.log(numSiguiente);

    //actualizando las variables y se vayan tomando los valores más recientes de las variables
    fibonacci1= fibonacci2;
    fibonacci2=numSiguiente;
}