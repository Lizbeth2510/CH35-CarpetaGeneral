/* Paradigmas de programación

Programación impertiva: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

Programación basada en eventos: se basa en la gestión y respuesta de eventos (click, descargar, scroll, etc.)

Programación declarativa: explicar lo que queremos obtener.

Programación orientada a objetos: nos ayuda a resolver problemas y cómo lo va a hacer. Toma a cierta información o estructura del mundo real (objetos),  la traduce en código para explicar ciertas cosas, como sus características (propiedades o atribitos) y sus comportamientos o acciones (métodos).

*/

/* 
Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias (materializar, hacerlo presente) de este tipo de objeto

A partir de mi clase puedo crear multiples objetos, una clase es como un molde que crea objetos, a pesar de que los objetos vienen del mismo molde van a ser diferentes*/

//EJEMPLO

//dentro de esta clase las personas van a tener nombre, apellido, edad, ...etc. Dentro de esta clase persona va a haber multiples personas, pero aunque tuvieran algunos atributos iguales  no van ser iguales totalmente porque ocupan un lugar distinto en la memoria de nuestro programa.
class persona { 
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//La clase o plantilla por si sola no va a servir de nada, solo es un concepto. Cuando creamos un objeto, ya tienen existencia real porque ocupa una memoria y se puede utilizar dentro del programa. 

//Objetos 
/*Para materializar el objeto es necesario definir un --contructor que tomará los atributos-- 
----------------|clase/ plantilla /molde|------ |constrctor|------------ |Objeto|-------------

Clases = molde; Objeto = gomita; Constructor = chefsitx; Atributos = ingredientes; Métodos = comportamientos .
*/

constructor(nombre, apellido, edad, email, telefono){ //le estamos dando atributos al constructor para inicializar el objeto
    this.nombre = nombre;  // this" esto vamos a utilizar, este atributo" /(.) lo que vamos a querer
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}


 //Métodos

comer(){
    console.log("Bon apetit");
}//método comer

bailar(){
    console.log("Dale hasta el piso!");
}//método bailar

cantar(){
    console.log("Cantas bien las rancheras");
}//método cantar

cocinar(){
    console.log("Excelente cocinerx")
}
jugar(){
    console.log("Eres un muy mal jugador");
}


mostrarInfo(){
    console.log("Nombre: ", this.nombre); //con la plabra this nos dice "quiero que manipules estos atributos"
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Teléfono: ", this.telefono);
   
}

}


//instanciar
//Ya estamos instanciando nuestro objeto 
// let (variable nueva) = new (class) ((parametros que establecimos))
let usuario1 = new persona ("Lizbeth", "Cerón", 25, "lizbethale251098@gmail.com", "5556487535");  
let usuario2 = new persona ("Alejandra", "Flores", 25, "lizbethale2510@gmail.com", "5547946535");
let usuario3 = new persona ("Sandra", "Martínez", 30, "sandra.mtz@gmail.com", "5516452845");
let usuario4 = new persona ("Héctor", "Flores", 26, "hector_fhrz0@gmail.com", "5558974135");
let usuario5 = new persona ("María", "Estrada", 30, "mra_strd@gmail.com", "5585347951");
let usuario6 = new persona ("Rodolfe", "Morales",24, "rdolf.mrls@gmail.com", "558479265");
 
console.log(usuario1); //imprime toda la información completa de mi objeto
console.log(usuario4.email); //imprime un atributo en específico del objeto, usuario 4
console.log("El email de los usuarios son los siguientes: " + usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email, usuario6.email);


usuario4.comer(); //Invocar el método
usuario1.cantar();
usuario5.cocinar();
usuario2.jugar();
usuario6.bailar();

usuario1.mostrarInfo(); //nos permite imprimir nuestro objeto con sus atributos (la información del usuario 1 )en el formato de "mostrarInfo"
console.log(usuario3.telefono, usuario5.apellido);

//clase nos sirve como modelo para crear una plantilla y el objeto es una entidad que tiene  atributos concretos y especificos

//las clases nos ayudan a tener a nuestros objetos separados, pero que contienen la misma clase. 


//--------------------------------------------------------------
/*Pilares de la programación orientada a objetos: 

*Herencia
*Polimorfismo
*Encapsulamiento
*Abstracción

//las subclases se asignan por la jerarquía,la clase principal siempre va arriba, debe tener atributos super específicos 
*/

// ***HERENCIA: nos permite a heredar a clases inferiores para poder optimizar el programa 

