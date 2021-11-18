import React from "react";

function PokeCard({ pokemon: {image, name, order, weight, type} }) {

return (
<div>
 <img src={image} alt="pokemon front view"/>
 <p>Name: {name}</p>
 <p>Index Number: {order}</p>
 <p>Type: {type} </p> 
 <p>Weight: {weight}lbs</p> 
 </div>
)
}

export default PokeCard;