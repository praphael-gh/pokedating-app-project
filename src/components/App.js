import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";


import Home from "./Home"
import About from "./About";
import NavBar from "./NavBar";
import PokeCard from "./PokeCard";
import PokeContainer from "./PokeContainer";

function App() {
  const [pokemon, setPokemon] = useState("")

  // This pulls 1 random pokemon
  useEffect(() => {
    let i = Math.floor(Math.random() * 9) + 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(resp => resp.json())
    .then(pokemonData => {
      console.log(pokemonData)
      setPokemon(pokemonData);
    });
}, []); 

  if(!pokemon) return <p>Loading...</p>

return (
    <div>
      <Home />
      <NavBar />
      <Switch>
        <Route exact path="/catalog">
          <PokeContainer />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <PokeCard pokemon={pokemon}/>
      {/* <PokeContainer />   */}
    </div>
  );
}

export default App;