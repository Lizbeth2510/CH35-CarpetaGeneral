package org.generation.HackerRank4;

import java.io.*;
import java.lang.reflect.Method;
import java.util.*;


/*
 * Requerimientos:
 * 	-BufferedReaders: para leer datos desde la entrada estándar (normalmente, desde el teclado).
 * 	- try...catch --> try catch va a ejecutar el try siempre y solo en caso de error ejecuta el catch
 * */


/*
 * La línea de código BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); se utiliza para crear un objeto BufferedReader en Java, que se utiliza para leer datos desde la entrada estándar (normalmente, desde el teclado).
 * */


//Clase solution
public class Solution {

  public static void main(String[] numeros) {
      
	  //Bloque try-catch
	  try{
      BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
      
      //inicializamos las variables de tipo entero (n1 a n5) que se obtienen de los datos de la entrada estandar (BufferedReader)
      int n1=Integer.parseInt(br.readLine());
      int n2=Integer.parseInt(br.readLine());
      int n3=Integer.parseInt(br.readLine());
      int n4=Integer.parseInt(br.readLine());
      int n5=Integer.parseInt(br.readLine());
      
      //Para instanciar desde la clase Prime 
      Prime numero = new Prime(); 
      numero.checkPrime(n1);// desde la nueva instancia llamamos al metodo checkPrime con diferentes cantidades de argumts.
      numero.checkPrime(n1,n2);
      numero.checkPrime(n1,n2,n3);
      numero.checkPrime(n1,n2,n3,n4,n5);
      
      //Obtenemos todos los métodos que se declararon en la clase Prime
      Method[] methods=Prime.class.getDeclaredMethods();
      
      //Se crea un conjunto para almacenar nombres de métodos únicos.
      Set<String> set=new HashSet<String>();
      
      //Variable para determinar que no haya  sobrecarga de métodos.
      boolean overload=false;
      
      //loop que nos ayuda a verificar en cada uno de los metodosque no exista overloading
      for(int i=0;i<methods.length;i++)
      {
          if(set.contains(methods[i].getName()))
          {
              overload=true;
          }
          set.add(methods[i].getName());
          
      }
      
      //Si hay sobrecarga, se lanza una excepción indicando que no se permite la sobrecarga de métodos en la clase Prime.
      if(overload)
      {
          throw new Exception("No se permite Overloading");
      }
      }
      catch(Exception e)
      {
          System.out.println(e);
      }
	  
	  
  }//metodo main
}//class solution

