import React, { useEffect, useState } from "react";

import PokeCard from "./PokeCard";

// function PokeContainer({pokemon}) {
//     const pokeListed = pokemon.map((pokemonObj) => {
//         return (
//             <div>
//                 <PokeCard 
//                 key={pokemonObj.id}
//                 pokemon={pokeListed}
//                 />
//             </div>
//         )
// })
// }
function PokeContainer ({pokemons}) {
    return (
      <main>
       <ul className="cards">
        {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
       </ul>
      </main>
     );
}


export default PokeContainer;