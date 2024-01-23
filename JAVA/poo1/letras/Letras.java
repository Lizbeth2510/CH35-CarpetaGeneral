package org.generation.letras;

import java.util.Scanner;


/*Crear un programa que le solicite un mensaje al usuario y cunte cuántas vocales, consonantes, numeros y caracteres posee dichi mensaje
 * Letras: Métodos para interactuar
 * LetrasMain: vamos a instaciar los objetos
 * Contador: métodos para contar vocales, consonantes, numeros y simbolos 
 * */
public class Letras {
	
	//para que nuestro usuario interactue, definimos un Scanner
	Scanner scan = new Scanner(System.in);
	
	//Metemos el Sacanner dentro de un metodo
	public String leerEntrada() {
		return scan.nextLine();
	}
	
	//Método para proporcionar contexto al usuario
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}

}
