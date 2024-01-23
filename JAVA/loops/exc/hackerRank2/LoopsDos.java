package exc.hackerRank2;
import java.util.Scanner; //importamos el Scanner 


public class LoopsDos {

	public static void main(String[] args) {
		/*
		https://www.hackerrank.com/challenges/java-loops/problem?isFullScreen=false
		
		We use the integers , , and  to create the following series:
		a + 2^0 * b), (a + 2^0 * b + 2^1 *b), (a + 2^0 * b + 2^1 *b + 2^2  * b),(a + 2^0 * b + 2^1 *b + 2^2  * b +...+ 2^n-1 * b)

You are given  queries in the form of a, b and n . For each query, print the series corresponding to the given a ,b and n  values as a single line of  n space-separated integers.

Input Format

The first line contains an integer, q, denoting the number of queries.
Each line  of the  subsequent lines contains three space-separated integers describing the respective , , and  values for that query.

		 * */


		 //Inicializamos un escanner para que el usuario introduzca el numero de "q" que requiere, asi como el valor de "a", "b", y "n" correspondiente a cada "q"  
		 Scanner scan = new Scanner(System.in);
	        int q=scan.nextInt(); 
	        
	        //ciclo for que indica cuantos conjuntos de datos se van a ejecutar ---> esto depende de "q"
	        for(int i=0;i<q;i++){
	            int a = scan.nextInt();
	            int b = scan.nextInt();
	            int n = scan.nextInt();
	            System.out.println(serie(a,b,n));//---> se llama a la funcion "serie" que tomara como parametro a, b y n y que  ejecutara el  bucle de acuerdo a la formula asignada y lo mostrara en consola 
	        }
	        scan.close(); //cerramos scaner
	    }//metodo main
	
	//Las funciones van fuera del metodo main
	
	
	//creamos la función "serie" que tomará a "a", "b" y "n" como parametros y devolvera una cadena de caracteres
	    public static String serie (int a, int b, int n){
	        String numerosSerie = new String(); //--> Inicializamos una cadena vacía que se utilizará para construir la salida.
	        int valorA = a; //--> inicializamos una variable valorA con el valor que se le ha introducido a "a" 
	        
	        //ciclo for que se ejecutará n veces, para ir agregando cada elemento a nuestro string deacuerdo a la formula establecida
	        for (int i=0; i<n; i++){
	            valorA += (Math.pow(2,i)*b); //--> En cada iteración,  se actualizará el valor de valorA sumando 2^i * b.
	            numerosSerie = numerosSerie+String.format("%d ",valorA); //Construye la cadena de salida agregando el valor actual de valorA formateado y seguido de un espacio en blanco.
	        }
	        return numerosSerie.trim(); //--> Devuelve la cadena de salida, eliminando los espacios en blanco al principio y al final.

	    }	

}
/***Anotaciones importantes/********
  
  > La inicialización de un String para construir la salida es una práctica común cuando se necesitan concatenar varias cadenas en un bucle o a lo largo de un proceso. En Java, 	los objetos String son inmutables, lo que significa que no se pueden modificar después de ser creados. Cada vez que concatenas cadenas, estás creando un nuevo objeto String.
 
   > La función Math.pow en Java se utiliza para calcular una potencia. Su forma es la siguiente:
   
   		public static double pow(double base, double exponente)
  		  - base: Es la base de la potencia.
		  - exponente: Es el exponente al cual se eleva la base.
	La función devuelve el resultado de elevar la base al exponente como un valor de tipo double. Aquí hay algunos ejemplos para ilustrar cómo funciona:
	double resultado1 = Math.pow(2, 3);   // 2^3 = 8.0
	double resultado2 = Math.pow(5, 2);   // 5^2 = 25.0
	double resultado3 = Math.pow(10, 0.5); // Raíz cuadrada de 10 = 3.1622776601683795

	> String.format es un método en Java que permite formatear cadenas de texto. Acepta un patrón de formato y una serie de argumentos, y devuelve una cadena formateada.
	> "%d" es un especificador de formato utilizado en este contexto. En este caso, "%d" se utiliza para formatear un entero (int). Cuando se usa, se sustituye por el valor del entero proporcionado en el argumento.
	
	> numerosSerie = numerosSerie+String.format("%d ",valorA)
	Esto significa que estás concatenando a numerosSerie el valor de valorA formateado como un entero seguido de un espacio en blanco.

 * */
