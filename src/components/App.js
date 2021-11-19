import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home"
import About from "./About";
import NavBar from "./NavBar";
import PokeContainer from "./PokeContainer";
import PokeForm from "./PokeForm";
import Search from "./Search";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleNewPokemon(newPokemon) {
    const newPokemonArray = [...pokemon, newPokemon]
    setPokemon(newPokemonArray)
    }

  // This pulls 1 random pokemon
  useEffect(() => {
    fetch('http://localhost:3001/pokemons')
    .then(resp => resp.json())
    .then(pokemonData => {
      console.log(pokemonData);
      setPokemon(pokemonData);
    });
}, []); 

  if(!pokemon) return <p>Loading...</p>

  const displayedPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

return (
    <div>  
      <NavBar />
      {/* <Search search={searchTerm} onSearchChange={setSearchTerm}/> */}
      <Switch>
        <Route exact path="/newform">
          <PokeForm handleNewPokemon={handleNewPokemon}/>
        </Route>
        <Route exact path="/catalog">
          <Search search={searchTerm} onSearchChange={setSearchTerm}/>
          <PokeContainer pokemons={displayedPokemon}/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home pokemons={pokemon}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;