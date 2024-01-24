package org.generation.excercises;
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

        public static void plusMinus(List<Integer> arrayNumeros) {
        
        //Para obtener el total de elementos que existiran  en el array
        int elementosArray = arrayNumeros.size();
      //Inicializar las variables que funcionaran como contadores y que se inicializan en ceros para ir agregando de uno en uno sedún sea el caso
        int ceros=0;
    	int positivos = 0;
    	int negativos=0;
    	
      //ciclo for para iterar sobre los elementos del array 
        for (Integer elemento: arrayNumeros) { //a la variable elemento de tipo integer le asignamos el valor del array arrayNumeros
            if(elemento ==0) ceros++;
            else if(elemento > 0)positivos++;
            else negativos++;

        }
        System.out.println(String.format("%.6f",(double)positivos/elementosArray));
        System.out.println(String.format("%.6f",(double)negativos/elementosArray));
        System.out.println(String.format("%.6f",(double)ceros/elementosArray));
    }
        
    }



public class Hackerrank3 {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.plusMinus(arr);

        bufferedReader.close();
    }
}