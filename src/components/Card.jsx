import React, {useState} from "react";
import './PokeList';
import ReactDOM from "react-dom";

function Card(props) {

    const name = props.pokemonName;
    const sprite = props.sprite;
    const type = props.type;
    const type2 = props.type2;


    const typeimg = "./icons/".concat(type, ".svg");
    var type2img = "./icons/".concat(type2, ".svg");

    if (type2 === "") {
       type2img = "./icons/".concat("blue-1.png");

    }

    const id = props.id;
    const hp = props.statsHP;
    const attack = props.statsAttack;
    const defense = props.statsDefense;
    const sattack = props.statsSAttack;
    const sdefense = props.statsSDefense;
    const speed = props.statsSpeed

    const ability = props.ability;

    const statWidth = "80";
    const statWidthStyle = {
      "--content": statWidth
    }

    const height = props.height;
    const weight = props.weight;
   return (
    <div className="detail-view">
    <div className ="row">
      <div className="col-md-6 name">
        <h1 classname = "name">#{id} {name.toUpperCase()}</h1>
        <div className = "picture">
          <img className = "sprite" src = {sprite}/>
        </div>
      </div>
      <div className="col-md-6 stats">
        <h1 className = "type">Type(s): {type.charAt(0).toUpperCase() + type.slice(1)} {type2.charAt(0).toUpperCase() + type2.slice(1)}</h1>
        <div className= {type2.concat(" icon")} id="type2">
          <img src ={process.env.PUBLIC_URL + type2img}></img>
        </div>
        <div className= {type.concat(" icon")}>
          <img src ={process.env.PUBLIC_URL + typeimg}></img>
        </div>

        <h1 className = "ability"> Ability: {ability.charAt(0).toUpperCase() + ability.slice(1)}</h1>
        <h2 className = "ability"> Height: {height} m</h2>
        <h2 className = "ability"> Weight: {weight} kg</h2>
        <div className="skill-bars">
            <div className="bar">
              <div className="info">
                <span>HP: {hp}</span>
              </div>
              <div className="progress-line hp" id ="line1">
                <span style={{"width": hp * 1.5}}></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>ATTACK: {attack}</span>
              </div>
              <div className="progress-line attack" id ="line2">
                <span style={{"width": attack * 1.5}}></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>DEFENSE: {defense}</span>
              </div>
              <div className="progress-line defense" id ="line3">

                <span style={{"width": defense * 1.5}}></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>SP.ATTACK: {sattack}</span>
              </div>
              <div className="progress-line sattack" id ="line4">
                <span style={{"width": sattack * 1.5}}></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>SP.DEFENSE: {sdefense}</span>
              </div>
              <div className="progress-line sdefense" id ="line5">

                <span style={{"width": sdefense * 1.5}}></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>SPEED: {speed}</span>
              </div>
              <div className="progress-line speed" id ="line6">

                <span style={{"width": speed * 1.5}}></span>
              </div>
            </div>
          </div>

        </div>

      </div>

  </div>
  )

}

export default Card;
