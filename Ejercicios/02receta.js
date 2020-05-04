    //Ejercicio Receta

    // Crea un objeto que contenga información de una receta
    // para preparar Mole. Debe contener las propiedades de
    // título (string), porciones (numero) e ingredientes (un
    // arreglo de strings). Muestra la información de la receta
    // para que luzca así:
    // Mole
    // Porciones: 2
    // Ingredientes:
    // canela
    // comino
    // cocoa

let receta = {
    platillo:'+chanwis+',
    porciones:4,
    ingredientes: ['pan', 'jamon', 'quesito', 'mayonesa', 'capsun', 'mostaza', 'chilitos']
}
console.log(receta.platillo);
console.log("porciones:"+receta.porciones);
console.log("ingredientes:");

for (let i = 0; i<receta.ingredientes.length; i++){
    console.log(receta.ingredientes[i])
}
