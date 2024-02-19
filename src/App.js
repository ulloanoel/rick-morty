
import imageRickmorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';
function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    //console.log(characters);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="title">Rick Marty</h1>
       {characters ? (
          <Characters characters = {characters} setCharacters = {setCharacters} />
          ) : (
            <>
              <img src={imageRickmorty} alt="Rick & Marty" className="img-home"></img>
              <button onClick={reqApi} className="btn-search">Buscar nombres</button>
            </>
              )  
        }
     
      </header>
    </div>
  );
}

export default App;
