import React from 'react';
import './PokeList';
import ReactDOM from "react-dom";
import bug from "./icons/bug.svg";
import normal from "./icons/normal.svg";
import fire from "./icons/fire.svg";
import water from "./icons/water.svg";
import grass from "./icons/grass.svg";
import electric from "./icons/electric.svg";

function Card(props) {

    const name = props.pokemonName;
    const sprite = props.sprite;
    const type = props.type;
    const typeimg = type.concat("img");
    const id = props.id;

   return (
    <div className="detail-view">
    <div className ="row">
      <div className="col-md-4 name">
        <h1 classname = "name">#{id} {name.toUpperCase()}</h1>
      </div>
      <div className="col-md-8 stats">
        <h1>Type: {type}</h1>
        <div className="icon">
          <img src ={typeimg}></img>
          </div>
        </div>
      </div>
    <div className = "picture">
      <img className = "sprite" src = {sprite}/>
    </div>
  </div>
  )

}

export default Card;
