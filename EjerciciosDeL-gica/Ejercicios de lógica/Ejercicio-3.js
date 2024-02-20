let numero = prompt("Introduza un número");

//ciclo while para que el usuario introduzca un número válido 
while (isNaN(numero)){
    alert("Por favor, ingrese un número válido para la temperatura.");
    numero = prompt("Introduzca un número");
}

//para convertir a numeber el numero introducido por el usuario
numero=parseFloat(numero);

//ciclo for para iterar sobre cada numero e ir multiplicando  y agregando el valor a la variable factorial 
let factorial = 1;
for(let i = numero; i > 0; i--){
    factorial*=i;
}
console.log(factorial);



