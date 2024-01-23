package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		
		//HashSet es una clase de collections donde cada elemento es unico, es decir, no se repiten los elementos 
		HashSet<String> animals = new HashSet<String>();
		//Agregando elementos al array en una sola linea 
		animals.addAll(Arrays.asList("Perro", "Caballo", "Cebra", "Gato", "Capibara", "Capibara", "Buho", "Buho"));
		
		/*
		 //Agregar elementos al Array uno por uno
		animals.add("Perro");
		animals.add("Caballo");
		animals.add("Gato");
		animals.add("Cebra");
		animals.add("Mapache");
		animals.add("Ornitorrinco");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");
		animals.add("Buho");*/
		
		//imprimir el HashSet
		System.out.println(animals);//Solo imprime una sola vez el dato repetido, en este caso buho y capibara
		
		//conocer si un elemenot se encuentra dentro del Set: contains()
		System.out.println(animals.contains("Capibara")); //true porque si existe capibara
		
		//Eliminar un elemento: remove ()
;		animals.remove("Cebra");
;		//impresion del set sin el elemento eliminado 
		System.out.println("Animals");
		
		
		/**
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
		
		//Agregar nuevamente elementos 
		
		
		
		
	}//metodo main

}//class
