    //Ejercicio 1

    //Hacer una petición a cualquier pokemon y mostrar sus tipos. API: https://pokeapi.co/

const request = require('request');


function catchemall(error,response,body){
    console.log("Status Code: "+response.statusCode)
    const data = JSON.parse(body)
    
    console.log("\n++POKEDÉX++\n")
    console.log("Name: "+data.name+" (#"+data.id+")");
    for (let i = 0; i < data.types.length; i++){
        if(i == 0){
            console.log("Primary type: "+data.types[i].type.name);
        }else{
            console.log("Secondary type: "+data.types[i].type.name);
        }
    }
}

let id = '25'
request(`https://pokeapi.co/api/v2/pokemon/${id}/`, catchemall)


//Probados:
//pikachu - 25
// tyranitar - 248
// dragonite - 149
// clebi - 251