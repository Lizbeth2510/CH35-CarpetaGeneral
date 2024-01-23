package ecommerce;
import java.util.Scanner;

public class FunciónDescuento {

	public static void main(String[] args) {
		
		//queremos un nuevo scanner que se pueda ingresar dentro de nuestro sistema 
		Scanner scanner = new Scanner (System.in);
		
		//obtener el precio del producto
		System.out.println("Ingrese el consto del producto");
		
		//para que pueda leer este  dato de entrada de tipo double
		double precioProducto = scanner.nextDouble();
		
		
		//para calcular el descuento del producto/obtener descuento --> vamos a crear un double y le vamos a asignar porcentajeDescuento
		double porcentajeDescuento = 15;
		//double para calcular el descuento
		double descuento = calcularDescuento(precioProducto, porcentajeDescuento);
		
		
		//double para calcular el impuesto/obtener el impuesto
		double porcentajeImpuesto = 3;
		//double para el impuesto
		double impuesto = calcularImpuesto (precioProducto, porcentajeImpuesto);
		
		
		/*Dado que la funcion calcularImpuesto y calcularDescuento ambas realizan el mismo tipo de operacipon con dos 		parametros, podemos hacer una saola función que nos ayude a realizar estos calculos, pero con distintos parametros 
		 * 	double porcentajeDescuento = 15;
		 *  double descuento = calcularPrcentaje(precioProducto, porcentajeDescuento);
		 *  
		 *  double porcentajeImpuesto = 3;
		 *  double impuesto = calcularPrcentaje(precioProducto, porcentajeImpuesto);
		 *  */	

		
		//para calcular el total 
		double total = calcularTotal(precioProducto, descuento, impuesto);
		
		total = redondear (total, 2); //el dos es para rendodear
		
		System.out.println("Precio del producto: $ " +precioProducto);
		System.out.println("Decuento aplicado al producto: $"+descuento);
		System.out.println("Impuesto aplicado: $"+impuesto);
		System.out.println("Total a pagar:$ "+total);
		

		
	}//metodo main
	
	

	//Hay que calcular el metodo o dunciones para que se puedan hacer esas operaciones o calculos y va fuera del metodo main
	
	// "static" es el nombre de nuestro método para hacer función, el metodo se define por el usuario segun el contexto que se maneje
	
	
	//*Función para calcular el descuento 
	static double calcularDescuento (double precio, double porcentajeDescuento) {
		return (precio * porcentajeDescuento)/100;
		
	}//fin función
		
	
	//*Función para calcular el impuesto
	
	static double calcularImpuesto (double precioProducto, double porcentajeImpuesto) {
		return (precioProducto * porcentajeImpuesto)/100;
		
	}//fin función 
	
	
	//*Función para calcular el total
	
	static double calcularTotal (double precioProducto, double descuento, double impuesto) {
		return (precioProducto - descuento) + impuesto;
	}//fin función
		
	

	
	static double redondear (double valor, int decimales) {
		double factor = Math.pow(100, decimales);
		return Math.round(valor * factor)/factor;
		
	}//fin funcion
	
}//clase


/*La refactorizacion es reestructurar código que ya existe sin alterar su comportamiento. Tiene como objetivo mejorar la legibilidad, mantenibilidad y optimizacion de nuestro codigo*/
