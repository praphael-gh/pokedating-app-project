import React from "react";

function PokeCard({pokemon}) {

return (
<div>
 <img src={pokemon.sprites.front_default} alt="pokemon front view"/>
 <p>Name: {pokemon.name.toUpperCase()}</p>
 <p>Index Number: {pokemon.order}</p>
 <p>Type: {pokemon.types[0].type.name.toUpperCase()} </p> 
 <p>Weight: {pokemon.weight}lbs</p> 
 </div>
)
}

export default PokeCard