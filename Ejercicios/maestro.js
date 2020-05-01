class maestro{

    constructor(materia,calificaciones){
        this.materia = materia
        this.calificaciones = calificaciones  
    }

    promClase(){
        let suma = 0;
        for (let i=0; 1 < this.calificaciones.length; i++){
            suma = suma + this.calificaciones;
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
    
    constructor(materia,calificaciones,antiguedad){
        super(materia,calificaciones)
        this.edad = edad
    }
}