//"La herencia permite que una clase (llamada clase derivada o subclase) herede atributos y métodos de otra clase (llamada clase base o superclase). Esto fomenta la reutilización de código y facilita la creación de nuevas clases basadas en las existentes, extendiendo su funcionalidad."



class arrendador extends persona{ //es una subclase ( nuestra clase principal es class persona)  //extends es una extension para saber de donde viene, nos dice: arrendador si eres una clase, pero  eres una subclase que viene de clase persona 
    capacidad = 0
    costo = 0;
    nombreLugar = "";
//vamos a crear nuestro constructor 
constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar){
    super(nombre, apellido, edad, email, telefono)//utilizamos la palabra reservada super, le estoy diciendo que tome de la clase superior ciertos atributos 
    this.capacidad = capacidad;
    this.costo = costo;
    this.nombreLugar = nombreLugar;
}
    //método
    mostrarInfo(){
        console.log("capacidad", this.capacidad);
        console.log("costo", this.costo);
        console.log("nombre del lugar", this.nombreLugar);
    }
}

//Vamos a instanciar
let arrendador1 = new arrendador ("Lizbeth", "Cerón", 25, "lizbethale251098@gmail.com", "5556487535", 100, 50000, "salón DevDelux")

console.log(arrendador1);

console.log(arrendador1.costo);

console.log(arrendador1.nombreLugar);

arrendador1.mostrarInfo();



/*class arrendadorGuadalajara extends arrendadorGuadalajara{

 }
 nuesra extension ya sabe que existe una clase padre, pero que viene de clase arrendador, solo lo dejamos en que es una subclase */


 //OTRO EJEMPLO 

/* class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();
  
  */

  /*POLIMORFISMO: Tener objetos de diferentes tipos que pueden ser manipulados en conjunto

  ***NOTA: el polimorfismo nos da capacidad de cambiar a nuestros objetos aunque no estén en nuestra misma clase
  
  "El polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje o método de manera diferente. Esto se logra mediante el uso de métodos con el mismo nombre pero con implementaciones distintas en las clases relacionadas."

//clase
  class producto {
    marca = "";
    precio= 0;

//constructor
constructor(marca, precio){
    this.marca = marca;
    this.precio = precio;
}

//método
    mostrarDescripción(){
        console.log("Marca ");
        console.log("Precio");
    }


  }

//instanciar
let producto1 = new producto ("cerave", 150);

//Por ejemplo si queremos hacer un cambio en los limpiadores faciales, podemos acceder a la clase limpiadores faciales en barra, en liquido y en espuma

/**
Ejemplo de Polimorfismo:

class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
gato.sonido(); //el mismo método sonido(), para gato muestra "miau" 

 */




/* ENCAPSULAMIENTO: oculta o muestra la implementación de un objeto y solo muestra los datos necesarios, por ejemplo, en las contraseñas 

"El encapsulamiento implica el ocultamiento de los detalles internos de un objeto y el acceso controlado a sus datos y funcionalidades. En POO, se utilizan clases para definir la estructura y el comportamiento de los objetos. Las clases encapsulan los datos (atributos) y los métodos (comportamientos) relacionados en un solo lugar, protegiendo los datos sensibles y exponiendo solo la interfaz necesaria para interactuar con el objeto."
*/

class Usuario{
    #contraseña;

    //constructor
    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo
        this.#contraseña = contraseña;
    }

    verificarContraseña(contraseña){
        return this.#contraseña === contraseña;
    }
}


//ABSTRACCION: no es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos 

// En unn objeto Json la mayoria de sus datos son string.Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch.

//"En POO, se crea una representación simplificada de un objeto del mundo real enfocándose en sus propiedades y comportamientos relevantes. Por ejemplo, si consideramos un objeto "Coche", podríamos abstraer sus propiedades esenciales como modelo, color y velocidad, y sus comportamientos como acelerar, frenar y girar."

let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);


