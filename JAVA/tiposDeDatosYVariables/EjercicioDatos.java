package tiposDeDatosYVariables;


public class EjercicioDatos {

	public static void main(String[] args) {
		
		System.out.println("Hola Mundo!! <3 ");
		
		/*Comentarios
		
			multilinea 
		  */
		
		//comentarios una sola linea 
		
		//print sirve para imprimir , prinln sirve para hacer un salto de línea 
		
		//El nombre de la clase debe ser igual al nombre del archivo.java
		
		
		//TIPOS DE DATOS ENTEROS 
		
		byte edad = 15; // Tipo de dato: representa un numero entero, 8 bits (-128 al 127) 
		System.out.println("Edad del participante " +edad);			
		
		short usuariosNuevos = 200;  //Sirve para representar un mnúmero entero 16 bits (-23,768 al 32, 767)
		System.out.println("El promedio de usuarios nuevos por día es de " + usuariosNuevos+" usuarios");
		
		int usuariosTotales = 8752; //sirve para representar un número entero 32 bits (-2,147,483,648 al 2,147,483,647)
		System.out.println("Usuarios Totales: "+usuariosTotales);
		
		long usuariosPremium = 9512; //Sirve para representar un número entero con valores mucho mayores
		System.out.println("Usuarios Premium: "+usuariosPremium);
		
		
		//TIPOS DE DATOS CON NÚMEROS DECIMALES
		
		float altura = 1.60f; //Sirve para representar un valor numérico con numeros decimales cuyo valor es de 23 bits y puede tener 8 caráctres despues del punto, además tiene que llevar una "f" al final, 
		System.out.println("La altura del susuarios es de "+altura+" metros" );
		
		double peso = 68.800;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta 15 caracteres despues del punto decimal
		
		
		//TIPOS DE DATOS DE TIPO STRING
		String nombreUsuario = "Lizbeth";
		
		String costoBoleto = "26000";
		String zonaBoleto = "52"; //asiento 52
		System.out.println("El costo del boleto de la zona "+zonaBoleto+" es: " +costoBoleto);
		System.out.println("Zona a la que pertenece es: "+zonaBoleto);
		
		System.out.println("El usuario es: "+nombreUsuario);
		
		//DATO CON UN SOLO CARACTER 
		char seccion = 'f';
		System.out.println("estás en la sección "+seccion);
		
		//DATO TIPO BOOLEAN
		
		boolean clienteFrecuente = true;
		System.out.println("estun cliente frecuente: "+clienteFrecuente);
		
		
		//CONVERSIÓN DE TIPO DE DATOS 
		
		//casteo o entero ---> de decimal a numero entero sonde solo toma el valor del entero sin redondear
	    int pesoCambio = (int) peso;
		
		//casteo o entero 
		long pesoCambio2 = (long) peso;
		
		
		System.out.println("Tipo de dato doble "+peso);
		System.out.println("Tipo de dato int "+pesoCambio);
		System.out.println("Tipo de dato long "+pesoCambio2);
		
		
		//CONVERSIÓN DE UN STRING A NUMERO ENTERO O DECIMAL 
		
		int cambioBoleto = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona del usuario segun su boleto " +(cambioBoleto + zonaCambio));
		
		 
		/*OPERADORES ARITMÉTICOS 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 <  mayor que 
		 >  menor que 
		 >= mayor o igual que 
		 <= menor o igual que */
		
		
		//EJERCICIO
		
		double precioEntrada = 55.70;
		double precioPalomitas = 89.70;
		double precioBebidas = 35.50;
		//int salas =10;
		//int asientosPorSala = 50;
		int capacidadTotal = 500;
		
		
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			System.out.println("Aforo lleno");
		}
		
		
		double totalEntradas = personasDentro * precioEntrada;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebidas;
		
		System.out.println("Total de personas dentro "+personasDentro);	
		System.out.println("total de entradas vendidas "+totalEntradas);
		System.out.println("total de palomitas vendidas "+totalPalomitas );
		System.out.println("total de bebidas vendidas " +totalBebidas);
	

	}

}
