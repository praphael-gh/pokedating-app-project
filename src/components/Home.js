import React from "react";
import PokeRandom from "./PokeRandom"

function Home({randomPokemon}) {

    return (
    <>
        <h3>Welcome to PokeIndexZ</h3>
        <PokeRandom pokemon={randomPokemon} />
    </>
    )
}

export default Home;