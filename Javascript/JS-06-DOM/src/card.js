/*
Para manipular la informaciín de un usurio, necesito crear un perfil mediante un objeto de JS
*/

const user = {
    username: 'Lizbethcf98',
    age: 25,
    email: 'lizbethale251098',
    favfilms: ['HomeTown cha cha cha', 'Our beloved summer', 'Its ok to not be ok ']
}
//Crear una función que me permita ingresar el objeto del perfil en el nodo padre
//textContet me permite agregar texto a un nodo que ya existe
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("edad").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*Mostrando elementos de lista en forma de lista.
    Para mostra el array en forma de lista utilizaremos un ciclo forEach, para recorrer todo el array y traer cada elemento de la lista */
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach( film =>{
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "black";
    
 
    
    //Mostrando elementos de lista en forma de fila (No nos sirve porque definimos una lsta desordenada y no un parrafo)
   // document.getElementById("fav-films").textContent = user.favfilms;
}

//Invocando la función
createUser(user);

/**
 * Eventes para actualizar el username mediante el input y el botón
 */
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");


profileBtn.addEventListener("click", () =>{
    userName.textContent= inputName.value;
})

//Para actualizar la edad o el email hay que hacer un input para cada uno campo
//Expresiones regulares en formularios 



