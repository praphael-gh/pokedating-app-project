import React from "react";

function PokeCard({ pokemon: {sprites, name, order, weight, types} }) {

return (
<div>
 <img src={sprites.front_default} alt="pokemon front view"/>
 <p>Name: {name.toUpperCase()}</p>
 <p>Index Number: {order}</p>
 <p>Type: {types[0].type.name.toUpperCase()} </p> 
 <p>Weight: {weight}lbs</p> 
 </div>
)
}

export default PokeCard;