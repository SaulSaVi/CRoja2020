// Método 1: Arreglo de objetos

// let llano = {
//     titulo: 'El llano en llamas',
//     autor: 'Juan Rulfo',
//     leido: true
// }

// let ciudad = {
//     titulo: 'La ciudad y los perros',
//     autor: 'Mario Vargas Llosa',
//     leido: true
// }

// let colmena = {
//     titulo: 'La colmena',
//     autor: 'José Camilo Cela',
//     leido: false
// }

// let aleph = {
//     titulo: 'El aleph',
//     autor: 'Jorge Luis Borges',
//     leido: false
// }

// let bestiario = {
//     titulo: 'Bestiario',
//     autor: 'Julio Cortazar',
//     leido: true
// }

// let detectives = {
//     titulo: 'Los detectives salvajes',
//     autor: 'Roberto Bolaño',
//     leido: true
// }

//     let biblioteca = [llano,colmena,ciudad,aleph,bestiario,detectives]


//     for(let i=0; i < biblioteca.length; i++){
//         console.log(" ")
//         console.log("Libro: "+biblioteca[i].titulo)
//         console.log("Autor: "+biblioteca[i].autor)
//         if(biblioteca[i].leido == true){
//             console.log("Estado: Ya leiste este libro")
//         }else{
//             console.log("Estado: Aún no has leido este libro")
//         }
//         console.log('--------------------')
//     }

//Método 2: Arreglo de clases (usando constructor)

class libro {

    constructor(titulo,autor,leido){
        this.titulo = titulo
        this.autor = autor
        this.leido = leido
    }
}

let llano = new libro('El llano en llamas','Juan Rulfo',true)
let ciudad = new libro('La ciudad y los perros','Mario Vargas Llosa',true)
let colmena = new libro('La colmena','José Camilo Cela',false)
let aleph = new libro('El aleph','Jorge Luis Borges',false)
let bestiario = new libro('Bestiario','Julio Cortazar',true)
let detectives = new libro('Los detectives salvajes','Roberto Bolaño',true)


    let biblioteca = [llano,colmena,ciudad,aleph,bestiario,detectives]
    let contador = 0

    for(let i=0; i < biblioteca.length; i++){
        console.log(" ")
        console.log("Libro: "+biblioteca[i].titulo)
        console.log("Autor: "+biblioteca[i].autor)

        if(biblioteca[i].leido == true){
            console.log("Estado: Ya lo leiste")
            contador++
        }else{
            console.log("Estado: No lo has leido")
        }
        console.log('--------------------')
    }
    console.log(" ")
    console.log("Has leido "+contador+" de "+biblioteca.length+" libros en tu biblioteca")

    if(contador/biblioteca.length < 0.5){
        console.log("Te falta leer compadre, ¡no llevas ni la mitad!")
    }else if(contador/biblioteca.length >= 0.5 && contador/biblioteca.length < 0.8){
        console.log("Ahí la llevas Jimmy.")
    }else{
        console.log("Sal a que te de el sol chavo, te lo has ganado.")
    }