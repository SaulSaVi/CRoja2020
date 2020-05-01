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
