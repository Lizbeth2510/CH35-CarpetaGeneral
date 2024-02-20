let temperatura = prompt("Ingrese la temperatura en grados Celsius");

//para validar que sea un numero valido 
 while (isNaN(temperatura)) {
    alert("Por favor, ingrese un número válido para la temperatura.");
    temperatura = prompt("Ingrese la temperatura en grados Celsius:");
}

//para convertir a number
temperatura = parseFloat(temperatura);

let celsiusFharenheit = ((temperatura * 9/5) + 32);
let celsiusKelvin=(temperatura+273.15);

console.log("La temperatura conrrespondiente a grados Fharenheit es "+celsiusFharenheit+" grados");
console.log("La temeratura correspondiente a grados Kelvin es "+celsiusKelvin+" grados");