//Ejercicio RFC (11)
// Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: primer nombre,segundo nombre,Primer Apellido, Segundo Apellido ,fecha nacimiento, edad,RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide  primer nombre,segundo nombre,Primer Apellido, Segundo Apellido ,fecha nacimiento, edad, sexo, peso y altura.
// 	 Generar el RFC a partir de el nombre, edad y sexo

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
        console.log("IMC: "+this.peso/ this.altura**2)
    }

    esMayorDeEdad(){
        if(this.edad>=18){
             console.log("Mayor de edad")
        }else{
            console.log("Menor de edad")
        }
    }  
    
}

let Carlos = new Persona('Carlos','Adrian','Sanchez','Hernandez','14/03/1983',37,'M',83,1.75)

console.log(Carlos);
