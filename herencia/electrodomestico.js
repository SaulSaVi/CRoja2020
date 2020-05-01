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
        super(precio,color,capacidad,this.consEner)
        this.carga = carga
    }

    precioFinal(){
        return this.carga*this.consEner
    }
}

