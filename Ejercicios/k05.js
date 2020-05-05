    //Ejercicio 05 Katas

    // Crea una función llamada palindrome() que reciba como parametro una oración, 
    // si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false

function palindrome(str){
    let array = str.split(" ");
    let oracion = array.join("");
    let largo = oracion.length;
    let half = Math.floor(largo/2);
    let j = 0;

    for (let i = 0; i < half; i++){
        if (oracion[i] !== oracion[largo -1 -i]){
            j++
            break
        }
    }
    if (j == 0){
        return true
    }
    else {
        return false
    }
}

let oracion1 = "el perro es alto";
let oracion2 = "anita lava la tina"

console.log("-ANALIZADOR DE PALINDROMOS-")
console.log(oracion1+": "+palindrome(oracion1));
console.log(oracion2+": "+palindrome(oracion2));
