import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardGif from './CardGif';

function App() {
  const URL = 'https://api.giphy.com/v1/gifs/search?api_key=ZUGfbWJ1xJnOZ0YnBsqp0hiRhlYOMgHm&q='
  const [search, setSearch] = useState('welcome'); //Este va a guardar el valor a buscar de los gifs
  const [gifs, setGifs] = useState([]); //Esto va a guardar los gifs de la api

  useEffect(() => {
    console.log('Desde use effect')
    
    axios.get(URL+search).then((response) => {
      setGifs(response.data.data) //primer data es de axios, segundo data es de respuesta de giphy
    }).catch((error) => {
      console.log(error)
    })

  },[])

  const findGif = (event) => {
    event.preventDefault() //evita que se recargue la página al hacer submit al form llamada la api
    axios.get(URL+search).then((response) => {
      setGifs(response.data.data)//primer data es axios, segundo data es la respuesta de giphy
    }).catch((error) => {
      console.log(error)
    })
       
  }

  return (
    <div className="App">
      <h2>Giphy App</h2>
      <div  className="container my-5">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8">
              <form onSubmit={findGif} className="form-inline justify-content-center">
                  <input className="form-control" 
                    onChange={(event) => setSearch(event.target.value) } 
                    placeholder={`Ej. ${search}`} name="gif" 
                  />
                  <button type="submit" className="btn  btn-success">Buscar</button>
              </form>
            </div>
        </div>
        <div className="row mt-5">
          { gifs.length > 0 ? gifs.map((gif) => {
            return(
              <CardGif title={gif.title} url={gif.images.downsized_large.url} />
            )
          }) : (
            <div className="col-12">
                <h1>No hay resultados en tu busqueda 😢🐱‍👤🙌</h1>
            </div>
          )
        
        }
        </div>
      </div>
    </div>
  );
}

export default App;
