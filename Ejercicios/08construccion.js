    //Ejercicio Construccion
 
    // Crear la clase construcción que hereda a otras dos
    // clases "casa" y "edificio".
    // a. Sus atributos son: numPuertas, numVentanas, numPisos,
    //    direccion, altura, largo y ancho del terreno.
    // b. Cada uno tiene un metodo que regresa los metros
    //    cuadrados
    // c. Un metodo debe regresar la direccion
    // d. Un metodo debe permitir modificar la direccion
    // e. Buscar la mejor manera de aprovechar la herencia

class construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        this.direccion = direccion
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
    }
}

class casa extends construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
    terrenoCasa(){
        return "El terreno mide: "+this.largo*this.ancho+" m2\n"+"la dirección es: "+this.direccion
    }   
}

class edificio extends construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
    terrenoEdificio(direccionNew){
        let direccionOld = this.direccion
        this.direccion = direccionNew
        return "El terreno mide: "+this.largo*this.ancho+" m2\n"+"la dirección antigua es: "+direccionOld+"\nLa nueva dirección es: "+this.direccion
    }   
}

let cerezos21 = new casa(6,6,2,"Av. de los Cerezos #21","7 m",20,30);
let HospGral = new edificio(60,60,10,"Canal de Mayagoitia #266","80 m",35,42);

console.log("*CASA*");
console.log(cerezos21.terrenoCasa());
console.log("");
console.log("*EDIFICIO*")
console.log(HospGral.terrenoEdificio("Barranca del Muerto #1088"));