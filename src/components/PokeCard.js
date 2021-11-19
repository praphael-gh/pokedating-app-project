import React from "react";
// import {pokemon} from "../data/db.json"

function PokeCard({pokemon:{ image, name, pokeindex, type, height, weight }}) {
return (
<div id="poke-card">
<img classname="cardImage" src={image} alt="pokemon front view"/>
    <p className="cardName" >Name: {name}</p>
    <p>Index Number: {pokeindex}</p>
    <p>Type: {type}</p> 
    <p>Height: {height}ft</p>
    <p>Weight: {weight}lbs</p> 
</div>
)
}

export default PokeCard;
