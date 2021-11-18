import React from "react";

function PokeMatch({pokemon:{image, name, pokeindex, type, weight}}) {
    return (
    <div id="poke-match">
        <img src={image} alt="pokemon front view"/>
        <p>Name: {name}</p>
        <p>Index Number: {pokeindex}</p>
        <p>Type: {type}</p> 
        <p>Weight: {weight}lbs</p> 
    </div>
    )
}

export default PokeMatch;