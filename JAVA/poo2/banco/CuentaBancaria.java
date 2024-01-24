package org.generation.banco;

/*
 * En esta clase se definene los metodos para disparar las excepciones, es decir, el try..catch. Sin emabrgo aqui no se ejecuta, pero si se establece
 * Se definenen otros metodos como depositar dinero, retirar dinero.
 * 
 * 	Requerimientos:
 * 
 * 		-Trabajar bajo POO
 * 		-Encapsulamiento (modificadores, getter y setters)
 * 		-Crea variables y métodos para instanciar objetos
 * 
 * */

public class CuentaBancaria {
	//Atributos (podemos agregar Nombre del cliente, rfc, etc....
	private double saldo;
	private int idCuenta;
	
	
	//constructor que recibe solamente el atributo idCuenta 
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	//Método para depositar dineros 
	public void depositar (double monto) {
		saldo += monto; //Esto es lo mismo que saldo = saldo + monto 
	}
	
	/*Método para retirar dineros 
	Verificar si el monto a retirar es menor o igual al saldo actual:
	 * -true:Se puede retirar el monto solicitado
	 * -false:No se puede retirar y calculamos cuánto dinero falta para completar la operación
	*/
	public void retirar (double monto) throws FondosInsuficientesException {
		if(monto <= saldo) {
			saldo -= monto; //si mi monto de retiro es menor o igual a mi saldo, puedo retirar y al saldo se le resta el monto
		}else {
			double faltante = monto - saldo;
			//Crear la instancia de la clase FondosInsuficientesException  con la spalabras reservadas thow new e y le pasamos el parámetro correspondinete a la varibale que dispara la excepcion
			
			throw new FondosInsuficientesException(faltante); //esto nos va a marcar un error porque queremos instanciar de manera local, y no lo encuebtra. Para ello necesitamos "heredarlo" como parte del método  con la palabra reservada thows y el el nombre de la exception 
			
		}
	}

	
	//Getter y Setters--->  ocupamos getters y settes dado que  saldo y cuenta son de tipo privado, asi que como los getter y setters son publicos si puede interactuar con el resto de clases
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	

}



/**try catch va a ejecutar el try siempre y solo en caso de error ejecuta el catch*/
