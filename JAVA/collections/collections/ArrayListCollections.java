package org.generation.collections;

import java.util.Arrays;
import java.util.ArrayList;


public class ArrayListCollections {

	public static void main (String [] args ) {
		
		//**********Array*********************//
		
		//Ejemplo 1 
		
		//arrays con el mismo tipo de dato, con corchetes dice que voy a iniciar un array de tipo string y va a tomar elnombre names
		String [] names = {"Jonathan", "Eunice", "Daniel", "Abigail", "Rubén", "David", "Lucero", "Braulio", "Rey", "Elizabeth", "Fer", "Martín", "René", "Ana Karen", "Arturo", "Diego", "Rocío", "Emiliano"};	
		
		System.out.println(names);		//imprime solo el identificador del array
		
		
		//***Para imprimir arrays 
		 // toString -->tomara cada elemento del array y me lo va a traer como un string
		
		System.out.println(Arrays.toString(names));  
		
		
		//Ejemplo 2
		
		int [] edades = {12, 23, 45, 45, 25, 78};
		System.out.println(Arrays.toString(edades));
		
		
		//***Acceder a cada elemento del Array
		
		//Ejemplo 1
		String name1 = names[0]; //a name1 le asigno el array names y su indice cero
		System.out.println("El primer nombre de la lista es: " + name1);
		
		int edad1 = edades[0];
		System.out.println("La edad de "+name1+ " es de "+edad1+" años");
		
		
		//**Obtener la longitud del Array
		int longitudNames = names.length; 
		System.out.println("El Array names tiene "+longitudNames + " elementos");
		
		//**Obtener el ultimo elemento del Array 
		//String ultimoElemento = names[names.length - 1] //La longitud NO vive en una variable 
		String ultimoElemento = names[longitudNames - 1];//La longitud ya vive en la variable 'longitudNames' en la linea 42
		System.out.println("El último elemento de mi Array names es  " +ultimoElemento);
		
		//**Mostrar cada elemento utilizando For each
		for (String name : names) { //name de tipo String que va a iterar sobre  el array names 
			System.out.println(name);
		} 
		
		//******************ArrayList************************//
		
		//ArrayList es un array que puede cambiar de tamanño, es la clase de Java que representa la estructura de datos de 		Arrays. Permite elementos duplicados y recibe varios métodos para su manipulación.
		
		ArrayList<String> films = new ArrayList<String>();
		
		ArrayList<Integer> matricula = new ArrayList<Integer>(); //Wrapper class
		
		//**Agregar elementos
		films.add("Hello bye mama!");
		films.add("Hometown cha cha cha");
		films.add("Doom at your service");
		films.add("My liberation notes");
		films.add("Our blues");
		
		System.out.println(films);
		
		
		//***Obtener un elemento 
		String film1 = films.get(0);
		System.out.println("La primera serie es: " + film1);
		
		// **Modificar un elemento: name.set(index, newValue)
		String film3 = films.set(3, "Our beloved summer"); //cambia el indice 3 y le agrega el nuevo valor "our beloved 		summer"
		String film3Get = films.get(3); //traigo el nunevo elemento 3
		System.out.println(film3Get); //imprime el nuevo elemento que cambiamos
		
		//*Conocer el tamaño de ArrayList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList films es de "+sizeFilms + " elementos");
		
		//*Agregar un elemento y despues eliminarlo 
		films.add("my id is gagnam beauty");
		System.out.println(films);
		
		//para eliminarlo
		films.remove(5);
		System.out.println(films);
		
		//*Mostrando los elementos en lista con un ciclo forEach
		System.out.println("****Films en lista****");
		for(String film: films) {
			System.out.println(film);
		}
		
		
		
		
		
		
		
	} //metodo

}//class

//ctrl+alt+↓ para copiar toda la línea
//ctrl+fn+f11 para ejecutar
