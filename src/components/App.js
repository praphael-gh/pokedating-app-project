import React, {useState, useEffect} from "react";
import Header from "./Header";

function App() {
  const [pokemon, setPokemon] = useState(null)
  
  useEffect(() => {
    // const numberOfPokemon = 
    for (let i = 1; i <= 8; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((resp) => resp.json())
    .then((data)=> {
      setPokemon(data);
    });
}}, []);   

  if(!pokemon) return <p>Loading...</p>

return (
    <div className="App">
      <Header />
      <img src={pokemon.sprites.front_default} alt="pokemon front view"/>
      <p>Name: {pokemon.name.toUpperCase()}</p>
      <p>Index Number: {pokemon.order}</p>
      <p>Type: {pokemon.types[0].type.name.toUpperCase()} </p> 
      <p>Weight: {pokemon.weight}lbs</p>    
        
    </div>
  );
}

export default App;

// function App() {
//   const [pokemon, setPokemon] = useState(null)
  
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
//     .then((resp) => resp.json())
//     .then((data)=> {
//       setPokemon(data.results);
//     });
// }, []);   

//   if(!pokemon) return <p>Loading...</p>

// return (
//     <div className="App">
//       <Header />
//       <div> {pokemon.map((pokemon) => pokemon.name)} </div>
//     </div>
//   );
// }

// export default App;