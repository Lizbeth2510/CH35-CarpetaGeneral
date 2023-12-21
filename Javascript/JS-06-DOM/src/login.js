const emailImput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");

//Regex: expresiones regulares. Determina patrones que se deben cumplir (ejemplo liverpool que se deben de cumplir los caracteres de la contraseña)
const emailREGEX = /^[\w.+\-]+@gmail\.com$/; //este es un patron

//Deshabilitar el botón
submitButton.disabled = true;

/**
 * Evento para input, el cual evaluará el patrón de expresión regular y en caso de cumplir con el patrón, habilitará el botón y podremos ser redirigidos a la pagina index.htm
 * 
 * el objetivo es habitidar el boton e ir a index.html
 *-Se obtienen el valor actual del campo email (imput) usando e.target.value y se almacena en una variable (text)
 - target es es una manera de traer el valor actual del objeto
 -se evalua la REGEX
 */

 emailImput.addEventListener("input", (e) => { //parametro de tipo evento (e)
    const text = e.target.value; //me permite obtener el valor, todo lo que escriba en el input se va a guardar en el text

    

    if (emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
 })