package ejercicio8;

import java.util.Scanner;

public class Ejercicio8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numeros = new int[10];
        int[] resultado = new int[10];
        int contador = 0;
        int cuentaArray = 0;
        int primo = 0;
        int prueba = 0;

        System.out.println("Introduzca 10 números");
      //pedimos al usuario los 10 numeros
        for (int i = 0; i < 10; i++) {
            numeros[i] = scanner.nextInt();
        }

        System.out.println("Índice\tValor");
        // mostramos el primer array que tiene los indices y los valores que le corresponde
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + numeros[i]);
        }

        // con un for veremos los que son primos y ponerlos al principios
        for (int i = 0; i < 10; i++) {
            do {
                primo++;
                prueba = numeros[i] % primo;

                if (prueba == 0) {
                    contador++;
                }
            } while (primo != numeros[i]);

            if (contador == 2) {
                resultado[cuentaArray] = numeros[i];
                cuentaArray++;
            }

            contador = 0;
            primo = 0;
        }

        // ahora metemos en el array resultante los que quedan por agregar
        for (int i = 0; i < 10; i++) {
            do {
                primo++;
                prueba = numeros[i] % primo;

                if (prueba == 0) {
                    contador++;
                }
            } while (primo != numeros[i]);

            if (contador != 2) {
                resultado[cuentaArray] = numeros[i];
                cuentaArray++;
            }

            contador = 0;
            primo = 0;
        }

        System.out.println("\nArray final");
        // mostramos el array resultante
        System.out.println("Índice\tValor");
        for (int i = 0; i < 10; i++) {
            System.out.println(i + "\t" + resultado[i]);
        }

        scanner.close();
    }
}
