import React from "react";
import About from "./About"
import NavBar from "./NavBar";

function Header() {
    return (
        <>
        <header>
        <img src="./assets/pokedating.png" alt="PokeDatingzZ"/>
        <h1>
        PokeDatingzZ
        <span className="logo" role="img">
        💗 
        </span>
      </h1>
      </header>
        <NavBar />
        <About />
        </>
    )
} 

export default Header;