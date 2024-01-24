package org.generation.exceptions;

public class Division {
	//Método para dividir 
			public static int dividir(int num1, int num2){
				return num1/num2;
			}
	
	public static void main (String [] args) {
		
		
		/*
		 * La clase Exception nos permite manejar cualquier caso excepcional con nuestro código, es el equivalente  a los errores.
		 * Utiliza una estructura de control try-catch que permite manejar las excepciones
		 * - try : Envuelve el código que puede generar una excepción y lo evalúa.
		 *  - catch : Contiene el código que se ejecuta cuando se lanza la excepción.
		 *  	Sintaxis:
		 *  		try {
		 *  			//Código protegido
		 *  		} catch (ExceptionName e){
		 *  			//Bloque de excepción
		 *  		}
		 *  - finally : Siempre se ejecuta. Se utiliza para mostrar un mensaje en caso de ser invocado. Podemos prescindir de finally
		 */
		 
		//Excepcion que se arroja si un numero se divide entre 0
		
		try {
			int resultado = dividir(10, 2);
			System.out.println("\u001B[33mEl resultado de la división es \u001B[33m" + resultado);
		} catch (ArithmeticException e) {
			System.out.println("\u001B[31mError: no puedes dividir entre 0\u001B[31m");
		} finally {
			System.out.println("\u001B[32mPrograma finalizado\u001B[0m");
		}
		
		/*Código ASI para colores 
		 * 
		 * public static final String ANSI_BLACK = "\u001B[30m";
				public static final String ANSI_RED = "\u001B[31m";
				public static final String ANSI_GREEN = "\u001B[32m";
				public static final String ANSI_YELLOW = "\u001B[33m";
				public static final String ANSI_BLUE = "\u001B[34m";
				public static final String ANSI_PURPLE = "\u001B[35m";
				public static final String ANSI_CYAN = "\u001B[36m";
				public static final String ANSI_WHITE = "\u001B[37m";*/
	}
}
