import React, {useState, useEffect} from "react";
import Header from "./Header";
import PokeCard from "./PokeCard";

function App() {
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => {
    // const numberOfPokemon = 
    // let i be a randam number between 1-10; i is the index of which loop we are at
    for (let i = 1; i <= 8; i++)
     {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((resp) => resp.json())
    .then((data)=> {
      console.log(data)
       setPokemon(data);
      //setPokemon([...pokemon, data])
    });
}}, []);   

  if(!pokemon) return <p>Loading...</p>

return (
    <div className="App">
      <Header />
     <PokeCard pokemon={pokemon}/>  
    </div>
  );
}

export default App;