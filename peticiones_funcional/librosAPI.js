    //Ejercicio 2

    //Hacer una petición por autor y devolver la lista de sus libros.
    // http://openlibrary.org/search.json?author="author"

const request = require('request');


function librarian(error,response,body){
    console.warn("Status Code: "+response.statusCode);
    const data = JSON.parse(body);
    let total = [];
    let coleccion;
    
    console.log("\nColección de: "+escritor+"\n");
    for (let i = 0; i < data.docs.length; i++){
        total.push(data.docs[i].title);
    }
    coleccion = [...new Set(total)];
    console.log("Total de libros: "+coleccion.length+"\n");
    for (let j = 0; j < coleccion.length; j++){
        console.log("#"+(j+1)+": "+coleccion[j]);
    } 
}

let escritor = 'Margaret Atwood'
request(`http://openlibrary.org/search.json?author=${escritor}`, librarian)

//Probados:
// J.D. Salinger
//Margaret Atwood
// Stephen King
// H.P. Lovecraft
//Guy de Maupassant
//Adela Fernandez
//J.K. Rowling
//Arthur Golden
//Margaret Mitchell
//Thomas Pynchon
//Enrique Perez Escrich
//Elena Garro

