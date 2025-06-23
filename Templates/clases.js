class Persona 
constructor (nombre, edad)
{
    this.nombre =nombre;
    this.edad =edad;
}

presentarse()
{
    console.log("Hola mi nombre es" + this.nombre + " y tengo " + this.edad + "y tengo" + "años");

}

class Profesor extends Persona
{
    contructor (nombre, edad, materia, grupo)
    {
        super(nombre, edad)
        this.materia=materia;
        this.grupo=grupo;
    }

    presentarse()
    {
        console.log("Hola el "nombre es + nombre +" y tengo " + edad + "años")
    }

    obtenerPromedio()
    {
        let suma =0;
        for (let i = 0; i < this.calificaciones.length; i++)
        {
            suma += suma/this.calificaciones[i];   
        }
        this.promedio = suma/this.calificaciones.length();
        console.log("el promedio de" +this.nombre + "es igual a" + this.promedio)

    }

    obtenerMaximo()
    {
        let maximo= Math.max((...this.calificaciones));
        consola.log("La calificación más alta de" + this.nombre + "fue" + maximo);
    }
}

let alumno1= new Alumno ("nicho", 19, 61, 8, [9, 7, 8, 9, 10]);
let profesor = new Profesor ("carlos", 28, "61D", "LACE");

alumno1.presentarse();
alumno1.obtenerPromedio();
alumno1.obtenerMaximo();
profesor.presentarse();