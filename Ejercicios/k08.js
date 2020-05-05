    //Ejercicio 08 Katas

    // Crea una funcion llamada frequent() que recibirá de parámetro 
    // un arreglo con distintos números.
    // retornar el elemento más frecuente dentro del arreglo.


function frequent(ingreso){
    let frecuencia = 1;
    let counter = 0;
    let moda;

    for (let i=0; i < ingreso.length; i++){

        for(let j=i; j < ingreso.length; j++){

            if(ingreso[i] == ingreso[j]){
                counter++;
            }
            if(frecuencia < counter){
                frecuencia = counter;
                moda = ingreso[i];
            }
        }
        counter = 0;
    }
    console.log(`moda: ${moda}, frecuencia: ${frecuencia}`)
}

frequent([1,1,2,2,2,3,4,4,4,4,5,5]);


