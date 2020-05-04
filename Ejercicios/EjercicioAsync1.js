  //Ejercicios ASYNC

  // 1.- Muestra un mensaje en consola mediante un callback

  console.log("PARTE 1")

  function bisquetes(pregon, callback){
      console.log(pregon);
      callback();
    }
    
    bisquetes('¡BISQUETES CALIENTITOS!', function(){
      console.log('¡LLEVE SUS BISQUETES!');
    });
    console.log("");

  // 2.- Crear una función de orden superior que reciba como
  //     argumento un mensaje y callback. Según el callback que
  //     se pase como argumento, la función de orden superior
  //     debe mostrar el mensaje en un console.warn o en un console.log
    
  console.log("PARTE 2")

function aviso(mensaje,callback){
  console.log("*AVISO:*");
  callback(mensaje);
}

function declaracion(mensaje){
  console.log("Esto es una declaración: "+mensaje);
}

function advertencia(mensaje){
  console.warn("esto es una advertencia: "+mensaje);
}

aviso("Los perros se bañan de lunes a sábado",declaracion);
aviso("Cualquier niño perdido será adoptado por los orangutanes",advertencia);

  console.log("");


  // 3.- Crear una función de orden superior que reciba como
  //     argumentos dos números y un callback. Según el callback
  //     que se pase a la función, se devuelve la suma de los
  //     dos números, la resta de los dos números o la
  //     multiplicación de los dos números.

  console.log("PARTE 3")

function operadores(a, b, callback){
    callback(a,b);
    }

function suma(a,b){
  console.log(a+"+"+b+" =",a+b)
}    

function resta(a,b){
  console.log(a+"-"+b+" =",a-b)
}  

function multiplicacion(a,b){
  console.log(a+"*"+b+" =",a*b)
}  

operadores(8,7,suma)
operadores(5,4,resta)
operadores(9,9,multiplicacion)
console.log("")

// 4.- Escribe una funcion de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayusculas o en minusculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELAGARTO

console.log("PARTE 4")

function modifier(palabra, callback){
  console.log("Usted ingreso: "+palabra)
  callback(palabra)
}

function minus(palabra){
  console.log("-> "+palabra.toLowerCase())
}

function mayus(palabra){
  console.log("-> "+palabra.toUpperCase())
}

modifier("gato",mayus)
modifier("CaRaCol",minus)

console.log("")

// 5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
//     EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas)
//     mediante un callback

console.log("PARTE 5")

function cronometrar(tiempos,callback){
  console.log("Tiempos registrados: "+tiempos)
  callback(tiempos)
}

function calificados(tiempos){
  let pasan = []

  for (let i=0; i < tiempos.length; i++){
    if(tiempos[i]/60 > 2){
      pasan.push(tiempos[i])
    }
  }
  console.log("Califican: "+pasan)
}

let maraton1 = [120,80,200,100,150,360]

cronometrar(maraton1,calificados)
