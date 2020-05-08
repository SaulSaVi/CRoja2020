//Ejercicio 1

// Hacer una petición a cualquier pokemon y mostrar sus tipos. API: https://pokeapi.co/

const request = require('request');


function atrapar(error,response,body){//Este es mi callback
    console.log(response.statusCode) //200
    const data = JSON.parse(body)//convierte un JSON en js
    
    console.log(data.name);
    console.log(data.types);


    // data.results.map((pokemon) => {
    //     console.log(pokemon.moves.name)
    // })
    // console.log("===== Segundo For =====")
    // for (const pokemon of data.results){
    //     console.log(pokemon.name)
    // }

}

request('https://pokeapi.co/api/v2/pokemon/25/', atrapar)

let types = [
    {
      slot: 1,
      type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' }
    }
  ]


// function getPeopleBad(error,response, body){ //call back
//     console.log(response.statusCode) // 200 ---> 0k de que todo estuvo bien
//     const data = JSON.parse(body);

//     data.results.map((personaje) => { // calback hell -----Nunca hacer esto 
//        request(personaje.homeworld, function(error, response, body){
//            const planeta = JSON.parse(body)
//             for (const naveURL of personaje.starships) {
//                 request(naveURL,function(error,response, body){
//                     const nave = JSON.parse(body);
//                     console.log("El personaje es:  ", personaje.name)
//                     console.log("Su planeta es: ", planeta.name)
//                     console.log("Su nave es: ", nave.name )
//                 })
//             }
//        })
//     })

//     // for ( const person of data.results){
//     //     console.log("El personaje es: ",person.name)
//     //     request(person.homeworld,getPlanet) // Se ejecuta 10 veces
//     // }

// }