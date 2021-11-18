import React from "react"
import PokeCard from "./PokeCard"

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