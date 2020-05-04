//Ejercicio RFC
// Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: primer nombre,segundo nombre,Primer Apellido, Segundo Apellido ,fecha nacimiento, edad, RFC, genero, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide  primer nombre,segundo nombre,Primer Apellido, Segundo Apellido ,fecha nacimiento, edad, genero, peso y altura.
// 	 Generar el RFC a partir de el nombre, edad y genero

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
    esMayorDeEdad = function(){
        if(this.edad>=18){
             return "(Mayor de edad)"
        }else{
            return"(Menor de edad)"
        }
    }
    calcularIMC = function(){
        let operacion = this.peso/ this.altura**2
        return operacion.toFixed(1)  
    }
    rfc = function(){
        let nacimiento = this.fecha_nacimiento.split("/")
        let armar = [this.primer_apellido.slice(0,2),this.segundo_apellido.slice(0,1),this.primer_nombre.slice(0,1),nacimiento[2].slice(nacimiento[2].length-2),nacimiento[1],nacimiento[0],Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3)].join("").toLocaleUpperCase()
        return armar
    }
}

let Carlos = new Persona('Carlos','Adrian','Sanchez','Hernandez','14/03/1983',37,'M',83,1.75);
let Juan = new Persona('Juan','Carlos','Perez','Martinez','04/02/1991',29,'M',57,1.63);
let Maria = new Persona('María','','Pelaez','Camargo','25/09/1970',50,'F',67,1.65);
let Luz = new Persona('Luz','Ximena','Cruz','Uchurrutia','01/12/2003',17,'F',54,1.59);

let Database = [Carlos,Juan,Maria,Luz];

console.log("*BASE DE DATOS SAAVI*")
console.log("")

for(let i=0; i < Database.length; i++){
    console.log("Nombre: "+Database[i].primer_nombre+" "+Database[i].segundo_nombre+" "+Database[i].primer_apellido+" "+Database[i].segundo_apellido);
    console.log("RFC: "+Database[i].rfc());
    console.log("Edad: "+Database[i].edad+" "+Database[i].esMayorDeEdad());
    console.log("Genero: "+Database[i].genero);
    console.log("IMC:"+Database[i].calcularIMC());
    console.log("");
}

