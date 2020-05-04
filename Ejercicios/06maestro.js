    //Ejercicio Maestro     
    
    // Hacer superclase Maestro y subclases Maestro de Física y
    // Maestro de Música y a cada uno asignarle su materia y
    // calcular su promedio de grupo a partir de calificaciones
    // (puedes usar arreglos). El maestro de física tiene un
    // atributo "antiguedad" que guarda un valor numerico,
    // mientras que el maestro de música tiene un atributo "edad"
    // también guardando un valor numérico.

class maestro{

    constructor(materia,calificaciones){
        this.materia = materia
        this.calificaciones = calificaciones  
    }

    promClase(){
        let suma = 0
        for (let i=0; 1 < this.calificaciones.length; i++){
            suma = suma + this.calificaciones
        }
        return "el promedio de clase es: "+suma/this.calificaciones.length
    }
}

class maestroFisica extends maestro{
    
    constructor(materia,calificaciones,antiguedad){
        super(materia,calificaciones)
        this.antiguedad = antiguedad
    }
}

class maestroMusica extends maestro{
    
    constructor(materia,calificaciones,edad){
        super(materia,calificaciones)
        this.edad = edad
    }
}

let califFisica = [7,8,9,8,6,5,7,9,8];
let califMusica = [9,9,9,9,9];


let Alejandro = new maestroFisica('Física I',califFisica,15);
let Lorenzo = new maestroMusica('Guitarra',califMusica,37);


console.log("Clase: "+Alejandro.materia);
console.log("Promedio del grupo: "+Alejandro.promClase());

