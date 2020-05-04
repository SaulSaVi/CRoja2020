    //Ejercicio Electrodomesticos

    // Crea una superclase llamada Electrodoméstico con las
    //     siguientes características:
    //     a. Sus atributos son precio, color, consumoEnergetico
    //        y capacidad (peso máximo)
    //     b. El constructor solo debe pedir precio, color
    //        y capacidad.
    //     c. consumoEnergetico debe iniciar con valor de 100

    // Crea una subclase de Electrodomestico llamada Lavadora
    //     con las siguientes características:
    //     a. Su atributo es carga(kg de ropa), además de los
    //        atributos heredados.
    //     b. Crea el método precioFinal(). Este se calcula
    //        multiplicando el consumoEnergetico por la carga.

class electrodomestico{

    constructor(precio,color,capacidad){
        this.precio = precio
        this.color= color
        this.capacidad = capacidad
        this.consEner = 100
    }
}

class lavadora extends electrodomestico{
    
    constructor(precio,color,capacidad,carga){
        super(precio,color,capacidad)
        this.carga = carga
    }

    precioFinal(){
        return this.carga*this.consEner
    }
}

let mabe = new lavadora(500,'rojo','50kg',20)
console.log('*Lavadora*')
console.log("")
console.log("Precio: $"+mabe.precio)
console.log("Color: "+mabe.color)
console.log("Consumo Energético Final: "+mabe.precioFinal()+" Kwh*Kg")