package controlFlujo;
import java.util.Scanner;

public class FlujoControl {

	public static void main(String[] args) {//Debe conincidir la clase con el nombre del documento/proyecto
		
		//Recuerda que para que algo se ejecute, siempre debe ir en el método principal
		
		
		//Primero defino una variable del tipo String donde se almacena un dato
		String viaje = "16-01-2024"; //Dejo en null y después agrego fecha
		//Variable declarada e inicializada en null a propósito para tener un espacio de memoria ya asignado y que lo guarde de manera posterior al reemplazarlo con un nuevo valor
		
		//Para validar si podemos viajar en cierta fecha:
		if (viaje != null) { //variable vacía
			System.out.println("Ya no hay ninguna fecha disponible, una disculpa.");		
			}else {
				System.out.println("Puedes reservar tu viaje");
			}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Scanner.html
		//https://www.arquitecturajava.com/comparando-java-vs-equals/
		
////Todas las importaciones van fuera de la clase
		
		//Validacion de contraseña
			/*Scanner scanner = new Scanner(System.in); //sistem in --> que algo entre a mi sistema 

		    // Solicitar la primera contraseña
		    System.out.print("Ingrese la contraseña: ");
		    String contraseña1 = scanner.nextLine(); //nextLine --> un metodo para que el usuario introduzca un String

		    // Solicitar la segunda contraseña
		    System.out.print("Ingrese la contraseña nuevamente: ");
		    String contraseña2 = scanner.nextLine();

		    // Verificar si las contraseñas coinciden
		     if (contraseña1.equals(contraseña2)) {
		          System.out.println("Las contraseñas coinciden. Acceso permitido.");
		      } else {
		          System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		      }

		        // Cerrar el scanner
		        scanner.close(); */
		        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		        
		   
		     //SWITCH: Para seleccionar comida de la dulcería del cine 
		        
		     // Selección de opciones, variable que almacena dicha opción 
		        
		     int menuCine = 3;
		     
		     //Crear un menú
		     
		     System.out.println("1. Palomitas");
		     System.out.println("2. Nachos");
		     System.out.println("3. Refresco");
		     System.out.println("4. HotDog");
		     System.out.println("5. Pagar");
		   //System.out.println("No contamos con eso en nuestro menú, por favor introduzca una opción válida (1-5)");
		     
		     switch (menuCine) {
		     case 1:
		    	 System.out.println("Usted ha seleccionado la opción 'Palomitas'");
		     break;
		     
		     case 2:
		    	 System.out.println("Usted ha seleccionado la opción 'Nachos'");
		     break;
		     
		     case 3:
		    	 System.out.println("Uested ha seleccionado la opción 'Refresco'");
		     break;
		     
		     case 4:
		    	 System.out.println("Usted ha seleccionado la opción 'HotDog'");
		    
		     case 5:
		    	 System.out.println("¿Esta seguro de que no desea agregar algo más a su combo? Usted ha seleccionado la opción de 'Pagar'");
		     break;
		     
		     default:
		    	 System.out.println("Por el moento no contamos con esa opción en el menú, le invitamos a seleccionar alguna de la opciones válida");
		     break;
		     
		     
		     
		     }//switch
		     
		     
		     ////////////////////////////////////////////////////////
		     //Ejercicio switch 
		     
		     //Programa para sellecionar a que grupo de personas perteneces 
		     
		  
		     	int grupoPersonas = 1;
		        System.out.println("A qué grupo de personas perteneces? Escoge la opción según tu rango de edad");
		        System.out.println("1. 0-11 ");
		        System.out.println("2. 12-15 ");
		        System.out.println("3. 18-29 ");
		        System.out.println("4. 30-64 ");
		        System.out.println("5. 65+ ");

		       

		        switch (grupoPersonas) {
		            case 1:
		                System.out.println("Usted pertenece al grupo de Niños pequeños");
		                break;
		            case 2:
		                System.out.println("Usted pertenece al grupo de Adolescentes");
		                break;
		            case 3:
		                System.out.println("Usted pertenece al grupo de Jóvenes");
		                break;
		            case 4:
		                System.out.println("Usted pertenece al grupo de Adultos");
		                break;
		            case 5:
		                System.out.println("Usted pertenece al grupo de Adultos Mayores");
		                break;
		            default:
		                System.out.println("¿Está seguro de que está vivo o es un humano?");
		                break;
		        }

		     /////////////////////////////////////////////////////////
		        //Otroejemplo
		        Scanner scanner = new Scanner(System.in);
				
				System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
		        System.out.println("1. Palomitas");
		        System.out.println("2. Refresco");
		        System.out.println("3. Nachos");
		        System.out.println("4. Hot-dog");
		        System.out.println("5. Pagar");

		        int total = 0;
		        String orderList = "";

		        while (true) {
		            int menu = scanner.nextInt();

		            if (menu >= 1 && menu <= 5) {
		                switch (menu) {
		                    case 1:
		                        orderList += "Palomitas, ";
		                        total += 10; // Adjust the price accordingly
		                        break;
		                    case 2:
		                        orderList += "Refresco, ";
		                        total += 5; // Adjust the price accordingly
		                        break;
		                    case 3:
		                        orderList += "Nachos, ";
		                        total += 8; // Adjust the price accordingly
		                        break;
		                    case 4:
		                        orderList += "Hot-dog, ";
		                        total += 12; // Adjust the price accordingly
		                        break;
		                    case 5:
		                        System.out.println("Usted ha seleccionado pagar su combo");
		                        break;
		                }

		                if (menu == 5) {
		                    break; // Exit the loop when the user chooses to pay
		                }
		            } else {
		                System.out.println("Por favor, seleccione una opción válida (1-5).");
		            }
		        }

		        System.out.println("Usted ha ordenado: " + orderList.substring(0, orderList.length() - 2)); // Remove the trailing comma
		        System.out.println("El total a pagar es: $" + total);

		        // Close the Scanner to avoid resource leak
		        scanner.close();
		   

		       

		 
		
		
		
		
		
		
		
		
	}//main

}//clase
