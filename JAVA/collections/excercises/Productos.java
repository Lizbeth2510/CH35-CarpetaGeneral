package org.generation.excercises;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Productos {
	public static void main (String [] args) {
		
		/*Crear un programa que le permita al usuario gregar un id del producto y el nombre del producto. Mostrar la lista de productos
		 * 
		 * Requerimientos:
		 * 
		 * 	> Utilizar MAp 
		 *  
		 *  
		 *  */
		
		/*Repasar el ejercicio para entender mejor */
		
		// Crear un HashMap para almacenar datos de productos (Id, Nombre)
				Map<Integer, String> productosData = new HashMap<>();

				// Crear un objeto Scanner para leer la entrada del usuario
				Scanner scan = new Scanner(System.in);

				String producto;

				do {
					System.out.print("Ingrese el Id del producto (entero) o 0000 para detenerse: ");
					producto = scan.nextLine();

					// Convertir la entrada del Scanner a un entero (Id del producto)
					int productId = Integer.parseInt(producto);

					// Pedir al usuario que ingrese el nombre del producto
					System.out.print("Ingrese el nombre del producto o 0000 para detenerse: ");
					String productName = scan.nextLine();

					// Agregar el producto al mapa
					productosData.put(productId, productName);
					
				} while (Integer.parseInt(producto) != 0000);

				// Cerrar el Scanner (buena práctica)
				scan.close();

				// Mostrar la lista de productos
				System.out.println("\nLista de Productos:");
				for (Map.Entry<Integer, String> productoData : productosData.entrySet()) {
					if (productoData.getKey() != 0000) {
						System.out.println("Id: " + productoData.getKey() + ", Producto: " + productoData.getValue());
					}
				}
				
				
				
			}
	
	
	
		}