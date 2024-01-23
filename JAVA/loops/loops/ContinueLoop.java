package loops;

public class ContinueLoop {

	public static void main(String[] args) {
		/*
		 * Instrucciones de salto:
		 * continue-- Interrumpe la iteración del bucle, si se procede una condición especifica y continua con la siguiente
		 * */
		
		//Con continue, ejecutando la sentencia condicional, pero cumpliendo la consición del bucle for
		
		for (int cliente = 1; cliente <=20; cliente++) {
			if (cliente ==5) {
				System.out.println("Cliente número " + cliente + ". Tienes el número ganador, ¡Ganaste. Felicidades!");
				continue;
			}System.out.println("Eres el cliente numero " + cliente);
			
		}

		
		
		
		
		
		
	}

}
