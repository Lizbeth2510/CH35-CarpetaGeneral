package loops;

import java.util.Scanner;

public class DoWhileLoop {

	public static void main(String[] args) {
		/*
		 * Ciclo Do...While: Evalua la expresión en la parte inferior del ciclo.
		 * Por tanto, las declaraciones dentro del bloque "do" siempre se ejecutan al menos una vez 
		 * */
		
		//cuenta del 1 al 20
		int cuenta = 5 ;
		do {
			System.out.println("Cuenta: "+cuenta);
			cuenta++;
		}while(cuenta < 0);
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		
		System.out.println("Bienvenido al banco City Generation, elija algunas de nuestrtas opciones disponibles");
		System.out.println("1. Consultar su saldo");
		System.out.println("2. Ingresar dinero");		System.out.println("3. Retirar dinero");		System.out.println("4. Salir, por favor tome su dinero");
		
		Scanner srcB = new Scanner(System.in);
		int opcion;
		
		do {
			//con el do se va a ejecutar este bloque de código por lo menos una vez, hasta que se evalue la condición que se 			encuentra en el while
			opcion = srcB.nextInt();
			
			switch(opcion) {
			case 1: 
				System.out.println("Consultar saldo");
			break;
			
			case 2:
				System.out.println("Ingresar dinero");	
			break;
			
			case 3:
				System.out.println("Retirar dinero");
			break;
			
			case 4: System.out.println("Salir, por favor tome su dinero");
			break;
			
			default:
				System.out.println("Opción inválida, por favor ingrese de la opción válida de nuestro menú");
			break;
			
			}
		}while(opcion != 4);
		//while es nuestra condición y se va a ejecutar el código si se cumple la condición 
		
		srcB.close();
		
		//https://oregoom.com/java/do-while/
		//https://javautodidacta.es/bucles-do-while-y-while-en-java/
			
		
			
			
			
			
			
		

	}//método

}//clase
