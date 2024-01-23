package org.generation.letras;

/*
 * La estructura basica(para que nuestro objeto funcione) para crear objetos es la siguiente:
 * 		1.Atributos o propiedades
 * 		2.Método constructor (1 - n métodos)
 * 		3. Métodos del objeto (comportamiento)
 *		4.Métodos Getters y Setters
 *		5. Método toString
 * */
public class LetrasMain {
	public static void main(String [] args) {
		//Instanciar objetos (Letras y contador)
	Letras letras = new Letras();
	letras.mostrarMensaje("Escribe un texto y te mostraré el números de vocales, consonantes, símbolos y números");
	String palabra =letras.leerEntrada();//Guardamos el texto introducido por el usuario en una variable llamada -palabra-	
	
	
	//Invocar los métodos que me permiten contar los caracteres
	Contador contador = new Contador();
	int totalVocales = contador.contarVocales(palabra);
	System.out.println("Hay " +totalVocales + " vocales en el texto que has introducido");
	
	int totalNumeros = contador.contarNumeros(palabra);
	System.out.println("Hay " +totalNumeros + " números en el texto que has introducido");
	
	
	int totalConsonantes = contador.contarConsonantes(palabra);
	System.out.println("Hay " +totalConsonantes + " consonantes en el texto que has introducido");
	
	int totalSimbolos = contador.contarSimbolos(palabra);
	System.out.println("Hay " +totalSimbolos + " simbolos en el texto que has introducido");
	
		

		
		
	}
}
