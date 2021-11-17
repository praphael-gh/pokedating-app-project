import React from "react";
import { Route, Switch } from "react-router-dom"  

import Header from "./Header";
import Search from "./Search";
import About from "./About";

function NavBar() {
    return (
        <>
        <Header />
        <Switch >
            <Search />
            <Route path="/about">
                <About />
            </Route>
        </Switch>
        
        </>
    )
}

export default NavBar;