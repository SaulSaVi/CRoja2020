    //Ejercicio cajero

    // Crear una clase Cuenta que tenga los siguientes atributos y metodos:
    // -Titular y cantidad
    // -ingresar(cantidad)
    // -retirar(cantidad)
    // Hacer las validaciones previas
    // Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
    constructor(titular,saldo){
        this.titular = titular
        this.saldo = saldo
    }
    retirar = function (cantidad) {
        if(parseFloat(cantidad) > this.saldo || this.saldo - parseFloat(cantidad) < 10){
            return "SALDO INSUFICIENTE (SALDO MINIMO $10.00)"
        }else{
            this.saldo -= cantidad
            return "SU SALDO ACTUAL ES $"+this.saldo+"\n\n-OPERACION FINALIZADA-"
        }
    }
    abonar = function (cantidad) {
        if(parseFloat(cantidad) + this.saldo > 900){
            return "LA OPERACION SUPERA SU SALDO LÍMITE (SALDO MÁXIMO $900.00)"
        }else{
            this.saldo += cantidad
            return "SU SALDO ACTUAL ES $"+this.saldo+"\n\n-OPERACION FINALIZADA-"
        }
    }
    consultar = function () {
        return "SU SALDO ES DE $"+this.saldo+"\n\n-OPERACION FINALIZADA-"
    }
}

let bancomer = new Cuenta('ERNESTO PAEZ ARTEAGA',500)

console.log("-BIENVENIDO AL SU CAJERO AUTOMATICO-")
console.log("")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('INDIQUE LA ACCIÓN A REALIZAR\n1:CONSULTAR SALDO\n2:REALIZAR UN DEPOSITO\n3:RETIRAR EFECTIVO\n\nACCIÓN: ', (answer) => {
  
  if(answer == 1){
    console.log(bancomer.consultar())
  }else if(answer == 2){
    console.log(bancomer.abonar(50))
  }else if(answer == 3){
    console.log(bancomer.retirar(200))
  }

  rl.close();
});




