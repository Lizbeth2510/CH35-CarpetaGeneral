package codigoOtros6;

/* Lizbeth Cerón 3/5
 * Rocio Hernández 3/5
 */


import java.util.Scanner;

public class Codigo6 {
    public static void main(String[] args) { //se agrea el método
      
    int[] n = new int[20]; //agrega new

    for (int i = 0; i < 20; i++) {//se agrega un + a la sentencia
      n[i] = (int)(Math.random() * 381) + 20;
      System.out.println(n[i] + " "); // se completa el syso
    }
    
    //no tienen n se agrega al syso
    System.out.println("\n¿Qué números quiere resaltar? ");
    System.out.println("(1 – los múltiplos de 5, 2 – los múltiplos de 7): "); // se agrega la l al syso
   // int opcion = Integer.parseInt(System.console().readLine(); -re retira como parseInt y se agrega el scanner
    
    Scanner scanner = new Scanner(System.in); // se importa
    int opcion = scanner.nextInt();

    int multiplo = (opcion == 1) ? 5 : 7; //está invertido ? y :, se pone primero ? y entre número :

    for (int e : n) { // each se retira y char se cambia por int porque utilizamos números
      if (e % multiplo == 0) {
        System.out.println("[" + e + "] "); // se agrega ln para una mejor visualización
      } else { //se agrega } al inicio 
        System.out.println(e + " ");//se modifica in por out y se agrega ln
      }
       
    }
    scanner.close();
    }//metodo 
      
}//class