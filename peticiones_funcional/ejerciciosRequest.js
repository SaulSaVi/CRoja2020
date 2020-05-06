const request = require('request');


function atrapar(error,response,body){//Este es mi callback
    console.log(response.statusCode) //200
    const data = JSON.parse(body)//convierte un JSON en js
    
    data.results.map((pokemon) => {
        console.log(pokemon.name)
    })
    // console.log("===== Segundo For =====")
    // for (const pokemon of data.results){
    //     console.log(pokemon.name)
    // }

}

request('https://pokeapi.co/api/v2/pokemon/', atrapar)