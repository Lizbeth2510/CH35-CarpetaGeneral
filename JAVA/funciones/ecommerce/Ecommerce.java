package ecommerce;



import java.util.ArrayList;
import java.util.List;

//Esta clase es para representar un producto
public class Ecommerce { //Esta clase es para representar un producto
	
	static class Producto {
		String nombre;
		double precio;
		
		//quiero decirle que mi clase producto sume nuestro dato del string y que ademas utilice el precio 
		
		Producto(String nombre, double precio){
			
			//para inicializar un objeto con this
			this.nombre = nombre;
			this.precio = precio;			
			
		}//Producto objeto
	}//class Producto

		
	
	
//Esta clase es para representar un carrito de compras 
	
	static class CarritoCompras{
		List<Producto> productos = new ArrayList<>();
		
		//void tipo es un retorno vacio, si retorna algo, pero no un valor como si fuera una suma. No tiene un valor de 		retorno, por lo tanto, no se le puede asignar un return
		
		//queremos agregar un producto, un producto barbie---> función para agregar un producto
		void agregarProducto(Producto barbie) {
			productos.add(barbie); //agrega una barbie a mis productos   //no hay que hacer return porque no es una 		operación que lo amerite
		}//función void
		
		
		//función para calcular el total de mi carrito de compras 
		double calcularTotal() {
			double total = 0;
			for (Producto barbie : productos) {
				total += barbie.precio; //total = total + el precio de la barbie
			}//for
			
			return total;
		}//double
	}//class CarritoCompras
			
			
	
	


	public static void main(String[] args) {
		// TODO Esbozo de método generado automáticamente

		Producto muneca1 = new Producto ("Chelsea", 98.70);
		Producto muneca2 = new Producto ("Skipper", 85.40);
		
		CarritoCompras carrito = new CarritoCompras(); 
		
		carrito.agregarProducto(muneca1);
		carrito.agregarProducto(muneca2);
		
		
		double totalCarrito = carrito.calcularTotal();
		
		System.out.println("Total del carrito:  $ " + totalCarrito);
		
		
	}//metodo

}//class Ecommerce

