//Generando el numero secreto de manera aleatoria 
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Arreglo para almacenar los números introducidos por el usuario
let intentos = [];

// Bucle para que el usuario adivine el número
while (true) {
    let intento = prompt("Intenta adivinar el número secreto (entre 1 y 100):");

    // Validando si es un numero
    while (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
        intento = prompt("Intenta adivinar el número secreto (entre 1 y 100):");
    }

    //asegurandse de introducir un number
    intento = parseInt(intento);

    //agregando los numeros del intento a nuestro arrary intentos 
    intentos.push(intento);

    //condicional para la respuesta del numero introucido
    if (intento == numeroSecreto) {
        console.log("Felicidades, adivinaste el número secreto.");
        console.log("Lista de números introducidos: " + intentos.join(', '));
        break;
    } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}
