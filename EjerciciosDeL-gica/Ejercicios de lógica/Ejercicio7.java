package ejercicio7;

import java.util.Scanner;

public class Ejercicio7 {

    public static void main(String[] args) {
        System.out.println("Introduzca un día de la semana de lunes a viernes");
        Scanner scan = new Scanner(System.in);
        String dia = scan.nextLine();

        // Convertir el día a minúsculas para evitar problemas de mayúsculas y minúsculas
        dia = dia.toLowerCase();

        int diaEnNumero = obtenerDiaEnNumero(dia);

        if (diaEnNumero == -1) {
            System.out.println("Día inválido, por favor introduzca un día de lunes a viernes");
            scan.close();
            return;
        }

        // para introducir la hora
        System.out.println("Por favor introduzca la hora en un formato de 24 hrs. ");
        int horas = scan.nextInt();
        // para introducir los minutos
        System.out.println("Por favor introduzca los minutos");
        int minutos = scan.nextInt();

        // convirtiendo el día y hora en la que empieza el fin de semana: viernes a las 15:00
        int comienzoFin = (4 * 24 * 60) + (15 * 60);
        // convirtiendo el día y hora introducido por el usuario
        int horarioIntroducido = (diaEnNumero * 24 * 60) + (horas * 60) + minutos;
        int minutosRestantes = comienzoFin - horarioIntroducido;


        System.out.println("Faltan " + minutosRestantes + " minutos para comenzar el fin de semana");

        scan.close();
    }

    private static int obtenerDiaEnNumero(String dia) {
        switch (dia) {
            case "lunes":
                return 0;
            case "martes":
                return 1;
            case "miércoles":
                return 2;
            case "jueves":
                return 3;
            case "viernes":
                return 4;
            default:
                return -1; 
        }
    }
}
