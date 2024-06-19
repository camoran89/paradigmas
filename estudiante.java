public class Estudiante {
    // Propiedades de la clase
    private String nombre;
    private int edad;
    private String id;

    // Constructor
    public Estudiante() {
        this.nombre = "";
        this.edad = 0;
        this.id = "";
    }

    // Constructor
    public Estudiante(String nombre, int edad, String id) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }

    // Métodos getter y setter
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Método para mostrar información del estudiante
    public void mostrarInfo() {
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad);
        System.out.println("ID: " + this.id);
    }
}

class Main {
    public static void main(String[] args)
    {
        // Instanciar la clase estudiantes
        Estudiante estudiante = new Estudiante();

        // Se utiliza los metodos del objeto estudiante para modificar los valores del estudiante
        estudiante.setNombre("Pedro Perez");
        estudiante.setEdad(45);
        estudiante.setId("ABC123");

        // Se utiliza el metodo mostrarInfo para imprimir el resultado
        estudiante.mostrarInfo();
    }
}