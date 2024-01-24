package org.generation.encaptulations;

public class EmployeeMain {

	public static void main(String[] args) {
		//Instanciar los objetos --> Employee es nuestra clase que creamos anterioremente
		Employee Lizbeth = new Employee("Lizbeth", " Cerón", 2173, 14360.85d, "Desarrolladora-Backend");
		Employee Daniel = new Employee("Daniel", " Maldonado ", 2174, 48360.85d, "Instructor");
		Employee Abigail = new Employee("Abigail", " Martínez", 2175, 24360.85d, "Desarrolladora Frontend");
		
		System.out.println(Lizbeth);
		System.out.println(Daniel);
		System.out.println(Abigail);
		
		//Invocando métodos previamente definidos(trabajar, calcularSalario, capacitarse, infoGeneral)
		Lizbeth.infoGeneral();
		Daniel.calcularSalario();
		Abigail.capacitarse();
		
		
		/*Para utilizar los getter y los setters es necesario haberlos creado previamente---> una buena practica es solo crear los de la propiedades que seran modificables y dejar de lado por ejeemplo en este caso el id, porque el id del empleado siempre será el mmismo a comparación del salario. */		
		
		
		//Utilizar información especifica de cada objeto medinate sus propiedades 
		//usando getter
		System.out.println(Daniel.getNombre()+ ""+Daniel.getApellido() +" ocupa el puesto de " + Daniel.getPuesto());
		
		//Necesitamos traer la información medinate getters ya que los atributos se convirtieron en private 
		System.out.println(Abigail.getPuesto()+" gana $" + Abigail.getSalario() + " pesos");
		
		//Actualizando información mediante setters
		Abigail.setSalario(24598.11); //nueva información que vivira dentro del objeto
		Abigail.calcularSalario(); //mando a llamar el metodo para comprobal la actualización 
		
		
		

	}

}
