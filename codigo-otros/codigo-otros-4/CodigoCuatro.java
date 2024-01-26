package codigoOtrosTres;
import java.io.*;
import java.util.Scanner;

public class CodigoCuatro {

	public static void main(String[] args) { //Agregamos el metodo main para poder ejecutar los sysout.
		
		Scanner s = new Scanner(System.in); //Cuando utulizamos un escanner no es necesario declarar otro  y le agregamos el system.in

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();

        if (j1.equals(j2)) { //utilizamos equals para comparar lo que introducen los usuarios 
            System.out.println("Empate");
        } else {
            int g = 2;
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break; //como es un switch hay que indicarle el break en cada caso
                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;
                case "tijeras":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;
                default:
            }
            System.out.println("Gana el jugador " + g);
        }
        s.close();
	}

}
