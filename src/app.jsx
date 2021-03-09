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
  const [type2, setType2] = useState('');
  const [sprite, setSprite] = useState('');
  const [ability, setAbility] = useState('');
  const [statsHP, setStatsHP] = useState('');
  const [statsAttack, setStatsAttack] = useState('');
  const [statsDefense, setStatsDefense] = useState('');
  const [statsSAttack, setStatsSAttack] = useState('');
  const [statsSDefense, setStatsSDefense] = useState('');
  const [statsSpeed, setStatsSpeed] = useState('');

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  function search(target) {
    const link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    if (target.key === "Enter") {
      fetch(`http://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}/`)
        .then(res => res.json())
        .then(result => {
          setPokemon(result);
          setQuery('');


        if (result) {
          setName(result.species.name);
          setType('');
          setType(result.types[0].type.name);
          setType2('');
          if (result.types[1] !== undefined) {
            setType2(result.types[1].type.name);
          }
          setId(result.id);
          setStatsHP(result.stats[0].base_stat);
          setStatsAttack(result.stats[1].base_stat);
          setStatsDefense(result.stats[2].base_stat);
          setStatsSAttack(result.stats[3].base_stat);
          setStatsSDefense(result.stats[4].base_stat);
          setStatsSpeed(result.stats[5].base_stat);
          setAbility(result.abilities[0].ability.name);
          setSprite(link.concat(result.id, ".png"));

          setHeight(result.height)
          setWeight (result.weight)

          document.getElementById('line1').classList.remove("progress-line");
          document.getElementById('line2').classList.remove("progress-line");
          document.getElementById('line3').classList.remove("progress-line");
          document.getElementById('line4').classList.remove("progress-line");
          document.getElementById('line5').classList.remove("progress-line");
          document.getElementById('line6').classList.remove("progress-line");

          window.setTimeout(addClass, 0)

          function addClass() {
          document.getElementById('line1').classList.add("progress-line");
          document.getElementById('line2').classList.add("progress-line");
          document.getElementById('line3').classList.add("progress-line");
          document.getElementById('line4').classList.add("progress-line");
          document.getElementById('line5').classList.add("progress-line");
          document.getElementById('line6').classList.add("progress-line");
        }
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
        pokemonName = {name} type = {type} type2 = {type2} sprite = {sprite} id = {id} statsHP = {statsHP}
        statsAttack = {statsAttack} statsDefense = {statsDefense} statsSAttack = {statsSAttack}
        statsSDefense = {statsSDefense} statsSpeed = {statsSpeed} ability = {ability} height = {height} weight = {weight}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;