/*Principios solid ---> estudiar patrones 

/*
1.  Principio de responsabilidad única /single Responsability principle)
Una clase debe tener asignada una tarea o responsabilidad específica y ésta no debería cambiar.
Es decir, se espera que las clases tengan solo una tarea concreta y especifica; si una clase tiene demasiadas tareas puede que ésta sea dificil y confusa al momento de utilizarla. Por ello, es mejor tener clases más pequeñas que ayuden a tener un código más legible, facilitando su mantenimientos y reduciendo la probabilidad de errores. 

2. Principio abierto/  cerrado (open/ closed principle OCP)
Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.
El principio establece que las entidades de softwere (clases, modulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas a la modificación. Es decir, nos dice que debemos escribir nuestro código de tal manera que podamos añadir nuevas cosas, sin necesidad de cambiar lo que ya está escrito. 

3. Principio de sustitución (Liskov Sustitution Principle LSP)
Una clase hijo puede sustituir objetos de una clase padre. Cualquier clase derivada o subclase debe ser capaz de ser sustituida por su clase base sin cambiar el comportamiento esperado del programa.
Es decir, este principio nos dice que cualquier clase hijo puede sustituir a la clase padre sin que el programa se rompa. Es como un  rompecabezas en el que se remplaza una pieza por otra que encaja perfectamente, de manera que el rompecabezas no se vea afectado. 

4. Principio de segregación de interfaces (Interface Segregation Principle ISP)-- delimitar los metodos que vamos a utilizar para desarrollar nuestros objetos, constructores y demás, dejando fuera los innecesarios.
Este principio nos dice que  los clientes no deben depender de interfaces que no utilicen. Es mejor tener interfaces más específicas que sean relevantes para las necesidades de los clientes, en lugar de tener una interfaz general grande que obligue a los clientes a depender de métodos que no necesitan. De manera que, el principio nos dice las interfaces (las cosas que una clase puede hacer) deben ser definidas de manera clara y especifica y no ser demasiado grandes; se deben definir los métodos que se necesitan y no más.


5. Principio de inversión de dependencia (Dependency Inverson Principle DIP)-- no hay un numero limitado de clases, una buena practica es no tener mas de 3 o 4 clases, pero dpende de qué programa o cómo lo trabajes. 
Teniendo la base bien marcada, es más facil construir lo que tenemos que construir después.

El DIP sugiere que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino que ambos deben depender de abstracciones. Además, las abstracciones no deben depender de detalles concretos, sino al revés: los detalles deben depender de las abstracciones. Esto promueve la flexibilidad y facilita los cambios en el código al reducir el acoplamiento entre diferentes componentes.

Este principio es una forma de hacer que nuestro código sea más flexible y fácil de cambiar en un futuro. Cuando escribimos nuestro codigo, las partes importantes deberian depender de abstracciones en lugar de depender unas directamente de otras. Es decir, en lugar de escribir un código que dependa directamente de otros detalles concretos, se usan las abstracciones.

Por ejemplo, si trabajamos con clases, en lugar de que una clase especifica dependa directamente de otras clases en concreto, se busca que éstas no estén directamente relacionadas, sino  que se establezcan clases o interfaces más generales que permitan la abastracción.
Siguiendo con el ejemplo, si tenemos una clase A que necesita usar una funcionalidad que posee la clase B, lo ideal es que ambas clases no se relaciones entre sí( o en este caso que A dependa de B), sino más bien lo que se busca es crear una clase base que permita a B heredar ciertas funcionalidades, de esta manera A podría abstraer ciertas funcionalidades que posee la clase B, pero desde la clase base. 
El hecho de que no exista esta relación directa, permite que al modificar la clase B, la clase A no se vea afectada por estos cambios. La idea es que las partes más importantes de nuestro código dependan de abstracciones que puedan ser intercambiadas de manera más facil sin tener que afectar al resto del sistema. 
*/




//EJERCICIO 

/*Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificación. Definir los métodos para inicializar sus atributos (constructor ), imprimirlos y mostrar un mensaje con el resultado de si su calificación es aprobatoria o no

Atributos:
Nombre
Calificación 

Métodos: 
imprimir calificación 
evaluación 

la calificación aprobatoria es de 6
if para evaluar la calificación 

*/

//Clase
class alumno{
    nombre = "";
    calificación = 0;

    //constructor
    constructor (nombre, calificacion){
      this.nombre = nombre;
      this. calificacion = calificacion;
      
    }
  
    //métodos
    imprimeCal(){
      console.log( this.nombre,"tu calificación es ", this.calificacion);
    }
  
      evaluacion (){
  if (this.calificacion >= 6){
      console.log( "Tienes una nota aprobatoria");
  } else {
      console.log( "No tienes una nota aprobatoria.");
      } 
  
    }
  
  }
  
  //instanciar
  let alumno1 = new alumno("María", 6);
  alumno1.imprimeCal(); 
  alumno1.evaluacion();
  
  let alumno2 = new alumno("Alan", 5.2);
  alumno2.imprimeCal();
  alumno2.evaluacion();