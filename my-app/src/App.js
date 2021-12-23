import React, { Fragment, useState, useEffect } from 'react'
import Slideshow from './Slide';
import './App.css'
import axios from 'axios';

function App() {

  const [clicked, plusone] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',

      );
      setData(result.data);

    };
    fetchData();
  }, []) // pour pas qu'il fasse l'appel de api a l'infini.

  return (
    <div>
      <h2 className="App">Voici mes differents contenu<hr /></h2>
      <div className="App"><Slideshow /></div>

      <div><hr className='hrv' /></div>

      <div className="App">
        <p>Nombre de fois que tu as cliqué : {clicked}</p>
        <button className="AppBouton"
          onClick={() => {
            plusone(clicked + 1);
          }}>Clique</button>
      </div>
      <br/>
      <div><hr className='hrv' /></div>

      <Fragment>
        <h1 className='App'>Traitement de fichier json : </h1> <hr/>
        
        <ul>
          {data.map(item => (
            <li key={item.id}>

              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    </div>
  );
}

export default App;
