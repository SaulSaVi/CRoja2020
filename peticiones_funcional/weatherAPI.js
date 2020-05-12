//Ejercicio 3

//Realizar un programa que obtenga el clima de mi ciudad y muestre el clima actual
//y el clima de los ultmios 5 dias en este formato:
// Ciudad: Mexico City
// clima actual : 26 c
// el 2020-04-04 clima : 24c
// ....
//http://api.weatherapi.com/v1/forecast.json?key={mi api key}&q={mi ciudad}&days=5

const request = require('request');


function weather(error,response,body){
    console.warn("Status Code: "+response.statusCode);
    const data = JSON.parse(body);

    console.log(data)

}
const ciudad = 'Mexico_City';
const diaInicial = '2020-05-06';
const diaFinal = '2020-05-10';

request(`http://api.weatherapi.com/v1/history.json?key=ae2fd57c95844eaa9c924023200605&q=${ciudad}&dt=${diaInicial}&end_dt=${diaFinal}`, weather)
