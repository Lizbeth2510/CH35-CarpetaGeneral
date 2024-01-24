package org.generation.banco;

/*En esta clase se definen los métodos que arrojan Excepciones, siempre que la clase Cajero se dispare dicha e 
 * 
 * Requeriemientos: 
 * 	1. Trbajar bajo el paradigma POO
 * 	2. Indicar que la clase es una Exception mediante herencia (extends)
 * 	3. Crear variables y Métodos para instanciar Objetos 
 * 	4. Encapsular (modificadores, getter y setters)
 * 
 * */

public class FondosInsuficientesException extends Exception{
	private static final long serialVersionUID = 1L; // no es necesario, pero es nuena práctica asignarlo 
	
	//Atributos
	private double monto;

	
	//constructor --> generado automaticamente
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}


	//Guetter y Setter --> generado automaticamente
	public double getMonto() {
		return monto;
	}


	public void setMonto(double monto) {
		this.monto = monto;
	}
	
	
	
}
