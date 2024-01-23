package org.generation.excercises;

import java.util.ArrayList;
import java.util.Scanner;

public class SistemaEscolar {
	public static void main (String[] args) {
/*
* Programa que permite que un usuario agregue nombre completo de estudiantes en una universidad. Posteriormente, muestra la lista de los estudiantes agregados
* 
* --Requerimientos:
* 	> ArrayList de tipo String--> para guardar a los estudiantes (el ArrayList, tiene mayor facilidad de manipulación)
* 	> Scanner --> para interactuar con el usuario
*   > Loop (Ciclo) --> para permitir que se agreguen varios estudiantes (do-while)
*   > Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch--> estas son posibles opciones)
*   > Mostrar lista de estudiantes con un for-each
*/
		
		//Iniciar un ArrayList para guardar a nuestos estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Sacanner para el usuario 
		Scanner scan = new Scanner(System.in);
		
		
		//Loop para permitir agregar usuarios 
		
		String nombreEstudiantes; //Inicializado de manera general 
		/*do {
			System.out.println("ingresa el nombre del estudiante. Escribe 'Salir' para finalizar.");
			nombreEstudiantes = scan.nextLine(); //invocado de manera local 
			estudiantes.add(nombreEstudiantes); //guardara mi scanner en el arrayList
			
			
		}while(!nombreEstudiantes.equalsIgnoreCase("Salir")); //Siempre que no se introduza "Salir", el loop se segiirá ejecutando 
		
		
		//Mostrar lista de estudiantes
		System.out.println("**Lista de estudiantes**");
		for(String estudiante : estudiantes){
			//Si no quiero que se muesttre la palabra salir voy agregar una condicional sobre la variable que guarda a los elementos que iteran sobre el ArrayList
			if(!estudiante.equalsIgnoreCase("Salir")) {
				System.out.println(estudiante);
			}
		}
		
		
	//IgnoreCase para ser indiferente si Salir o salir 
		scan.close();*/
		
		
		
		
		
		/*
		 * Modificar nuestro programa para que permita salir con las palabras 'Salir' o 'salir'
		 * Agregar  la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).
		
		 * */
		
		 
		do {
			System.out.println("ingresa el nombre del estudiante. Escribe 'Salir' para finalizar.");
			nombreEstudiantes = scan.nextLine(); //invocado de manera local 
			estudiantes.add(nombreEstudiantes); //guardara mi scanner en el arrayList
			
			
		}while(!nombreEstudiantes.equalsIgnoreCase("Salir")); //Siempre que no se introduza "Salir", el loop se segiirá ejecutando 
		
		
		//Mostrar lista de estudiantes
		System.out.println("**Lista de estudiantes**");
		for(String estudiante : estudiantes){
			//Si no quiero que se muesttre la palabra salir voy agregar una condicional sobre la variable que guarda a los elementos que iteran sobre el ArrayList
			if(!estudiante.equalsIgnoreCase("Salir")) {
				System.out.println(estudiante);
			}
		}
		
		
		
		
	}//metodo main

}//clase
