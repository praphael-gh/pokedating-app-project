import React, {useState, useEffect} from "react";
import Header from "./Header";
import Search from "./Search";
import PokeContainer from "./PokeContainer";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:3000/pokemons")
    .then((resp) => resp.json())
    .then((data)=> {
      setPokemon(data);
      console.log(data)
    });
  }, []);   

  if(!pokemon) return <p>Loading...</p>

  const displayedPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  

return (
    <div className="App">
      <Header />
          
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PokeContainer pokemons={displayedPokemon}/>
        
    </div>
  );
}

export default App;
