const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamos a declarar una función que genere un numero random tomando un parámetro numeber

const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//Crar evento de clic para que cuando presione un botón pase algo
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.background = randomColor;

});

//--Botón de reset
botonReset.addEventListener("click", () =>{
    document.body.style.background = colorFondo;
})
