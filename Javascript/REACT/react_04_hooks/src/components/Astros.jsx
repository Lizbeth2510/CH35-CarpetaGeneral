import './Astros.css'
import { useEffect, useState } from 'react'
import Astro from './Astro'





//Mandar a llamr la API, utilizando Hooks (useState y useEfect)
//Función para agregar la información de la API Astros dentro de las cards
const Astros = () => {
    //Definir la URL de la API
    const ASTROS_URL ='http://api.open-notify.org/astros.json'

    //Implementado useState
    const [astros, setAstros]= useState([]);

    //Implementando useEffect
useEffect(() =>{
    fetchAstros(); //Hoisting de una función que voy a definir
}, []);

//Crear función fetch para conectarse a la API
const fetchAstros = () => {
    fetch(ASTROS_URL)
    .then(response => response.json())
    .then(data => setAstros(data.people))//para que la información viva dentro del componente atualizado, traigo setAstros y le paso los datos de `people`de la API
    .catch(error => console.error(error))
}
console.log(astros); //vive en consola del navegador

    //Enviar la información de la API a las cards utilizando .map sobre el array `astros`

    return(
        <>
        {
            //`astro` funcional como los elementos que se recorren en el array `astros` y .map recibe dichos elementos, más un index y una función de tipo callback
            astros.map((astro, index) => (
                //Exporto el componente Astro
                //Crear una llave única para cada elemento del array (key)
                //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                <Astro key={index} {...astro} />
                
            ))
        }
        </>
    )
}



export default Astros;

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://www.freecodecamp.org/espanol/news/desestructuracion-de-arreglos-y-objetos-en-javascript/
//