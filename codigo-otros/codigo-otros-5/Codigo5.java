package codigoOtros4;

/* Lizbeth Cerón 3/5
 * Rocio Hernández 3/5
 */

import java. util. Scanner; //Se debe importar el Scanner

public class Codigo5 {
    public static void main(String[] args) {// agregar el método main
    
        Scanner scanner = new Scanner(System.in); //cambio s por scanner y Sytem.in
        System.out.print("Introduzca un número: ");// se cambia ' a "
        String ni = scanner.nextLine(); //se actualiza s a scanner
        int c =Integer.parseInt(ni); // se agrega el integer
       
        
        int afo = 0;
        int noAfo = 0;
        
        while (c > 0) { // ni por c
          int digito = c % 10;// ni por c se quita int y ()
          if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
            afo++;
          } else {
            noAfo++;
          
          c /= 10; // cambio ni por c
        }
        if (afo > noAfo) {
          System.out.println("El " + c + " es un número afortunado."); // se agrega la t a println
        } else {
          System.out.println("El " + c + " no es un número afortunado.");
        }
        
      }
scanner.close();
      
    } // method
}//class