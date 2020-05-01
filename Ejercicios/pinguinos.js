
let myPenguin = {
    nombre:'King Dedede',
    origen:'kirbys dreamland',
    notas: 'enemigo/amigo de kirby'
};

console.log("Hola, soy un pinguino y mi nombre es ",myPenguin.nombre);

myPenguin.puedeVolar = false;

myPenguin.graznar = () =>{
    console.log("¡Kaww Kaww!")
};

myPenguin.saludar = function() {
    return "Hola, soy un pinguino y mi nombre es "+this.nombre
}
console.log(myPenguin.saludar());

myPenguin.nombre = "Señor Pingu";
console.log(myPenguin.saludar());

myPenguin.volar = function(){
    if(this.puedeVolar == true){
        return "¡Puedo volar!"
    }else{
        return "No puedo volar :("
    }
}
console.log(myPenguin.volar());

myPenguin.puedeVolar = true;
console.log(myPenguin.volar());

