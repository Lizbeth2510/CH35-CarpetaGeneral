package ejercicio6;

import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {
		System.out.println("Introzca una palabra o frase");
		Scanner scan = new Scanner (System.in);
		String cadenaTexto = scan.nextLine();
		
		String cadenaInvertida = "";
		
		for(int i = cadenaTexto.length()-1; i>=0; i--) {
			cadenaInvertida+=cadenaTexto.charAt(i);
		}
		
		System.out.println("Cadena original: " + cadenaTexto);
		System.out.println("Cadena invertida: " + cadenaInvertida);
		
		scan.close();
	}
	

}
