// Prompts para introducir los números
let num1 = prompt("Introduce un número");
let num2 = prompt("Introduce otro numero");
let num3 = prompt("Introduce otro numero");

// Convierte los valores ingresados a números
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

// Verifica si los valores ingresados son números válidos
while(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingrese números válidos.");
    num1 = prompt("Introduce un número");
    num2 = prompt("Introduce otro numero");
    num3 = prompt("Introduce otro numero");
    }

    // Creando el array para introducir el método sort que ordena los números
    let arrayNumeros = [num1, num2, num3];

    // Metiendo el método sort en una variable
    let numerosOrdenados = arrayNumeros.sort(function (a, b) {
        return a - b;
    });

    console.log("Números ordenados de menor a mayor: " + numerosOrdenados);

    // Condicionales para mostrar si los números que introdujo el usuario son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números que ha introducido son iguales");
    } else if (num1 === num2) {
        console.log("El primer y segundo número introducidos son iguales");
    } else if (num2 === num3) {
        console.log("El segundo y tercer número introducidos son iguales");
    } else if (num1 === num3) {
        console.log("El primer y tercer número introducidos son iguales");
    }

