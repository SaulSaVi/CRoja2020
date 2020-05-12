const axios = require('axios');

const id = '25'
const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

const catchemall = axios.get(url)

catchemall.then ((response) => {
    
    const pokedex = response.data
    
    console.log(`\n++POKEDÉX++\n`);

    for (const info of pokedex){
        console.log(ìnfo.type);
    }
}).catch ((error => {
    console.log(error.response.data);
}))


