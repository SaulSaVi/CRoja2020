class Persona {

    constructor(primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,fecha_nacimiento,edad,genero,peso,altura){
        this.primer_nombre = primer_nombre
        this.segundo_nombre = segundo_nombre
        this.primer_apellido = primer_apellido
        this.segundo_apellido = segundo_apellido
        this.fecha_nacimiento = fecha_nacimiento
        this.edad = edad
        this.genero = genero
        this.peso = peso
        this.altura =  altura
    }

    calcularIMC(){
        return "IMC: "+this.peso/ this.altura**2
    }

    esMayorDeEdad(){
        if(this.edad>=18){
            return "Mayor de edad"
        }else{
            return "Menor de edad"
        }
    }

    
}

