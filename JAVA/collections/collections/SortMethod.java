package org.generation.collections;
import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {
	public static void main (String[] args) {
		ArrayList<Integer> points = new ArrayList <Integer>();
		ArrayList<String> names = new ArrayList <String>();
		
		points.add(1);
		points.add(5);
		points.add(10);
		points.add(6);
		points.add(9);
		points.add(8);
		
		System.out.println(points); //No se encuentran ordenados de menor a mayor, solamente como los agregué en el ArrayList
		
		//Ordenamiento de menor a mayor utilizando el metodo sort
		
		Collections.sort(points);
		System.out.println(points); //ordenados de menor a mayor 
		
		
		names.add("Estrella");
		names.add("Juan");
		names.add("Alberto");
		names.add("Mariana");
		names.add("flor");
		names.add("carmen");
		
		System.out.println(names);
		//Ordenar de mayor a menor utilizando sort 
		Collections.sort(names);
		System.out.println(names);//Toma en cuenta el ordenamiento con base en la tabla ASCII
		
		
		
		
		
	}//metodo main

}//class
