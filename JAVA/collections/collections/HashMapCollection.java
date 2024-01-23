package org.generation.collections;
import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {
	public static void main(String[] args) {
		
		/**
		 * HashMap almacena elementos en pares "clave/valor" y se puede acceder a ellos mediante index.
		 * No es ordenado y permite datos duplicados
		 */
		
		HashMap<String, String> capitals = new HashMap<String, String>();
		
		//Agregando elementos "clave/valor" (.put)
		
		capitals.put("Villahermosa", "Tabasco");
		capitals.put("Monterrey", "Nuevo León");
		capitals.put("Guadalajara", "Jalisco");
		capitals.put("Mérida", "Yucatán");
		capitals.put("Puebla", "Puebla");
		capitals.put("Chetumal", "Quinta Roo");
		capitals.put("Toluca", "Estado de México");
		
		System.out.println(capitals);
		
		//Map.Entry<> es un método de la interfaz Map que representa una entrada en un Map. Toma como argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la intefaz y recibe un metodo .entrySet() que devuelve el conjunto (Set) de la entrada (clave-valor) en la HashMap.
		//De esta manera ya podemos utilizar los métodos de abajo
		for(Map.Entry<String, String> entry: capitals.entrySet()) {
			
			//Mostrar la clave (.getKey()) y el valor (.getValue()) de manera individual para su manipulación
			System.out.println(entry.getKey()+ " es la capital de " +entry.getValue());
		}
		
		
		//************EJERCICIO 2**********************
		
		Map<String, Integer> calificaciones = new HashMap<String, Integer>();
		
		calificaciones.put("René", 9 );
		calificaciones.put("Ximena", 10 );
		calificaciones.put("Diego", 8 );
		calificaciones.put("Eunice", 6 );
		calificaciones.put("Rodri", 5 );
		calificaciones.put("David", 8 );
		calificaciones.put("Eli", 7);
		calificaciones.put("Daniel", 5 );
		
		System.out.println(calificaciones);
		
		for(Map.Entry<String, Integer> calificacion: calificaciones.entrySet()) {
			
			//Mostrar la clave (.getKey()) y el valor (.getValue()) de manera individual para su manipulación
				System.out.println("La calificación de " + calificacion.getKey()+" es: " + calificacion.getValue());
						
						
		}
		
//https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Map.Entry.html
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}//metodo main
	
	

}//class
