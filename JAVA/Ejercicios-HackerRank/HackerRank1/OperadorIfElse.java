package hackerRank1;

import java.util.Scanner;

public class OperadorIfElse {
	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
	       System.out.println("Introduce un número del 1 al 100");
	       int n;
	       n = scanner.nextInt();
	            if(n % 2 != 0){
	                System.out.println("Weird");
	            }else{
	            	if (n % 2 == 0 && n >=2 && n<=5) {
	            		System.out.println("not Weird");
	            	}else if (n % 2 == 0 && n >=6 && n<=20) {
	            		System.out.println("Weird");
	            	}else if(n % 2 == 0 && n >20) {
	            		System.out.println("Not Weird");
	            		
	            	}
	            }
	            	scanner.close();
	}

}
