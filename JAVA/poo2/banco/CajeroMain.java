package org.generation.banco;

/*
 * En CajeroMain se instancia el objeto de tipo CuentaBancaria y se invocan los métodos definidos.
 * Aqui si se puede establecer los try catch de la excepcion que se definio con el metodo retirar
 * Los resultados se muestran en consola
 * */

public class CajeroMain {
	public static void main(String[]args) {
		
		CuentaBancaria cuentaLizbeth = new CuentaBancaria(5588); //Cuenta bancaria con idCuenta
		
		//Simulamos que tenemos un escanner y que usiario intriduce un dinero
		System.out.println("Depositando $500");
		cuentaLizbeth.depositar(500);
		
		//Revisar si se actualiza el saldo (debe haber 500 pesito)
		cuentaLizbeth.getSaldo();
		System.out.println("el nuevo saldo es de: "+cuentaLizbeth.getSaldo());
		
		//retirando dineritos
		try {
			//Simulamos nuevamente el sacnner para retira
			System.out.println("Retirando $300");
			cuentaLizbeth.retirar(300);
			System.out.println("el nuevo saldo es de: "+cuentaLizbeth.getSaldo()); //ouput: $200
			
			
			System.out.println("Retirando $200");
			cuentaLizbeth.retirar(200);
			System.out.println("el nuevo saldo es de: "+cuentaLizbeth.getSaldo()); //ouput: $0
			
			System.out.println("Retirando $300");
			cuentaLizbeth.retirar(300);
			System.out.println("el nuevo saldo es de: "+cuentaLizbeth.getSaldo()); //ouput: ??
			
		}catch (FondosInsuficientesException e) {
			System.out.println("\u001B[33mLo siento, te faltan $ \u001B[33m" + e.getMonto());
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}	
	}//main

}//class
