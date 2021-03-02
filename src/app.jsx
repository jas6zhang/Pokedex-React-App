import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

import PokeList from "./components/PokeList"
import "./styles.css"

function App() {

  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [sprite, setSprite] = useState('');

  function search(target) {
    const link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    if (target.key === "Enter") {
      fetch(`http://pokeapi.co/api/v2/pokemon/${query}/`)
        .then(res => res.json())
        .then(result => {
          setPokemon(result);
          setQuery('');
        if (result) {
          setName(result.species.name);
          setType(result.types[0].type.name);
          setId(result.id);
          setSprite(link.concat(result.id, ".png"));

        }
          console.log(result)
        });
      }
    }


  return (
      <div>
        <div className="App">
          <Header className = "title" />
          <input
          className = "title"
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
          value = {query}
          />


        <Card
        pokemonName = {name} type = {type} sprite = {sprite} id = {id}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
