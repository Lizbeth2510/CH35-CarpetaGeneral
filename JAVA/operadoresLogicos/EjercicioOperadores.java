package operadoresLogicos;

import java.util.Scanner;

public class EjercicioOperadores {

	public static void main(String[] args) {
		// TODO Esbozo de método generado automáticamente
		
		
		/*
		- Operador (&&) And, devuelve true si ambas expresiones son verdaderas
		- Operador (||) or, devuelve true si al menos una de las dos condiciones se cumplen
		- Operador (!) not, si la expresión booleana es false devuelve true y si viceversa
		
		 */
		
		
		// && and 
		
		int anios = 5;
		
		boolean esInfante = true;
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque "+costoInfante);
		
		
		
		String cliente = "cliente123";
		String credenciales = "liztakisfuego123";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("liztakisfuego123");
		System.out.println("Los datos proporcionados por el usuario son validos "+credencialCorrecta);
		
		
		// || or
		
		double costoPasaje = 380.50;
		int edad = 58;
		boolean credencialInapam = false;
		
		boolean descuentoAdultoMayor = edad >=60 || credencialInapam;
		
		System.out .println("¿Tiene descuento? "+descuentoAdultoMayor);
		
		
		//! not 
		
		boolean  asientoDisponibles = true;
		boolean libres = true;
		boolean asientosconDescuento = !libres;
		
		System.out.println("¿Tenemos asientos con descuento? "+asientosconDescuento);
		
		
		
		//EJERCICIO 
		
		int costoBoleto = 350;
		int asientos = 62;
		int asientosAdM = 4;
		int asientosEst = 6;
		double descuentoAd = 35.0;
		double descuentoEst=  30.0; 
		
		boolean soyEstudiante = true;
		boolean soyAdultoMayor = false;
		
		int asientosNormales = asientos-asientosAdM-asientosEst;
		System.out.println("BoletosNormales " +asientosNormales);
		System.out.println("Boletos con descuentos: " + (asientosAdM+asientosEst));
		
		 int gananciasNormales = asientosNormales * costoBoleto;
		 System.out.println("Ganancias de boletos sin descuento:" + gananciasNormales);
		 
		 double gananciasBolDesc = costoBoleto * ((descuentoEst * asientosEst) + (descuentoAd * asientosAdM) );
		 System.out.println("Ganancias de boletos con descuento: " + gananciasBolDesc);
		 
		 
		 //tiene desceunto 
		 
		 boolean tieneDescuento = asientos <=62 && soyEstudiante;
		 System.out.println(tieneDescuento);
		 
		 
		//////////////////////////////////////
	
		  Scanner scanner = new Scanner (System.in);
	       System.out.println("Introdece un nnumero del 1 al 100");
	       int n;
	       n = scanner.nextInt();
	            if(n % 2 != 0){
	                System.out.println("Weird");
	            }else{
	            	if (n % 2 == 0 && n >=2 && n<=5) {
	            		System.out.println("not Weird");
	            	}else if (n % 2 == 0 && n >=6 && n<=20) {
	            		System.out.println("Weird");
	            	}else if(n % 2 == 0 && n >20) {
	            		System.out.println("Not Weird");
	            		
	            	}
	            }
	            	scanner.close();	            	
	            	
	            	            	

		
		
	}

}
