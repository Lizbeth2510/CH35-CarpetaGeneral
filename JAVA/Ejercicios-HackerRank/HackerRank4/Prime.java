package org.generation.HackerRank4;


//Class Prime
public class Prime { 
	
	//para nuestro metodo checkPrime que es el unico que debe de existir 
	public void checkPrime(int ...numeros){ //el método acepta cualquier cantidad de parametros de tipo int y se comporta como un Array
		 		
		//loop para iterar sobre cada uno de los numeros que son introducidos como argumentos y ver si son meyores, menores o ogual a 2: 
		for(int i=0; i<numeros.length; i++){
			boolean esPrimo = true;; //inicializamos una variable de tipo boolean para saber si numero es primo
			if(numeros[i]>2){
				
				//loop interno para verificar si el numero tiene un divisor entre 2 y entre numeros[i]
				 for(int j=2; j<numeros[i]; j++ ){
					 if(numeros[i] % j == 0){
						 esPrimo = false;  //si el residuo del numero al dividirlo entre 2 entonces no es un num.primo
					   }
	                }
			}else if(numeros[i] == 2){
				esPrimo = true; //si el numero es dos, entonces si es un numero primo
			}else{
				esPrimo = false; //si el numero es menor a 2 no es primo 
			}
			
			if(esPrimo) System.out.print(numeros[i]+" ");
		}//for general 
			
		System.out.println();

	}//metodo checkPrime

}//class prime



