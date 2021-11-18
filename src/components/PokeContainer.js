import React, { useEffect, useState } from "react";

import PokeCard from "./PokeCard";

function PokeContainer() {
    const [pokeCatalog, setPokeCatalog] = useState([])

    useEffect(() => { 
        
        for (let i = 1; i <= 9; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(resp => resp.json())
            .then((pokeLogData) => {
                setPokeCatalog(pokeLogData)
            })
        }
    })

    function handleCatalogFill(pokemonObj) {
        return (
            <div>
                <PokeCard 
                key={pokemonObj.index} 
                image={pokemonObj.sprites.front_default}
                name={pokemonObj.name.toUpperCase()} 
                indexNumber={pokemonObj.order} 
                type={pokemonObj.types[0].type.name.toUpperCase()}
                weight={pokemonObj.weight} />
            </div>
        )}

        // return handleCatalogFill()
    }


export default PokeContainer;