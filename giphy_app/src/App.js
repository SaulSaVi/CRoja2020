import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const URL = 'https://api.giphy.com/v1/gifs/search?api_key=ZUGfbWJ1xJnOZ0YnBsqp0hiRhlYOMgHm&q='
  const [search, setSearch] = useState('welcome');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log('Desde use effect')
    console.log(search)
  },[])

  const findGif = (event) => {
    event.preventDefault()//evita que se cargue la página al hacer submit
    axios.get(URL+search).then((response) => {
      setGifs(response.data.data)//primer data es axios, segundo data es la respuesta de giphy
    }).catch((error) => {
      console.log(error)
    })
      
  }

  return (
    <div className="App">
      <h2>Giphy App</h2>
      <div className = "container">
        <div className = "row justify-content-center">
            <div className = "col-12 col-sm-8 col-md-8 col-lg-8">
              <form onSubmit = {findGif} className = "form-inline justify-content-center">
                <input className = "form-control" 
                onChange = {(event) => setSearch(event.target.value)}
                placeholder = "gatitos" name = "gif" />
                <button type = "submit" className = "btn btn-succes">buscar</button>
              </form>
            </div>
        </div>
        <div className = "row mt-5">
          {gifs.map((gif) => {
            return(
              <div className = "col-12 col-sm-12 col-md-4 col-lg-4">
            <div className = "card bg-white text-dark">
              <img className = "card-img" alt = "" src={gif.images.downsized_large,URL} />
              <h5 className = "card-title">Pikachu!</h5>
            </div>
          </div>
            )
          })}
          
        </div>
        <div className = "row">
          <div className = "col-12 col-sm-12 col-md-4 col-lg-4">
            <div className = "card bg-white text-dark">
              <img className = "card-img" alt = "" src="https://i.pinimg.com/originals/b2/ba/a2/b2baa2572cd45616566251d9dd493505.gif"/>
              <h5 className = "card-title">Pikachu!</h5>
            </div>
          </div>
        </div>
        <div className = "row">
          <div className = "col-12 col-sm-12 col-md-4 col-lg-4">
            <div className = "card bg-white text-dark">
              <img className = "card-img" alt = "" src="https://media1.tenor.com/images/5813b57e4fe482207e45c8f078f7da61/tenor.gif?itemid=15068220"/>
              <h5 className = "card-title">Pikachu!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
